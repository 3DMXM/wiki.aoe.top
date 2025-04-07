# Importing Models into Blender
Quick guide on importing both `.psk` and `.gltf` files into Blender 3 and 4.


> [!TIP]  
>  For skeletal meshes and animations, the `.psk` format is preferred due to its native support in Unreal Engine but requires a plugin for Blender.

We will need Blender, and a Blender PSK-plugin to be able to import the `.psk` files which are exported from FModel/UModel.<br>
Blender is free and available on [Blender website](https://www.blender.org/) or on [Steam page (Blender)](https://store.steampowered.com/app/365670/Blender/).

## Blender 4
The plugin link for Blender 4: [io_scene_psk_psa](https://github.com/DarklightGames/io_scene_psk_psa).<br>
_(download the correct version, and follow the instructions in that repo readme)_

Once installed navigate to File -> Import -> choose PSK or GLTF and provide the file.

![](/Media/ImportModels/blender4.png)

> [!IMPORTANT]  
> For PSK files - **always** import unscaled! (scroll down for more info)

## Blender 3
The plugin link for Blender 3: [blender3d_import_psk_psa](https://github.com/Befzz/blender3d_import_psk_psa).<br>
_(download the correct version, and follow the instructions in that repo readme)_

Once installed navigate to File -> Import -> choose PSK or GLTF and provide the file.

![](/Media/ImportModels/blender3.png)

> [!IMPORTANT]  
> For PSK files - **always** import unscaled!

<hr>

## Import unscaled
When working with skeletal meshes, it's important to import unscaled and export scaled down to `0.01`. <br>
Why? Because it breaks some skeletal bones on import to UE4/5.

![](/Media/ImportModels/ImportUnscaled.png)

It's used for skeletal mesh (character) modding, which is covered in [Changing SkeletalMesh](/IntermediateModding/ChangingSK.md) guide.<br>
So if you're just importing for non-modding purposes, import however you want.