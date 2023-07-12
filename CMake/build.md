# 使用 CMake 工具包进行构建

一旦您已经 [配置](configure.md) 好了项目，就可以运行 CMake 构建。您在 CMake 工具包中大部分时间都会花费在配置构建上。构建过程要简单得多。

您可以通过以下方式启动构建：

1. 从 VS Code 命令板运行 **CMake: Build**。
2. 按下键盘快捷键（默认为 `F7`）。
3. 在 VS Code 状态栏中选择 **Build** 按钮。

当构建开始时，CMake 工具包输出面板会打开以显示构建工具的输出。**Build** 按钮将变成一个 **Stop** 按钮，并可能显示一个正在运行构建的进度条。按下 **Stop** 按钮会取消运行中的构建。在另一个构建正在运行时开始构建将取消当前构建并启动一个新的构建。

> **注意：** 进度条只有在构建工具发出可以解析为构建进度百分比的输出行时才会显示。这包括 Ninja 和 Makefile 生成器。MSBuild 没有发出此信息，因此不会显示进度条。

构建的结果将写入由 [cmake.buildDirectory](cmake-settings.md#cmake-settings) 指定的目录中。这默认为项目目录的子目录，因此构建结果在项目资源管理器中可见。确切的文件路径将取决于您的 CMake 项目配置。

## 构建默认目标

CMake 工具包为构建过程保留了一个“默认目标”。默认目标是“所有”目标（在一些生成器中命名为 `ALL_BUILD`），它构建了 CMake 为默认构建指定的所有目标。

默认目标的名称显示在状态栏的 **Build** 按钮右侧的方括号中：

![状态栏中显示的默认目标](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/default_target.png)

选择此按钮会显示 CMake Tools 支持的所有可构建目标的快速选择列表，以及将由目标生成的构建结果的完整路径：

![目标列表](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/target_selector.png)

## 构建单个目标

您可以从 VS Code 的命令板中构建单个目标，而无需更改当前构建目标。方法是运行 **CMake: Build a target** 命令，或按下键盘快捷键（默认为 `Shift+F7`）。CMake 将构建所有相关目标，即使它们没有被直接选中。

## 创建一个构建任务
您还可以通过在 VS Code 命令板中运行“**Tasks: Configure task**”命令来定义一个构建任务。

![配置一个构建任务](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/configure_task.png)

通过选择“CMake: build”任务，以下任务将在 `${workspaceFolder}/.vscode/tasks.json` 文件中创建。

```
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "cmake",
            "label": "CMake: build",
            "command": "build",
            "targets": [
                "ALL_BUILD"
            ],
            "group": "build",
            "problemMatcher": [],
            "detail": "CMake template build task"
        }
    ]
}
```

默认目标设置为所有目标（在一些生成器中命名为 ALL_BUILD）。您可以使用单个目标或目标列表修改“targets”值。以下是两个自定义构建任务的示例，其中修改了任务的名称、目标列表和任务的说明：

```
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "cmake",
            "label": "Sample CMake build task with single target",
            "command": "build",
            "targets": [
                "prj1"
            ],
            "group": "build",
            "problemMatcher": [],
            "detail": "Build task to build prj1"
        },
        {
            "type": "cmake",
            "label": "Sample CMake build task with multiple targets",
            "command": "build",
            "targets": [
                "prj1",
                "prj2"
            ],
            "group": "build",
            "problemMatcher": [],
            "detail": "Build task to build prj1 and prj2"
        }
    ]
}
```

现在，您可以通过运行 **Tasks: Run Build Task** 来运行构建。如果在“tasks.json”中定义了其他任务，选择器将向您显示可供选择的构建任务的列表。

![选择构建任务](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/select_task.png)

## CMake 工具包如何进行构建

### 构建标志

CMake 工具包通过将 `--build` 标志传递给 CMake 进行构建。该标志用作与生成器无关的构建调用工具。CMake 工具包还会传递 `--config <build-type>`，基于活动[变体](variants.md)中的当前构建类型。这指示多配置构建工具应构建哪个配置。

对于高级场景，可以使用 [cmake.buildArgs](cmake-settings.md#cmake-settings) 设置附加 `--build` 标志，并且可以使用 [cmake.buildToolArgs](cmake-settings.md#cmake-settings) 设置底层构建工具的额外标志。

### 构建环境

环境变量从调用 Visual Studio Code 进程继承，同时也包含从 [cmake.buildEnvironment](cmake-settings.md#cmake-settings) 和 [cmake.environment](cmake-settings.md#cmake-settings) 设置获取的其他变量。

如果您正在使用[Visual Studio Kit](kits.md#visual-Studio)，则 CMake 工具包会使用适当的环境变量集以使用所选版本的 Visual Studio 进行构建，就像它在[ CMakeTools 配置步骤](configure.md#the-cmake-tools-configure-step)期间设置这些环境变量一样。

## 清理构建

要清理构建，请从 VS Code 的命令板运行 **CMake: Clean** 命令。或者运行 **CMake: Clean rebuild** 命令以快速删除任何构建结果并从头开始运行构建。

## 下一步

- 使用 CMake 工具包进行[启动和调试](debug-launch.md)。
- 了解[可以设置的 CMake 设置](cmake-settings.md#cmake-settings)以控制构建。
- 探索[CMake 工具包文档](README.md)。