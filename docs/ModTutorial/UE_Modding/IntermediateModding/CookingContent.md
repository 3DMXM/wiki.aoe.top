# 烹饪（编译）内容
一旦你在编辑器内完成了所有需要做的事情，就该编译资源了。

__对于UE4__
 - 前往[烹饪UE4](#cooking-ue4-unrealpak-route)查看UnrealPak路线。
 - 前往[UE4中的分块](#cooking-ue4-generating-chunks-route)。

__对于UE5__
- 前往[烹饪UE5](#cooking-ue5) <br>

> [!IMPORTANT]  
> 对于`IoStore`游戏，首先导航到编辑 -> 项目设置 -> 打包，然后确保打包设置顶部的`使用Io Store`选项已勾选。然后按照本指南的其余部分正常操作。


## 烹饪UE4（UnrealPak路线）
准备好后，点击文件 -> 为Windows烹饪内容。

![](/Media/Compiling/ue4_1.png)

一段时间后，烹饪完成，你将能够在项目的Saved文件夹中找到烹饪好的内容。

```
ProjectName\Saved\Cooked\WindowsNoEditor\ProjectName\Content\...
```

从这里，你将不得不使用UnrealPak，你可以在这里了解更多关于打包你的mod的信息：[创建Pak - UnrealPak](/BasicModding/UnrealPak.md)。
<br>
根据你创建的资源，你需要将它们复制粘贴到mod文件夹中（在unrealPak指南中有介绍）。

## 烹饪UE4（生成分块路线）
烹饪UE内容的另一种方法是将特定资源打包到预定义的块中。<br>
它更快，因为不需要使用UnrealPak，但它也有限制，因为它只打包编辑器中的内容。<br>
这意味着如果你想将修改过的资源或预先烹饪的资源合并到该mod中，这种方法不适用。

按照UE5部分的打包过程进行操作，因为它是相同的程序。<br>
一旦你完成了分块分配：
文件 -> 打包项目 -> Windows

> [!IMPORTANT]  
> 在使用分块烹饪方面，UE4的过程与UE5完全相同。

<hr>

## 烹饪UE5
对于UE5，modder必须将资源分配给特定的块ID，有两种方法可以做到这一点，下面将介绍。

这两种方法是[手动分块](#manual-chunk-ids)和[批量分块](#bulk-assign-using-datatabledt)。<br>

一旦分配了块，只需[打包它](#packaging-ue5)即可。

### 手动分块ID
首先通过转到编辑 -> 编辑器首选项 -> 搜索"chunk" -> 启用"允许ChunkID分配"来启用分块ID分配。

然后右键点击你想要烹饪的资源 -> 资源操作 -> 分配到分块。

![](/Media/Compiling/UE5_1.png)

一个小弹窗将会出现，你可以在其中输入0到300之间的值。

选择任何你想要的ID（除了0），并确保它没有被游戏使用。<br>
_（查看Paks文件夹）_

你可以通过选择所有资源，然后点击审计资源来再次检查资源的已分配分块ID。

### 使用数据表(DT)批量分配
这种方法将为**同一个**文件夹内的所有（或明确指定的）文件分配，这有其优点和缺点。

右键创建新资源 -> 杂项 -> 数据资源。

![](/Media/Compiling/UE5_2.png)

从列表中选择`PrimaryAssetLabel`。

![](/Media/Compiling/UE5_3.png)

创建后，打开数据资源，并：
- 将优先级设置为1。
- 从0到10,000中选择任何分块ID。
- 如果你有多个文件夹，设置"递归应用"。
- 将`烹饪规则`设置为`始终烹饪`。
- 勾选`标记我的目录中的资源`字段。
- （可选）你可以手动选择想要打包的特定资源/蓝图。

注意：使用数据资源将打包文件夹内的所有内容。<br>
所以如果你想打包特定的内容，请确保在明确部分指定它们。

![](/Media/Compiling/UE5_4.png)

## 打包UE5
在编辑器顶部中间部分，点击平台 -> Windows -> 打包项目。<br>
然后选择一个文件夹来构建项目。<br>
_我通常在项目文件夹内创建一个`Build`文件夹。_

![](/Media/Compiling/UE5_5.png)

一旦烹饪部分完成，你将在以下位置找到分块分配的结果：<br>
```
\ProjectName\Build\Windows\ProjectName\Content\Paks
```

1. 将构建文件夹中的3个文件复制到游戏的Paks文件夹中。
2. 将它重命名为你想要的任何名称，但确保其名称以`_P`结尾。<br>
例如：对所有3个文件使用`myMod_P`。
