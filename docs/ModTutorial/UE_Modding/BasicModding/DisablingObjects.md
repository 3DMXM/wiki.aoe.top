# 禁用/移除对象
这是我学到的一个简单技巧，我认为对一些模组制作者可能会很有用。<br>
如果你想移除诸如纹理甚至蓝图等对象，你可以直接清空uasset内容，然后将空文件打包回pak文件。

这种方法适用于模型、VFX、纹理、声音，甚至蓝图。

## 定位游戏文件
在这个例子中，我将移除《幽灵行者》(Ghostrunner)中的一个敌人，蜘蛛。

首先，我将使用FModel定位角色蓝图。
<br>
在这个例子中是 `/Content/ArtificialIntelligence/Characters/BP_EnemySpider`。

![](/Media/RemovingObjects/spider1.png)

## 创建模组文件夹
创建一个与FModel中发现的文件夹结构相同的模组文件夹。

每个模组文件夹都遵循以下模式：<br>
`ModName_P/<Game>/Content/...`<br>
对于这个例子，将是：
`NoSpiders_P/Ghostrunner/Content/...` 后接完整路径。

即：<br>
`/NoSpiders_P/Ghostrunner/Content/ArtificialIntelligence/Characters`


![](/Media/RemovingObjects/spider3.png)

## 制作空的UAsset文件
1. 创建2个文本文件，并将它们重命名为与我们要移除的对象/资产匹配的名称。
2. 将扩展名从`.txt`更改为`.uasset`和`.uexp`。

![](/Media/RemovingObjects/spider4.png)

## 打包和测试
使用UnrealPak打包模组文件夹（教程：[如何打包](./UnrealPak.md)）。


这个模组可以在这里下载：[No More Spiders for GR1](https://www.nexusmods.com/ghostrunner/mods/28)