# 将UE打包纹理导入Blender
本指南将介绍UE网格体传统使用的纹理，包括每个网格体的基础颜色、ORM、法线和自发光纹理。<br>
虚幻引擎模型中使用的行业标准纹理包括3种类型：基础颜色（又称反照率），ORM和法线贴图。

"ORM"纹理将遮蔽（Occlusion）、粗糙度（Roughness）和金属度（Metallic）合并到单个纹理中，分别使用红、绿、蓝通道以提高效率。<br>
有些模型还有自发光纹理（网格体的发光部分），但这很容易处理。

> [!NOTE]  
> 不同游戏可能为每个模型使用不同的纹理集，因此本指南不会涵盖所有这些内容，只介绍UE4/5中纹理的主要通用方法。

## Blender
让我们从将所有必要的纹理拖入着色节点图开始。

> [!NOTE]  
> 本指南使用Blender 3，因为过程相同，但Blender 4的差异在指南底部显示。

### 准备纹理

- 导入网格体。
- 进入着色标签并点击`使用节点`。
- 拖放该网格体的纹理，通常是颜色纹理、ORM纹理、法线纹理，有时还有自发光纹理。
- 对于ORM和法线纹理：将`颜色空间`设置为`Non-Color`。

![](/Media/ImportTexturesBlender/blenderTextures1.png)

### 连接基础颜色、粗糙度、金属度和法线

按下图所示连接节点：
- 基础颜色：将基础颜色纹理的Color连接到BSDF的Base Color。
- 打包/ORM纹理：拖动Color并查找`Seperate Color`节点。
- - 将纹理的颜色连接到Separate Color节点的color。
- - 将Green连接到Roughness，Blue连接到Metallic。
- - 我们将在下一步处理Red通道，暂时保留。
- 法线贴图：拖动color并查找`Normal Map Color`节点，将输出的Normal连接到BSDF的Normal。

![](/Media/ImportTexturesBlender/blenderTextures2.png)

### 添加环境光遮蔽通道
通过将基础颜色乘以ORM纹理的红色通道来添加环境光遮蔽。

- 从基础颜色拖动并查找`Multiply Vector Math`。
- 将Seperate Color节点的Red连接到Multiply节点的第二个Vector。
- 将输出Vector连接到Base Color。

![](/Media/ImportTexturesBlender/blenderTextures3.png)

### 添加自发光纹理（可选）
如果您的模型有自发光纹理，可以通过使用"Add Shader"节点添加，如下图所示。

> [!NOTE]  
> Blender 4用户 - 请跳过此部分，滚动到指南底部，因为这部分有所不同。

- 拖动BSDF并搜索`Add Shader`节点。
- 将输出Shader连接到Material Output的Surface。
- 将自发光纹理的Color拖入第二个Shader输入。

![](/Media/ImportTexturesBlender/blenderTextures4.png)

一些游戏的自发光纹理是白色的，并在游戏中使用适当的颜色代码进行调整，这可以在Blender中通过调整纹理颜色来实现，如下所示。

- 拖动自发光Color并搜索`Color fac`，按图示连接。
- 将模式切换为`Color`。
- 将Fac设置为`1.000`。
- 将Color2调整为您选择的颜色。
- 然后将输出Color连接到Add Shader中的第二个Shader。

![](/Media/ImportTexturesBlender/blenderTextures5.png)

## Blender 4的差异
Blender 4中的过程类似，除了自发光直接连接到BSDF的Emission输入，如下图所示。

![](/Media/ImportTexturesBlender/blender4Textures.png)