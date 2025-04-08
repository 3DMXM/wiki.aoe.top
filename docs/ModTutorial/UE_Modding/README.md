# UE4/5 Mod制作教程

> 此文档翻译自 https://github.com/Dmgvol/UE_Modding

UE4（和UE5）Mod制作指南合集。</br>
这是新手学习UE模组制作并<u><strong>立即</strong></u>开始创建模组的完美场所。</br>

## 在我们开始之前...
每位模组制作者都需要这两个工具：<br>
- [虚幻引擎](https://www.unrealengine.com/zh-CN/)
- [FModel](https://fmodel.app/)

## 从哪里开始？
如果你完全是新手，我建议选择一个简单的模组创意/目标来学习基础知识。<br>
例如：学习如何提取游戏文件，修改纹理/模型并将其重新打包成模组(UE4/5)。<br>
或者修改蓝图的默认值，比如武器的最大弹药量(UE4)。

这样你就能了解UE模组制作的理念和工作原理。

<i>(如果你是新手并且想一步到位制作自定义地图...那就别这么做，这不是那么容易的事)。</i>

## 基础知识
我们将从如何浏览和导出游戏文件开始。

- [查找AES密钥(.pak加密)](./TheBasics/AesKey.md)
- [提取已烘焙资源 - repak](./TheBasics/ExtractingCooked.md) (仅适用于`.pak`)
- [提取IoStore已烘焙资源 - ZenTools](./TheBasics/ExtractingIoStore.md) (`.pak`/`.utoc`/`.ucas`)
- [提取映射 - UE4SS](./TheBasics/Extractingusmap.md)
- [导出 - FModel](./TheBasics/ExportingFModel.md)
- [导出 - UModel](./TheBasics/ExportingUModel.md)
- [预览动画 - UModel](./TheBasics/UModelAnimations.md)
- [浏览UAssets - FModel](./TheBasics/UsingFModel.md)

## 初级教程
让我们开始修改值！</br>
这对<b>任何</b>值的修改都至关重要。</br>
- [编辑UAsset值 - UAssetGUI](./BasicModding/UAssetGUI.md)
- [编辑UAsset值 - Hex](./BasicModding/HexEditing.md) *(当UAssetGUI失效时的手动十六进制编辑)*
- [编辑UMaps - stove](./BasicModding/EditingUmaps.md) (UE4，仅适用于`.pak`)
- [禁用/移除对象纹理](./BasicModding/DisablingObjects.md)
- [创建Pak文件](./BasicModding/UnrealPak.md) (仅适用于`.pak`)
- [创建Pak文件 - IoStore](./BasicModding/IoStorePacking.md) (`.pak`/`.utoc`/`.ucas`)
- [模组示例 - 修改蓝图默认值](./BasicModding/example1.md) (UE4)

## 中级教程
替换资源，如纹理、材质、静态网格和骨骼网格(如角色)。</br>

- [创建UE4/5项目](./IntermediateModding/CreatingProject.md)
- [在UE4和UE5中烘焙/编译带有区块的内容](./IntermediateModding/CookingContent.md)
- [替换纹理](./IntermediateModding/ChangingTextures.md)
- [更改游戏模型](./IntermediateModding/ChangingSM.md)
- [更改骨骼网格](./IntermediateModding/ChangingSK.md)
- [合并骨骼网格](./IntermediateModding/MergingSK.md)
- [替换字体](./IntermediateModding/ReplacingFonts.md)

## 高级教程
- [为材质实例创建替代材质](./AdvancedModding/ReplicatingMI.md)
- [蓝图/逻辑模组介绍](./AdvancedModding/BpModsIntro.md)
- [蓝图替代/复制介绍](./AdvancedModding/BpReplication.md)

## 蓝图教程
我不会详细介绍，因为这需要虚幻引擎4的经验，这里只会介绍最基本的内容。</br>
<b>注意：</b>如果你是UE4新手 - 多尝试，所有内容都可以在YouTube上找到。

- [与模组加载器配合使用 - UML/UE4SS/DML/NML](./BPModding/WorkingWithML.md)
- [ModActor结构和生命周期](./BPModding/ModActorLifeCycle.md)
- [创建界面组件](./BPModding/CreateWidget.md)
- [蓝图模组的热键](./BPModding/Hotkeys.md) 
- [配置变量 - 模组配置](./BPModding/ConfigVariables.md)
- [自定义模组游戏存档](./BPModding/GameSaves.md)
- [模组示例 - 自定义日志记录器(UserWidget)](./BPModding/CustomLogger.md) 

## 专家教程
在这个阶段，你已经知道如何替换/修改任何UAsset并能熟练使用蓝图，但仍在寻找更高级的内容来尝试。
- [使用蓝图将自定义界面"注入"游戏菜单](./ExpertModding/GameMenus.md)
- [使用UE4SS导出C++头文件(UHT)](./ExpertModding/GeneratingUHT.md)
- [使用UHT替代/复制C++头文件](./ExpertModding/UEClasses.md)
- [模组示例 - 头文件实践，(游戏：Sprawl)]() (即将推出)


## 游戏内存
对创建速通计时、自定义随机化器甚至修改器都很有用。
- [查找CE指针](./GameMemory/findingPointers.md)
- [使用UE4SS查找偏移量](./GameMemory/findingPointers2.md)


## Blender
- [导入模型(.psk和.glTF2文件)](./Misc/BlenderImportModels.md)
- [导入动画(.psa文件)](./Misc/BlenderImportAnimations.md)

## 纹理
- [将打包纹理导入Blender](./Misc/BlenderImportTextures.md)
- [将打包纹理导入Substance Painter](./Misc/SubstanceImportTextures.md) 
- [从Substance Painter导出到虚幻引擎](./Misc/SubstanceExport.md) 

<hr>

## 实用链接/工具

### 浏览和编辑UAssets
- [FModel](https://fmodel.app/)
- [UModel](https://www.gildor.org/en/projects/umodel)
- [UAssetGUI](https://github.com/atenfyr/UAssetGUI)
- [stove](https://github.com/bananaturtlesandwich/stove)

### 虚幻引擎
- [Epic启动器](https://www.epicgames.com/store/en-US/)
- [通用虚幻引擎4解锁器(UUU)](https://framedsc.github.io/GeneralGuides/universal_ue4_consoleunlocker.htm)
- [UnrealPak](https://github.com/Dmgvol/UE_Modding/raw/main/Tools/UnrealPak.zip) - 由[FluffyQuack](https://www.fluffyquack.com/)编写
- [UE4SS - UE4/5脚本系统](https://github.com/UE4SS-RE/RE-UE4SS)

### 3D建模
- [Blender](https://www.blender.org/)或[Steam版本](https://store.steampowered.com/app/365670/Blender/)
- [Blender 4 Psk插件](https://github.com/DarklightGames/io_scene_psk_psa) - 由**DarklightGames**编写
- [Blender 3 Psk插件](https://github.com/Befzz/blender3d_import_psk_psa) - 由**Befzz**编写

### 逆向工程
- [Cheat Engine](https://www.cheatengine.org/) - 由**Dark Byte**编写
- [x64dbg](https://x64dbg.com/) - 由**mrexodia**编写
- [BinaryNinja](https://binary.ninja/)
- [Hex Editor Neo](https://freehexeditorneo.com/)

### 其他
- [所有可用/已知的UE模组工具](https://github.com/Buckminsterfullerene02/UE-Modding-Tools) 由**Buckminsterfullerene**编写。

### Discord社区
[UE Modding](https://discord.gg/unreal-engine-modding-876613187204685934)


## 其他游戏相关教程链接

### Robocop: Rogue City
- [Robocop: 模组制作指南](https://www.abbiedoobie.com/2023/10/13/modding-robocop-rogue-city-and-other-ue-5-games/)

### Hogwarts Legacy (霍格沃茨遗产)
- [入门指南 - 创建虚幻项目](https://modding.wiki/en/hogwartslegacy/developers/getting-started)
- [资源替换指南](https://modding.wiki/en/hogwartslegacy/developers/asset-replacement)
- [打包模组指南](https://modding.wiki/en/hogwartslegacy/developers/packaging)

### Palworld (幻兽帕鲁)
- [3D资源导出与修改指南](https://pwmodding.wiki/docs/asset-swapping/ExportingModifying3DAssets)
- [UE5中打包模组指南](https://pwmodding.wiki/docs/asset-swapping/PackagingInUE5)
- [高级资源创建指南](https://pwmodding.wiki/docs/category/advanced-asset-creation)

### inZOI (被遗忘的岛屿)
- [修改版UModel查看器](https://drive.google.com/file/d/14ymGu_TxstIivOiFBAc9mXncE1NN3cGR/view)
- [inZOI照片工具 (需要订阅)](https://www.patreon.com/user?u=37343853) - 使用Universal Unreal Engine 5 Unlocker工具，无法与UE4SS一起使用


### 模组开发指南
- [UE5模组开发指南](https://github.com/Dmgvol/UE_Modding?tab=readme-ov-file#intermediate-modding)
- [UE4和UE5模组工具集](https://github.com/Buckminsterfullerene02/UE-Modding-Tools)

### 游戏文件处理工具
- [Bitfix](https://github.com/trumank/bitfix) - 为UE4和UE5游戏提供简单的Lua脚本支持，用于sig绕过
- [retoc](https://github.com/trumank/retoc) - 用于解压inZOI的文件(转换后的.paks、.utocs和.ucas)，需要通过Cargo构建或从UE Modding Discord获取预构建版本
- [UnrealPak解包教程](https://www.youtube.com/watch?v=AElxgCRXF64) - 使用UE目录中的UnrealPak.exe解包inZOI文件
- [UAssetGUI](https://github.com/atenfyr/UAssetGUI) - 查看和编辑原始资产数据，需要Visual Studio 2022构建
- [UE4和UE5游戏AES密钥集合](https://cs.rin.ru/forum/viewtopic.php?f=10&t=100672&p=3110720&hilit=inzoi#p3110720) - 需要账号
- [QuickBMS](https://aluigi.altervista.org/quickbms.htm) - 用于转换inZOI的自定义格式.pak文件

### Blender插件
- [io-scene-psk-psa - 更新的Blender插件](https://extensions.blender.org/add-ons/io-scene-psk-psa/?utm_source=blender-4.3.0)
- [Send2UE - Blender到虚幻引擎的工作流插件](https://github.com/poly-hammer/BlenderTools/releases/tag/20250310000557)

### 修改版虚幻引擎
- [修改版虚幻引擎5.4.4](https://github.com/FrancisLouiss/UnrealEngine/releases/tag/5.4.4-release)


---

# 鸣谢
- [FatihG_](https://www.youtube.com/c/fatihG/)教我如何制作模组。
- [atenfyr](https://github.com/atenfyr/)(Discord中的adolescent)开发了[UAssetGUI](https://github.com/atenfyr/UAssetGUI)和[UAssetAPI](https://github.com/atenfyr/UAssetAPI)。
- [RussellJerome](https://github.com/RussellJerome)创建了[ModLoader](https://github.com/RussellJerome/UnrealModLoader)。


### 特别感谢：
- LongerWarrior、JanisSG、Jan和Animayyo在GR模组制作的整个旅程中给予了惊人的支持。
- Mythical
- Narknon
- Cranch
- Buckminsterfullerene02
- Atenfyer/Adolescent
- Spuds
- Truman 
- Lisht/Kein
- KunoDemetries
- HyperModule

---

