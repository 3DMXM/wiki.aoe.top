# 如何操作

本页提供了一些常见任务的文档链接。

## 创建新项目

* 在没有 `CMakeLists.txt` 文件的目录中，从 VS Code 的命令面板中运行 **CMake：快速开始** 命令。
* 参考[CMake 工具在 Linux 上的教程](https://code.visualstudio.com/docs/cpp/cmake-linux#_create-a-cmake-hello-world-project)

## 配置项目

* 在 VS Code 的命令面板中运行 **CMake：配置** 命令。
* 参考[CMake 工具在 Linux 上的教程中的 “配置 Hello World” 部分](https://code.visualstudio.com/docs/cpp/cmake-linux#_configure-hello-world)或更详细的[CMake Tools 配置步骤文档](configure.md#the-cmake-tools-configure-step)。

## 构建项目

* 在 VS Code 的命令面板中运行 **CMake：构建** 命令，按下键盘快捷键 **F7**，或在状态栏中选择 **构建** 按钮。
* 参考[CMake 工具在 Linux 上的教程中的 “Build hello world” 部分](https://code.visualstudio.com/docs/cpp/cmake-linux#_build-hello-world)，或更详细的[CMake Tools 构建文档](build.md)。

## 调试项目

* 在 VS Code 的命令面板中运行 **CMake: Debug Target** 命令，按下键盘快捷键 **Ctrl+F5**，或在状态栏中按下 **调试** 按钮。
* 请参考[CMake:Target debugging and launching](debug-launch.md)页面获取更多信息。

## 将命令行参数传递给调试器

请参考[使用 launch.json 文件进行调试](debug-launch.md#debug-using-a-launchjson-file)。

## 为 C++ IntelliSense 设置包含路径

CMake Tools 目前支持微软的 ms-vscode.cpptools 扩展。如果已安装并启用了 ms-vscode.cpptools 扩展，则配置项目将自动提供此集成。

ms-vscode.cpptools 将显示一个提示，确认您希望使用 CMake Tools 提供有关您的项目的配置信息。接受此提示以激活集成。随后，CMake Tools 将为您项目中的每个源文件提供并自动更新 cpptools 配置信息。

## 下一步操作

- 探索 [CMake Tools 文档](README.md)