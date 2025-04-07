# Importing UE Packed textures into Blender
The guide will cover the traditional used textures for UE meshes, with base color, ORM, normal and emissive textures for each mesh. <br>
The industry standard for used textures in Unreal Engine models is having 3 textures: the base color (also called albedo), the ORM, and the normal map.

The "ORM" textures combine Occlusion, Roughness, and Metallic into a single texture, using the Red, Green, and Blue channels for efficiency. <br>
Some have emissive textures as well (the glowing parts of a mesh), but that's easy to handle.

> [!NOTE]  
> Different games may have different sets of textures for each model, so this guide won't cover all of those, just the main general approach of textures in UE4/5.

## Blender
Let's begin with dragging all the necessary textures into the shading node graph.

> [!NOTE]  
> The guide uses Blender 3 as it's the same process, but Blender 4 differences are shown at the bottom of the guide.

### Preparing the Textures

- Import the mesh.
- Go to Shading tab and click `Use Nodes`.
- Drag and drop the textures for this mesh, usually it's color, ORM, Normal and sometimes Emissive texture.
- For ORM and Normal texture: set the `Color Space` to `Non-Color`.

![](/Media/ImportTexturesBlender/blenderTextures1.png)

### Connecting Base Color, Roughness, Metallic and Normal

Connect the nodes as shown below:
- Base Color: connect the base color texture from Color to Base Color in BSDF.
- Packed/ORM texture: drag the Color and look for `Seperate Color` node.
- - Connect the color from the texture to Separate Color node color.
- - Connect the Green to Roughness, and Blue to Metallic.
- - We will handle the Red in the next step, leave it for now.
- Normal map: Drag the color and look for `Normal Map Color` node, and connect the output Normal into Normal in BSDF.

![](/Media/ImportTexturesBlender/blenderTextures2.png)

### Adding the Ambient Occlusion channel
Adding the Ambient Occlusion from ORM is done by multiplying the base color by the red channel of the ORM texture.

- Drag from base color and look for `Multiply Vector Math`.
- Connect Red from Seperate Color node to the second Vector of the Multiply node.
- Connect the output Vector to Base Color.

![](/Media/ImportTexturesBlender/blenderTextures3.png)

### Adding Emissive texture (optional)
If your model has an emissive texture, you can add it by using "Add Shader" node as shown below.

> [!NOTE]  
> Blender 4 users - skip this, and scroll to the bottom of the guide, as this part is different.

- Drag the BSDF and search for `Add Shader` node.
- Connect the output Shader into Surface in Material Output.
- Drag the emissive texture Color into the second Shader input.

![](/Media/ImportTexturesBlender/blenderTextures4.png)

Some games have their emissive textures as white and adjusted in-game with the proper color code, which can be done in Blender by adjusting the color of the texture as shown below.

- Drag the emissive Color and search for `Color fac`, and connect as shown.
- Switch the mode to `Color`.
- Set the Fac to `1.000`.
- Adjust Color2 to your color of choice.
- And connect the output Color into the second Shader in Add Shader.

![](/Media/ImportTexturesBlender/blenderTextures5.png)

## Blender 4 Differences
The process in Blender 4 is similar besides the emissive which is connected directly into the BSDF's Emission input, as shown below.

![](/Media/ImportTexturesBlender/blender4Textures.png)