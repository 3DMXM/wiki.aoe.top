# BP 复制/模拟/镜像
虚幻引擎4/5中的蓝图(BP)复制涉及创建蓝图和其他资产，以模仿现有游戏内蓝图的变量和结构。<br>
这种方法，也称为创建"虚拟蓝图"，允许模组制作者访问和操作游戏变量，而无需修改原始资产。

> [!NOTE]  
> 这种"复制"与多人游戏的网络复制不同。
> 它也被称为资产模拟或镜像过程。

## 寻找我们想要复制的BP
在这个例子中，我们将复制玩家角色BP中的一个`float`值。

使用FModel，我找到了这个值。<br>
_(注意UE5：在UE5中`Double`是`float`)_

![](/Media/replication/replication1.png)

通过搜索BP的`SuperStruct`，我们可以看到这个蓝图的基类是`Character`。

![](/Media/replication/replication2.png)

## 虚幻引擎
1. 在UE中，创建与FModel中**相同**的文件夹结构。
2. 创建一个`Character`类型的新BP。

![](/Media/replication/replication3.png)

1. 将蓝图命名为与游戏文件中**完全相同**的名称。
2. 再次检查文件夹是否完全一致。

![](/Media/replication/replication4.png)

1. 创建一个新变量。
2. 将其命名为与FModel中显示的**完全相同**，在本例中是`NormalJumpVelocity`。
3. 设置正确的类型（在本例中是`float`）。

**注意：**一些变量可能不使用原生类型，所以你需要进行更多复制才能设置它们。

![](/Media/replication/replication5.png)

## 使用方法
打开你的mod蓝图，并直接访问它。<br>
在这个例子中，它是角色蓝图中的一个变量，我们可以通过获取玩家角色对象并将其转换为正确的BP类型来访问它，如下所示。

![](/Media/replication/replication6.png)

这允许模组制作者直接访问和更改游戏文件中的资产值，而不修改原始文件。

### 关于复制
这不仅限于变量，你还可以复制方法、委托、任何其他类型的资产、BP组件，甚至C++头文件。

## 打包
我们不打包任何被复制的内容！<br>
因为这将导致覆盖游戏文件，这不是我们想要的。

只打包BP mod文件。