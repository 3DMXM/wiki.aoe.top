# 创建C++模组

本指南将帮助你使用UE4SS创建C++模组。  
指南分为四个部分。  
第一部分介绍前提条件。  
第二部分介绍如何创建最基本的C++模组。  
第三部分将展示如何与UE4SS和UE本身交互（通过UE4SS）。  
第四部分将介绍模组的安装方法。

> 本指南要求有一个可用的C++开发环境，包含`xmake`和`git`，最好类似于从源代码构建UE4SS本身所需的环境。

## 第一部分
**在按照以下步骤操作之前，请确保你已下载所有[README中提到的构建要求](https://docs.ue4ss.com/#build-requirements)！**

1. 创建一个Epic账号并将其链接到你的GitHub账号
2. 检查你的电子邮件并接受加入@EpicGames GitHub组织的邀请，以获取虚幻引擎源代码访问权限。
3. 在你的GitHub账号上设置SSH密钥，这将允许git访问你在步骤2和3中获得权限的虚幻引擎源代码。
4. 在电脑上创建一个目录，名称不重要，但我将我的命名为`MyMods`。
5. 克隆RE-UE4SS仓库，使其位于`MyMods/RE-UE4SS`。
6. 打开命令提示符，进入`RE-UE4SS`目录并执行：`git submodule update --init --recursive`
7. 返回到`MyMods`目录并创建一个新目录，这个目录将包含你的模组源文件。
我将我的命名为`MyAwesomeMod`。
8. 在`MyMods`中创建一个名为`xmake.lua`的文件，并在其中放入以下内容：
```lua
includes("RE-UE4SS")
includes("MyAwesomeMod")
```

## 第二部分
1. 在`MyMods/MyAwesomeMod`中创建一个名为`xmake.lua`的文件，并在其中放入以下内容：
```lua
local projectName = "MyAwesomeMod"

target(projectName)
    add_rules("ue4ss.mod")
    add_includedirs(".")
    add_files("dllmain.cpp")
```
2. 在`MyMods/MyAwesomeMod`中创建一个名为`dllmain.cpp`的文件，并在其中放入以下内容：
```c++
#include <stdio.h>
#include <Mod/CppUserModBase.hpp>

class MyAwesomeMod : public RC::CppUserModBase
{
public:
    MyAwesomeMod() : CppUserModBase()
    {
        ModName = STR("MyAwesomeMod");
        ModVersion = STR("1.0");
        ModDescription = STR("This is my awesome mod");
        ModAuthors = STR("UE4SS Team");
        // 除非你想针对不同于当前构建版本的UE4SS版本，
        // 否则不要更改此项。
        //ModIntendedSDKVersion = STR("2.6");
        
        printf("MyAwesomeMod says hello\n");
    }

    ~MyAwesomeMod() override
    {
    }

    auto on_update() -> void override
    {
    }
};

#define MY_AWESOME_MOD_API __declspec(dllexport)
extern "C"
{
    MY_AWESOME_MOD_API RC::CppUserModBase* start_mod()
    {
        return new MyAwesomeMod();
    }

    MY_AWESOME_MOD_API void uninstall_mod(RC::CppUserModBase* mod)
    {
        delete mod;
    }
}
```
3. 在命令提示符中，在`MyMods`目录下，执行以下命令之一：
A.
```
xmake f -m "Game__Shipping__Win64"
xmake
```
或B.
```
xmake project -k vsxmake2022
```
如果你选择了选项`B`，VS解决方案将位于`vsxmake2022`目录中。

4. 打开`MyMods/vsxmake2022/MyMods.sln`
5. 确保你设置了`Game___Shipping__Win64`配置，除非你想调试。
6. 在解决方案资源管理器中找到你的项目（在我的例子中：MyAwesomeMod），右键单击它并选择`Build`。

## 第三部分
在这一部分，我们将学习如何记录到文件和两个控制台中，以及通过名称查找UObject并记录该名称。
1. 在`#include <Mod/CppUserModBase.hpp>`下添加`#include <DynamicOutput/DynamicOutput.hpp>`。  
你现在也可以移除`#include <stdio.h>`，因为我们将不再使用`printf`，这是唯一需要它的地方。
2. 为了节省时间和麻烦，使代码看起来更好，在所有include之后添加以下行：
```c++
using namespace RC;
```
3. 将`MyAwesomeMod`构造函数中的printf调用替换为：
```c++
Output::send<LogLevel::Verbose>(STR("MyAwesomeMod says hello\n"));
```
它比调用`printf`长，但作为回报，消息会传播到日志文件以及普通控制台和GUI控制台。  
我们还可以通过`LogLevel`枚举来支持颜色。

4. 在DynamicOutput包含之后添加以下内容：
```c++
#include <Unreal/UObjectGlobals.hpp>
#include <Unreal/UObject.hpp>
```
5. 让我们再次使用`using namespace`快捷方式，在第一个下面添加：`using namespace RC::Unreal;`
6. 在你的模组类中添加这个函数：
```c++
auto on_unreal_init() -> void override
{
    // 你可以在此函数中和此函数触发后的任何地方使用'Unreal'命名空间。
    auto Object = UObjectGlobals::StaticFindObject<UObject*>(nullptr, nullptr, STR("/Script/CoreUObject.Object"));
    Output::send<LogLevel::Verbose>(STR("Object Name: {}\n"), Object->GetFullName());
}
```
注意，`Output::send`不需要`LogLevel`，并且我们在格式字符串中使用`{}`而不是`%s`。  
`Output::send`函数在后端使用`std::format`，因此如果你想了解更多相关内容，应该对std::format或libfmt进行一些研究。

7. 右键单击你的项目并选择`Build`。

## 第四部分

[点击前往C++模组安装指南](./installing-a-c++-mod.md)
