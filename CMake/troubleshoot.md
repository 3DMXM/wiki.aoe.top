# CMake工具故障排除

## 常见问题及解决方法

### 错误: CMake Tools无法提供IntelliSense配置

如果看到CMake Tools无法提供IntelliSense配置的消息，或者在编辑器中看到#include指令未能解析（即#include指令下有绿色下划线），这表示相关的源文件未连接到CMake目标。

如果接收到此消息的文件不在您的项目之内，则可以忽略它。

如果您在项目中的文件中接收到此消息，则可能需要将源文件添加到一个目标中。

这个问题最常见于项目的头文件。头文件应该包含在目标的源列表中。尽管CMake不会以任何特殊的方式编译或处理这些头文件，但CMake Tools使用此信息以提供更好的用户体验。

### #include指令下有绿色虚线

参见上文。

### 调试忽略了launch.json文件

如果Debug按钮和Debug目标功能忽略了您的launch.json文件，请参阅[使用launch.json文件进行调试](debug-launch.md#debug-using-a-launchjson-file)。

> **重要提示：** 目标调试功能仅限于在`ms-vscode.cpptools`调试引擎中使用默认配置启动目标可执行文件。

### 重置CMake Tools扩展状态

CMake Tools持久化了工作区设置，例如活动目标和变体。如果该状态损坏或不一致，请打开VS Code命令面板并通过运行“CMake: Reset CMake Tools extension state”命令进行重置。

重置状态将自动重新载入当前的工作区。

### 增加日志记录级别

CMake Tools提供了可选的日志记录，默认情况下未启用。使用[cmake.loggingLevel](cmake-settings.md)设置来增加写入_CMake/Build_输出通道的输出量。

### 检查日志文件

不管用户可见的日志级别如何，CMake Tools都会将所有日志条目，包括所有级别，写入用户本地日志文件。打开VS Code命令面板并运行*“CMake: Open the CMake Tools log file”*命令以查看此日志文件。

该文件是用户本地的，而非工作区本地的。该文件包含自扩展程序安装以来的所有日志条目，可能非常大。

## 获取帮助

在提交问题或软件bug报告之前，请先检查[CMake Tools问题跟踪器](https://github.com/vector-of-bool/vscode-cmake-tools/issues)和[What's New](https://github.com/microsoft/vscode-cmake-tools/blob/main/CHANGELOG.md)，看看是否已经解决了您的问题。如果问题没有被报告，请随时提交问题。

请访问[支持聊天室](https://gitter.im/vscode-cmake-tools/support)。这是一个社区聊天室。微软不会监控它。