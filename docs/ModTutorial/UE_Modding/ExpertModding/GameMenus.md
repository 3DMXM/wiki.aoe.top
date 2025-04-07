# 在现有菜单中添加自定义游戏按钮
本指南/模组的目的是添加一个外观和行为与游戏原有按钮相似的自定义按钮到现有菜单中。<br>

> [!NOTE]  
> 本指南假设你已经知道如何创建蓝图模组。

在《幽灵行者2》中，有一个"附加内容"菜单按钮，其中有2个子按钮。<br>
我们的目标是在其堆栈中添加一个外观相同的按钮，但具有我们自己的文本和逻辑。

![](/Media/GameMenus/1.png)

> [!NOTE]  
> 每个游戏都会有所不同，但这是这类模组的通用方法。

## 寻找组件
在这个特定的例子中，主菜单面板被称为`BP_PanelStartMenu`，<br>
我们可以查看并找到如图所示的"制作人员"子按钮。

![](/Media/GameMenus/2.png)

在图片中，我们可以看到一些有用的信息：
- 组件的类型，`BP_PanelStartMenuSubButton_C`，我们需要复制它。
- 基本属性如TitleText。
- 持有这个项目的父对象，即`VerBoxExtrasButtons`。

> [!IMPORTANT]  
> 在UE4中，组件的IsVariable设置为false并不重要，你仍然可以直接访问它。
> 在UE5中则不同，只有IsVariable组件可以被访问，所以你必须找到并通过widget层次结构导航。


## 复制/重现它
1. 在其原始文件夹中创建两个widget蓝图，并完全按照游戏内文件的命名方式命名。

![](/Media/GameMenus/3.png)

> [!TIP]  
> 在一些罕见的情况下，值得完全复制整个按钮设计以获得更多控制。

2. 打开菜单按钮widget，并复制必要的字段/方法/委托。

![](/Media/GameMenus/4.png)

3. 对于一个按钮，我们需要处理文本和一种检测点击的方式。

- 文本存储在一个名为`TitleText`的Text类型变量中。
- 点击检测通过一个名为`OnClickDelegate`的事件调度器/委托完成。

![](/Media/GameMenus/4-1.png)

> [!TIP]  
> 不同的游戏需要不同的方法。
> 委托/调度器在每个游戏中都会不同，如果按钮widget有任何Button类型的组件（UE默认类型），你可以绑定到它。


4. 导航到菜单面板的复制widget。
5. 在画布面板中创建菜单按钮widget（位置不重要）。
6. 使用正确的名称，与FModel中显示的名称完全相同，并将其设置为变量（名称右侧）。

![](/Media/GameMenus/5.png)


## 挂钩到菜单
在ModActor中，我们首先要检查当前是否是正确的地图，如果不是正确的关卡名称则销毁该模组。

> [!NOTE]  
> 这与主菜单级别或特定级别中持久存在的菜单相关。
> 如果是暂停菜单，你需要不同的逻辑来检测它。

![](/Media/GameMenus/6.png)

现在我们需要检测菜单是否已加载，这可能会延迟且不在关卡开始时持久存在。<br>
这就是为什么我使用循环计时器来不断寻找它的原因。

![](/Media/GameMenus/7.png)

一旦检测到面板，接下来要做的是：
- 创建按钮widget。
- 设置默认变量，如标题文本。
- 绑定/处理按钮的OnClick事件。

然后将按钮附加到原始按钮的父对象上。

![](/Media/GameMenus/8.png)

## 结果
按钮被创建在堆栈/列表的底部，并按预期工作。
![](/Media/GameMenus/9.png)

> [!TIP]  
> 不同的游戏可能需要额外的逻辑才能在现有菜单/系统中正常工作。


<hr>

### 示例
使用此技术的几个例子：
- 为《嗨啊！人生》(HighOnLife)制作的[FOV滑块](https://www.nexusmods.com/highonlife/mods/5)模组，其中滑块外观与其他设置完全一致。
- 为《幽灵行者2》制作的[完整法典](https://www.nexusmods.com/ghostrunner2/mods/22)模组，其中额外的法典类别和面板看起来并表现得与第一个法典类别完全一样。
- 为《幽灵行者1》制作的[幽灵行者训练器](https://github.com/Dmgvol/Ghostrunner-Mods/blob/main/LogicMods/Trainer/trainer.md)模组，其中模组的所有设置都使用与原始游戏设置相同的按钮和布局。