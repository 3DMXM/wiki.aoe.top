# 配置 CMake 工具设置

CMake 工具支持在用户或工作区级别通过 VSCode 的 `settings.json` 文件设置各种设置。本主题介绍了可用选项以及它们如何使用。

下表中支持替换的选项允许字符串出现变量引用。有关变量扩展的更多信息，请参见下面的[变量替换](#variable-substitution)。

## CMake 设置

| 设置                                | 描述                                                                                                                                     | 默认值                                                               | 支持替换                                                                                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `cmake.autoSelectActiveFolder`      | 如果为“false”，则仅在手动运行“CMake：选择活动文件夹”命令时您的活动文件夹才会更改。                                                       | 'true'                                                               | 否                                                                                                                                              |
| `cmake.buildArgs`                   | 要传递给 `cmake --build` 的其他参数数组。                                                                                                | `[]`（空数组-没有其他参数）                                          | 是                                                                                                                                              |
| `cmake.buildBeforeRun`              | 如果为 `true`，则在运行目标之前构建启动/调试目标。                                                                                       | `true`                                                               | 否                                                                                                                                              |
| `cmake.buildDirectory`              | 指定生成目录（即生成 `CMakeCache.txt` 的根目录）。                                                                                       | `${workspaceFolder}/build`                                           | 是                                                                                                                                              |
| `cmake.buildEnvironment`            | 一个 `key:value` 组成的环境变量对象，仅传递给编译器。                                                                                    | `null`（未指定环境变量）                                             | 是                                                                                                                                              |
| `cmake.buildToolArgs`               | 要传递给基础构建工具的其他参数数组。                                                                                                     | `[]`（空数组-没有其他参数）                                          | 是                                                                                                                                              |
| `cmake.cacheInit`                   | 缓存初始化文件的路径或路径列表。通过 `-C` 命令行参数传递给 CMake。                                                                       | `[]`（空数组-没有缓存初始化器文件）                                  | 否                                                                                                                                              |
| `cmake.cmakePath`                   | 指定 cmake 可执行文件位置。                                                                                                              | `cmake`（导致 CMake Tools 搜索 `PATH` 环境变量以及一些硬编码位置。） | 支持 `workspaceRoot`、`workspaceFolder`、`workspaceRootFolderName`、`userHome`、`${command:...}` 和 `${env:...}` 的替换。其他替换导致空字符串。 |
| `cmake.cmakeCommunicationMode`      | 指定扩展与 CMake 之间通信的协议。                                                                                                        | `automatic`                                                          | 否                                                                                                                                              |
| `cmake.configureArgs`               | 在配置过程中要传递给 CMake 的参数。宁愿使用 `cmake.configureSettings` 或 [CMake variants](variants.md)。不建议使用此设置传递 `-D` 参数。 | `[]`（空数组-无参数）                                                | 是                                                                                                                                              |
| `cmake.configureEnvironment`        | 一个 `key:value` 组成的环境变量对象，仅在配置期间传递给 CMake。                                                                          | `null`（未指定环境变量）                                             | 是                                                                                                                                              |
| `cmake.configureOnEdit`             | 当 `cmake.sourceDirectory` 设置中的路径更新或 `CMakeLists.txt` 或 `* .cmake` 文件保存时，在自动配置 CMake 项目目录时。                   | `true`                                                               | 否                                                                                                                                              |
| `cmake.configureOnOpen`             | 当打开 CMake 项目目录时自动进行配置。                                                                                                    | `null`（提示进行配置）                                               | 否                                                                                                                                              |
| `cmake.copyCompileCommands`         | 如果不是 `null`，则每当 CMake 成功配置时，将生成的 `compile_commands.json` 文件复制到此设置指定的路径。                                  | `null`（不复制文件）                                                 | 是                                                                                                                                              |
| `cmake.defaultVariants`             | 重写没有变体文件时提供的默认变体集。请参阅[CMake variants](variants.md)。                                                                |                                                                      | 否                                                                                                                                              |
| `cmake.environment`                 | 包含 `key:value` 对的对象，当使用 CTest 进行配置、构建、调试、运行或测试时将可用。                                                       | `null`（没有环境变量）                                               | 是                                                                                                                                              |
| `cmake.generator`                   | 设置为字符串以覆盖 CMake Tools 优先级生成器逻辑。如果设置，CMake 将无条件将其用作 `-G` CMake 生成器命令行参数。                          |                                                                      | 否                                                                                                                                              |
| `cmake.skipConfigureIfCachePresent` | 布尔设置，如果存在 CMake 缓存，则允许用户跳过配置过程。                                                                                  | `false`                                                              | 否                                                                                                                                              |
| `cmake.parallelJobs`                | 指定在构建过程中并行运行的作业数。使用值 `1` 将禁用构建并行处理。                                                                        |                                                                      | 否                                                                                                                                              |
| `cmake.preferredGenerators`         | 第一次配置 CMake 项目时尝试的发生器名称组成的字符串列表。                                                                                |                                                                      | 否                                                                                                                                              |
| `cmake.saveBeforeBuild`             | 如果为 `true`（默认），则在运行 CMake 之前保存打开的文本文档进行构建或配置。                                                             | `true`                                                               | 否                                                                                                                                              |
| `cmake.sourceDirectory`             | 存储根 `CMakeLists.txt` 的目录或目录列表。                                                                                               | `${workspaceFolder}`                                                 | 是                                                                                                                                              |
| `cmake.testEnvironment`             | 一个 `key:value` 对的对象，当使用 CTest 进行调试、运行和测试时将可用 。                                                                  | `null`（没有环境变量）                                               | 是                                                                                                                                              |

## 变量替换

一些设置支持使用 `${variable}` 语法将其字符串值中的特殊值替换为变量。以下内置变量被扩展：

| 变量                         | 扩展                                                                                                                                                        |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `${workspaceRoot}`           | **已弃用**。工作区根目录的完整路径。                                                                                                                        |
| `${workspaceFolder}`         | 工作区根目录的完整路径。                                                                                                                                    |
| `${sourceDirectory}`         | 根 `CMakeLists.txt` 的完整路径。(不会在 `cmake.sourceDirectory`、`cmake.cmakePath`、`cmake.ctestPath` 中或者 Kits 中进行替换)                               |
| `${workspaceRootFolderName}` | 工作区路径中叶子目录的名称。                                                                                                                                |
| `${buildType}`               | 当前 CMake 的生成类型。例如：`Debug`，`Release`，`MinSizeRel`，`RelWithDebInfo`                                                                             |
| `${buildKit}`                | 当前 CMake kit 的全名。例如：`GCC 7.3.0`                                                                                                                    |
| `${buildKitVendor}`          | 当前的 CMake kit 厂商名称。可能的值：`GCC`，`MSVC`，`Clang`等。                                                                                             |
| `${buildKitTriple}`          | 当前 CMake kit 的目标三元组。例：`arm-none-eabi`                                                                                                            |
| `${buildKitVersion}`         | 当前 CMake kit 的版本。例如：`9.3.0`                                                                                                                        |
| `${buildKitHostOs}`          | 当前 CMake kit 的主机操作系统。可能的值：`win32`、`osx`、`linux`等(小写)                                                                                    |
| `${buildKitTargetOs}`        | 当前 CMake kit 的目标操作系统。可能的值：`win32`、`osx`、`linux`等(小写)                                                                                    |
| `${buildKitTargetArch}`      | 当前的 CMake kit 的目标架构。可能的值：`x86`、`x64`、`arm`、`aarch64`等(小写)                                                                               |
| `${buildKitVersionMajor}`    | 当前的 CMake kit 的主要版本。例如：`7`                                                                                                                      |
| `${buildKitVersionMinor}`    | 当前的 CMake kit 的次要版本。例如：`3`                                                                                                                      |
| `${generator}`               | CMake 生成器的名称。例如：`Ninja`                                                                                                                           |
| `${projectName}`             | **已弃用**。扩展到常量字符串 `"ProjectName"`。CMake 不认为只有一个要使用的项目名称。单个项目的概念在 CMake 中不起作用。请使用`${workspaceRootFolderName}`。 |
| `${userHome}`                | 当前用户的主目录的完整路径。                                                                                                                                |

### 环境变量

使用 `${env:VARNAME}` 和 `${env.VARNAME}` 语法进行环境变量扩展，其中`VARNAME` 是要扩展的环境变量。如果命名环境变量未定义，则扩展为空字符串。

### Variant 替换

使用 `${variant:VARIANTNAME}` 语法来扩展变体选项。提供的 `VARIANTNAME` 变体选项的当前活动选择名称会进行扩展。如果变体选项未定义，则扩展为空字符串。

### 命令替换

CMake 工具可以展开 VSCode 命令。例如，您可以通过使用`${command:cmake.launchTargetPath}`语法来展开启动目标的路径。

小心长时间运行的命令，因为没有指定 CMake 工具将在给定的扩展中执行命令的时间或次数。

支持替换的命令：

| 命令                              | 替换                                                                                                  |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cmake.getLaunchTargetPath`       | 目标可执行文件的完整路径，包括文件名。不验证目标的存在。                                              |
| `cmake.getLaunchTargetDirectory`  | 目标可执行文件目录的完整路径。不验证目录的存在。                                                      |
| `cmake.getLaunchTargetFilename`   | 目标可执行文件的文件名，不包括路径信息。不验证目标的存在。                                            |
| `cmake.launchTargetPath`          | 目标可执行文件的完整路径，包括文件名。如果`cmake.buildBeforeRun`为 true，则调用此替换还将开始生成。   |
| `cmake.launchTargetDirectory`     | 目标可执行文件的目录的完整路径。如果`cmake.buildBeforeRun`为 true，则调用此替换还将开始生成。         |
| `cmake.launchTargetFilename`      | 目标可执行文件的文件名，不包括路径信息。如果`cmake.buildBeforeRun`为 true，则调用此替换还将开始生成。 |
| `cmake.buildTargetName`           | 当前选定的构建目标。                                                                                  |
| `cmake.buildType`                 | 与`${buildType}`相同。当前 CMake 的生成类型。                                                         |
| `cmake.buildKit`                  | 与`${buildKit}`相同。当前 CMake kit 名称。                                                            |
| `cmake.buildDirectory`            | CMake 缓存文件所在目录的完整路径。                                                                    |
| `cmake.tasksBuildCommand`         | 基于当前选择的 Kit + Variant + Target 构建您的项目的 CMake 命令。适用于在 `tasks.json` 中使用。       |
| `cmake.activeFolderName`          | 活动文件夹的名称（例如，在多根工作区中）                                                              |
| `cmake.activeFolderPath`          | 活动文件夹的绝对路径（例如，在多根工作区中）                                                          |
| `cmake.activeConfigurePresetName` | 当前设置的配置预设名称。                                                                              |
| `cmake.activeBuildPresetName`     | 当前设置的构建预设名称。                                                                              |
| `cmake.activeTestPresetName`      | 当前设置的测试预设名称。                                                                              |

## 下一步

- 了解[用户与工作区设置](https://code.visualstudio.com/docs/getstarted/settings)
- [在 Linux 上快速安装 CMake Tools](https://ms-vscode.github.io/vscode-cmake-tools/getting_started/linux/)
- 回顾[CMake Tools如何建立](build.md#how-cmake-tools-builds)
- 探索[CMake 工具文档](README.md)