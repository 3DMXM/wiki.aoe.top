# 修改静态网格体(StaticMeshes)
这个过程与纹理替换类似，但需要额外处理材质和纹理。

我们需要Blender和一个Blender PSK插件，以便能够导入从FModel/UModel导出的`.psk`文件。<br>
Blender是免费的，可以在[Blender官网](https://www.blender.org/)或[Steam页面(Blender)](https://store.steampowered.com/app/365670/Blender/)获取。

插件链接：[io_scene_psk_psa](https://github.com/DarklightGames/io_scene_psk_psa)。<br>
_(下载正确的版本，并按照该仓库readme中的说明进行操作)_

注意：我仍在使用适用于Blender v3的[旧版本](https://github.com/Befzz/blender3d_import_psk_psa)，所以可能看起来有些不同。


### 在FModel中查找模型
在这个例子中，我将用在Sketchfab上找到的[科幻箱子](https://sketchfab.com/3d-models/sci-fi-crate-now-free-8a8f77af0de14630b94d2cda49823a74)模型来替换这个燃料箱模型。<br>

找到模型后，右键点击 -> 保存模型。<br>
这将把模型保存为`.psk`文件。

![](/Media/changingSM/changingSM1.png)

### Blender时间！
使用插件导入`.psk`文件，<u>不要</u>缩小比例。<br>
(在较新的插件和Blender 4中，保持比例为1.0)<br>
(在旧插件中，取消勾选ScaleDown)

![](/Media/changingSM/changingSM2.png)

导入你的自定义模型，并调整其比例以适应原始模型的尺寸。

![](/Media/changingSM/changingSM3.png)

将新网格体移至中心，将其重命名为与原始名称相匹配，并移除旧的/原始网格体。<br>
然后导出为`.fbx`文件，并在导出设置中将比例缩小至`0.01`。

![](/Media/changingSM/changingSM4.png)


### 虚幻引擎
启动UE并创建与游戏内相同的文件夹结构。<br>
然后拖放`.fbx`文件，让它导入相关的纹理。

![](/Media/changingSM/changingSM5.png)

这一步包括导入任何缺失的纹理、创建材质以及对文件进行一些组织整理。

- 导入你需要的任何纹理（因为它并不总是加载所有纹理）。
- 将静态网格体重命名为**与FModel中的原始文件名相匹配**！
- 创建并分配材质（在YouTube上查找如何使用材质的教程）。
- 重命名纹理/材质并进行组织整理（你不必这样做，但这样会更容易维护和使用）。
- - 我建议遵循最佳实践的命名约定。
- - 纹理以`T_`开头，材质以`M_`开头，静态网格体以`SM_`开头。
- - 将所有自定义纹理/材质移至它们自己的文件夹中，对于本例，是`crate`文件夹。

![](/Media/changingSM/changingSM6.png)


### 打包和游戏内结果
一旦材质被创建、分配和命名，就可以打包mod了。<br>

有关如何打包mod的更多信息，请查看[烹饪内容指南](/IntermediateModding/CookingContent.md)。<br>
(别忘了在mod名称中加入`_P`)

![](/Media/changingSM/changingSM7.png)

