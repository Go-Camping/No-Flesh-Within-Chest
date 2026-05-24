#!/usr/bin/env python3
"""
build_pack.py — build distributable modpack archives from the repo.

Outputs (in ./dist/):
  *.mrpack          Modrinth format  (HMCL, Prism, MultiMC, ATLauncher)
  *-multimc.zip     MultiMC format   (HMCL, Prism, MultiMC)
  *-curseforge.zip  CurseForge format (HMCL, CurseForge launcher)

Usage:
  python scripts/build_pack.py [--version 0.1.0] [--out dist] [--formats all]

All three formats bundle mods directly (no API look-up required).
CurseForge's public upload portal does not allow bundled JARs, but the
zip works fine for local import and sharing.
"""

import argparse
import hashlib
import json
import os
import sys
import zipfile
from pathlib import Path

# ── Configuration ─────────────────────────────────────────────────────────────

PACK_NAME = "No Flesh Within Chest"
PACK_SLUG = "no-flesh-within-chest"
PACK_AUTHOR = "Saplyn"
PACK_DESCRIPTION = (
    "A high-customization organ-themed modpack based on Forge 1.20.1, "
    "centred on ChestCavity. Includes technology, magic, and adventure elements."
)

MC_VERSION = "1.20.1"
FORGE_VERSION = "47.3.12"  # full: 1.20.1-47.3.12

# Folders copied into the instance (relative to repo root)
OVERRIDE_DIRS = ["mods", "kubejs", "config", "defaultconfigs"]

# ── Helpers ───────────────────────────────────────────────────────────────────

def sha512(path: Path) -> str:
    h = hashlib.sha512()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def sha1(path: Path) -> str:
    h = hashlib.sha1()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def collect_files(root: Path, dirs: list[str]) -> list[tuple[Path, str]]:
    """Return (abs_path, archive_relative_path) for every file under dirs."""
    result = []
    for d in dirs:
        src = root / d
        if not src.exists():
            print(f"  [warn] {d}/ not found, skipping", file=sys.stderr)
            continue
        for f in sorted(src.rglob("*")):
            if f.is_file():
                result.append((f, f.relative_to(root).as_posix()))
    return result


def progress(label: str, i: int, total: int, path: str):
    bar_len = 30
    filled = int(bar_len * i / total)
    bar = "█" * filled + "░" * (bar_len - filled)
    print(f"\r  {label} [{bar}] {i}/{total}  {Path(path).name[:40]:<40}", end="", flush=True)


# ── Modrinth .mrpack ──────────────────────────────────────────────────────────

def build_mrpack(root: Path, out: Path, version: str):
    dest = out / f"{PACK_SLUG}-{version}.mrpack"
    files = collect_files(root, OVERRIDE_DIRS)
    total = len(files)

    # modrinth.index.json  — mods get entries; everything else goes in overrides
    mod_entries = []
    override_files = []
    for abs_path, rel in files:
        if rel.startswith("mods/"):
            mod_entries.append({
                "path": rel,
                "hashes": {
                    "sha512": sha512(abs_path),
                    "sha1": sha1(abs_path),
                },
                # No "downloads" URL — mods are bundled in overrides instead.
                # This is valid for local/private packs; public Modrinth listings
                # should replace this with proper project download URLs.
                "fileSize": abs_path.stat().st_size,
                "env": {"client": "required", "server": "required"},
            })
            override_files.append((abs_path, "overrides/" + rel))
        else:
            override_files.append((abs_path, "overrides/" + rel))

    index = {
        "formatVersion": 1,
        "game": "minecraft",
        "versionId": version,
        "name": PACK_NAME,
        "summary": PACK_DESCRIPTION,
        "files": mod_entries,
        "dependencies": {
            "minecraft": MC_VERSION,
            "forge": FORGE_VERSION,
        },
    }

    with zipfile.ZipFile(dest, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        zf.writestr("modrinth.index.json", json.dumps(index, indent=2, ensure_ascii=False))
        for i, (abs_path, arc_path) in enumerate(override_files, 1):
            progress("mrpack ", i, len(override_files), arc_path)
            zf.write(abs_path, arc_path)
    print(f"\n  → {dest.name}  ({dest.stat().st_size / 1e6:.1f} MB)")
    return dest


# ── MultiMC / Prism zip ───────────────────────────────────────────────────────

MMC_PACK_JSON = {
    "components": [
        {"important": True, "uid": "net.minecraft", "version": MC_VERSION},
        {"uid": "net.minecraftforge", "version": FORGE_VERSION},
    ],
    "formatVersion": 1,
}

INSTANCE_CFG = f"""\
InstanceType=OneSix
name={PACK_NAME}
iconKey=default
"""


def build_multimc(root: Path, out: Path, version: str):
    dest = out / f"{PACK_SLUG}-{version}-multimc.zip"
    files = collect_files(root, OVERRIDE_DIRS)
    instance_prefix = f"{PACK_SLUG}/"
    mc_prefix = instance_prefix + ".minecraft/"

    with zipfile.ZipFile(dest, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        zf.writestr(instance_prefix + "mmc-pack.json",
                    json.dumps(MMC_PACK_JSON, indent=2))
        zf.writestr(instance_prefix + "instance.cfg", INSTANCE_CFG)
        for i, (abs_path, rel) in enumerate(files, 1):
            arc = mc_prefix + rel
            progress("multimc", i, len(files), arc)
            zf.write(abs_path, arc)
    print(f"\n  → {dest.name}  ({dest.stat().st_size / 1e6:.1f} MB)")
    return dest


# ── CurseForge zip ────────────────────────────────────────────────────────────

def build_curseforge(root: Path, out: Path, version: str):
    dest = out / f"{PACK_SLUG}-{version}-curseforge.zip"
    files = collect_files(root, OVERRIDE_DIRS)

    # CurseForge manifest — mods listed without CF project IDs since we don't
    # have them. They are bundled in overrides/mods/ instead, which works for
    # local launcher import but not for public CurseForge pack upload.
    manifest = {
        "minecraft": {
            "version": MC_VERSION,
            "modLoaders": [{"id": f"forge-{FORGE_VERSION}", "primary": True}],
        },
        "manifestType": "minecraftModpack",
        "manifestVersion": 1,
        "name": PACK_NAME,
        "version": version,
        "author": PACK_AUTHOR,
        "files": [],  # empty: mods are in overrides/mods
        "overrides": "overrides",
    }

    modlist_lines = ["<ul>"]
    for abs_path, rel in files:
        if rel.startswith("mods/"):
            modlist_lines.append(f"  <li>{Path(rel).name}</li>")
    modlist_lines.append("</ul>")

    with zipfile.ZipFile(dest, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        zf.writestr("manifest.json", json.dumps(manifest, indent=2, ensure_ascii=False))
        zf.writestr("modlist.html", "\n".join(modlist_lines))
        for i, (abs_path, rel) in enumerate(files, 1):
            arc = "overrides/" + rel
            progress("cfforge", i, len(files), arc)
            zf.write(abs_path, arc)
    print(f"\n  → {dest.name}  ({dest.stat().st_size / 1e6:.1f} MB)")
    return dest


# ── CLI ───────────────────────────────────────────────────────────────────────

def main():
    repo_root = Path(__file__).resolve().parent.parent

    parser = argparse.ArgumentParser(description="Build modpack distribution archives.")
    parser.add_argument("--version", default="0.1.0",
                        help="Pack version string (default: 0.1.0)")
    parser.add_argument("--out", default="dist",
                        help="Output directory (default: dist/)")
    parser.add_argument("--formats", default="all",
                        help="Comma-separated: mrpack,multimc,curseforge  or 'all'")
    args = parser.parse_args()

    out = repo_root / args.out
    out.mkdir(parents=True, exist_ok=True)

    chosen = {f.strip() for f in args.formats.split(",")} if args.formats != "all" \
        else {"mrpack", "multimc", "curseforge"}

    print(f"Building {PACK_NAME} v{args.version}  →  {out}/")
    print()

    results = {}
    if "mrpack" in chosen:
        print("Modrinth .mrpack")
        results["mrpack"] = build_mrpack(repo_root, out, args.version)
    if "multimc" in chosen:
        print("MultiMC/Prism zip")
        results["multimc"] = build_multimc(repo_root, out, args.version)
    if "curseforge" in chosen:
        print("CurseForge zip")
        results["curseforge"] = build_curseforge(repo_root, out, args.version)

    print()
    print("Done. Files in", out)
    for fmt, path in results.items():
        size_mb = path.stat().st_size / 1e6
        print(f"  {fmt:<12} {path.name}  ({size_mb:.1f} MB)")


if __name__ == "__main__":
    main()
