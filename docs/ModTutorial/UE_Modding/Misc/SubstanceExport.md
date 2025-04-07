# Exporting Packed Textures in Substance Painter
Small guide on exporting the textures mesh from Substance Painter into UE traditional "packed textures", where the exported files are base color, ORM, normal and emissive (optional).

## Exporting Packed Textures
1. File -> Export Textures
2. Click `Global settings` and pick `Unreal Engine 4 (Packed)` for `Output template`.

![](/Media/ImportTexturesSubstance/exportTextures1.png)

You can manually decide which textures you want to export for each mesh part.

Once you click `Export` it will generate all the textures for the mesh, and they will be ready to import into UE4/5 and game-ready.


## Importing Into Unreal Engine
That's a straight forward process of dragging in all the textures, creating a material and connecting everything up in the material graph, as shown below.

![](/Media/ImportTexturesSubstance/ImportTexturesUE1.png)


> [!IMPORTANT]  
> Make sure the ORM/packed texture is set to Masks in Compression Settings within the texture, and Normal for the Normal map.


### Adjusting the Emissive (optional)
If you have the emissive texture for your mesh, you can adjust its strength and color by multiplying it by the color and then by a constant for its strength.

![](/Media/ImportTexturesSubstance/ImportTexturesUE2.png)