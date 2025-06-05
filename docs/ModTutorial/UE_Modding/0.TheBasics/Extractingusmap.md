# 使用虚幻引擎4/5脚本系统提取`usmap`文件

本指南提供了详细的说明，指导如何安装和配置虚幻引擎脚本系统(UE4SS/RE-UE4SS)以从游戏中提取`usmap`文件。

## 步骤1：安装虚幻引擎4/5脚本系统

1. **下载UE4SS**：
   - 访问官方仓库：[UE4SS-RE](https://github.com/UE4SS-RE/RE-UE4SS)并下载最新版本。

2. **安装UE4SS**：
   - 将下载的文件解压到bin目录(Binaries\Win64)中，与游戏可执行文件放在一起。

---

## 步骤2：修改配置文件

安装UE4SS后，调整其配置文件以启用提取`usmap`所需的功能并设置UE版本。

1. **找到配置文件**：
   - 查找配置文件，通常命名为`UE4SS-settings.ini`。

2. **编辑配置文件**：
   - 用文本编辑器(如Notepad++或VSCode)打开`UE4SS-settings.ini`文件，在EngineVersionOverride部分应用引擎版本：

     ![](/Media/UHT/1.png)

   - 在Debug部分确保启用`ConsoleEnabled`、`GuiConsoleEnabled`和`GuiConsoleVisible`：
  
     ![](/Media/UHT/2.png)

---

## 步骤3：提取`usmap`文件

1. **启动游戏**：
   - 验证GUI控制台是否出现(如果在`UE4SS-settings.ini`中配置正确，它应该可见)。
   
     ![](/Media/Extractmappings/1.png)

2. **输出映射文件**：
   - 使用UE4SS调试工具的Dumper选项卡输出.usmap文件。
   - 文件将输出到：`Binaries\Win64\Mappings.usmap`
   
     ![](/Media/Extractmappings/2.png)
