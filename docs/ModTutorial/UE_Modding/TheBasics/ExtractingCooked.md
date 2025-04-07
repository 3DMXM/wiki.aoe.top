# 提取已烘焙的资源
> [!IMPORTANT]
> 本指南仅适用于当`Content/Paks`文件夹内没有`.ucas`或`.utoc`文件的情况。该文件夹内可能有`.pak`、`.sig`或其他文件或文件夹。

## repak

在本指南中，我们将使用[repak](https://github.com/trumank/repak)。这个工具被广泛使用，因为它：
1. 非常易于下载和使用
2. 对所有UE4和UE5版本都有很好的支持
3. 得到积极维护
4. 比其他替代方案更快
5. 跨平台
6. 内置了一些有用的实用程序（但我们将使用其最基本的功能）
7. 防止恶意pak文件尝试写入父目录

### 安装

要安装repak，只需前往[发布页面](https://github.com/trumank/repak/releases)并下载最新版本。对于Windows用户，你可以下载`repak_cli-x86_64-pc-windows-msvc.msi`，它会自动安装到你的PATH中，这使你可以在系统的任何地方调用`repak`工具。

如果你选择安装程序（`.msi`）并双击它来安装repak，Windows可能会：
1. 询问你是否要运行它。点击是
2. 显示一个Defender弹窗，说你不应该运行此文件。点击"更多信息"然后"仍要运行"。出现此弹窗是因为repak安装程序未签名，签名每年花费超过100美元

如果你不放心在计算机上运行安装程序，你可以简单地下载repak的`.zip`版本，然后在下面的使用命令中，可以引用repak.exe所在的位置（使用绝对/相对路径或手动将其添加到你的`PATH`中）。

### 使用方法

> [!WARNING]
> 不要通过点击来运行`repak.exe`，它不是设计为这样使用的。这样做你会看到一个窗口弹出然后消失。这是一个设计为从命令行运行的工具。

导航到游戏pak文件的目录。这通常位于`游戏安装路径/游戏名称/游戏项目名称/Content/Paks/`。然后打开命令提示符。你可以通过在文件资源管理器中右键点击任何位置并点击"在终端/命令提示符中打开"，或者点击文件路径栏（显示`游戏 > Content > Paks`的地方），输入`cmd`并按回车键来轻松做到这一点。

在你的cmd窗口中，输入`repak -h`。这应该会列出repak的帮助菜单。

> [!CAUTION]
> 如果你收到类似"找不到repak命令"的错误，说明你没有正确安装repak。如果你在安装repak之前打开了cmd，你必须关闭并重新打开cmd。

要查看解包命令选项，只需运行`repak unpack -h`。

解包很简单，只需按照帮助菜单操作。

> [!WARNING]
> 如果你的游戏有AES密钥（即加密的），你可以在[添加AES](AesKey.md)指南中找到它，然后在解包命令中使用`--aes-key`选项。

#### 解包命令示例：

`repak unpack MyGameName-WindowsNoEditor.pak`

`repak unpack MyGameName-WindowsNoEditor.pak --output "F:/Modding/Game/Unpacked"`

`repak --aes-key 0x12345678 unpack MyEncryptedGame.pak`

#### Pak分块

如果游戏使用pak分块（许多较小的`.pak`文件而不是一个大文件），Windows用户需要做更多一点的工作。

如果你使用Linux，你可以简单地使用`*.pak`通配符。

如果你使用Windows，要一次解包所有文件，请执行以下操作：
1. 打开PowerShell（通过类似上面的方式，例如在文件路径框中输入`pwsh`）
2. 使用你的普通命令，但不要指定特定的`.pak`文件，而是输入`repak unpack (gci *.pak)`

> [!TIP]
> 如果你想将所有文件输出到同一个文件夹，请使用`--output`指定输出文件夹。或者，如果你希望每个pak文件都有自己的解包文件夹，请不要指定`--output`选项。

例如：

`repak --aes-key 0x12345678 unpack (gci *.pak) --output "F:/Modding/Game/Unpacked"`