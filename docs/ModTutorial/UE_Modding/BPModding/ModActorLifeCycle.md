# ModActor 生命周期
了解虚幻引擎中ModActor（蓝图Actor）的生命周期对有效的Mod制作至关重要。

本指南将介绍蓝图的基础知识。


## BeginPlay
蓝图中的`BeginPlay`方法通常在Actor生命周期的开始时被调用。<br>
这个事件在Actor被生成到游戏世界中时，或者如果Actor已经放置在关卡中，则在游戏开始时触发一次。

### `BeginPlay`的主要活动
- 初始化：设置初始属性、加载游戏存档、创建界面组件、识别引用等。
- 组件设置：初始化和配置网格体、物理和碰撞设置等组件。
- 事件绑定：将事件绑定到自定义逻辑，例如处理玩家输入或交互。
- 生成相关Actor：如果您的蓝图需要生成其他Actor，那么`BeginPlay`节点是处理此类生成的适当位置。

> [!TIP]
> 使用BeginPlay来设置初始值和加载资源。


## Tick
`Tick`方法在每一帧都会被调用，提供了更新Actor逻辑和处理实时操作的方法。<br>
这个方法对于需要持续更新的任务至关重要，例如监控玩家输入。

### `Tick`的主要活动
- 监控玩家输入：持续检查并响应玩家输入，如移动命令或交互请求。
- 状态检查：检查特定条件，如生命值阈值、与其他Actor的距离或特定游戏状态。
- 定时事件：管理需要在特定时间间隔后发生的事件或操作，例如冷却时间或计划操作。

> [!TIP]
> 优化Tick以保持性能。
