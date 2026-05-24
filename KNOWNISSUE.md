# 当前已知问题 - Know Issue

## Create 6 迁移说明 - Create 6 Migration Notes

> **目标版本**: Minecraft 1.20.1 + Forge 47.3.12 + Create 6.0.8
>
> This section tracks the remaining manual steps needed to complete the Create 6 migration.
> KubeJS scripts have been updated automatically; the items below require manual action.

### ✅ 已完成的脚本更新 (Completed Script Updates)

- `kubejs/server_scripts/recipes/create.js`:
  - Fixed `Fluid.water(n)` → `Fluid.of('minecraft:water').withAmount(n)`
  - Updated sequenced assembly step methods from `event.recipes.createDeploying/createCutting/createPressing()` to `event.recipes.create.deploying/cutting/pressing()` (full namespace form)
- `kubejs/server_scripts/recipes/ore_excavation.js`:
  - Rewrote for Create Ore Excavation 1.20+ API: vein definitions are now split into separate `vein()` calls; `Item.of().withChance()` replaced with `coeutil.processingOutput()`
- `kubejs/startup_scripts/creative_tab_register.js`:
  - Migrated from `dev.architectury.registry.CreativeTabRegistry` to `StartupEvents.registry('creative_mode_tab', ...)`
- `kubejs/startup_scripts/item_register.js`, `organ_register.js`, `special/eye_finder.js`:
  - Fixed creative tab group IDs from `"kubejs.organs"` / `"kubejs.item"` to `"kubejs:organs"` (colon namespace)
- `kubejs/startup_scripts/special/eye_finder.js`:
  - Updated `net.minecraft.core.Registry.STRUCTURE_REGISTRY` → `net.minecraft.core.registries.Registries.STRUCTURE` (1.20.1 API)
- `kubejs/startup_scripts/isb/school_register.js`:
  - Added `.setDamageType('minecraft:magic')` to both spell schools (required by irons_spells_js 1.20.1+)

### ⚠️ 需要手动完成的步骤 (Manual Steps Required)

#### 1. 重新生成启动器 Manifest (Regenerate Launcher Manifest)
`No Flesh Within Chest.json` 是 Forge 安装程序生成的启动器配置文件，其中包含所有 Forge 库文件的 SHA1 哈希值。
必须通过运行 **Forge 1.20.1 (版本 47.3.12) 安装程序** 重新生成此文件，否则启动器将无法正确下载依赖项。

The launcher manifest contains SHA1 hashes for all Forge library JARs, which cannot be manually updated.
Run the **Forge 1.20.1-47.3.12 installer** to regenerate the full launcher profile, then replace the library/download sections in this file.

游戏参数 (game arguments) 已更新为 1.20.1 版本信息，但 `libraries` 和 `assetIndex` 部分仍需从安装程序重新生成。

#### 2. 更新所有 Mod JAR 文件 (Update All Mod JARs)
以下是需要从 1.19.2 更新到 1.20.1 版本的核心 Mod 文件。

**Create 生态圈 (必须更新)**:
| 旧文件 | 新版本 | 来源 |
|--------|--------|------|
| `create-1.19.2-0.5.1.f.jar` | `create-1.20.1-6.0.8.jar` | Forge 1.20.1 |
| `create_central_kitchen-1.19.2-for-create-0.5.1.f-1.3.11.c.jar` | `create-central-kitchen-1.4.3b-for-create-1.20.1-6.0.6.jar` | CurseForge |
| `createaddition-1.19.2-1.2.3.jar` | `createaddition-forge-1.20.1-1.3.3.jar` | CurseForge/Modrinth |
| `createoreexcavation-1.19-1.2.3.jar` | Create Ore Excavation `1.20.1-1.6.5` | Modrinth |
| `create_crystal_clear-0.2.1-1.19.2.jar` | (需要确认 1.20.1 版本) | — |

**KubeJS 生态圈 (必须更新)**:
| 旧文件 | 新版本 |
|--------|--------|
| `kubejs-forge-1902.6.2-build.69.jar` | KubeJS Forge `2001.6.5-build.16` |
| `kubejs-create-forge-1902.2.4-build.36.jar` | KubeJS Create Forge `2001.3.0-build.8` |
| `rhino-forge-1902.2.3-build.284.jar` | Rhino Forge `2001.x` (KubeJS 依赖) |
| `ponderjs-1.19.2-1.2.0.jar` | PonderJS Forge `1.20.1-1.4.0` |

**需要额外添加的 Mod**:
- `flywheel-forge-1.20.1-1.x.x.jar` — Create 6 uses **Flywheel 1.0** (separate mod, bundled with Create JAR)
- Ponder library — bundled with Create 6 JAR, no longer needed as separate `ponderjs-*` mod

**其他 Mod** (all 160+ other mods also need 1.20.1-compatible versions):
- 大多数知名 Mod 已有 1.20.1 版本，需逐一检查并更新
- 以下 Mod 为核心机制依赖，需优先确认 1.20.1 兼容性:
  - `chestcavity-forge-*.jar` → **已有** 1.20.1 Forge 版本 (v2.17.1.1)
  - `irons_spellbooks-*.jar` → **已有** 1.20.1 版本 (v1.20.1-3.15.6)
  - `biomancy-forge-*.jar` → 需确认
  - `hexerei-*.jar` → 需确认
  - `art_of_forging-*.jar` → 需确认

#### 3. 确认配置文件兼容性 (Verify Config Compatibility)
- `config/create-common.toml`: Create 6 新增了许多配置项（包裹系统、链式传送带等），建议在首次启动后让 Create 重新生成配置文件
- `config/flywheel-client.toml`: Flywheel 1.0 的配置格式发生了变化，建议删除旧配置让其重新生成
- 其他 Mod 配置文件: 大多数配置文件在版本迁移时会向后兼容，但建议备份后进行测试

#### 4. 数据包验证 (Datapack Validation)
迁移完成后，建议使用 `/data verify` 检查所有数据包是否正常加载，重点检查:
- `kubejs/server_scripts/recipes/ore_excavation.js` 中的新 vein 定义格式
- `kubejs/server_scripts/recipes/create.js` 中所有 sequenced assembly 配方



> 下文仅提供中文文案用于开发团队进行问题同步。问题记录在问题发现的版本下，如若修复使用二级列表标注修复情况和方法。问题通过P0~P3等级标注优先级。

## 版本 Beta 0.0.1

> 内部发布时间：2023.12.09

- **P2**：锦致装饰（Supplementaries）在网络较差环境下获取Contributor名单会影响启动时长（21s -> 44s），~~考虑使用Opotato 1.19.2禁用其网络请求~~。经过确认，目前Opotato 1.19.2功能有限，1.19.2版本基本无旧版本的作用，因此考虑到该情况出现的概率不高且影响可以接受，暂不考虑修复。后续可以采用独立编译的锦致装饰版本来解决网络请求问题。

  - 该问题目前已修复，包括锦致装饰和Citadel的网络请求问题，分别取消了网络的请求和指向了本地资源。启动时间恢复至~23s。<u>但在Curseforge发布时需要替换为原Mod</u>，在国内发布时可以在懒人包中打包该Mod以提高国内网络环境中的启动效率。

- **P1**：胶囊（Capsule）在预览液体建筑模板时会导致客户端崩溃，目前已禁用原版流体在模板中的使用，但未加入其余流体的禁用。

  - 该问题目前已修复，通过注释掉renderFluid——即胶囊渲染时不会渲染流体，解决了在胶囊模板中使用流体的问题。但随后发现如果结构中存在任一含水方块，则其他允许含水方块也会出现含水，目前暂未定位到问题所在。目前影响等级降低到P4。

- **P3**：非正常情况下，如果使用非开胸器方法打开胸腔并修改其中器官属性会导致通过Kubejs实现的自定义属性功能失效。

- **P2**：凋零风暴潜在的服务器性能问题，如使用恐怖炸弹时对服务器性能的影响。

## 版本 Beta 0.0.2

> 内部发布时间：2023.12.17

- **P1** 多个伤害相关器官由于优先级混乱等原因无法正常结算伤害。

  - 该问题目前已修复，通过事件流的方法对伤害/受伤事件进行了重构，目前能够完美实现伤害的优先级控制，以及各种buff条件下的伤害结算。

- **P0** 革命断路器引发游戏崩溃。

  - 该问题目前已修复，原因为错误使用了typeMap的方法导致了无法找到对应的type。

## 版本 Beta 0.0.3

> 内部发布时间：2024.01.01

- **P0** LegendaryTooltips全部3D模型展示，查看武器大师工具台会导致游戏崩溃。

  - 该问题目前已修复，目前3D模型展示设置为仅装备.

## 版本 Beta 0.0.4

> 内部发布时间：2024.01.10

- **P0** Numismaticoverhaul影响，部分职业村民在交易等级升级时会引发游戏崩溃。

  - 更换经济Mod为LightManscurrency解决由于强制覆盖村民交易导致的崩溃问题。

- **P0** 通过Kubejs代理伤害时，会导致无击退效果、箭矢无法生效等问题。

  - 通过引用ForgeEvent net.minecraftforge.event.entity.living.LivingHurtEvent解决。监控LivingHurtEvent，重构了绝大多数伤害处理相关的逻辑。