# 使用Visual Studio Code中的CMake Presets进行配置和构建

CMake支持两个文件，允许用户指定常见的配置、构建和测试选项，并与他人共享： CMakePresets.json和CMakeUserPresets.json。您可以使用这些文件来驱动CMake在Visual Studio和Visual Studio Code中，在持续集成（CI）管道中以及从命令行中运行。

CMakePresets.json适用于保存项目范围的构建。CMakeUserPresets.json用于开发人员保存自己的本地构建。其集成可在CMake工具版本1.7及更高版本中获取。

本文包含有关CMake工具扩展中的CMakePresets.json集成的信息，用于Visual Studio Code。以下是一些有用的链接：
- 有关CMakePresets.json格式的更多信息，请参阅官方CMake文档。
- 有关Microsoft供应商映射和宏扩展的详细信息，请参阅CMakePresets.json和CMakeUserPresets.json Microsoft供应商映射。
- 有关如何在Visual Studio中使用CMakePresets.json，请参阅Visual Studio中的CMake Presets配置和构建。

我们推荐使用CMakePresets.json作为代替工具集和变体文件的选择。要在CMake工具扩展中启用或禁用CMakePresets.json集成，请参阅启用CMakePresets.json在CMake工具扩展中。

## 支持的CMake和CMakePresets.json版本

CMake工具扩展支持CMakePresets.json和CMakeUserPresets.json文件的2.0或更高版本。 您可以通过增加根对象中的版本字段来更新文件版本。 有关示例和更多信息，请参阅CMakePresets.json。

当您从命令行使用“CMakePresets.json”（2.0或更高版本）调用CMake时，需要CMake版本3.20或更高版本。CMake Tools读取和评估CMakePresets.json和CMakeUserPresets.json。 它不直接使用“--preset”选项调用CMake。因此，在Visual Studio Code中使用CMakePresets.json构建时，严格来说不需要CMake版本3.20或更高版本。 我们建议使用CMake版本3.14或更高版本。

## 在CMake工具扩展中启用CMakePresets.json

新增了一个名为“cmake.useCMakePresets”的设置到“settings.json”中：

| 设置                    | 描述                                                 | 接受值                    | 默认值 |
| ----------------------- | ---------------------------------------------------- | ------------------------- | ------ |
| `cmake.useCMakePresets` | 使用`CMakePresets.json`来驱动CMake的配置、构建和测试 | `always`，`never`，`auto` | `auto` |

如果活动文件夹中有`CMakePresets.json`文件，则`auto`值将计算为`always`。如果活动文件夹中没有`CMakePresets.json`文件，则将其计算为`never`。将`cmake.useCMakePresets`设置为`always`或`never`，可以显式启用或禁用CMakePresets.json集成的所有CMake项目。

## 配置和构建

您可以使用一系列命令来配置和构建CMake项目。 使用Visual Studio Code中的命令面板，按Ctrl+Shift+P打开：
![](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/command-palette.png)

### CMake:选择Configure Preset

**CMake:选择Configure Preset** 列出了在`CMakePresets.json`和`CMakeUserPresets.json`中定义的非隐藏Configure Preset的联合。选择一个Configure Preset，使其成为活动的Configure Preset。这是在调用CMake生成项目构建系统时使用的“configurePreset”值。活动的Configure Preset会显示在状态栏上。

CMake工具使用Microsoft Visual Studio设置供应商映射中的“hostOS”值来隐藏不适用于您平台的Configure Preset。有关详细信息，请参阅[Visual Studio设置供应商映射](https://docs.microsoft.com/cpp/build/cmake-presets-json-reference#visual-studio-settings-vendor-map)下的表格中的“hostOS”条目。

### CMake:Configure

要对项目进行配置，请从命令面板中运行**CMake: Configure**。这与从命令行运行`cmake--preset <configurePreset>`相同，其中`<configurePreset>`是活动Configure Preset的名称。

> [!NOTE]
如果您是Windows开发人员，您必须从开发人员命令提示符中打开Visual Studio Code。或者，在CMake Tools扩展可以检测到与Visual Studio安装的构建工具（CMake、Ninja）安装在一起的情况下，在运行**CMake：扫描编译器**命令之前。

### CMake:选择Build Preset

**CMake:选择Build Preset** 列出了默认的Build Preset和在`CMakePresets.json`和`CMakeUserPresets.json`中定义的非隐藏Build Preset的联合。 默认构建预设等同于在命令行上不添加任何附加参数传递“cmake--build”。选择Build Preset将其设置为活动的Build Preset。这是在调用CMake构建项目时使用的“buildPreset”值。活动的Build Preset会显示在状态栏上。

所有Build Presets都必须指定一个相关联的“configurePreset”值。 CMake工具隐藏不适用于活动Configure Preset的Build Preset。有关详细信息，请参阅 [Build Presets](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#build-preset)列表。

### CMake: Build

从命令面板中运行**CMake: Build**，构建整个项目。这与在命令行上运行`cmake --build --preset <buildPreset>`相同，其中`<buildPreset>`应替换为活动的Build Preset的名称。

从命令面板中运行**CMake: Build Target**，使用活动Build Preset中编码的说明构建单个目标。

## 测试

CTest是CMake测试驱动程序，并与CMake Tools扩展集成。有关详细信息，请参阅[CTest文档](https://cmake.org/cmake/help/latest/manual/ctest.1.html#ctest-1)。

### CMake: 选择测试预设

**CMake:选择测试预设** 包括默认的Test Preset和在`CMakePresets.json`和`CMakeUserPresets.json`中定义的非隐藏Test Preset的联合。默认Test Preset与仅使用`ctest`调用相同。

选择Test Preset以将其设置为活动的Test Preset。这是您调用CTest运行测试时使用的`testPreset`值。活动的Test Preset会显示在状态栏上。

所有Test Presets都必须指定一个相关联的“configurePreset”值。 CMake Tools将隐藏不适用于活动Configure Preset的Test Preset。有关详细信息，请参阅[Test Presets](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#test-preset)列表。

### CMake: 运行测试

要调用CTest，请从命令面板中运行**CMake: Run Tests**。这与从命令行运行`ctest --preset <testPreset>`相同，其中`<testPreset>`是活动Test Preset的名称。

### 状态栏行为

状态栏显示活动的Configure Preset、Build Preset和Test Preset：

![Screenshot of the Visual Studio Code status bar, showing the active Configure Preset, Build Preset, and Test Preset.](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/status_bar_preset_status.png)

要显示或隐藏各个状态栏图标，您可以修改`settings.json`中的`cmake.statusbar.advanced`。

## 添加新的预设

所有命令和预设模板都会修改`CMakePresets.json`。 您可以通过直接编辑`CMakeUserPresets.json`来添加新的用户级别预设。在`CMakePresets.json` 和 `CMakeUserPresets.json`中使用斜杠(`/`)作为路径。

### 添加新的Configure预设

要将新的Configure Preset添加到`CMakePresets.json`，请运行**CMake: Add Configure Preset** 命令。该命令列出了几个Configure Preset模板，以及命令面板中的**[Scan for Compilers]**选项。**[Scan for Compilers]**返回PATH中的所有GCC和Clang编译器，所有找到的`cmake.additionalCompilerSearchDirs和cmake.emscriptenSearchDirs中`安装的编译器以及Visual Studio安装的最新`cl.exe`实例。

![Screenshot of the list of configure presets.](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/add-configure-preset-vscode.png)

- 选择**Inherit from Configure Preset**以从现有Configure Preset继承。有关继承的更多信息，请参阅Configure Preset列表中的相应条目。
- 选择 **Toolchain File** 模板以使用 CMake 工具链文件配置您的 CMake 项目。
- 选择“Custom”模板来配置一个空的配置预设。
- 选择“[Scan for Compilers]”来搜索您机器上的C/C++编译器。

如果“CMakePresets.json”存在，所选模板将添加到其中。否则，该模板将被复制到一个新的“CMakePresets.json”文件中。有关编辑配置预设的更多信息，请参见“编辑预设”。

> [!NOTE]
> CMake 工具包默认选择最近安装的 “cl.exe” 版本。如果你是 Windows 开发人员，可以在“CMakePresets.json”中使用“toolset”选项指定编译器版本。有关详细信息，请参阅[Configure Presets and Toolset Selection](https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html)。

### 添加新的构建预设

要向“CMakePresets.json”中添加新的构建预设，请运行“CMake: Add Build Preset”命令。此命令在命令面板中列出了几个构建预设模板：

- 选择“Create from Configure Preset”，以显示在“CMakePresets.json”中定义的`configurePresets`值列表。选择配置预设后，将创建与所选配置预设相关联的空构建预设。
- 选择“Inherit from Build Preset”以显示在`CMakePresets.json`中定义的`buildPresets`值列表。选择构建预设后，将创建一个从所选构建预设继承的新构建预设。
- 选择“Custom”来配置一个空的构建预设。

有关编辑构建预设的更多信息，请参见[构建预设](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#build-preset)。

### 添加新的测试预设

要将新的测试预设添加到“CMakePresets.json”中，请运行“CMake: Add Test Preset”命令。此命令在命令面板中列出了几个测试预设模板：

- 选择“Create from Configure Preset”，以显示在 `CMakePresets.json` 中定义的 `configurePresets` 值列表。选择配置预设后，将创建与所选配置预设相关联的空测试预设。
- 选择“Inherit from Test Preset”以显示在“CMakePresets.json”中定义的`testPresets`值列表。选择测试预设后，将创建一个新的测试预设，该预设从所选测试预设继承。
- 选择“Custom”模板来配置一个空的测试预设。
要了解有关编辑测试预设的更多信息，请参见[测试预设](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#test-preset)。

## 编辑预设

官方[CMake 文档](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#id1)是编辑配置预设、构建预设和测试预设的最佳资源。以下信息是 CMake 文档的子集，涵盖常见操作。

### 选择编译器

您可以在配置预设中使用`cacheVariables.CMAKE_C_COMPILER`和`cacheVariables.CMAKE_CXX_COMPILER`设置 C 和 C++ 编译器。这相当于从命令行传递 `-D CMAKE_C_COMPILER=<value>` 和 `-D CMAKE_CXX_COMPILER=<value>` 到 CMake 中。有关详细信息，请参见[`CMAKE_<LANG>_COMPILER`](https://cmake.org/cmake/help/latest/variable/CMAKE_LANG_COMPILER.html#cmake-lang-compiler)。

您可以指定位于 PATH 实例上或评估为编译器的完整路径的环境变量的名称。不建议使用完整路径，以便文件保持共享状态。

当您使用 Visual C++ 工具集进行构建时，CMake Tools 会自动从安装在系统上的最新版本的 Visual Studio Build Tools 中获取环境。您可以在“CMakePresets.json”中使用“toolset”选项指定编译器版本。有关详细信息，请参阅[Configure Presets and Toolset Selection](https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html)。

构建 64 位 Windows 并使用 Visual Studio 生成器的预设可能会设置类似以下的编译器：

```json
"architecture": {
   "value": "x64",
   "strategy": "set"
},
"cacheVariables": {
   "CMAKE_BUILD_TYPE": "Debug",
   "CMAKE_C_COMPILER": "cl",
   "CMAKE_CXX_COMPILER": "cl",
   "CMAKE_INSTALL_PREFIX": "${sourceDir}/out/install/${presetName}"
 },
```

在 Linux 或 macOS 上借助 GCC 版本 8 进行构建的预设可能会设置编译器，如下所示：

```json
"cacheVariables": {
    "CMAKE_BUILD_TYPE": "Debug",
    "CMAKE_INSTALL_PREFIX": "${sourceDir}/out/install/${presetName}",
    "CMAKE_C_COMPILER": "gcc-8",
    "CMAKE_CXX_COMPILER": "g++-8"
}
```

您还可以使用 CMake 工具链文件设置编译器。工具链文件可以通过`cacheVariables.CMAKE_TOOLCHAIN_FILE`设置，这相当于从命令行传递`-D CMAKE_TOOLCHAIN_FILE=<value>`到 CMake 中。CMake 工具链文件通常用于交叉编译。有关编写 CMake 工具链文件的说明，请参见[CMake toolchains](https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html)。

### 选择生成器

在 Windows 上，默认情况下，配置预设模板使用 Visual Studio Generator，在 Linux 和 macOS 上使用 Ninja。您可以使用`generator`选项指定新生成器。这相当于从命令行传递`-G`给 CMake。有关详细信息，请参见[CMake generators](https://cmake.org/cmake/help/latest/manual/cmake-generators.7.html#:~:text=A%20CMake%20Generator%20is%20responsible%20for%20writing%20the,what%20native%20build%20system%20is%20to%20be%20used)。

> [!NOTE]
> 如果您是 Windows 开发人员，请确保在使用类似于 Ninja 的命令行生成器进行构建时，将`architecture.strategy`和`toolset.strategy`设置为`external`。

### 设置和引用环境变量

您可以使用环境映射设置环境变量。环境变量通过`inherits`字段继承，但您可以根据需要覆盖它们。预设的环境将是其自己的环境和所有父环境的环境的联合。

如果多个`inherits`预设为相同变量提供冲突值，则列表中较早的预设将优先。您可以通过将其设置为 `null` 来取消从另一个预设继承的变量。

在配置预设中设置的环境变量也会自动流到相关的构建预设和测试预设中，除非将 `inheritConfigureEnvironment` 设置为 `false`。有关详细信息，请参见[配置预设](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#configure-preset)。

您可以使用`$env{<variable-name>}`和`$penv{<variable-name>}`语法引用环境变量。有关详细信息，请参见[宏扩展](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#macro-expansion)。

### 在使用 Visual C++ 工具集进行构建时选择目标和主机架构

可以使用`architecture.value`设置目标架构（x64、Win32、ARM64 或 ARM）。这相当于从命令行传递`-A`给 CMake。有关详细信息，请参见[平台选择](https://cmake.org/cmake/help/latest/generator/Visual%20Studio%2016%202019.html#platform-selection)。

> [!Note]
> 当您为 x86 构建时，Visual Studio 生成器期望 Win32 语法，而命令行生成器（如 Ninja）期望 x86 语法。

可以使用`toolset.value`设置主机架构（x64 或 x86）和工具集。这相当于从命令行传递`-T`给 CMake。有关详细信息，请参阅[工具集选择](https://cmake.org/cmake/help/latest/generator/Visual%20Studio%2016%202019.html#toolset-selection)。

“architecture.strategy”和“toolset.strategy”告诉 CMake 如何处理“architecture”和“toolset”字段：

- “set”表示 CMake 将设置对应的值。它应该与像 Visual Studio 生成器这样的 IDE 生成器一起使用。
- “external”表示 CMake 不会设置相应的值。它应该与像 Ninja 这样的命令行生成器一起使用。

此后，像 Visual Studio 这样的供应商可以在调用 CMake 之前源所需的环境。有关“architectures”和“toolset”字段的详细信息，请参阅[Configure Presets](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#configure-preset)。

有关支持“architecture”字段的 IDE 生成器的完整列表，请参见[`CMAKE_GENERATOR_PLATFORM`](https://cmake.org/cmake/help/latest/variable/CMAKE_GENERATOR_PLATFORM.html)。有关支持“toolset”字段的 IDE 生成器的完整列表，请参见[`CMAKE_GENERATOR_TOOLSET`](https://cmake.org/cmake/help/latest/variable/CMAKE_GENERATOR_TOOLSET.html)。

## 启用 Vcpkg 集成

Vcpkg 可以帮助您在 Windows、Linux 和 macOS 上管理 C 和 C++ 库。必须传递一个 vcpkg 工具链文件 (`vcpkg.cmake`) 给 CMake，以启用 vcpkg 集成。有关详细信息，请参见 [vcpkg 文档](https://github.com/microsoft/vcpkg#vcpkg-overview)。

通过 `CMakePresets.json` 中的`VCPKG_ROOT` 环境变量设置路径到`vcpkg.cmake`：

```json
"cacheVariables": {
   "CMAKE_TOOLCHAIN_FILE": {
      "value": "$env{VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake",
       "type": "FILEPATH"
    }
 },
```

`VCPKG_ROOT` 应设置为您的 vcpkg 安装的根目录。有关详细信息，请参见[vcpkg 环境变量](https://github.com/microsoft/vcpkg/blob/master/docs/users/config-environment.md)。

如果您已经在使用 CMake 工具链文件并且想要启用 vcpkg 集成，请参阅 [使用多个工具链文件](https://github.com/microsoft/vcpkg/blob/master/docs/users/integration.md#using-multiple-toolchain-files)。按照这些说明，通过使用 vcpkg 使用外部工具链文件来与项目配合使用。

## 在“launch.json”和“settings.json”中替换命令

当启用“CMakePresets.json”集成时，CMake 工具可以在启动命令中支持命令替换。有关详细信息，请参阅[命令替换](https://github.com/microsoft/vscode-cmake-tools/blob/main/docs/cmake-settings.md#command-substitution)。

## 忽略的设置

与配置、构建和测试相关的所有设置都应该在“CMakePresets.json”中。这消除了特定于 Visual Studio Code 的行为，并确保您的 CMake 和 CTest 调用可以从命令行重现。

以下设置在启用“CMakePresets.json”集成时将被忽略：



| `settings.json`中的被忽略的设置   | 等价于 `CMakePresets.json`                             |
| --------------------------------- | ------------------------------------------------------ |
| `cmake.buildArgs`                 | `buildPreset`中的各种选项                              |
| `cmake.buildDirectory`            | `configurePresets.binaryDir`                           |
| `cmake.buildEnvironment`          | `buildPresets.environment`                             |
| `cmake.buildToolsArgs`            | `buildPresets.nativeToolOptions`                       |
| `cmake.cmakePath`                 | `configurePresets.cmakeExecutable`                     |
| `cmake.configureArgs`             | `configurePreset`中的各种选项                          |
| `cmake.configureEnvironment`      | `configurePresets.environment`                         |
| `cmake.configureSettings`         | `configurePresets.cacheVariables`                      |
| `cmake.ctestParallelJobs`         | `testPresets.execution.jobs`                           |
| `cmake.ctestArgs`                 | `testPreset`中的各种选项                               |
| `cmake.defaultVariants`           | 不适用                                                 |
| `cmake.environment`               | `configurePresets.environment`                         |
| `cmake.generator`                 | `configurePresets.generator`                           |
| `cmake.ignoreKitEnv`              | 不适用                                                 |
| `cmake.installPrefix`             | `configurePresets.cacheVariables.CMAKE_INSTALL_PREFIX` |
| `cmake.parallelJobs`              | `buildPresets.jobs`                                    |
| `cmake.platform`                  | `configurePresets.architecture`                        |
| `cmake.preferredGenerators`       | `configurePresets.generator`                           |
| `cmake.setBuildTypeOnMultiConfig` | `configurePresets.cacheVariables.CMAKE_BUILD_TYPE`     |
| `cmake.testEnvironment`           | `testPresets.environment`                              |
| `cmake.toolset`                   | `configurePresets.toolset`                             |

## 不支持的命令

启用“CMakePresets.json”集成时，不支持以下命令：
- **CMake: Quick Start**
- **CMake: Select Variant**
- **CMake: Scan for Kits**
- **CMake: Select a Kit**
- **CMake: Edit User-Local CMake Kits**

## 故障排除

如果出现问题，您可以尝试一些故障排除步骤。

如果“CMakePresets.json”文件中的任何一个无效，则无法选择无效文件中的任何预设。CMake 工具智能提示可以帮助您捕获许多这些 JSON 错误，但不会知道您是否正在使用错误的名称引用具有`inherits`或`configurePreset`的预设。

要检查预设文件是否有效，请在项目目录的根目录中从命令行运行“cmake --list-presets”。(需要 CMake 3.20 或更高版本.) 如果任何文件无效，则会看到以下错误：

```DOS
CMake Error: Could not read presets from
C:/Users/<user>/source/repos/<project-name>: JSON parse error
```

如果您正在 Windows 上运行，CMake 必须在 `PATH` 上。

其他故障排除步骤包括：

- 确认`cmake.exe` 和生成器已安装，并在`PATH`上。如果您正在 Windows 上工作，请运行“CMake: Scan for Compilers”命令，以便扩展可以检测与 Visual Studio 一起安装的构建工具。
- 删除缓存并重新配置项目（**CMake: Delete Cache and Reconfigure**）。
- 重置 CMake 工具扩展状态（**CMake: Reset CMake Tools Extension State**）。
- 增加日志级别（`settings.json` 中的 `cmake.loggingLevel`），和/或查看日志文件（**CMake: Open the CMake Tools Log File**）。

如果您发现了问题，则报告问题的最好方法是向[CMake Tools 扩展库](https://github.com/microsoft/vscode-cmake-tools)提交问题。

## 从命令行或 CI 管道运行 CMake

可以使用相同的 `CMakePresets.json` 和 `CMakeUserPresets.json` 文件在 Visual Studio Code 中和从命令行上运行 CMake。 [CMake](https://cmake.org/cmake/help/latest/manual/cmake.1.html) 和 [CTest](https://cmake.org/cmake/help/latest/manual/ctest.1.html) 文档是使用 `--preset` 调用 CMake 和 CTest 的最佳资源。需要 CMake 3.20 或更高版本。

可以从存储“CMakePresets.json”文件的目录中运行以下命令：

```DOS
cmake --list-presets=all .
cmake --preset <configurePreset-name>
cmake --build --preset <buildPreset-name>
ctest --preset <testPreset-name>
```

有关在 Windows 上使用命令行生成器进行构建的详细信息，请参见[在 Windows 上使用命令行生成器进行构建时源环境](https://docs.microsoft.com/cpp/build/cmake-presets-vs#sourcing-the-environment-when-building-with-command-line-generators-on-windows)。

## 示例“CMakePresets.json”文件

请参阅 [box2d-lite](https://github.com/esweet431/box2d-lite/blob/vs-launch/CMakePresets.json) 代码样本中的 `CMakePresets.json` 文件。它包含配置预设、构建预设和测试预设的示例。 

## 下一步

- 查看[CMake Tools 如何生成](build.md#how-cmake-tools-builds)。
- 探索 [CMake 工具文档](README.md)。

