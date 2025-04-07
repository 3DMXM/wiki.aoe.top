# 使用自定义文件

## 介绍
如果您之前制作过《怪物猎人世界》的Mod,您可能希望您可以简单地将您的 mod 放到一个文件夹中就可以正常使用的话, 很遗憾的告诉您,在崛起里面是无效的. 游戏优先考虑 .pak 中的文件，并且仅在 .pak 文件中不存在引用文件时才会检查 natives\NSW 文件夹。 解决这个问题最明智的方法是使用您的 mod 创建一个新的pak文件，将该文件将优先于任何其他 .pak。

## 所需工具

- [Rise Pak Patch Tool](https://github.com/mhvuze/MonsterHunterRiseModding/raw/main/files/RisePakPatch.zip)

上述工具和文件可能会定期更新。

## .pak 加载顺序

要了解如何利用 .pak 文件的游戏加载系统，我们必须查看加载顺序。
1. rom:/re_chunk_000.pak (full v1.0.0, demo v1.0.0)
2. rom:/re_chunk_000.pak.patch_000.pak (full v1.0.0, demo v1.0.0)
3. rom:/re_chunk_000.pak.patch_001.pak (full v1.0.0, demo v1.0.0)
4. rom:/re_chunk_000.pak.patch_002.pak (full v1.1.1, demo v1.0.2)
5. rom:/re_chunk_000.pak.patch_003.pak (full v1.1.1, demo v1.0.2)
6. rom:/re_chunk_000.pak.patch_004.pak (full v1.1.2)
7. rom:/re_chunk_000.pak.patch_005.pak (full v2.0.0)
8. rom:/re_chunk_000.pak.patch_006.pak (full v3.0.0)

示例：我们使用完整的游戏 v3.0.0。 这意味着我们应该构建一个自定义的 `re_chunk_000.pak.patch_006.pak`（或者尝试重命名我们现有的）。 它将优先于任何其他 .pak 文件。

所述文件将被称为 `re_chunk_00x.pak.patch_00y.pak` 以便将来与本教程兼容。 请注意，此装载顺序和装载的集装箱数量可能会根据 Capcom 的更新政策而改变。

## 构建自定义 .pak 补丁

1. 创建一个包含修改后文件的 mod 文件夹。 我们将其命名为“examplefolder”。 您可以将此 mod 文件夹放在 PC 上的任何位置
2. 如果您正在下载其他人的模组，请确保将所述模组的文件夹“natives”拖放到“examplefolder”中。 如果您正在创建自己的模组，请注意根据您在提取文件夹中的位置（例如 `C:\...\examplefolder\natives\NSW\systems\gui\SystemDialog. gui.400022`)
3. 解压您在上面下载的 Rise Pak Patch 的 zip 文件，位于您的 mod 文件夹“examplefolder”旁边
4. 将您的 mod 文件夹“examplefolder”拖放到 `build-pak-patch.bat`
5. 相应地重命名生成的 `re_chunk_00x.pak.patch_00y.pak`，参见上面的加载顺序
6. 完毕。 现在继续将文件移动到正确的位置，根据您的用例见下文

## 使用带有 Ryujinx 的自定义 .pak 补丁

[Ryujinx](https://github.com/Ryujinx/Ryujinx) 是一款支持模组的实验性 Nintendo Switch 模拟器，非常适合在 PC 上轻松测试和调试模组。 按照[这里](https://github.com/Ryujinx/Ryujinx/wiki/Ryujinx-Setup-&-Configuration-Guide#managing-mods)的官方指南，然后将之前构建的 `re_chunk_00x.pak.patch_00y.pak` 文件移动到新创建的 `romfs` 目录中。

单击下面的缩略图观看构建自定义 `.pak` 文件并将其适当放置以供 Ryujinx 的过程的视频。
[![](https://tva1.sinaimg.cn/large/005PVVAugy1gyiz9h1ejcj30zk0k0q51.jpg)](https://youtu.be/P5Bcdt9CM1Q)

##  在 Yuzu 中使用自定义 .pak 补丁

[Yuzu](https://github.com/yuzu-emu/yuzu) 是另一个支持 mod 的实验性 Nintendo Switch 模拟器。 按照[这里](https://yuzu-emu.org/help/feature/game-modding/)的官方指南，然后将之前构建的 re_chunk_00x.pak.patch_00y.pak 文件移动到新创建的 romfs 目录中。

## 在 Nintendo Switch 上使用自定义 .pak 补丁

[Atmosphère](https://github.com/Atmosphere-NX/Atmosphere) custom firmware for Nintendo Switch supports LayeredFS and therefore allows you to use game mods as well. Move the previously built re_chunk_00x.pak.patch_00y.pak file to the directory atmosphere\contents\<title-id>\romfs on your SD card. The title ID for the Monster Hunter Rise Demo is 010093A01305C000, Monster Hunter Rise is 0100B04011742000 (US) / 0100559011740000 (Asia). Change romfs to exefs if you want to use ExeFS patches.

## 使用自定义文件的其他方式

As alluded to in the introduction, there are other ways to use custom files in Monster Hunter Rise which come with their individual drawbacks.

1. Stubbing `.pak` files entirely — You could stub the `.pak` container files and move the extracted files to the respective `romfs` directory in order to have a solution similar to Monster Hunter: World. The issue with this approach is that by nature of how `.pak` containers work, there will be "unknown" files that cannot be properly extracted. This might cause crashes or other issues.
2. **Stubbing single entries in `.pak` files** — You could also stub single entries for files you want to mod. Given that you will need to potentially maintain multiple selectively stubbed `.pak` files and the accompanying directory, this approach requires quite a bit of management and is prone to errors. Furthermore, you will need to restore stubbed entries if you decide to remove a modded file etc.
3. **Injecting files in `.pak` container** — This has the same drawbacks as point 2.

In summary, the patch approach explained above is currently preferable until perhaps one day there is a mod that prioritises loading the `natives\NSW `directory over `.pak` files.