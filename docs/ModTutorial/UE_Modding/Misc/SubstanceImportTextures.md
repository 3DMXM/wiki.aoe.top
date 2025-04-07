# Importing packed textures into Substance Painter
Substance Painter is a premium industry leading tool for texturing, but there are free alternatives like Quixel Mixer.

Import the mesh and textures into Substance Painter and let's begin.

### Preparing Shaders
The first thing is to add Ambient Occlusion and Emissive layers to the shader, which is done by going to `Texture Set Settings` and hitting the plus icon.

![](/Media/ImportTexturesSubstance/substance1.png)

### Base Color and Normal maps
1. Create a Fill Layer in the correct texture set.
2. Only enable the `color`, `nrm`, and `emiss` material layers
3. Drag the imported textures into their corresponding layers.

![](/Media/ImportTexturesSubstance/substance2.png)

### ORM Texture
ORM textures are combined of ambient occlusion, roughness and metallic which are in the red, green, and blue channels of the texture.

> [!IMPORTANT]  
> RED -> Ambient Occlusion, GREEN -> Roughness, BLUE -> Metallic.

1. Create a Generator for the fill layer.

![](/Media/ImportTexturesSubstance/substance3.png)

2. Select the Grayscale Conversion.

![](/Media/ImportTexturesSubstance/substance4.png)

3. For Ambient Occlusion, deselect all layers besides `ao`.
4. Set the Grayscale type to Red Channel.
5. Specify the ORM/packed texture in the source image.

![](/Media/ImportTexturesSubstance/substance5.png)

6. Duplicate the generator and do the same but for roughness.
7. Deselect all layers besides `rough` and set the Grayscale type for Green channel.

![](/Media/ImportTexturesSubstance/substance6.png)

8. Duplicate the generator and do the same but for metallic.
9. Deselect all layers besides `metal` and set the Grayscale type for Blue channel.

![](/Media/ImportTexturesSubstance/substance7.png)

### We're done!
That's all of it, now we have the base color, normal map, with all the packed textures set correctly including the emissive texture.

![](/Media/ImportTexturesSubstance/substance8.png)


<hr>

### Changing Emissive Color (optional)
1. Create a Fill Layer.
2. Deselect all besides `emiss` and pick the color of your choice.
3. Switch to Emissive Layer and pick the Color mode for the Fill Layer. 

![](/Media/ImportTexturesSubstance/substance9.png)