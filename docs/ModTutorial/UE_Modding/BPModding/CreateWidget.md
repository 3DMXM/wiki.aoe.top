# 创建Widget
本指南将介绍如何创建和与Widget交互。

有关Widget的更多详细信息，请访问：<br>
UnrealEngine文档中的[UMG UI设计师快速入门指南](https://dev.epicgames.com/documentation/en-us/unreal-engine/umg-ui-designer-quick-start-guide-in-unreal-engine)。

## 创建Widget
1. 通过在内容浏览器中右键单击 -> 用户界面 -> Widget蓝图，然后在常用选项下选择User Widget来创建Widget。

![](/Media/CreatingWidget/1.png)

2. 您可以重命名或使用您创建的Widget蓝图的默认名称。<br>
使用前缀`WBP_`（WidgetBlueprint）命名
后跟该Widget的合适名称，对于本例：`WBP_MyWidget`

![](/Media/CreatingWidget/3.png)

3. 双击创建的Widget，在左上角搜索`Canvas`并将其拖到层次结构根对象上。

![](/Media/CreatingWidget/4.png)

4. 对`Text`执行相同操作，但将其放在Canvas面板上。

![](/Media/CreatingWidget/5.png)

5. 将其设置为变量，命名它，并根据需要调整其位置。

![](/Media/CreatingWidget/6.png)


> [!NOTE]  
> 有关Widget布局/面板的更多信息，请访问UE文档中的[Widget蓝图](https://dev.epicgames.com/documentation/en-us/unreal-engine/widget-blueprints-in-umg-for-unreal-engine)。

## Widget事件图表

1. 导航到Widget的事件图表，通过右键单击并搜索`custom`来创建一个新的自定义事件。

![](/Media/CreatingWidget/7.png)

2. 将其命名为`SetPositionText`。
3. 添加一个新的输入变量，类型为Vector。

![](/Media/CreatingWidget/8.png)

4. 创建如下图所示的逻辑。

![](/Media/CreatingWidget/9.png)

## 初始化Widget
1. 导航到mod的ModActor，添加一个名为`Create Widget`的节点。
2. 将其连接到BeginPlay，这样当mod actor生成时就会创建widget。
3. 在Class字段中提供widget类。
4. 创建并连接`Add to Viewport`，如下图所示。

![](/Media/CreatingWidget/10.png)

为了使用和访问新创建的widget，我们需要将其存储在变量中。

5. 拖动widget的返回值，并将其提升为变量。

![](/Media/CreatingWidget/11.png)

## 使用Widget
对于这个简单的例子，我们将在事件tick上获取玩家角色位置，并使用widget的方法来设置位置文本。

![](/Media/CreatingWidget/12.png)

> [!TIP]
> 避免在widget外部（如mod actor BP）直接访问文本组件，尝试使用方法来确保对象之间的低耦合。

# 结果
我们创建了一个简单的自定义widget，可以直接访问它并调用方法。

![](/Media/CreatingWidget/13.png)

<br>
<hr>

### 额外内容
确保显示的数据易于理解和阅读是常见的做法。

例如：
- 格式化/附加文本，包含对以下数据的描述。
- 对于向量类型，将向量除以`100`单位以便于阅读。

![](/Media/CreatingWidget/14.png)

![](/Media/CreatingWidget/15.png)

