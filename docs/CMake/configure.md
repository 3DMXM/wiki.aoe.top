# CMake配置过程

在CMake中，“配置”是指检测需求并生成构建文件，以产生最终的编译结果。

以下的概念有助于了解CMake工具包与CMake的配置过程之间的交互：

· “CMake Cache”是一组键值对，它们在配置进程运行期间保持不变。它包含以下内容：

    · 昂贵的值，例如编译器是否支持“-flag”或“#include”文件。
    · 很少更改的值，例如头文件/库的路径。
    · 可供开发人员控制的值，例如“BUILD_TESTING”，以确定是否构建测试库/可执行文件。
    
· “Cache initializer arguments”是传递给CMake的参数，它们在运行任何CMake脚本之前设置缓存中的值。这些参数允许您控制构建设置。在CMake命令行上，它们显示为“-D”参数。（CMake工具包不使用CMake的“-C”参数。）
· 除非被覆盖或删除，否则CMake Cache中的值将在CMake运行之间保持不变。
· CMake本身不做构建，它依赖于安装在您的系统上的构建工具。 “configure”的结果取决于CMake“Generator”。 “Generator”告诉CMake使用哪种工具来编译和生成构建结果。有几个生成器家族可用：

| Generator     | 描述                                                                                                                                                                                    |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ninja         | 发出针对 [Ninja构建工具](https://ninja-build.org) 的文件。这是CMake工具包首选的生成器，除非已经配置了其他方式。请参阅[cmake.preferredGenerators]（cmake-settings.md＃cmake-settings）。 |
| Makefile      | 为项目发出`Makefile`，可以通过`make`构建。                                                                                                                                              |
| Visual Studio | 发出Visual Studio解决方案和项目文件。有许多不同的Visual Studio生成器，因此建议让CMake工具包自动确定适当的生成器。                                                                       |

无论生成器如何，CMake工具包始终支持从Visual Studio Code内部进行构建。如果您从Visual Studio Code内部进行构建，我们建议您使用[Ninja构建工具](https://ninja-build.org/)。

## CMake Tools的配置步骤

CMake工具包通过文件接口（cmake-file-api）驱动CMake，提供项目信息。

在CMake工具包运行配置步骤时，它考虑到以下事项：

1. **活动kit**

   [CMake kits] 提供有关可用于使用CMake构建项目的系统上的工具集的信息。 

    1. 对于[toolchain]，CMake工具包将CMake缓存变量“CMAKE_TOOLCHAIN_FILE”设置为计件指定的文件的路径。
    2. 对于[compilers]，CMake工具包将“CMAKE_< LANG >_COMPILER”缓存变量设置为指向计件中定义的每个< LANG >的路径。
    3. 对于[Visual Studio]，CMake工具包设置必要的环境变量以使用所选的Visual Studio安装，并将“CC”和“CXX”设置为“cl.exe”，以便CMake将检测到Visual C++编译器作为主要编译器，即使类似于GCC的其他编译器存在于$Path。

    每个kit也可以定义为操作所需的其他cache变量设置。一个kit还可以定义一个“preferredGenerator”。

    请参见[CMake Kits]以获取有关套件工作原理的详细信息。
    请参见[Kit选项]以获取有关不同类型的kit的详细信息。

1. **要使用的生成器**

    CMake工具包尽可能避免让CMake隐式决定要使用的生成器。相反，它试图从各种源中检测首选的生成器，在找到有效生成器时停止。它检查的源是：

    1. 配置设置[cmake.generator]。
    2. 配置设置[cmake.preferredGenerators]。检查列表中的每个元素是否有效，如果匹配，则选择它。此列表具有合理的默认值，适用于大多数环境。
    3. 活动kit的preferredGenerator属性。自动生成的Visual Studio kit将此属性设置为与其版本匹配的Visual Studio生成器。
    4. 如果找不到生成器，则CMake工具包会产生错误。

1. **配置选项**

    CMake工具包有多个地方可以定义配置选项。它们按顺序搜索并合并在一起。当键具有相同的名称时，使用在搜索期间找到的最新值。搜索位置为：

    1. settings.json中的[cmake.configureSettings]选项。
    2. 活动变体选项的“settings”值。
    3. 根据[variant options]（variants.md#variants-options）设置[BUILD_SHARED_LIBS]。
    4. 根据[variant options]（variants.md#variants-options）设置[CMAKE_BUILD_TYPE]。
    5. 根据[cmake.installPrefix]（cmake-settings.md＃cmake-settings）设置[CMAKE_INSTALL_PREFIX]。
    6. 为[toolchain]（kits.md#specify-a-toolchain）设置[CMAKE_TOOLCHAIN_FILE]。
    7. 活动kit上的[cmakeSettings]（kits.md#generic-options）attribute。

    此外，[cmake.configureArgs]（cmake-settings.md＃cmake-settings）会在以上任何选项之前传递。

1. **配置环境**

   CMake工具包为执行CMake的子进程设置环境变量。与配置选项一样，值会从不同的源合并，以后来者为准。这些源是：

    1. 活动[kit]（kits.md）所需的环境变量。
    2. [cmake.environment]（cmake-settings.md＃cmake-settings）的值。
    3. [cmake.configureEnvironment]（cmake-settings.md＃cmake-settings）的值。
    4. 活动[variant]（variants.md）所需的环境变量。

所有这些都将考虑在内，以执行配置。完成后，CMake工具包从CMake中加载项目信息，并基于CMake的输出生成诊断信息。现在您已准备好使用CMake工具包构建项目。

## CMake工具包外的配置步骤

CMake工具包设计用于与外部CMake过程良好配合。您可以选择从其他命令行或其他IDE /工具运行CMake，只要主机环境设置正确就可以正常工作。

> **重要提示：** CMake工具包不知道外部CMake过程所做的任何更改，您需要在CMake工具包中重新运行CMake配置，以便使用最新的项目信息。

## 清理配置

要让CMake工具包执行一个干净的配置，请在VS Code中使用命令面板运行“CMake：删除缓存并重新配置”。

干净的配置会从构建目录中删除“CMakeCache.txt”文件和“CMakeFiles”目录。这会重置CMake的所有默认状态。

某些构建系统更改需要进行干净的配置，例如当活动kit更改时，但如果您在CMake工具包之外更改了配置设置，那么干净的配置也可能很方便。

如果更改了活动kit，则CMake工具包将自动执行干净的配置。

## 下一步操作

- 探索如何在[使用CMake工具包进行构建](build.md)
- 学习[CMake Kits]如何工作
- 浏览[CMake Tools文档](README.md)