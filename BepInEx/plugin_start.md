# 创建插件

安装所有必需的工具后，就可以创建一个新项目了。 BepInEx 插件需要至少一个用 BepInPlugin 注释的 C# 文件。 此外，为了使插件代码编译，我们需要引用 BepInEx 库和游戏特定的库。

为了使该过程更容易，我们将使用我们在上一部分中安装的 BepInEx.Templates 包中的现成插件模板。 这些模板已包含预制的 C# 文件和引用的 BepInEx 特定库。

在本节中，我们将
- 创建一个新项目，
- 查看插件的结构和元数据，以及
- 参考游戏特定的库，
- 构建并验证插件是否已被游戏加载


## 从模板创建项目
首先, 为项目创建一个文件夹, 作为示例，我将使用项目名称 `ScriptTrainer`

- 新建一个文件夹, 重命名为 `ScriptTrainer`
- 用 VS Code 打开, 然后按 `Ctrl + ~` 打开VS Code 的终端
- 在终端中输入
   ```cmd
   dotnet new bepinex5plugin -n ScriptTrainer -T net46 -U 2021.3.10
   ```
- 然后你能看到3个文件
  - Plugin.cs: 程序主入口
  - ScriptTrainer.csproj： 插件项目配置
  - NuGet.Config: NuGet 包管理器的配置文件

### 启动函数
BepInEx中有4个函数比较常用的函数，大家可以简单记一下：

- `Awake()：`在插件启动时会直接调用Awake()方法；  
- `Start()：`在所有插件全部执行完成后会调用Start()方法，执行顺序在Awake()后面；  
- `Update()：`插件启动后会一直循环执行Update()方法，可用于监听事件或判断键盘按键，执行顺序在Start()后面；  
- `OnDestroy()：`在插件关闭时会调用OnDestroy()方法，可处理前面提到的“ScriptEngine”插件重启时需要做的操作。  


## 测试和编译插件
了解了上面这些后，现在，我们开始写代码

```csharp
// 在插件启动时会直接调用Awake()方法
void Awake()
{
    // 使用Debug.Log()方法来将文本输出到控制台
    Debug.Log("Hello, world!");

}

// 在所有插件全部启动完成后会调用Start()方法，执行顺序在Awake()后面；
void Start()
{
    Debug.Log("这里是Start()方法中的内容!");
}

// 插件启动后会一直循环执行Update()方法，可用于监听事件或判断键盘按键，执行顺序在Start()后面
void Update()
{
    var key = new BepInEx.Configuration.KeyboardShortcut(KeyCode.F9);

    if (key.IsDown())
    {
        Debug.Log("这里是Updatet()方法中的内容，你看到这条消息是因为你按下了F9");
    }
}
// 在插件关闭时会调用OnDestroy()方法
void OnDestroy()
{
    Debug.Log("当你看到这条消息时，就表示我已经被关闭一次了!");
}
```