# 提取游戏文件

## 介绍

怪物猎人:崛起(Monster Hunter Rise) 使用了卡普空自家的RE引擎。 与其他基于 RE 引擎的游戏（如生化危机 7 和鬼泣 5）非常相似, 《怪物猎人:崛起》 游戏数据存储在 .pak 文件中。 生化危机mod作者 FluffyQuack 制作的 [REtool](https://residentevilmodding.boards.net/thread/10567/pak-tex-editing-tool), 可以解包/打包 《怪物猎人:崛起》的 .pak 文件.有关上述 .pak 文件结构的更多信息，请参见上面链接的 REtool 的源代码。

然而，为了访问游戏数据本身，需要首先解密和解包 Nintendo Switch 的文件。 有多种方法可以做到这一点。 本指南将介绍一个更高级的工具，它应该可以让您轻松处理游戏更新和潜在的 DLC。


## 所需工具

- [hactool](https://github.com/SciresM/hactool/releases/latest "hactool") — 解压 Nintendo Switch 文件
- [Dumped Switch prod.keys](https://yuzu-emu.org/help/quickstart/#dumping-prod-keys-and-title-keys "Dumped Switch prod.keys") — 与 hactool 一起使用
- [GetTitlekey.exe](https://github.com/mhvuze/MonsterHunterRiseModding/raw/main/files/GetTitlekey.exe "GetTitlekey.exe") — 用于检索补丁等的标题键。
- [REtool](https://residentevilmodding.boards.net/thread/10567/pak-tex-editing-tool "REtool") — 解包 .pak 文件
- [怪物猎人崛起 文件列表](https://github.com/mhvuze/MonsterHunterRiseModding/raw/main/files/mhrise.list "File list for Monster Hunter Rise") — 与 REtool 一起使用
- [Dumped copy of Monster Hunter Rise and/or update(s)](https://yuzu-emu.org/help/quickstart/#dumping-cartridge-games "Dumped copy of Monster Hunter Rise and/or update(s)")


## 解压 NS 文件

1. 将您从 Switch 控制台转储的 prod.keys 文件放在与 hactool.exe 相同的目录中
2. 将您转储的游戏/更新放在与 hactool.exe 相同的目录中
3. 在与 hactool.exe 相同的目录中打开命令行如下：按住 Shift 键并右键单击资源管理器窗口中的空白区域，然后选择在此处打开 PowerShell 窗口
4. 根据您的游戏/更新转储的格式，在命令行中复制并粘贴下面找到的匹配命令，同时相应地调整文件名（和标题键，如果需要）。 然后按回车键执行每个命令
5. 完毕。 您应该在与 hactool.exe 相同的目录中找到包含 .pak 文件的 romfs 目录

## hactool 命令（基础游戏）

### NSP:

1. `./hactool.exe -k prod.keys -tpfs0 -x --outdir="unpacked" base_game.nsp`
2. 将解压后的文件夹中的 `.tik` 文件拖放到 `GetTitlekey.exe` 以检索下一步的标题密钥。
3. `./hactool.exe -k prod.keys -tnca --titlekey=pastekeyhere --romfsdir=romfs unpacked/name_of_biggest_nca.nca`

### XCI:

1. `./hactool.exe -k prod.keys -txci --securedir="unpacked" base_game.xci`
2. `./hactool.exe -k prod.keys -tnca --romfsdir=romfs unpacked/name_of_biggest_nca.nca`


## hactool 命令（基础游戏和更新）

### Base game as NSP:

1. `./hactool.exe -k prod.keys -tpfs0 -x --outdir="unpacked_base" base_game.nsp`
2. 将文件夹 `unpacked_base` 中的 `.tik` 文件拖放到 `GetTitlekey.exe` 以检索下一步的标题密钥。
3. `./hactool -k prod.keys --titlekey=pastekeyhere --plaintext="unpacked_base/decryptedBase.nca" unpacked_base/name_of_biggest_nca.nca`
4. `./hactool.exe -k prod.keys -tpfs0 -x --outdir="unpacked_patch" patch.nsp`
5. 将文件夹 `unpacked_patch` 中的 `.tik` 文件拖放到 `GetTitlekey.exe` 以检索下一步的标题密钥。
6. `./hactool.exe -k prod.keys --basenca=unpacked_base/decryptedBase.nca --titlekey=pastekeyhere --romfsdir=romfs unpacked_patch/name_of_biggest_nca.nca`

### Base game as XCI:

1. `./hactool.exe -k prod.keys -txci --securedir="unpacked_base" base_game.xci`
2. `./hactool.exe -k prod.keys -tpfs0 -x --outdir="unpacked_patch" patch.nsp`
3. 将文件夹 `unpacked_patch` 中的 `.tik` 文件拖放到 `GetTitlekey.exe` 以检索下一步的标题密钥。
4. `./hactool.exe -k prod.keys --basenca=unpacked_base/name_of_biggest_nca.nca --titlekey=pastekeyhere --romfsdir=romfs unpacked_patch/name_of_biggest_nca.nca`

## 解压 .pak 文件
1. 在上一节中提取的 `romfs` 文件夹中找到 `.pak` 文件并将其移动到与 `REtool.exe` 相同的目录
2. 将您下载的 `mhrise.list` 文件移动到与 `REtool.exe` 相同的目录中
3. 在与 `REtool.exe` 相同的目录中打开命令行如下：按住 `Shift` 键并右键单击资源管理器窗口中的空白处，然后选择在此处打开 `PowerShell` 窗口
4. 在命令行中复制并粘贴以下命令，同时相应地调整文件名：`.\REtool.exe -h mhrise.list -x -skipUnknowns pak_name.pak`。 然后按回车键执行命令
5. 完毕。 您应该在与 `REtool.exe` 相同的目录中找到包含所有已知游戏数据文件的 `pak_name`目录