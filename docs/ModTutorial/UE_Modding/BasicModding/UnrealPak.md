# Creating Pak Files
> [!IMPORTANT]
> This only guide applies when there are NOT `.ucas` or `.utoc` files inside `Content/Paks` folder. There may be `.pak`, `.sig` or other files or folders.   

To ensure your mod is loaded by the game, it needs to be in a `.pak` file.

## Packer methods

There are two ways you can pack your mod files into a `.pak` file:
1. UnrealPak - a commandlet within UE
2. repak - a third party commandlet

UnrealPak and repak are fine to use with any UE version. repak is generally faster and has more advanced features like configurable mount points & pak version, but is not required for the majority of users, and overall ease of use is slightly more difficult than the below UnrealPak scripts. But if one doesn't work for you, you at least can try the other. 

UnrealPak is present in every UE install, but can be extracted into a standalone program.<br>
You can download the standalone version from here: [UnrealPak by FluffyQuack](https://github.com/Dmgvol/UE_Modding/raw/main/Tools/UnrealPak.zip) , which also comes with a couple of batch scripts to make calling the program easier for you.

*You can also install [repak_wrappers](https://github.com/Mythical-Github/repak_wrappers/archive/refs/heads/main.zip), which has an identical user experience to UnrealPak. If you download this, you can follow the "If using UnrealPak" parts of the guide.*

**If using UnrealPak:**

Create a folder that will contain the scripts, raw mod folder and output pak files, similar to this:

![](/Media/UnrealPak/unrealpak1.png)

_(Extract the provided UnrealPak zip file)_

**If using repak:** 

Follow the installation and usage instructions in the [Extracting cooked with repak](../TheBasics/ExtractingCooked.md#installation) guide.

## Mod Folder
For every mod, regardless of the packing tool, a mod folder with the exact folder structure is required.

```
Modname_P\GameName\Content\...
```

__Structure__<br>
- Replace the modname with your actual mod name.
- Ensure the folder ends with `_P`(important).
- Replace GameName with the binary name of your game.

Depending on the mod and which files it overrides, it will have the same folder hierarchy followed by the original game folder hierarchy, which is visible in FModel and UModel.

__Examples__<br>
A mod folder for a mod that replaces textures in Ghostrunner;<br>
```
\NewTex_P\Ghostrunner\Content\Visual\Characters\Hero_Swords\Mat\Tex
```

A mod folder for a mod that replaces a weapon model in Trepang2;<br> 
```
\newPistol_P\CPPFPS\Content\Weapon\Pistol
```

## Folder Contents
Once the folder structure is created, copy the necessary files, that **needs to be overwritten or added**.<br>
If you compiled the project content within UE editor - copy the files you want to be included in the mod.

In order to modify/overwrite the game's files with your custom files, you have to have the same folder structure and the same file names for the files, matching the original file paths/files.

__For example__<br>
In an example of a texture mod, the following folder stucture is used:<br>
```
\modname_P\Ghostrunner\Content\Visual\Characters\Hero_Swords\Mat\Tex\
```

The content of the following folder is:

![](/Media/UnrealPak/unrealpak2.png)

<hr>

## Using the tool
**If using UnrealPak:**

Simple, just drag the mod folder onto the `UnrealPak-With-compression.bat` to begin packaging the mod folder. <br>
Shortly after, a pak file with the same name will be created.

![](/Media/UnrealPak/unrealpak3.png)

**If using repak:**

Simply run the command `repak pack <mod directory to pack>` inside the directory containing your mod folder. 

If you wish to see the file paths it is packing, use the `-v` option.

If you wish to use compression, add the `--compression <method>` option. You can see supported compression formats with `repak pack -h`. `gzip`, `zlib` and `zstd` formats are recommended. If the game fails to load the pak file, one of the things to try is to pack without compression.

E.g. `repak pack -v --compression Gzip Modname_P`

## Adding mods to the game
1. Navigate to the Paks folder of the game.

Usually it's following this pattern:

```
...\GameName\GameName\Content\Paks
```

For example, Ghostrunner game:<br>
```
...\Ghostrunner\Ghostrunner\Content\Paks
```


2. Copy the generated pak file into the game's Paks folder.
3. Rename the pak file to suit your mod purpose.
4. Make sure the name ends with `_P` **(IMPORTANT)**.<br>
For example: `myMod_P.pak`

