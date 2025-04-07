# 虚幻引擎 4/5 脚本系统

Lua 脚本系统平台、C++ 修改 API、SDK 生成器、蓝图模组加载器、实时属性编辑器以及其他适用于 UE4/5 游戏的数据导出工具。

## 主要功能

- [Lua 脚本 API](https://docs.ue4ss.com/dev/lua-api.html)：基于 UE 对象系统编写 Lua 模组
- [蓝图模组加载](https://docs.ue4ss.com/dev/feature-overview/blueprint-modloader.html)：无需编辑/替换游戏文件即可自动加载蓝图模组
- [C++ 修改 API](https://docs.ue4ss.com/dev/guides/creating-a-c%2B%2B-mod.html)：基于 UE 对象系统编写 C++ 模组
- [实时属性查看器和编辑器](https://docs.ue4ss.com/dev/feature-overview/live-view.html)：搜索、查看、编辑和监视每个已加载对象的属性，非常适合调试模组或了解运行时值的变化
- [UHT 导出器](https://docs.ue4ss.com/dev/feature-overview/dumpers.html#unreal-header-tool-uht-dumper)：生成与虚幻头工具兼容的 C++ 头文件，用于为游戏创建镜像 .uproject
- [C++ 头文件导出器](https://docs.ue4ss.com/dev/feature-overview/dumpers.html#c-header-generator)：从反射类和蓝图生成标准 C++ 头文件，包含偏移量
- [通用 UE 模组](https://docs.ue4ss.com/dev/feature-overview/universal-mods.html)：解锁游戏控制台和其他通用模组
- [文件解析导出器](https://docs.ue4ss.com/dev/feature-overview/dumpers.html#usmap-dumper)：生成 `.usmap` 映射文件以处理未版本化属性
- [UMAP 重建导出器](https://docs.ue4ss.com/dev/feature-overview/dumpers.html#umap-recreation-dumper)：将所有已加载的 Actor 导出到文件，以便在编辑器中生成 `.umaps`
- 其他功能，包括偶尔提供的[实验性](https://docs.ue4ss.com/dev/feature-overview/experimental.html)功能

## 支持的 UE 版本：从 4.12 到 5.5

UE4SS 的目标不是成为一个适用于每个游戏的即插即用解决方案。
而是提供一个适用于大多数游戏的基础系统。
您可能需要自行更新 AOB，下文有相关指南。

## 基本安装

最简单的安装方法是从 [Releases](https://github.com/UE4SS-RE/RE-UE4SS/releases) 下载最新非实验性构建的非开发版本，并将 zip 内容解压到 `{游戏目录}/GameName/Binaries/Win64/`。

如果您的游戏在自定义配置列表中，也将相关文件夹中的内容解压到 `Win64` 中。

如果您计划使用 UE4SS 进行模组开发，可以采用同样的方法，但改为下载 zDEV 版本。

## 链接

  [完整安装指南](https://docs.ue4ss.com/dev/installation-guide.html)

  [修复兼容性问题](https://docs.ue4ss.com/dev/guides/fixing-compatibility-problems.html)

  [Lua API - 概述](https://docs.ue4ss.com/dev/lua-api.html)

  [生成 UHT 兼容头文件](https://docs.ue4ss.com/dev/guides/generating-uht-compatible-headers.html)

  [自定义游戏配置](https://docs.ue4ss.com/dev/custom-game-configs.html)

  [创建兼容的蓝图模组](https://www.youtube.com/watch?v=fB3yT85XhVA)

  [UE4SS Discord 服务器邀请](https://discord.gg/7qhRGHF9Tt)

  [Unreal Engine Modding Discord 服务器邀请](https://discord.gg/unreal-engine-modding-876613187204685934)

## 构建要求

- 运行 Windows 的计算机。
  - Linux 支持可能在未来某个时候实现，但不会很快。
- 支持 C++23 的 MSVC 版本：
  - MSVC 工具集版本 >= 14.39.0
  - MSVC 版本 >= 19.39.0
  - Visual Studio 版本 >= 17.9
  - 未来可能会支持更多编译器。
- [Rust 工具链 >= 1.73.0](https://www.rust-lang.org/tools/install)
- [xmake >= 2.9.3](https://xmake.io/#/)

## 构建说明

1. 克隆仓库。
2. 执行以下命令：`git submodule update --init --recursive`
    确保您的 Github 账号已关联到 Epic Games 账号以访问 UE 源码。
    不要使用 `--remote` 选项，因为这会强制第三方依赖更新到最新提交，这可能会破坏功能。
    您需要将 github 账号与 Epic games 账号关联以拉取 Unreal 伪代码子模块。

构建 UE4SS 有几种不同的方法。

## 从命令行构建

### 配置设置

`xmake` 允许您灵活配置构建选项以满足特定需求。以下是一些可能有用的配置设置列表：

> [!IMPORTANT]
> 所有配置更改都通过 `xmake config` 命令进行。您也可以使用 `xmake f` 作为 con**f**ig 的别名。

使用上述任何选项配置 `xmake` 后，可以通过 `xmake` 或 `xmake build` 构建项目。

#### 模式

构建模式的结构如下：`<Target>__<Config>__<Platform>`

当前支持的选项有：

* `Target`
  * `Game` - 适用于 UE 4.21 以上版本的常规游戏
  * `LessEqual421` - 适用于 UE 4.21 及以下版本的常规游戏
  * `CasePreserving` - 适用于启用大小写保留功能构建的游戏

* `Config`
  * `Dev` - 开发构建
  * `Debug` - 调试构建
  * `Shipping` - 发布构建
  * `Test` - 测试构建

* `Platform`
  * `Win64` - 64位 Windows

> [!TIP]
> 使用此命令配置项目：`xmake f -m "<BuildMode>"`。`-m` 是 --**m**ode=\<BuildMode> 的别名。

#### Patternsleuth (实验性)

默认情况下，patternsleuth 工具作为 xmake 包安装自身。如果您不打算修改 patternsleuth 源代码，则无需特殊配置。如果您想修改 patternsleuth 源代码，需要向 `xmake config` 提供 `--patternsleuth=local` 选项，以便将 patternsleuth 作为 UE4SS 构建的一部分重新编译。

#### 代理路径

默认情况下，UE4SS 基于 `C:\Windows\System32\dwmapi.dll` 生成代理。如果您出于任何原因想要更改这一点，可以向 `xmake config` 命令提供 `--ue4ssProxyPath=<代理 dll 路径>`。

#### 分析器类型

默认情况下，UE4SS 使用 Tracy 进行分析。您可以向 `xmake config` 命令传递 `--profilerFlavor=<profiler>` 来设置分析器类型。当前支持的类型有 `Tracy`、`Superluminal` 和 `None`。

#### 版本检查

默认情况下，xmake 会检查您是否安装了 Rust 或 MSVC 的最低要求版本（如果您使用的是 MSVC 工具链）。如果没有，它将在配置步骤中抛出错误。如果您想忽略此检查，可以向 `xmake config` 命令传递 `--versionCheck=n`。

一旦设置了该标志，选项值将保持不变，直到您另行指定。

因此，要在运行 `xmake project -k vsxmake2022` 时不检查版本，您必须先运行 `xmake config --versionCheck=n` 命令，然后运行 `xmake project -k vsxmake2022` 命令。

### 有用的 `xmake` 命令

您可能会遇到一些更高级的 `xmake` 命令。以下是一些有用命令的非详尽列表。

| 语法                                                               | 别名                                                      | 用途                                                                                                                                                                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xmake <command> --yes`                                            | `xmake <command> -y`                                      | 自动确认任何用户提示。                                                                                                                                                                                           |
| `xmake --verbose <command>`                                        | `xmake -v <command>`                                      | 启用详细级别日志记录。                                                                                                                                                                                           |
| `xmake --Diagnostic <command>`                                     | `xmake -D <command>`                                      | 启用诊断级别日志记录。                                                                                                                                                                                           |
| `xmake --verbose --Diagnostic --yes <command>`                     | `xmake -vDy <command>`                                    | 您可以将大多数标志组合成一个 `-flagCombo`。                                                                                                                                                                      |
| `xmake config`                                                     | `xmake f`                                                 | 使用[这些选项](#配置设置)配置 xmake。                                                                                                                                                                            |
| `xmake clean --all`                                                | `xmake c --all`                                           | 清理所有目标的二进制文件和中间输出。                                                                                                                                                                             |
| `xmake clean <target>`                                             | `xmake c <target>`                                        | 清理特定目标的二进制文件和中间文件。                                                                                                                                                                             |
| `xmake build`                                                      | `xmake b`                                                 | 使用输入文件检测增量构建 UE4SS。                                                                                                                                                                                 |
| `xmake build --rebuild`                                            | `xmake b -r`                                              | 强制完全重建 UE4SS。                                                                                                                                                                                             |
| `xmake build <target>`                                             | `xmake b <target>`                                        | 增量构建特定目标。                                                                                                                                                                                               |
| `xmake show`                                                       |                                                           | 显示 xmake 信息和当前项目信息。                                                                                                                                                                                  |
| `xmake show --target=<target>`                                     | `xmake show -t <target>`                                  | 打印大量关于目标的信息。用于调试脚本、编译器标志、依赖树等。                                                                                                                                                     |
| `xmake require --clean`                                            | `xmake q -c`                                              | 清除所有包缓存并卸载所有未引用的包。                                                                                                                                                                             |
| `xmake require --force`                                            | `xmake q -f`                                              | 强制重新安装所有依赖包。                                                                                                                                                                                         |
| `xmake require --list`                                             | `xmake q -l`                                              | 列出项目所需的所有包。                                                                                                                                                                                           |
| `xmake project --kind=vsxmake2022 --modes="Game__Shipping__Win64"` | `xmake project -k vsxmake2022 -m "Game__Shipping__Win64"` | 基于当前的 `xmake config`uration 生成[Visual Studio 项目](#visual-studio--rider)。您可以通过提供 `-m "Comma,Separated,Modes"` 来指定要生成的多个模式。如果不提供任何模式，VS 项目将生成所有[模式的排列](#模式)。 |

### 在 IDE 中打开

#### Visual Studio / Rider

要生成 Visual Studio 项目文件，请运行 `xmake project -k vsxmake2022 -m "Game__Shipping__Win64"` 命令。

然后在 `vsxmake2022` 目录中打开生成的 `.sln` 文件

请注意，如果您更新子模块的原因不是因为其他人推送了更新，而是您自己更新的，那么您也应该提交并推送更新的子模块。

> [!WARNING]
> vs. 构建插件通过在 vs 下直接调用 xmake 命令执行编译操作，还支持智能感知和定义跳转以及断点调试。
> 这意味着在 Visual Studio 中修改项目属性不会影响 VS 执行 `xmake` 时传递的标志。XMake 提供了一些可配置的项目设置，可以在 VS 中的 `Project Properties -> Configuration Properties -> Xmake` 菜单中找到。

> [!CAUTION]
> 如果您安装了多个 Visual Studio 版本，请运行 `xmake f --vs=2022`，否则在生成项目时可能会遇到问题。

##### 配置其他模式

> [!TIP]
> 可以通过运行 `xmake project -k vsxmake2022 -m "Game__Shipping__Win64,Game__Debug__Win64"` 生成其他模式。
> [更多解释可以在 `xmake` 命令表中找到](#有用的-xmake-命令)。

##### 重新生成解决方案的最佳实践

> [!CAUTION]
> 如果您使用 `xmake config` 更改了配置，可能需要重新生成 Visual Studio 解决方案以应用配置更改。您可以简单地重新运行 `xmake project -k vsxmake2022 -m "<modes>"` 命令以重新生成解决方案。

### 在 Linux 上构建 Windows 二进制文件

我们仅官方支持 [msvc-wine](https://github.com/mstorsjo/msvc-wine) 进行交叉编译。
确保已安装 winbind（Arch 上的 libwbclient 和 samba）。

> [!CAUTION]
> 您必须使用 [xmake](https://github.com/xmake-io/xmake) v2.9.7 或更高版本，截至 2024 年 12 月初，该版本尚未发布，这意味着您必须安装 xmake 的开发版本。

您需要使用 rustup 安装 `x86_64-pc-windows-msvc` 目标（而不是 `windows-gnu` 目标）。
在调用 `xmake f` 时，必须设置 `--plat`、`--arch` 和 `--sdk`。
还必须使用 `--ue4ssCross=msvc-wine`，并禁用版本检查。
以下项目在交叉编译时不受支持，并会自动禁用：

```
proxy
proxy_generator
UVTD
```

在调用 `xmake` 构建命令时，patternsleuth 将自动在没有 xmake 的情况下构建。
二进制文件位于 `deps/first/patternsleuth_bind/target/x86_64-pc-windows-msvc`。
当设置 `--ue4ssCross` 为 `msvc-wine` 时，xmake 会自动使用它们。
以下是一个在 Linux 机器上构建 Windows 二进制文件的完整命令示例：

```
xmake f -m "Game__Shipping__Win64" -p windows -a x64 --sdk=/home/<username>/my_msvc/opt/msvc --versionCheck=n --ue4ssCross=msvc-wine
```

### 在 wine 下调试

可以使用 `winedbg` 进行调试。
您还可以调试 minidumps：

```bash
winedbg crash_2024_12_26_07_39_15.dmp
```

请记住，调试符号不会存储在 dmp 文件中，您必须拥有与生成 UE4SS.dll 时相同的符号文件（PDB）。
确保拥有正确符号的最简单方法是构建生成 dmp 文件的确切提交。

## 更新 git 子模块

如果要更新 git 子模块，可以通过以下三种方式之一进行：
1. 可以执行 `git submodule update --init --recursive` 更新所有子模块。
2. 也可以选择逐个更新子模块，执行 `git submodule update --init --recursive deps/<first-or-third>/<Repo>`。
    除非您确实想更新到最新提交，否则不要使用 `--remote` 选项。
3. 如果您更愿意选择特定的提交或分支来更新子模块，请 `cd` 到该依赖项的子模块目录并执行 `git checkout <branch name or commit>`。
您可能希望不时更新的主要依赖项是 `deps/first/Unreal`。

## 致谢

自项目开源以来的所有贡献者：https://github.com/UE4SS-RE/RE-UE4SS/graphs/contributors

- **原始创建者** 原始创建者不再希望参与或与该项目相关联。请尊重他们的意愿，避免在与该项目相关时使用他们过去的用户名。
- [**Archengius**](https://github.com/Archengius/)
  - UHT 兼容头文件生成器
- **CasualGamer**
  - 注入代码和 aob 扫描器主要基于他的工作，90% 的代码是他的。
- **SunBeam**
  - 为 UE4.25 的函数 'GetFullName' 提供额外签名。
  - 用于从 ini 加载时检查正确签名格式的正则表达式。
  - 大量签名工作
- **tomsa**
  - const char* 到 vector\<int> 转换器
    - tomsa：想法和大部分代码
    - 原始创建者：Nibblet 支持
- **boop** / **usize**
  - 新的 UFunction 挂钩方法
- [**RussellJ**](https://github.com/RussellJerome)
  - 蓝图模组加载器灵感
- [**Narknon**](https://github.com/narknon)
  - 某些功能和项目的维护/重新托管
- **DeadMor0z**
  - 某些功能和 Lua 更新/维护
- [**OutTheShade**](https://github.com/OutTheShade/UnrealMappingsDumper)
  - Unreal Mappings (USMAP) 生成器
- **DmgVol**
  - 地图导出器灵感
- [**Buckminsterfullerene**](https://github.com/Buckminsterfullerene02/)
  - 重写文档，各种修复
- **trumank**
  - Lua 绑定生成器，各种修复，自动化和改进
- **localcc**
  - C++ API

## 感谢所有帮助测试的人

- GreenHouse
- Otis_Inf
- SunBeam
- Motoson
- hooter
- Synopis
- Buckminsterfullerene
