# REFramework维基百科
这是REFramework维基百科。它主要用作脚本和插件系统的文档。

[VR故障排除](troubleshooting/VR-Troubleshooting.md)

[为文档做出贡献](https://github.com/cursey/reframework-book)

[夜间构建](https://github.com/praydog/REFramework-nightly/releases)

## 报告错误
请在[Issues](https://github.com/praydog/REFramework/issues)页面上报告。

如果您正在崩溃或遇到技术问题，请从游戏文件夹中上传以下文件：
* `re2_framework_log.txt` - 整个日志，而不是其中的片段。
* 如果您正在崩溃，则为`reframework_crash.dmp`

## 帮助！我的盗版副本无法工作

与一些传言相反，**此模式不包含任何种类的防盗版检查**。盗版副本只是不会得到支持。如果它可以工作，那就可以工作。如果不行，则不会添加其他支持。

## Lua脚本

REFramework具有使用Lua的脚本系统。

利用RE引擎的IL2CPP实现，REFramework使开发人员可以强大地控制游戏引擎。

如果您对原生插件感兴趣：[请阅读插件部分](#插件)

## 加载脚本

###手动加载
从主REFramework菜单中单击`ScriptRunner`。从那里，按下`Run Script`并定位要加载的相应的`*.lua`文件。

###自动加载
在游戏目录中创建一个`reframework/autorun`文件夹。这是当REFramework加载时自动创建的。REFramework将在初始化期间自动加载此处的任何`*.lua`脚本。

## 处理Lua错误

###在脚本启动期间
当此处发生Lua错误时，将弹出一个MessageBox，解释错误是什么。

###在回调执行期间
当此处发生Lua错误时，原因将写入调试日志。  ~~需要[DebugView](https://docs.microsoft.com/en-us/sysinternals/downloads/debugview)才能查看这些。~~ 在较新的夜间构建中，可以在ScriptRunner窗口中直接查看这些错误。

我们不在此处弹出MessageBox，以便用户不锁定其游戏。

## 查找要调用的游戏函数和要抓取的字段以及

使用`ObjectExplorer`。它可以在REFramework菜单中的`DeveloperTools`下找到。

翻看单例，直到找到您感兴趣的内容。

`Singletons`下的对象可以通过`sdk.get_managed_singleton("name")`获得

`Native Singletons`下的对象可以通过`sdk.get_native_singleton("name")`获得

请注意，`Singletons`（也称为Managed Singletons）通常最容易暴露。它们最初是用C#编写的。

`Native Singletons`公开了字段和方法，但通常只有少量数据可供选择。这些是用C++编写的，并且有关它们的数据暴露最少。

在`ObjectExplorer`内部某个东西的`TDB Methods`或`TDB Fields`下的任何内容都可以使用本维基百科中找到的各种调用和字段getter/setter方法来调用或抓取。

您 **不能** 在没有直接内存读写的情况下使用`Reflection Methods`或`Reflection Properties`，仅支持完全支持TDB版本。

[示例脚本](examples/Example-Scripts.md)

[进一步的对象浏览器文档](object_explorer/object_explorer.md)

---

## 插件
REFramework可以运行本机DLL插件。这也可以只作为松散的DLL加载器使用，而不知道REF的存在。

插件可以执行Lua可以执行的许多操作，并具有访问REFramework的重要SDK功能以及有用的呈现/输入/游戏代码回调的能力。

### 加载插件
将`.dll`文件放入`reframework/plugins`目录中。

### 使用插件API
从根REFramework项目目录包括`include`目录在插件中。如果您使用C++并希望更多地采用C++方法来使用SDK，则包括`API.hpp`。

从那里，您可以导出这些函数：

```cpp
// OPTIONAL
// 强制插件版本控制
// 如果REF的主要版本与插件所需版本不匹配，则插件将无法加载
// 如果REF的次要版本小于插件的所需版本，则插件将无法加载
// 如果REF的修补程序版本与插件不匹配，则插件将加载，但插件菜单中会显示警告
extern "C" __declspec(dllexport) void reframework_plugin_required_version(REFrameworkPluginVersion* version) {
    version->major = REFRAMEWORK_PLUGIN_VERSION_MAJOR;
    version->minor = REFRAMEWORK_PLUGIN_VERSION_MINOR;
    version->patch = REFRAMEWORK_PLUGIN_VERSION_PATCH;

    // Optionally, specify a specific game name that this plugin is compatible with.
    //version->game_name = "MHRISE";
}
```

```cpp
using namespace reframework; // For API class

// OPTIONAL
// 用于初始化REFramework SDK和其他功能
extern "C" __declspec(dllexport) bool reframework_plugin_initialize(const REFrameworkPluginInitializeParam* param) {
    API::initialize(param);

    // Example usage of param functions
    const auto functions = param->functions;
    functions->on_lua_state_created(on_lua_state_created);
    functions->on_lua_state_destroyed(on_lua_state_destroyed);
    functions->on_frame(on_frame);
    functions->on_pre_application_entry("BeginRendering", on_pre_begin_rendering); // Look at via.ModuleEntry or the wiki for valid names here
    functions->on_post_application_entry("EndRendering", on_post_end_rendering);
    functions->on_device_reset(on_device_reset);
    functions->on_message((REFOnMessageCb)on_message);
    functions->log_error("%s %s", "Hello", "error");
    functions->log_warn("%s %s", "Hello", "warning");
    functions->log_info("%s %s", "Hello", "info");
    API::get()->log_error("%s %s", "Hello", "error");
    API::get()->log_warn("%s %s", "Hello", "warning");
    API::get()->log_info("%s %s", "Hello", "info");

    return true;
}
```

可选地，如果例如您的插件绝对需要立即加载或者不想使用REFramework的插件API的其他功能，则可以指定DllMain。

### 使用本机SDK功能的示例
```cpp
// 抓取C++调用和调用游戏窗口大小
auto& api = API::get();
const auto tdb = api->tdb();

auto vm_context = api->get_vm_context();

const auto scene_manager = api->get_native_singleton("via.SceneManager");
const auto scene_manager_type = tdb->find_type("via.SceneManager");

const auto scene_manager_full_name = scene_manager_type->get_full_name();

OutputDebugString((std::stringstream{} << scene_manager_full_name << " Size: " << scene_manager_full_name.size()).str().c_str());

const auto get_main_view = scene_manager_type->find_method("get_MainView");
const auto main_view = get_main_view->call<API::ManagedObject*>(vm_context, scene_manager);

if (main_view == nullptr) {
    return;
}

// Method 1: Call
float size[3]{};
main_view->call("get_Size", &size, vm_context, main_view);

// Method 2: Invoke
auto get_size_invoke_result = main_view->invoke("get_Size", {});
float* size_invoke = (float*)&get_size_invoke_result;
```
### 示例插件
[REFramework示例插件](https://github.com/praydog/REFramework/tree/master/examples)

[REFramework Direct2D插件](https://github.com/cursey/reframework-d2d)

### 插件头文件
[REFramework插件API头文件](https://github.com/praydog/REFramework/tree/master/include/reframework)

## 附注
一切都可能随时更改和重构。

Lua在所有脚本中使用共享状态。请使用“local”变量以避免与其他脚本发生冲突。

如果有什么你发现没有本机代码就无法完成，Lua可以“require”本机DLL。本机插件也是一种选择。

RE Engine的IL2CPP实现与Unity的不同。虽然RE Engine和Unity有许多相似之处，但它们并不相同，而且现有的Unity或IL2CPP工具在RE Engine上无法使用。

将来可能会使用C#进行更自然的引擎交互，但目前还没有考虑这个问题。REFramework是开源的，因此任何希望这样做的开发人员都可以尝试。

虽然REFramework的脚本API可以做各种各样的事情，但[RE_RSZ](https://github.com/alphazolam/RE_RSZ)是另一个功能强大的工具，可能在某些情况下更适合。例如：
* 将更多游戏对象插入/克隆到特定场景中
* 不需要运行时了解游戏状态的编辑
* 对文件进行时间敏感性的编辑（比如REFramework在启动时无法捕获的内容）
* 在REFramework脚本上使用基础编辑进行附加功能
* 使用REFramework脚本系统无法实现的更改

## 感谢
[cursey](https://github.com/cursey/)帮助构建脚本系统。

[The Hitchhiker](https://github.com/youwereeatenbyalid/)测试/编写脚本/找到错误/提供有用的建议。

[alphaZomega](https://github.com/alphazolam)测试/编写脚本/找到错误/提供有用的建议。

## Discords
[Modding Haven](https://discord.gg/9Vr2SJ3)（通用RE Engine修改）

[Infernal Warks](https://discord.com/invite/nX5EzVU)（DMC5修改）

[Monster Hunter Modding Discord](https://discord.gg/gJwMdhK)

[Flatscreen to VR Modding Discord](http://flat2vr.com)