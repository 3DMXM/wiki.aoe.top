> [!CAUTION]
> **Disclaimer:** This guide is intended for educational and research purposes only. 
> The authors are not responsible for any unintended consequences, including damage to systems, violations of TOS, or legal issues arising from the use of this information. Use at your own risk.

# Finding Memory Pointers
This guide will cover the basics of finding consistent memory pointers for UE games, mainly used for speedrunning tools, trainers, and randomizers.

> [!NOTE]  
> You should have [CheatEngine](https://www.cheatengine.org/) installed and know the basics.


### Initial Instance Address
For a simple example, we will scan for the current weapon's ammo.

- Scan for the initial value (in my case 4 bytes integer)
- Change the value in-game.
- Rescan with updated value.
- Repeat until you have one or two results.

![](/Media/memoryPointers/1.png)

### Scanning for Pointers
Add the working result to the list and scan for pointers.

- Right click on the item -> `Pointer scan for this address`.

![](/Media/memoryPointers/2.png)

Use the default values.

> [!NOTE]  
> You can set `Max level` to `5` to reduce scanning time and really long pointers.

![](/Media/memoryPointers/3.png)

Once the results are in, we need to rescan to narrow down the number of results.

![](/Media/memoryPointers/4.png)

Rescan with the following settings:
- Only filter out invalid pointers
- Must start with offset `30`

> [!TIP]
> Having `30` offset will start with persistent level.


![](/Media/memoryPointers/5.png)

That should reduce the number of results, but that's not enough or consistent with game instances.

### Improving the Pointers
In order to find the correct persistent pointer we need to rescan while changing levels or re-launching the game.

- Change the level or re-launch the game.
- Re-attach to game process.
- Rescan pointerlist.

![](/Media/memoryPointers/6.png)

That would drastically improve the results. <br>
If there are multiple results try to sort by offsets in order to get the shortest path.

![](/Media/memoryPointers/7.png)

The final memory pointer should look similar, not too many offsets and constantly working regardless of the current level.


> [!NOTE]
> We can improve our results by utilizing UE4SS in the next guide.