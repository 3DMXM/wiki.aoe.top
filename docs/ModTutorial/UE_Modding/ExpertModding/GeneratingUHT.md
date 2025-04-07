# 使用UE4SS生成UHT头文件
UHT（虚幻头文件工具）处理C++头文件，为虚幻引擎的反射系统生成必要代码。在进行模组开发时，导出UHT头文件能提供创建蓝图模组所需的基本类和结构定义。

> [!NOTE]  
> 并非所有逻辑都存储在蓝图中，大部分逻辑都在C++代码中，我们可以导出这些头文件。
> 虽然我们无法看到实际的代码实现，但它提供了类、变量、枚举、对象类型、方法、委托等信息。

我们将使用[UE4SS](https://github.com/UE4SS-RE/RE-UE4SS)工具来实现这一点。
额外指南：[UE4SS的UHT头文件导出指南](https://docs.ue4ss.com/dev/feature-overview/dumpers.html#unreal-header-tool-uht-dumper)。

## 使用UE4SS
> [!IMPORTANT]
> 请确保阅读UE4SS的仓库说明，因为不同游戏可能需要不同的配置/设置/构建才能正常工作。

1. 下载UE4SS并将其内容解压到游戏可执行文件所在的文件夹中。<br>
例如：`...\Sprawl\Sprawl\Binaries\Win64`。
2. 打开`UE4SS-settings.ini`文件。
3. 在EngineVersionOverride部分设置游戏的UE版本。

![](/Media/UHT/1.png)

4. 确保将`ConsoleEnabled`、`GuiConsoleEnabled`和`GuiConsoleVisible`都设置为`1`。

![](/Media/UHT/2.png)

5. 保存更改，启动游戏，如果一切设置正确，会弹出一个额外的面板。
6. 点击"Dumpers"标签页，然后点击"Generate UHT Compatible Headers"。

![](/Media/UHT/3.png)

7. 不久后，在放置UE4SS文件的同一文件夹中将创建一个名为`UHTHeaderDump`的新文件夹。

## 浏览导出的头文件
1. 导航到`UHTHeaderDump`文件夹，然后进入`\UHTHeaderDump\<游戏二进制名>\Public`。
2. 该文件夹将包含游戏的所有反射头文件，我们可以在模组开发中使用这些文件。

![](/Media/UHT/4.png)

> [!TIP]  
> 探索主要或体积较大的头文件，它们可以提供在使用FModel查看蓝图时无法看到的额外方法和变量信息。