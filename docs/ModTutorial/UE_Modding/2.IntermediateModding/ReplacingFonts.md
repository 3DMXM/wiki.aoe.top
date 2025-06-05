# 替换字体
替换字体非常简单，本指南将介绍两种方法。

1. 直接替换FontFace - 就像替换纹理一样，只需将你的字体文件（`.ttf`或`.otf`）导入到正确的文件夹并相应地命名。
2. 字体虚拟（字体族）- 创建Font资产的替代并为每种类型设置我们自己的字体。

## 方法1 - 直接替换
直接字体替换与纹理替换完全相同，即将修改/新资产导入UE，命名并放置在正确的文件夹中以匹配游戏文件。

### 识别字体和/或FontFace
首先，我们需要找到Font和实际的FontFace。
在这个例子中，发现的Font有多种类型，我们特别关注的是`Default`。

![](/Media/FontReplace/1.png)

### 导入新资产
1. 将字体文件拖入UE项目中的Content Browser（内容浏览器）标签。

![](/Media/FontReplace/2.png)

2. 会出现一个窗口提示，按下`No All`以避免为每个导入的FontFace生成Font资产。

![](/Media/FontReplace/3.png)

3. 确保文件夹和资产名称与游戏文件匹配。

![](/Media/FontReplace/4.png)

### 打包
打包资产并测试结果。

![](/Media/FontReplace/5.png)

有关如何打包mod的更多信息，请查看[烹饪内容指南](/IntermediateModding/CookingContent.md)。<br>

（别忘了在mod名称中添加`_P`）

## 方法2 - 字体资产
每种字体类型都必须包含在一个`Font`资产中，类似于带有可选样式（如斜体、粗体等）的字体族。<br>每种类型称为FontFace（导入的`.ttf`或`.otf`）。

### 字体资产
1. 右键单击 -> User Interface（用户界面）-> Font（字体）

![](/Media/FontReplace/6.png)

2. 将其命名为与游戏文件匹配（参考FModel）。

![](/Media/FontReplace/7.png)

字体资产将包含一系列具有命名样式的FontFace资产。<br>
在这个例子中，它包含不同的样式，如Default、Black、BlackItalic、Bold等。

3. 导入与这些样式或名称相适应的任何相关字体。

> [!NOTE]  
> 你可以决定每种字体放入哪种样式/类别。<br>
> 如果你愿意，也可以将同一个字体设置给所有类别。

![](/Media/FontReplace/8.png)

4. 打开Font资产并单击`Add Font`，将其命名为与FModel中相同的名称，并为其指定你自己的FontFace（可以是自定义的或实际的）。

5. 重复步骤4，直到设置好所有字体族项目。

![](/Media/FontReplace/9.png)

### 打包
打包资产并测试结果。

![](/Media/FontReplace/10.png)

有关如何打包mod的更多信息，请查看[烹饪内容指南](./CookingContent.md)。<br>

（别忘了在mod名称中添加`_P`）