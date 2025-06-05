# 更改纹理

在这个例子中，我将更改GR2（UE4.27）的一个剑的纹理，但相同的原则适用于任何其他游戏和引擎版本。

一旦你找到了想要替换的纹理，将其导出为PNG并编辑它以满足你的需求。

![](/Media/ChangingTexture/changingTex1.png)

启动UE并创建与FModel中显示的相同的文件夹结构。

![](/Media/ChangingTexture/changingTex2.png)

将纹理导入到其文件夹中，并保持与FModel中命名的**完全相同**的名称。

![](/Media/ChangingTexture/changingTex3.png)


注意：<br>
尝试使你覆盖的任何纹理设置与其原始类型匹配。<br>
- 如果它是一个`法线`贴图纹理，确保在压缩设置中选择NormalMap。
- 如果它是一个ORM（将遮挡|粗糙度|金属性打包成一个），确保在压缩设置中选择Masks。<br>
你可以在FModel中再次检查所有内容。


完成后，只需打包并在游戏中测试。<br>
有关如何打包你的mod的更多信息，请查看[烘焙内容指南](/IntermediateModding/CookingContent.md)。<br>

（不要忘记在你的mod名称中加入`_P`）

![](/Media/ChangingTexture/changingTex4.png)


