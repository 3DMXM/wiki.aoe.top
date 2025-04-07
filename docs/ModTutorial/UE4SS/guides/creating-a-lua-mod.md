# 创建Lua模组

## 开始之前
要在UE4SS中创建Lua模组，您首先应该：
* 了解[如何安装UE4SS](../installation-guide.md)到目标游戏中并确保其正常运行；
* 能够编写基本的Lua代码（可参考官方书籍[《Programming in Lua》](https://www.lua.org/pil/contents.html)及其后续版本，或网上其他推荐的教程）；
* 了解虚幻引擎的对象模型和游戏修改的基础知识。

## 最小Lua模组是什么样的

UE4SS中的Lua模组是一组放置在UE4SS安装目录的`Mods/`文件夹内的Lua脚本。
以本例为目的，让我们称其为`MyLuaMod`。

为了使模组能被加载和执行：
1) 模组文件夹必须有一个`scripts`子文件夹和其中的`main.lua`文件，结构如下：
```
Mods\
    ...
    MyLuaMod\
        scripts\
            main.lua
    ...
```

2) `Mods\MyLuaMod\scripts\main.lua`文件中必须包含一些Lua代码，例如：
```lua
print("[MyLuaMod] 模组已加载\n")
```

3) 必须在`Mods\mods.txt`中添加并启用模组，添加一行包含模组文件夹名称（即模组名称）和`1`表示启用或`0`表示禁用：
```
...
MyLuaMod : 1
...
```

您的自定义功能放在`main.lua`中，如有需要，您可以从中包含其他Lua文件，包括创建自己的Lua模块或导入各种库。

## 您可以在Lua模组中做什么

UE4SS提供的API在此文档的["Lua API"](../lua-api.md)章节的子部分中有详细说明。使用这些函数和类，您可以在内存中查找和操作虚幻引擎对象的实例，创建新对象或修改现有对象，调用它们的方法并访问它们的字段。

基本上，您做的事情与虚幻引擎游戏开发者在其代码中做的完全相同，但您使用UE4SS来定位必要的对象并进行一些猜测，而开发者已经知道它们在哪里以及是什么（因为他们拥有源代码）。

### 创建简单的数据类型
如果您需要创建一个结构类的对象，例如`FVector`，以便将其传递给虚幻引擎函数，UE4SS允许您传递一个带有该类字段的Lua表，如`{X=1.0, Y=2.0, Z=3.0}`来代替。

### 使用Lua C库
如果您需要加载具有原生代码的Lua C库（即在Windows上使用DLL），
您可以直接将这些DLL放在同一个`\scripts\`文件夹中。

# 设置Lua模组开发环境

如果您的代码编辑器或IDE为Lua开发正确配置并了解UE4SS API，编写模组会容易得多。

1) 配置您的代码编辑器/IDE以支持Lua语法高亮和代码自动完成。如果您使用VSCode，请参阅[使用自定义Lua绑定](./using-custom-lua-bindings)。

2) 确保您的UE4SS构建包含`Mods\shared\Types.lua`（从Github发布的开发版本包含它）。这将在您的IDE中加载UE4SS API定义。

3) （可选）从UE4SS Gui控制台[转储Lua绑定](./using-custom-lua-bindings.md#dumping-custom-lua-bindings)，并[按照建议加载它们](./using-custom-lua-bindings.md#to-use-bindings)。

然后在您的IDE中打开UE4SS安装目录的`Mods/`文件夹，并在其中创建或修改您的模组。

# 应用代码更改

开发Lua模组的主要优势是您可以快速编辑Lua源代码而无需重新编译/重建C++模组库（对于C++模组总是如此），并且可以在不重启游戏的情况下重试。

您可以：
* 从UE4SS GUI控制台使用"Console"选项卡上的"Restart All Mods"按钮重新加载所有模组，或者
* 在`UE4SS-settings.ini`中启用"Hot reload"并使用分配的热键（默认为`Ctrl+R`）执行相同操作。

# 您的第一个模组

在您模组的`main.lua`文件中，编写一些代码，尝试访问目标游戏中的虚幻引擎对象，并执行一些您可以在UE4SS控制台中观察到的操作。

您可以从简单的开始
```lua
print("[MyLuaMod] 模组已加载\n")
```
一旦您确认它运行正常，您就可以开始实现一些实际功能。

下面的示例代码相当通用，应该适用于UE4SS支持的许多游戏。

它注册了一个热键`Ctrl+F1`，按下时，它读取玩家坐标并计算自上次按下热键以来玩家移动了多远。

> 注意，日志记录的`print`调用在方括号中包含了模组名称，这有助于您在控制台的其他日志字符串中找到模组的输出。

玩家坐标通过以下方式获取：

1) 使用[UE4SS的`UEHelpers`类](https://github.com/UE4SS-RE/RE-UE4SS/blob/main/assets/Mods/shared/UEHelpers/UEHelpers.lua)获取[玩家控制器](https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/GameFramework/APlayerController/)。
2) 获取[`Pawn`](https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/GameFramework/APawn/)，它代表玩家在虚幻引擎中可以控制的实际"物理"实体。
3) 调用适当的虚幻引擎[方法`K2_GetActorLocation`](https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/GameFramework/AActor/K2_GetActorLocation/)，它返回`Pawn`的位置（通过访问其父`Actor`类）。
4) 位置是虚幻引擎类型`FVector`的三分量向量，具有`X`、`Y`和`Z`作为其字段。


```lua
local UEHelpers = require("UEHelpers")

print("[MyLuaMod] 模组已加载\n")

local lastLocation = nil

function ReadPlayerLocation()
    local FirstPlayerController = UEHelpers:GetPlayerController()
    local Pawn = FirstPlayerController.Pawn
    local Location = Pawn:K2_GetActorLocation()
    print(string.format("[MyLuaMod] 玩家位置: {X=%.3f, Y=%.3f, Z=%.3f}\n", Location.X, Location.Y, Location.Z))
    if lastLocation then
        print(string.format("[MyLuaMod] 玩家移动: {delta_X=%.3f, delta_Y=%.3f, delta_Z=%.3f}\n",
            Location.X - lastLocation.X,
            Location.Y - lastLocation.Y,
            Location.Z - lastLocation.Z)
        )
    end
    lastLocation = Location
end

RegisterKeyBind(Key.F1, { ModifierKey.CONTROL }, function()
    print("[MyLuaMod] 按键已按下\n")
    ExecuteInGameThread(function()
        ReadPlayerLocation()
    end)
end)

```

当您加载游戏直到可以移动角色，按下热键，移动玩家，再次按下它时，模组将生成以下或非常相似的输出：
```
...
[2024-01-09 19:37:27] Starting Lua mod 'MyLuaMod'
[2024-01-09 19:37:27] [Lua] [MyLuaMod] 模组已加载
...
[2024-01-09 19:37:32] [Lua] [MyLuaMod] 按键已按下
[2024-01-09 19:37:32] [Lua] [MyLuaMod] 玩家位置: {X=-63.133, Y=4.372, Z=90.000}
[2024-01-09 19:37:39] [Lua] [MyLuaMod] 按键已按下
[2024-01-09 19:37:39] [Lua] [MyLuaMod] 玩家位置: {X=788.232, Y=-639.627, Z=90.000}
[2024-01-09 19:37:39] [Lua] [MyLuaMod] 玩家移动: {delta_X=851.364, delta_Y=-643.999, delta_Z=0.000}
...
```