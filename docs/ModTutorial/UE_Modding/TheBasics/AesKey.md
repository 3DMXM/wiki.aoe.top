# 查找 AES 密钥
某些游戏的 `.pak` 文件会使用 AES 密钥进行加密。</br>
幸运的是，查找 AES 密钥是一项简单的任务。

有两种方法：
- 方法一：使用 [GHFear](https://github.com/GHFear/) 开发的 [AESKeyFinder](https://github.com/GHFear/AESKeyFinder-By-GHFear)
- 方法二：使用 Java 版本的 Aes_Finder（如果第一种方法不起作用，可作为备选）。

## 获取 AES 密钥 - 方法一
1. 访问 [AESKeyFinder](https://github.com/GHFear/AESKeyFinder-By-GHFear)。
2. 点击 `Code` 下拉菜单，然后点击 `Download ZIP` 下载为 zip 文件。
3. 解压缩 zip 文件后，将游戏最大的可执行文件（通常名为 "游戏名"-Shipping.exe）放入包含脚本的文件夹中。
4. 运行 `Find_AES_Key.bat` 并按照屏幕上的指示操作。
5. 几秒钟内，它将在屏幕上输出找到的 AES 密钥。

## 获取 AES 密钥 - 方法二
1. 下载 [AES_Finder.exe](https://github.com/Dmgvol/UE_Modding/raw/main/Tools/AES_finder.exe)。<br>
_（该工具使用 Java，需要安装 Java 运行时环境）_
2. 将 `.exe` 文件放在游戏二进制可执行文件的同一文件夹中。<br>
_（名称中包含 "Win64-Shipping.exe" 的那个）_<br>
（例如：`...\Ghostrunner 2\Ghostrunner2\Binaries\Win64\`）
3. 启动游戏，然后启动 AES 查找器。
4. 等待几秒钟，一个名为 `key.txt` 的新文本文件将出现在该文件夹中，其中包含 AES 密钥。

就是这样！