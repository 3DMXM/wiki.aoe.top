# IoStore Packing

> [!IMPORTANT]
> This guide only applies when there are `.ucas`, `.utoc` & `.pak` files inside `Content/Paks` folder.

There are three scenarios when you need to pack IoStore assets, and the methods differ depending on them:
1. You have hex edited cooked assets extracted from [ZenTools](../TheBasics/ExtractingIoStore.md) with [UAssetGUI](UAssetGUI.md) or similar
2. You have a UE project and have created assets within it
3. You have extracted IoStore Zen assets from [FModel](../TheBasics/ExportingFModel.md) and wish to repack them

## Scenario 1: Packing cooked assets

### For UE5

Download this tool called [IoStorePackager](https://github.com/Buckminsterfullerene02/UE-Modding-Tools/raw/main/Loose%20Files/IOStorePackagev2.zip). It is a very simple GUI commandlet where you input file paths following the examples, and it calls UnrealPak from the Unreal Engine version you have installed with all the right arguments. 

You can watch [this video](https://www.youtube.com/watch?v=89s0akNvpU4) that guides you how to use `IoStorePackager`:

[![UE modding (5.4 w/ IoStore) ](https://img.youtube.com/vi/89s0akNvpU4/0.jpg)](https://www.youtube.com/watch?v=89s0akNvpU4 "UE modding (5.4 w/ IoStore) ")

### For UE4

Use this [IoStorePackager-UE4](https://gist.github.com/Buckminsterfullerene02/0f7233d5dda97c82039ba932c2bc8fb7). Similar to above, but you also need a C++ template project for the game, as `ZenTools-UE4` does not output the same manifest files as `ZenTools` that UE needs to create the container files.

Video guide coming soon hopefully.

## Scenario 2: UE project packing

If you have made mod content inside of the editor, you'll need to cook and pack it through the editor. Luckily, this is really simple. 

Inside the editor, go to `Edit -> Project settings -> Packaging`, then make sure `Use Io Store` at the top of the packaging settings is checked.

Then, follow the [cooking content](../IntermediateModding/CookingContent.md) guide as normal.

## Scenario 3: Packing FModel Zen .uassets

Use the tool [UnrealReZen](https://github.com/rm-NoobInCoding/UnrealReZen). The instructions are quite straight-forward, but be warned, that there is no alternative tool to UnrealReZen for packing FModel Zen `.uassets`.

> [!CAUTION]
> This tool does not support extracting assets from ZenTools extracted files.