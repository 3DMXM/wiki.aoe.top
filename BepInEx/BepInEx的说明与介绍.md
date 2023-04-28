## BepInEx的说明与介绍


### 相关链接
BepInEx：https://github.com/BepInEx/BepInEx  
官网：https://bepinex.github.io/bepinex_docs/master/index.html  
官方文档：https://bepinex.github.io/bepinex_docs/master/articles/index.html

### 介绍：
什么是BepInEx？BepInEx是一个注入unity引擎游戏，为Mod开发者提供开发入口的一个插件;
BepInEx提供了诸多功能，包括：
- 嵌入式安装
- 内置配置和日志
- 使用Harmony 补丁运行方法;[包括[Harmony](https://github.com/pardeike/Harmony "Harmony")和 [MonoMod](https://github.com/MonoMod/MonoMod "MonoMod")，用于启动时方法注入]
- 内置组件补丁，借助 [UnityDoorstop](https://github.com/NeighTools/UnityDoorstop "UnityDoorstop")可以使用游戏游戏中的 [Mono.Cecil](https://github.com/jbevain/cecil "Mono.Cecil")


### 与 Unity Mod Manager的区别
> 摘要自宵夜97:https://www.bilibili.com/read/cv8997376
**两者的相同点：**
UMM和BepInEx都使用Harmony库作为核心来对游戏进行功能修改。两者的不允许游戏路径出现中文或其他特殊符号，所以请保证游戏安装在纯英文路径。

> **两者的不同点：**
UMM使用一个单独的exe程序来安装Mod环境，此程序基于.Net，需要玩家电脑安装.Net4.5之后的版本才能启动。Mod环境的安装有两种方式，一种是直接修改程序集来加入环境，一种是通过UnityDoorStop在游戏启动时加载Mod环境，第一种方式因为破坏了游戏原有的程序，所以每次游戏更新的时候，都会导致Mod环境丢失需要重新安装，第二种方式不会破坏游戏的原有程序集，所以不会因为游戏更新而丢失环境。在Mod安装方面，UMM也有两种方式，一种是直观的，将Mod压缩包拖动到安装器内来安装，另一种是手动解压Mod包，放到正确的路径。UMM还内置了一个Mod管理界面，在游戏中按Ctrl+F10可以呼出管理界面，修改Mod配置、开启关闭Mod等。

> BepInEx没有单独的exe程序，环境的安装只是需要将BepInEx解压到游戏根目录即可。插件的加载方式上，等于UMM的第二种，也是通过UnityDoorStop来运行时加载。插件的安装方式上只有一种，将插件解压到指定的目录下(BepInEx/plugins)即可，没有UMM要求目录那么严格。BepInEx本身并不含有可视化的插件管理等功能。
