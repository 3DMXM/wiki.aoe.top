# CMake: 调试和启动

CMake Tools 工具包使得设置调试更加容易。由于 C 和 C++ 项目可能会定义多个（有时是数十甚至数百个）可执行文件，因此创建 `launch.json` 可能会很困难。

如果通过 CMake 定义了任何可执行目标，则 CMake Tools 将会意识到它们并允许你启动调试。

> **注意：**
> 当 CMake 使用 _CMake Server_ 或 cmake-file-api 时支持调试功能。这些模式会在 CMake 版本 3.7.2 及以上自动启用。老版本不支持调试。

如果你正在运行旧版本的 CMake 并希望使用目标调试，请将 CMake 版本更新到 3.7.2 或更高版本。

默认情况下，启动或调试可执行目标会先构建它。可以使用 [cmake.buildBeforeRun](cmake-settings.md#cmake-settings) 设置来禁用该行为。

## 选择一个启动目标

第一次运行目标调试时，CMake Tools 会要求你指定一个目标，并在会话之间保留该目标。

活动的启动目标显示在 *Debug* 按钮右侧的状态栏中：

![启动目标图像在调试按钮右侧](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/launch_target.png)

选择活动的启动目标按钮会显示启动目标选择器，以便可以更改活动的启动目标。

## 快速调试

快速调试让你在不创建 `launch.json` 的情况下启动目标上的调试器。

> **注意：**
> 仅 Microsoft 的 `vscode-ms-vscode.cpptools` 扩展程序中的调试器支持快速调试。有关 `launch.json` 和使用其他调试器的信息，请参见下面的 [使用 launch.json 文件进行调试](#debug-using-a-launchjson-file)。

从 VS Code 命令面板运行 *CMake: Debug Target* 命令，或按键盘快捷键（默认为 **Ctrl+F5**），来开始快速调试。

> **注意：**
> 快速调试不能让你指定程序参数或其他调试选项。请参阅下一节以获取更多选项。

## 使用 launch.json 文件进行调试

你可以在 `launch.json` 文件中指定调试的工作目录或命令行参数，或使用与包含在 Microsoft 的 `vscode-ms-vscode.cpptools` 中的调试器不同的调试器。

你需要知道可执行二进制文件的路径，这可能事先很难知道。CMake 工具包可以通过在 `launch.json` 文件的适当字段中使用 [命令替换](https://github.com/microsoft/vscode-cmake-tools/blob/main/docs/cmake-settings.md#command-substitution) 来提供帮助。当连接到运行中的过程时，这已经被用于诸如过程选择之类的东西。它通过在 `launch.json` 的适当字段中指定基于命令的替换来工作。

下面是使用 `cmake.launchTargetPath` 和 `cmake.getLaunchTargetDirectory` 启动活动启动目标的 `launch.json` 文件的最小示例：

### gdb

```jsonc
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "(gdb) Launch",
            "type": "cppdbg",
            "request": "launch",
            // Resolved by CMake Tools:
            "program": "${command:cmake.launchTargetPath}",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [
                {
                    // add the directory where our target was built to the PATHs
                    // it gets resolved by CMake Tools:
                    "name": "PATH",
                    "value": "${env:PATH}:${command:cmake.getLaunchTargetDirectory}"
                },
                {
                    "name": "OTHER_VALUE",
                    "value": "Something something"
                }
            ],
            "console": "externalTerminal",
            "MIMode": "gdb",
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                }
            ]
        }
    ]
}
```
### msvc
```jsonc
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "(msvc) Launch",
            "type": "cppvsdbg",
            "request": "launch",
            // Resolved by CMake Tools:
            "program": "${command:cmake.launchTargetPath}",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [
                {
                    // add the directory where our target was built to the PATHs
                    // it gets resolved by CMake Tools:
                    "name": "PATH",
                    "value": "${env:PATH}:${command:cmake.getLaunchTargetDirectory}"
                },
                {
                    "name": "OTHER_VALUE",
                    "value": "Something something"
                }
            ],
            "console": "externalTerminal"
        }
    ]
}

```
### ctest
```jsonc
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "(ctest) Launch",
            "type": "cppvsdbg",
            "request": "launch",
            // Resolved by CMake Tools:
            "program": "${command:cmake.launchTargetPath}",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [
                {
                    // add the directory where our target was built to the PATHs
                    // it gets resolved by CMake Tools:
                    "name": "PATH",
                    "value": "${env:PATH}:${command:cmake.getLaunchTargetDirectory}"
                },
                {
                    "name": "OTHER_VALUE",
                    "value": "Something something"
                }
            ],
            "console": "externalTerminal"
        }
    ]
}

```

`program` 属性的值由 CMake 工具包扩展为要运行的程序的绝对路径。

> **注意：**
> 在正确成功地进行 [配置](configure.md) 之前，`cmake.launchTargetPath` 和 `cmake.getLaunchTargetDirectory` 才会正确解析。

## 调试测试

您还可以构建 `launch.json` 配置，以允许您在测量分析器中调试测试。

> **注意：**
> 这些 `launch.json` 配置专门用于从 Test Explorer 的用户界面使用。

最简单的方法是使用 `cmake.testProgram` 作为 `program` 字段，使用 `cmake.testArgs` 作为 `args` 字段构建调试配置。

以下是几个示例：

### gdb
```jsonc
{
    "name": "(ctest) Launch",
    "type": "cppdbg",
    "cwd": "${workspaceFolder}",
    "request": "launch",
    // Resolved by CMake Tools:
    "program": "${cmake.testProgram}",
    "args": [ "${cmake.testArgs}"],
}
```
### msvc
```jsonc
{
    "name": "(ctest) Launch",
    "type": "cppvsdbg",
    "request": "launch",
    // Resolved by CMake Tools:
    "program": "${cmake.testProgram}",
    "args": [ "${cmake.testArgs}"],
}
```

根据您的配置或设置，可能需要设置额外的配置选项。

## 无调试运行

如果您想在没有调试的情况下运行可执行文件，请从 VS Code 的命令面板中运行 *CMake: Execute the current target without a debugger* 命令，或按键盘热键 (默认为 `Shift+F5`)。

目标的输出将显示在一个集成的终端中。

## 下一步

- 查看如何 [排查 CMake Tools](troubleshoot.md)
- 探索 [CMake Tools 文档](README.md)