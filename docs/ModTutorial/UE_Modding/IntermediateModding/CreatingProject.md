# 创建UE项目
当涉及到创建全新资产或用自定义资产覆盖现有资产时，模组制作者需要编译这些资产，以便游戏/引擎能够识别模组文件。

## 下载正确的UE版本
在开始下载虚幻引擎之前，确保你知道游戏使用的UE引擎版本。<br>
为此，进入游戏文件夹，右键点击游戏的exe文件 -> 属性 -> 详细信息选项卡。

![](/Media/creatingProject/creatingProject1.png)

在这个特定示例中，游戏使用的是`UE5.2`（你的游戏可能有不同的版本号）。

进入Epic启动器，点击虚幻引擎标签 -> 库。<br>
然后点击`+`号。

![](/Media/creatingProject/creatingProject2.png)

会出现选择UE版本的选项，点击下拉菜单并选择相应的UE版本。

![](/Media/creatingProject/creatingProject3.png) <br>



这个过程很简单，但我们将逐步讲解。
根据你的UE引擎版本：
- 前往[UE4项目创建](#creating-a-new-project-ue4)。
- 前往[UE5项目创建](#creating-a-new-project-ue5)。
- 如果你的游戏使用IOStore，请参考[为Chunks配置UE5](#configuring-ue5-for-chunks)。

_(如果Paks文件夹中有`.ucas`/`.utoc`文件，则游戏使用了IOStore)_

## 创建新项目 (UE4)
启动UE4，点击底部的游戏选项，然后点击下一步。

![](/Media/creatingProject/ue4_1.png)

选择空白模板，然后点击下一步。
<br>
可选地，如果你想让项目与你正在制作模组的游戏具有一些类似的功能，可以选择第三人称或第一人称模板。

![](/Media/creatingProject/ue4_2.png)


指定你想创建项目的路径。<br>
将项目命名为**与游戏项目名称完全相同**的名称。

_(如果你不确定名称，请查看游戏文件夹。)_

然后点击创建项目。

![](/Media/creatingProject/ue4_3.png)

你的UE4项目已创建完成！

![](/Media/creatingProject/ue4_4.png)
 
开始制作模组之前，一个重要的设置是在项目设置中禁用`共享材质着色器代码`。<br>
这将确保你的自定义材质在游戏中正常工作。

![](/Media/creatingProject/ue4_5.png)


<hr>
<br>

## 创建新项目 (UE5)
这个过程与UE4类似，但UI不同，操作更快一些。<br>

- 首先启动UE5并在左侧列中选择游戏。
- 选择空白模板。
<br>_(你可以选择匹配游戏类型的模板，以便更容易测试)_
- 保持项目的默认设置。
- 将你的项目命名为**与游戏项目名称完全相同**，如"二进制名称"。

问：什么是二进制名称？<br>
答：通常是exe的命名方式，名为：`"游戏名称"-Shipping.exe`的最大可执行文件。


![](/Media/creatingProject/ue5_1.png)

点击创建后，你的项目就会被创建。

![](/Media/creatingProject/ue5_2.png)

## 为Chunks配置UE5
进入编辑 -> 项目设置 -> 打包，并确保你的设置与下图中的一致。

![](/Media/creatingProject/ue5_3.png)

别忘了在项目设置中**取消勾选**`共享材质着色器代码`，这将确保你的自定义材质在游戏中正常工作。

要在编辑器中启用区块分配，请前往：<br>
编辑 -> 编辑器首选项 -> 搜索`chunk`并勾选`允许ChunkID分配`。

![](/Media/creatingProject/ue5_4.png)

