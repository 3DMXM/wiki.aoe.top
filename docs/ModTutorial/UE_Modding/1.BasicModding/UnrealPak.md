# 创建Pak文件
> [!IMPORTANT]
> 本指南仅适用于当`Content/Paks`文件夹内没有`.ucas`或`.utoc`文件的情况。该文件夹内可能有`.pak`、`.sig`或其他文件或文件夹。

为确保游戏能够加载您的mod，它需要被打包成`.pak`文件。

## 打包方法

有两种方法可以将您的mod文件打包成`.pak`文件：
1. UnrealPak - UE内置的命令行工具
2. repak - 第三方命令行工具

UnrealPak和repak都可以与任何版本的UE一起使用。repak通常速度更快，并具有更高级的功能，如可配置的挂载点和pak版本，但大多数用户并不需要这些功能，总体上使用起来比下面的UnrealPak脚本稍微复杂一些。如果其中一个工具不适合您，至少可以尝试另一个。

UnrealPak存在于每个UE安装中，但可以提取为独立程序。<br>
您可以从这里下载独立版本：[FluffyQuack提供的UnrealPak](https://github.com/Dmgvol/UE_Modding/raw/main/Tools/UnrealPak.zip)，它还附带了一些批处理脚本，使您更容易调用该程序。

*您也可以安装[repak_wrappers](https://github.com/Mythical-Github/repak_wrappers/archive/refs/heads/main.zip)，它提供了与UnrealPak相同的用户体验。如果您下载了这个，可以按照"使用UnrealPak"部分的指南进行操作。*

**如果使用UnrealPak：**

创建一个文件夹，用于存放脚本、原始mod文件夹和输出的pak文件，类似于这样：

![](/Media/UnrealPak/unrealpak1.png)

_(解压提供的UnrealPak压缩包)_

**如果使用repak：**

请按照[使用repak提取已烹饪内容](../TheBasics/ExtractingCooked.md#installation)指南中的安装和使用说明进行操作。

## Mod文件夹
对于每个mod，无论使用何种打包工具，都需要一个具有确切文件夹结构的mod文件夹。

```
Modname_P\GameName\Content\...
```

__结构__<br>
- 将modname替换为您的实际mod名称。
- 确保文件夹名以`_P`结尾（重要）。
- 将GameName替换为您游戏的二进制名称。

根据mod和它覆盖的文件，它将具有与原始游戏文件夹层次结构相同的文件夹层次结构，这在FModel和UModel中可见。

__示例__<br>
一个替换Ghostrunner中纹理的mod文件夹；<br>
```
\NewTex_P\Ghostrunner\Content\Visual\Characters\Hero_Swords\Mat\Tex
```

一个替换Trepang2中武器模型的mod文件夹；<br> 
```
\newPistol_P\CPPFPS\Content\Weapon\Pistol
```

## 文件夹内容
创建文件夹结构后，复制**需要被覆盖或添加**的必要文件。<br>
如果您在UE编辑器中编译了项目内容 - 复制您想要包含在mod中的文件。

为了修改/覆盖游戏文件，您必须使用与原始文件路径/文件相匹配的相同文件夹结构和相同的文件名。

__例如__<br>
在纹理mod的示例中，使用了以下文件夹结构：<br>
```
\modname_P\Ghostrunner\Content\Visual\Characters\Hero_Swords\Mat\Tex\
```

该文件夹的内容是：

![](/Media/UnrealPak/unrealpak2.png)

<hr>

## 使用工具
**如果使用UnrealPak：**

很简单，只需将mod文件夹拖到`UnrealPak-With-compression.bat`上开始打包mod文件夹。<br>
不久之后，将创建一个同名的pak文件。

![](/Media/UnrealPak/unrealpak3.png)

**如果使用repak：**

只需在包含mod文件夹的目录中运行命令`repak pack <要打包的mod目录>`。

如果您希望查看它正在打包的文件路径，请使用`-v`选项。

如果您希望使用压缩，添加`--compression <方法>`选项。您可以通过`repak pack -h`查看支持的压缩格式。推荐使用`gzip`、`zlib`和`zstd`格式。如果游戏无法加载pak文件，可以尝试不使用压缩打包。

例如：`repak pack -v --compression Gzip Modname_P`

## 将mod添加到游戏中
1. 导航到游戏的Paks文件夹。

通常它遵循以下模式：

```
...\GameName\GameName\Content\Paks
```

例如，Ghostrunner游戏：<br>
```
...\Ghostrunner\Ghostrunner\Content\Paks
```

2. 将生成的pak文件复制到游戏的Paks文件夹中。
3. 重命名pak文件以适合您的mod用途。
4. 确保名称以`_P`结尾**（重要）**。<br>
例如：`myMod_P.pak`

