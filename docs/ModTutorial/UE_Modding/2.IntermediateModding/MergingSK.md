# 合并骨骼网格体
合并骨骼网格体(SK)是指将特定网格体合并到已存在的骨骼网格体中，而不改变其原始结构或材质。<br>
例如，在角色头顶上添加一顶帽子，同时保持所有内容处于原始状态。

_这个过程类似于骨骼网格体替换，但步骤更少。_

我们需要Blender和Blender PSK插件来导入从FModel/UModel导出的`.psk`文件。<br>
Blender是免费的，可以在[Blender官网](https://www.blender.org/)或[Steam页面(Blender)](https://store.steampowered.com/app/365670/Blender/)上获取。

插件链接：[io_scene_psk_psa](https://github.com/DarklightGames/io_scene_psk_psa)。<br>
_(下载正确的版本，并按照该仓库readme中的说明进行操作)_

<br>
在这个例子中，我将在一个名为AtomicHeart(虚幻4.27)的游戏中，将一个鸭子模型附加到蜘蛛机甲上。

## Blender
使用PSK插件导入模型，不进行缩放。

Blender 4：文件->导入->PSK (缩放比例1)。<br>
Blender 3：使用下拉菜单。<br>
![](/Media/MergingSK/blender1.png)

将根对象重命名为`Armature`（重要！）。

![](/Media/MergingSK/blender2.png)

导入新的网格体，并调整其位置使其适合你的模型，包括缩放和旋转。

### 准备网格体
在合并之前，确保UV贴图名称**完全相同**，否则材质将会出现问题。

1. 选择原始网格体，转到UV贴图，并复制第一个UV贴图的名称，通常是`UV_SINGLE`。
2. 选择新网格体，并转到UV贴图（如下图所示）。
3. 将UV贴图重命名为与原始网格体UV贴图名称相匹配，在这个例子中是`UV_SINGLE`。

![](/Media/MergingSK/uvmap.png)


### 合并

1. 选择新网格体。
2. 选择原始网格体。
3. 按Ctrl+J进行合并

![](/Media/MergingSK/blender3.png)

### 附加到骨骼（权重绘制）
1. 选择网格体。
2. 进入权重绘制模式。
3. 选择一个对新网格体来说逻辑上合理的顶点组（也称为骨骼）。
4. 在选择骨骼的情况下，将新网格体完全涂成红色。

这将使新网格体在动画中跟随骨骼移动，就像附加在上面一样。

**注意：**
如果是帽子，逻辑上合理的骨骼应该是`头部`骨骼；如果是背包，则是`spine_03`骨骼，等等...

在这个例子中，新网格体应该"附加"到骨盆，所以我选择了骨盆骨骼，并将新网格体部分完全涂成红色。

![](/Media/MergingSK/blender4.png)

### 导出
导出前请检查：
- 切换到姿态模式，移动骨骼，看看新合并的网格体是否跟随正确的骨骼。
- 检查纹理是否正常。
- 材质顺序是否正确（首先是原始网格体的材质，然后是你自定义的材质）。

以`0.01`比例导出为`.fbx`格式。

![](/Media/MergingSK/blender5.png)


## 虚幻引擎
1. 创建与游戏文件中骨骼网格体所在位置相同的文件夹结构。
2. 将导出的FBX文件拖放到UE内容浏览器中，并点击全部导入。

![](/Media/MergingSK/ue1.png)

### 复制骨架、物理资产和材质
下一步是命名并将骨架和物理资产放在它们原来的文件夹中。

1. 使用FModel，打开骨骼网格体，查找骨架和物理资产的完整路径。
2. 在虚幻引擎中，创建这些文件夹。
3. 将骨架和物理资产命名为与FModel中显示的相同。
4. 将两者移动到各自对应的文件夹中（如果需要）。

对于网格体的默认材质也是如此。
1. 使用FModel，通过打开骨骼网格体资产并查看使用的材质，仔细检查自动生成的材质命名是否正确。
2. 将它们移动到原始文件夹（如果缺少文件夹则创建）。

![](/Media/MergingSK/ue2.png)

### 准备骨骼网格体
最后一步是确保新合并的网格体看起来符合预期。<br>
导入网格体所需的纹理，并调整材质。

![](/Media/MergingSK/ue2.png)

## 打包和测试
只打包修改后的骨骼网格体以及新网格体部分使用的材质和纹理（不是原始/复制的）。<br>
不要打包骨架、物理资产、阴影物理（如果有）或任何复制的材质。

UE4 -> 使用UnrealPak _(或通过分配块)_。
UE5 -> 分配块 _(除非游戏没有IOStore)_。

有关如何打包模组的更多信息，请查看[烹饪内容指南](/IntermediateModding/CookingContent.md)。<br>
（别忘了在模组名称中加上`_P`）

# 结果 
![](/Media/MergingSK/result.jpg)

该模组在这个视频的10:50处展示。<br>
[Atomic Heart but ruined by mods 4](https://www.youtube.com/watch?v=udicbk3VMrk)