# 提取IoStore烘焙资产
> [!IMPORTANT]
> 本指南仅适用于`Content/Paks`文件夹内存在`.ucas`、`.utoc`和`.pak`文件的情况。

> [!CAUTION]
> [FModel](UsingFModel.md)可以打开`IoStore`容器/pak文件，甚至可以导出它们。但是，这些资产的格式与[UAssetGUI](../BasicModding/UAssetGUI.md)不兼容，只能通过手动[十六进制编辑](../BasicModding/HexEditing.md)进行修改。

## ZenTools

ZenTools是一个从`IoStore`容器文件（即`.ucas`、`.utoc`和`.pak`）中提取传统烘焙资产（`.uasset`/`.uexp`）的工具。因为有些工具只支持传统烘焙资产格式，比如[UAssetGUI](../BasicModding/UAssetGUI.md)，所以你需要先获取正确格式的资产。

你需要根据游戏的UE版本获取两个不同版本的ZenTools：
- [UE5版ZenTools](https://github.com/LongerWarrior/ZenTools/tree/5.1-5.2)（如果你的游戏是UE5）
- [UE4版ZenTools](https://github.com/WistfulHopes/ZenTools-UE4)（显然是在你的游戏是UE4的情况下）

### UE5版ZenTools

前往[发布页面](https://github.com/LongerWarrior/ZenTools/releases)并下载最新版本。这可以只是`ZenTools.exe`文件，但你可能还想同时下载`.pdb`文件，以防出现错误并想要发布工具输出（这对维护者很有用）。

> [!WARNING]
> 不要通过点击`ZenTools.exe`来运行它，它不是以这种方式使用的。你会看到一个窗口弹出然后消失。这是一个需要从命令行运行的工具。

导航到你选择的模组制作目录。然后打开命令提示符。你可以通过在文件资源管理器中的任何位置右键单击并点击"在终端/命令提示符中打开"，或者点击文件路径栏（`文件夹 > 文件夹 > 文件夹`），输入`cmd`并按回车键来轻松实现这一点。

只需按照GitHub上项目README中的[使用指南](https://github.com/LongerWarrior/ZenTools/tree/5.1-5.2?tab=readme-ov-file#usage)，将你的命令输入到cmd中。

> [!IMPORTANT]
> 如果你的游戏是UE5.1，确保在命令中包含`-ZenPackageVersion=Initial`选项。
> 如果你的游戏有AES密钥（即加密），你可以在[添加AES](AesKey.md)指南中找到它，然后在命令中使用`-AES=`选项。

> [!CAUTION]
> 当指定包含任何空格的文件路径时，确保使用引号`""`。

> [!TIP]
> 如果提取需要很长时间，请尝试使用包过滤器来过滤特定文件夹，例如`/Game/Content/Blueprints`。你可以通过在FModel中打开pak文件来找到项目文件夹。

#### 示例命令

如果你的游戏是UE5.1：

`ZenTools.exe ExtractPackages "UE5.1游戏路径/Content/Paks" "输出目录" -ZenPackageVersion=Initial`

如果你的游戏是UE5.1并且有加密：

`ZenTools.exe ExtractPackages "UE5.1游戏路径/Content/Paks" "输出目录" -ZenPackageVersion=Initial -AES=0x12345678`

如果你的游戏是UE5.2并且有加密：

`ZenTools.exe ExtractPackages "UE5.2游戏路径/Content/Paks" "输出目录" -AES=0x12345678`

如果你的游戏非常大（例如100GB+），你只想提取特定资产路径，比如武器蓝图文件夹：

`ZenTools.exe ExtractPackages "游戏路径/Content/Paks" "输出目录" -PackageFilter=/Game/Content/Blueprints/Weapons`

#### 重新打包UE5 IoStore文件

按照[这个指南](../BasicModding/IoStorePacking.md#scenario-1-packing-cooked-assets)操作。

### UE4版ZenTools

安装UE4版ZenTools的方式与UE5版相同 - [下载链接](https://github.com/WistfulHopes/ZenTools-UE4/releases)。

如果你的游戏已加密，请注意没有`-Aes=`或类似选项，你必须提供一个`keys.json`文件。这只是一个简单的文件，内容如下：
```json
{
    "00000000-0000-0000-0000-000000000000": "DEADBEEFCAFEDEADBEEFCAFEDEADBEEFCAFEDEADBEEFCAFEDEADBEEFCAFEDEAD"
}
```

> [!CAUTION]
> keys.json不支持AES密钥开头的`0x`，所以确保在文件中删除它。

> [!CAUTION]
> 当指定包含任何空格的文件路径时，确保使用引号`""`。

> [!TIP]
> 如果提取需要很长时间，请尝试使用包过滤器来过滤特定文件夹，例如`/Game/Content/Blueprints`。你可以通过在FModel中打开pak文件来找到项目文件夹。

#### 示例命令

如果游戏有加密：

`ZenTools.exe ExtractPackages "UE4游戏路径/Content/Paks" "输出目录" -EncryptionKeys="keys.json路径"`

如果游戏没有加密：

`ZenTools.exe ExtractPackages "UE4游戏路径/Content/Paks" "输出目录"`

如果你的游戏非常大（例如100GB+），你只想提取特定资产路径，比如敌人蓝图文件夹：

`ZenTools.exe ExtractPackages "游戏路径/Content/Paks" "输出目录" -PackageFilter=/Game/Content/Blueprints/Enemies`

#### 重新打包UE4 IoStore文件

按照[这个指南](../BasicModding/IoStorePacking.md#scenario-1-packing-cooked-assets)操作。