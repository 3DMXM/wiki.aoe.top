# 使用 UAssetGUI
UAssetGUI 是一个用户界面工具，本质上是进行十六进制编辑，但无需查看任何十六进制代码。

你可以在[这里](https://github.com/atenfyr/UAssetGUI/releases)下载最新版本的 UAssetGUI。

## 示例 - 修改 Trepang2 的弹匣容量
在这个示例中，我们将修改 SMG 武器的弹匣容量，该武器位于名为 `BP_SMG` 的武器蓝图中。

![](/Media/uassetgui/fmodel_trepang_smg1.png)
<br>
我使用 FModel 是因为它更容易且更快速地进行导航。<br>
一旦找到文件，导出资产，将会生成 2 个文件：`.uasset` 和 `.uexp`。

<br>

### 使用 UAssetGUI 打开
默认变量通常位于以 `(Default__...)` 开头的导出部分中

![](/Media/uassetgui/umodel_trepang_smg1.png)

如我们所见，有相当多的值可以修改。<br>
但在这个示例中，我们将修改最大弹匣容量。

![](/Media/uassetgui/umodel_trepang_smg2.png)
修改完成后，只需保存文件！<br>
该工具会自动生成 `.bak` 文件，但你不需要它们，所以可以随意删除。

### 
最后一步是使用 UnrealPak 打包修改后的 `.uasset` 和 `.uexp` 文件，这样就完成了！


<br><br>
<hr>

## 通过 JSON 编辑（替代选项）
UAssetGUI 允许将 uasset 文件导出为可编辑的 `.json` 文件。<br>
文件 -> 另存为，然后选择 `.json` 作为保存类型。

![](/Media/uassetgui/umodel_trepang_smg3.png)

JSON 格式可以完全控制资产的结构。

![](/Media/uassetgui/umodel_trepang_smg4.png)


修改并保存后：
将修改后的 json 文件加载到 UAssetGUI 中，然后将其保存为常规的 `.uasset` 文件。

<br><br>
<hr>


## 示例 2 - Trepang2：向列表添加项目（高级）
我们知道可以编辑、替换和删除资产中的元素，但如何添加新元素呢？<br>
在这个示例中，我们将向资产中不存在的数组添加一个元素。<br>

![](/Media/uassetgui/fmodel_trepang_mission1.png)
在 Trepang2 中，有一个 HordeMode 游戏模式，它将所有可用关卡存储在 `BP_CombatSimMissionList_Trepang2` 内的列表/数组中。

导出为 Uasset，使用 UAssetGUI 打开并保存为 `.json`。<br>


**注意：** 通过 UAssetGUI 保存 json，**不要**使用 FModel。<br> FModel 创建的 json 是只读的...


要添加全新元素，你需要做四件事：<br>
1. 添加新的 NameMap（引用）。<br>
2. 添加 Imports（引用声明）。<br>
3. 调整 Generation 中的 NameCount。<br>
4. 向数组添加项目。<br>



在这个示例中，我想将 `Mission_Horde_Killstation` 添加到列表中，这是一个未使用但仍然可用的关卡。

### 添加新的 NameMap
NameMap 包含所有使用的引用。

![](/Media/uassetgui/json_trepang_mission1.png)<br>
每个引用以三种格式存在，我们需要为新关卡添加这三种格式。<br>
滚动到底部并添加这三行：<br>
```json
    "/Game/UI/CombatSimulator/Missions/UNUSED/Mission_Horde_Killstation",
    "Default__Mission_Horde_Killstation_C",
    "Mission_Horde_Killstation_C"
```

![](/Media/uassetgui/json_trepang_mission2.png)<br>
_（添加前别忘了在最后一项后面加上 `,`，就像我在 "Package" 后面做的那样）_


### 添加 Imports
向下滚动一点，找到 `Imports` 部分。

![](/Media/uassetgui/json_trepang_mission3.png)

滚动到 Imports 底部，添加这三个部分：
包声明、蓝图声明和类声明。

![](/Media/uassetgui/json_trepang_mission4.png)

对象名称引用了前面添加的 3 个 NameMap。<br>
`OuterIndex` 指向 3 个中的第一个导入。<br>
最后一个导入是 `-122`，使我们的导入索引为 `-123`，因此我们为蓝图和类声明指定该索引。
<br>

### 调整 Generation 中的 NameCount
向下滚动，直到找到包含 `NameCount` 数量的 `Generations` 部分。
<br>![](/Media/uassetgui/json_trepang_mission5.png)<br>
根据添加的导入数量增加计数。<br>
在这个示例中是 `3`，使 NameCount 变为：`135`。


### 向数组添加项目
在这个示例中，我想向数组 `CombatSimulatorMissions` 追加内容，可以在 `.json` 文件中搜索找到它。<br>

![](/Media/uassetgui/json_trepang_mission6.png)

复制第一个元素，并调整值以指向前面添加的 BlueprintGeneratedClass。

为什么是 `-124`？<br>
最后一个索引是 `-122`，第一个导入（路径/包）是 `-123`，BlueprintGeneratedClass 在其后一位，所以是 `-124`。

### 保存更改！
保存修改后的 `.json` 文件，并使用 UAssetGUI 打开它。<br>
如果操作正确，不会出现错误，你可以通过查看 NameMap、ImportData 和实际数组来仔细检查一切是否正确添加，确保它包含这些项目并指向正确的元素。

![](/Media/uassetgui/json_trepang_mission7.png)

确保保存，这样 UAssetGUI 就可以生成更新后的 `.uasset` 和 `.uexp` 文件。

完成后，只需使用 UnrealPak 打包即可。