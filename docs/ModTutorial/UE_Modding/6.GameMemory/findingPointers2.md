> [!CAUTION]
> **免责声明：** 本指南仅供教育和研究目的。
> 作者不对任何意外后果负责，包括系统损坏、违反服务条款或因使用此信息而产生的法律问题。使用风险自负。

# 使用UE4SS查找内存指针
在本指南中，我们将使用[UE4SS](https://github.com/UE4SS-RE/RE-UE4SS)通过直接内存地址扫描指针，并利用给定的偏移量。

> [!NOTE]  
> 您应该已安装[CheatEngine](https://www.cheatengine.org/)并了解基础知识。

### 查找实例化对象
启动游戏并连接UE4SS，启用控制台解锁器。

如果您正在寻找玩家蓝图但不知道它的名称，<br>
可以通过执行`getall character`获取所有类型为`character`的对象，玩家对象通常会显示在顶部。

![](/Media/memoryPointers2/1.png)

在本例中，是`PlayerBP`。

使用UE4SS实时视图，我们可以通过搜索以下内容找到实例化对象：<br>
`PersistentLevel.PlayerBP`

![](/Media/memoryPointers2/2.png)

> [!TIP]  
> 在对象名称前添加`PersistentLevel.`将确保它是关卡中的实例化/生成对象。

### 扫描直接地址
该工具允许直接获取对象的内存地址。

- 复制对象的内存地址。

![](/Media/memoryPointers2/3.png)

- 启动CE。
- 连接到游戏进程。
- 手动添加地址。

![](/Media/memoryPointers2/4.png)

接下来，对此地址进行指针扫描。

![](/Media/memoryPointers2/5.png)

确保在`指针必须以特定偏移结束`中填入`0`。<br>

> [!NOTE]  
> 当地址指向一个对象时，我们希望最后的偏移为`0`。

![](/Media/memoryPointers2/6.png)

结果出来后，我们需要重新扫描以缩小结果范围。

![](/Media/memoryPointers2/7.png)

确保您设置了：
- 只过滤掉无效指针。
- 在`必须以偏移开始`中填入值`30`。
- 在`必须以偏移结束`中填入值`0`。

![](/Media/memoryPointers2/8.png)

这应该会改善我们的结果，但还远未准备就绪。<br>

- 重新启动游戏。
- 重新将游戏进程连接到CE。
- 在UE4SS中找到实例化对象地址（如前所述）。
- 使用新地址重新扫描指针列表。

![](/Media/memoryPointers2/9.png)

这应该会大大改善结果。<br>
尝试按偏移量过滤，以获取最短路径。

在我的例子中，我得到了一个非常好的短内存指针；<br>
`"CPPFPS-Win64-Shipping.exe" + 0x4Fe4998 + 0x30 + 0x110 + 0x0`

### 添加偏移量
一旦我们有了内存指针，我们就可以开始使用偏移量访问实例化项目的不同变量/对象。

例如，偏移量`0xFF0`将获取`MaxGrenades`。

![](/Media/memoryPointers2/10.png)

### 访问嵌套对象
这不仅限于变量，我们还可以进入嵌套引用<br>
例如，`CurrentWeapon`作为类型为`WeaponBase`的引用保存在偏移量`0x1008`处。<br>
这将使内存指针指向当前武器实例对象。

![](/Media/memoryPointers2/11.png)

如果我们搜索该实例化项目，我们可以访问它自己的变量和对象，例如，在这个游戏中所有武器共享的`CurrentAmmoInClip`。

添加该偏移量将使内存指针直接指向该特定变量，无论关卡或游戏实例如何，都能每次都正确指向。

![](/Media/memoryPointers2/12.png)

### 结果
如果我们比较最终结果，我们可以清楚地看到我们的新指针更加一致，路径更短，并且将始终显示正确的值。

![](/Media/memoryPointers2/13.png)