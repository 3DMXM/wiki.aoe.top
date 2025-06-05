# 将模型导入Blender
关于将`.psk`和`.gltf`文件导入Blender 3和4的快速指南。


> [!TIP]  
>  对于骨骼网格和动画，`.psk`格式由于在虚幻引擎中的原生支持而被优先选择，但在Blender中需要插件。

我们需要Blender和一个Blender PSK插件才能导入从FModel/UModel导出的`.psk`文件。<br>
Blender是免费的，可以从[Blender官网](https://www.blender.org/)或[Steam页面(Blender)](https://store.steampowered.com/app/365670/Blender/)下载。

## Blender 4
Blender 4的插件链接：[io_scene_psk_psa](https://github.com/DarklightGames/io_scene_psk_psa)。<br>
_(下载正确的版本，并按照该仓库readme中的说明进行操作)_

安装完成后，导航到文件 -> 导入 -> 选择PSK或GLTF并提供文件。

![](/Media/ImportModels/blender4.png)

> [!IMPORTANT]  
> 对于PSK文件 - **始终**不缩放导入！(向下滚动查看更多信息)

## Blender 3
Blender 3的插件链接：[blender3d_import_psk_psa](https://github.com/Befzz/blender3d_import_psk_psa)。<br>
_(下载正确的版本，并按照该仓库readme中的说明进行操作)_

安装完成后，导航到文件 -> 导入 -> 选择PSK或GLTF并提供文件。

![](/Media/ImportModels/blender3.png)

> [!IMPORTANT]  
> 对于PSK文件 - **始终**不缩放导入！

<hr>

## 不缩放导入
处理骨骼网格时，重要的是不缩放导入，并在导出时缩小到`0.01`。<br>
为什么？因为在导入UE4/5时会破坏一些骨骼骨架。

![](/Media/ImportModels/ImportUnscaled.png)

这用于骨骼网格（角色）模组制作，在[更改骨骼网格](/IntermediateModding/ChangingSK.md)指南中有所介绍。<br>
所以如果你只是为了非模组制作目的导入，你可以按任何方式导入。