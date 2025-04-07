# 示例 1 - 修改默认蓝图值
作为示例，我们将修改一个名为Trepang2游戏中SMG武器的每个弹匣/弹夹的最大弹药量。

_(UE5模组制作者注意 - 如果游戏启用了IOStore，则无法实现)_

### 查找资源
首先要做的是找到包含该信息的正确蓝图，在这个例子中是`BP_SMG`。

![](/Media/Example-1/example_trepang_modifying1.png)

### 修改资源
导出资源，使用UAssetGUI打开资源，并导航到蓝图的默认值部分。<br>
每个蓝图中的默认值都在`Export n (Default__<BP_Name>_C)`中，对于这个例子是`Export 7 (Default__BP_SMG_C)`。

![](/Media/Example-1/example_trepang_modifying2.png)

如果我们向下滚动一点，就能找到我们要寻找的值`AmmoPerClip`，我会将其设置为`99`。

### 创建Pak文件
保存更改并开始构建mod文件夹结构。

![](/Media/Example-1/example_trepang_modifying3.png)

在这个例子中，文件夹结构为：<br>
```
MoreAmmoSMG_P\CPPFPS\Content\Weapon\SMG
```

其中路径中的最后一个文件夹包含修改后的资源（`.uasset`和`.uexp`文件）。

### 结果
使用UnrealPak打包，将创建的pak文件移动到Paks文件夹中，然后在游戏中测试效果。

![](/Media/Example-1/example_trepang_modifying4.png)