> [!CAUTION]
> **Disclaimer:** This guide is intended for educational and research purposes only. 
> The authors are not responsible for any unintended consequences, including damage to systems, violations of TOS, or legal issues arising from the use of this information. Use at your own risk.

# Finding Memory Pointers using UE4SS
In this guide, we will be using [UE4SS](https://github.com/UE4SS-RE/RE-UE4SS) in order to directly scan for pointers by direct memory address, and use the given offsets to our advantage.

> [!NOTE]  
> You should have [CheatEngine](https://www.cheatengine.org/) installed and know the basics.

### Find the Instanced Object
Launch the game with UE4SS hooked up, with console unlocker enabled.

If you're looking for the player blueprint but don't know the name of it,<br>
then you can get all objects of type `character` which should have the player one at the top, by executing `getall character`.

![](/Media/memoryPointers2/1.png)

For this example, that's `PlayerBP`.

Using UE4SS Live view, we can find the instanced object by searching for: <br>
`PersistentLevel.PlayerBP`

![](/Media/memoryPointers2/2.png)

> [!TIP]  
> Adding `PersistentLevel.` before the object name will ensure it's the instanced/spawned object within the level.

### Scanning for Direct Address
The tool allows to directly get the memory address of the object.

- Copy the memory address of the object.

![](/Media/memoryPointers2/3.png)

- Launch CE.
- Hook it up to the game's process.
- Add the address manually.

![](/Media/memoryPointers2/4.png)

Next, pointer scan for this address.

![](/Media/memoryPointers2/5.png)

Make sure you have `0` in `Pointer must end with specific offset`.<br>

> [!NOTE]  
> When an address is pointing into an object, we want `0` in the last offset.

![](/Media/memoryPointers2/6.png)

Once the results are in, we need to rescan to narrow down the results.

![](/Media/memoryPointers2/7.png)

Make sure you have:
- Only filter out invalid pointers.
- Value `30` in `Must start with offsets`.
- Value `0` in `Must end with offsets`.

![](/Media/memoryPointers2/8.png)

That should improve our results, but they're far from being ready.<br>

- Re-launch the game.
- Re-attach the game process to CE.
- Find the instanced object address in UE4SS (as done previously).
- Rescan pointerlist using the new address.

![](/Media/memoryPointers2/9.png)

That should drastically improve the results.<br>
Try to filter out by offsets in order to get the shortest path.

In my case, I got a really good short memory pointer; <br>
`"CPPFPS-Win64-Shipping.exe" + 0x4Fe4998 + 0x30 + 0x110 + 0x0`

### Adding Offsets
Once we have our memory pointer, we can start using the offsets to access different variables/objects of the instanced item.

For example, offset `0xFF0` will get the `MaxGrenades`.

![](/Media/memoryPointers2/10.png)

### Accessing Nested Objects 
It's not only limited to variables, we can go into the nested references<br>
For example the `CurrentWeapon` is saved as a reference of type `WeaponBase` at offset `0x1008`.<br>
This will point the memory pointer to the current weapon instance object.

![](/Media/memoryPointers2/11.png)

If we search for that instanced item, we can access its own variables and objects, for example, the `CurrentAmmoInClip` which is shared across all weapons in this game.

Adding that offset will directly point the memory pointer to that specific variable, every single time regardless of level or game instance.

![](/Media/memoryPointers2/12.png)

### Results
If we compare the end results, we can clearly see our new pointer is much more consistent, shorter path, and will always show the correct value.

![](/Media/memoryPointers2/13.png)