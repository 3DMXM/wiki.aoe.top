# IoStore 打包

> [!IMPORTANT]
> 此指南仅适用于当`Content/Paks`文件夹内存在`.ucas`、`.utoc`和`.pak`文件时。

打包IoStore资产时有三种情况，方法因情况而异：
1. 你使用[UAssetGUI](UAssetGUI.md)或类似工具对从[ZenTools](../TheBasics/ExtractingIoStore.md)提取的烘焙资产进行了十六进制编辑
2. 你有一个UE项目并在其中创建了资产
3. 你已从[FModel](../TheBasics/ExportingFModel.md)提取了IoStore Zen资产并希望重新打包它们

## 情况1：打包烘焙资产

### 对于UE5

下载这个名为[IoStorePackager](https://github.com/Buckminsterfullerene02/UE-Modding-Tools/raw/main/Loose%20Files/IOStorePackagev2.zip)的工具。这是一个非常简单的GUI命令行工具，你只需按照示例输入文件路径，它会调用你已安装的Unreal Engine版本中的UnrealPak，并使用所有正确的参数。

你可以观看[这个视频](https://www.youtube.com/watch?v=89s0akNvpU4)，它指导你如何使用`IoStorePackager`：

[![UE模组制作 (5.4 w/ IoStore) ](https://img.youtube.com/vi/89s0akNvpU4/0.jpg)](https://www.youtube.com/watch?v=89s0akNvpU4 "UE模组制作 (5.4 w/ IoStore) ")

### 对于UE4

使用[IoStorePackager-UE4](https://gist.github.com/Buckminsterfullerene02/0f7233d5dda97c82039ba932c2bc8fb7)。与上述类似，但你还需要游戏的C++模板项目，因为`ZenTools-UE4`输出的清单文件与UE创建容器文件所需的`ZenTools`输出不同。

视频教程希望不久后推出。

## 情况2：UE项目打包

如果你在编辑器中制作了模组内容，你需要通过编辑器烘焙和打包它。幸运的是，这真的很简单。

在编辑器中，转到`编辑 -> 项目设置 -> 打包`，然后确保打包设置顶部的`使用Io Store`已勾选。

然后，按照正常的[内容烘焙](../IntermediateModding/CookingContent.md)指南进行操作。

## 情况3：打包FModel Zen .uassets

使用工具[UnrealReZen](https://github.com/rm-NoobInCoding/UnrealReZen)。说明相当直接，但请注意，没有其他工具可以替代UnrealReZen来打包FModel Zen `.uassets`。

> [!CAUTION]
> 此工具不支持从ZenTools提取的文件中提取资产。