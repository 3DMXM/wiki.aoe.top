# 制作 *.GMM 文件

## 这是什么?
`*.gmm` 文件是由 Gloss Mod Manager 所打包的一种 `一键安装包` 格式的文件. 

主要优势：
- Mod作者能更方便的将自己的作品和所需的依赖以及一些可选文件一起分享出来.
- 同时也解决作品被第三方网站转载后N年不更新，总有人拿着上古版本来问你为什么报错的问题.
- 让玩家能在安装Mod的同时还能一起安装前置依赖和一些可选文件.
- 管理器能自动去重, 防止萌新安装重复或不兼容版本的前置Mod.
- 能自动检查更新以防止萌新在使用低版本的前置或Mod时导致游戏报错的问题. 

## 开始制作

> 前提: 
> 1. 将作品发布到  [3DM Mod站](https://mod.3dmgame.com/Workshop/PublishMod) (目前仅支持Mod站)
> 2. GMM 支持你的游戏 ([游戏支持列表](https://github.com/GlossMod/Gloss-Mod-Manager-info/blob/main/README_zh_CN.md#%E6%94%AF%E6%8C%81%E7%9A%84%E6%B8%B8%E6%88%8F))

1. 你需要将你的作品发布到3DM Mod站 并通过审核.
2. 在Mod站打开你的作品，能看到下载按钮旁边一个 `一键安装` 按钮
    ![](https://mod.3dmgame.com/static/upload/mod/202311/MOD655db5b559496.png@webp)
3. 点击并将它添加到管理器中，然后选择打包
    ![](https://mod.3dmgame.com/static/upload/mod/202311/MOD655db65ba3e44.png@webp)
4. 填写相关的Mod描述, 点击下一步
    ![](https://mod.3dmgame.com/static/upload/mod/202311/MOD655db6d459be7.png@webp)
5. 选上你的Mod作品和相关的前置, 然后点击打包 (若想要前置自动更新, 那么前置也应该是通过`一键安装`导入的才行)
    ![](https://mod.3dmgame.com/static/upload/mod/202311/MOD655db71d49281.png@webp)
6. 选择保存的位置, 也可以根据需要修改文件名, 最后点击保存即可
    ![](https://mod.3dmgame.com/static/upload/mod/202311/MOD655db7add2d5b.png@webp)
7. 稍等片刻，即可完成打包. (具体时间根据你电脑的性能和Mod的大小决定)
    ![](https://mod.3dmgame.com/static/upload/mod/202311/MOD655db82588589.png@webp)

8. 最后，你可以选择将这个 `*.gmm` 分享到任意你想要发布的平台.
    - 甚至可以使用这个文件来替换最开始你在Mod站上传的附件, (不过更新会比较麻烦)

## gmm 文件的本质

如果你喜欢折腾, 那么你肯定能发现, GMM文件其实就是一个压缩包的事实.

我没有对此文件进行任何加密处理, 欢迎研究, 期待你能玩出什么样的花样出来. 



