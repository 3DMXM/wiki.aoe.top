# 使用Stove编辑UMaps
该工具可在此处找到：[Stove](https://github.com/bananaturtlesandwich/stove)，由[bananaturtlesandwich](https://github.com/bananaturtlesandwich)开发。

Stove可用于移动、复制或删除现有对象。
<br>同时还可以编辑对象的默认值，甚至可以从不同的umap中移植角色。

_它并不总是有效，但这是一个额外的选择，可以在一定程度上编辑`.umaps`文件。_

## 加载UMaps
启动Stove，在打开`.umap`之前：
- 指定游戏的Paks文件夹。
- 指定游戏的UE版本。
- AES密钥（如果有的话）。

加载你想要的`.umap`，你应该能看到地图的某种表示形式，可能是立方体形状的对象或缓存的网格模型（两者都可以）。

如果你知道资产/角色的名称，可以在左上角搜索它。

Stove界面：<br>
![](/Media/stove/stove1.png)

与游戏内相比，我们可以确定摄像机的位置，并导航到我们需要的地方。<br>
![](/Media/stove/stove2.png)

在这个例子中，我将复制几个道具来说明这个工具的基本用法。<br>
要复制选中的对象，使用`Alt+拖拽`。
<br>
如果需要，可以手动调整位置。

![](/Media/stove/stove3.png)

此外，Stove允许编辑选定对象的默认值，包括蓝图和原生UE组件，如这个桌面台灯蓝图（生成实例值，而非全局）。

![](/Media/stove/stove4.png)

## 保存和打包
当你对修改满意后，点击文件->保存。<br>
然后按照正常流程使用UnrealPak进行打包。

### 结果
![](/Media/stove/stove5.png)