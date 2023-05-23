# Object Explorer

对象浏览器将成为您在积极工作于脚本或插件时的首选参考。它将为您提供检查和修改对象的工具。

在 REFramwork 菜单中的 `DeveloperTools` 下找到。

<video width="640" height="480" controls>
<source src="https://user-images.githubusercontent.com/2909949/176354040-b118473d-2def-4439-bdb9-c8899497aae4.mp4" type="video/mp4">
</video>

## 定义
### TDB
**T**ype **D**ata**b**ase。包含所有类、字段、方法、事件等元数据...

可与 Unity 中的 IL2CPP 元数据进行比较。

## 查找要调用的游戏函数和要获取的字段
在单例中寻找您感兴趣的内容。

可以使用 `sdk.get_managed_singleton("name")` 获取 `Singletons` 下的对象。

可以使用 `sdk.get_native_singleton("name")` 获取 `Native Singletons` 下的对象。

请注意，通常暴露性最强的是 `Singletons`（即托管单例）。它们最初是用 C# 编写的。

尽管 `Native Singletons` 暴露了字段和方法，但通常都是手动挑选的。这些是用 C++ 编写的，关于它们的数据信息最少。

在 `ObjectExplorer` 中的任何物体的 `TDB Methods` 或 `TDB Fields` 下，都可以使用此 wiki 中找到的各种调用和字段获取器/设置器方法进行调用或抓取。

您 **不能**直接使用 `Reflection Methods` 或 `Reflection Properties`，除非进行直接内存读写，否则只能完全支持 TDB 版本。

## Dump SDK
这个按钮会创建一些东西。

1. 在您的游戏文件夹中创建一个 `il2cpp_dump.json`
2. 从 TDB 数据生成的 C++ 头文件和源文件的 `sdk` 文件夹

`il2cpp_dump.json` 通常是最相关的。它可以用作离线参考，以查找字段和方法。您可以使用 Python 或您喜欢的编程或脚本语言来解析它。

此转储可能需要几分钟才能运行，因此请期望您的游戏会冻结。该转储将相当大，并且似乎随着每个新游戏到达 RE 引擎（MHRise 的大小几乎为 1GB）而变得更大。在选择文本编辑器查看文件时，请记住这一点。

使用 il2cpp 转储的 Python 脚本可以在 [这里](https://github.com/praydog/REFramework/tree/master/reversing/scripts) 和 [这里](https://github.com/praydog/REFramework/tree/master/reversing/rsz) 找到。

### RE8 中 il2cpp_dump.json 输出的示例片段
```
"app.PropsManager": {
    "address": "14814d4f0",
    "crc": "c3e89da7",
    "deserializer_chain": [
        {
            "address": "0x14602b540",
            "name": "via.Object"
        },
        {
            "address": "0x14602a530",
            "name": "System.Object"
        },
        {
            "address": "0x14602a850",
            "name": "via.Component"
        },
        {
            "address": "0x14602a9d0",
            "name": "via.Behavior"
        }
    ],
    "fields": {
        "&lt;Camera>k__BackingField": {
            "flags": "Private",
            "id": 110417,
            "init_data_index": 0,
            "offset_from_base": "0x60",
            "offset_from_fieldptr": "0x10",
            "type": "via.Camera"
        },
        "&lt;Player>k__BackingField": {
            "flags": "Private",
            "id": 110416,
            "init_data_index": 0,
            "offset_from_base": "0x58",
            "offset_from_fieldptr": "0x8",
            "type": "via.GameObject"
        },
        "FlotageProcess": {
            "flags": "FamANDAssem | Family",
            "id": 110418,
            "init_data_index": 0,
            "offset_from_base": "0x68",
            "offset_from_fieldptr": "0x18",
            "type": "app.FlotageProcess"
        },
        "SwingRopeProcess": {
            "flags": "FamANDAssem | Family",
            "id": 110419,
            "init_data_index": 0,
            "offset_from_base": "0x70",
            "offset_from_fieldptr": "0x20",
            "type": "app.SwingRopeProcess"
        }
    },
    "flags": "Public | BeforeFieldInit | NativeCtor | ManagedVTable",
    "fqn": "cdbfb0f2",
    "id": 75313,
    "methods": {
        ".ctor550755": {
            "flags": "FamANDAssem | Family | HideBySig | SpecialName | RTSpecialName",
            "function": "1400522b0",
            "id": 550755,
            "impl_flags": "EmptyCtor | HasThis",
            "invoke_id": 3,
            "returns": {
                "name": "",
                "type": "System.Void"
            }
        },
        "doAwake550751": {
            "flags": "Family | Virtual | HideBySig",
            "function": "1417678a0",
            "id": 550751,
            "impl_flags": "HasThis",
            "invoke_id": 3,
            "returns": {
                "name": "",
                "type": "System.Void"
            },
            "vtable_index": 16
        },
        "doLateUpdate550754": {
            "flags": "Family | Virtual | HideBySig",
            "function": "1400b52d0",
            "id": 550754,
            "impl_flags": "HasThis",
            "invoke_id": 3,
            "returns": {
                "name": "",
                "type": "System.Void"
            },
            "vtable_index": 19
        },
        "doOnDestroy550750": {
            "flags": "Family | Virtual | HideBySig",
            "function": "1400b1410",
            "id": 550750,
            "impl_flags": "HasThis",
            "invoke_id": 3,
            "returns": {
                "name": "",
                "type": "System.Void"
            },
            "vtable_index": 20
        },
        "doStart550752": {
            "flags": "Family | Virtual | HideBySig",
            "function": "1400b3780",
            "id": 550752,
            "impl_flags": "HasThis",
            "invoke_id": 3,
            "returns": {
                "name": "",
                "type": "System.Void"
            },
            "vtable_index": 17
        },
        "doUpdate550753": {
            "flags": "Family | Virtual | HideBySig",
            "function": "14176e430",
            "id": 550753,
            "impl_flags": "HasThis",
            "invoke_id": 3,
            "returns": {
                "name": "",
                "type": "System.Void"
            },
            "vtable_index": 18
        },
        "get_Camera550748": {
            "flags": "FamANDAssem | Family | HideBySig | SpecialName",
            "function": "140061200",
            "id": 550748,
            "impl_flags": "HasRetVal | HasThis",
            "invoke_id": 4,
            "returns": {
                "name": "",
                "type": "via.Camera"
            }
        },
        "get_Player550746": {
            "flags": "FamANDAssem | Family | HideBySig | SpecialName",
            "function": "14005a350",
            "id": 550746,
            "impl_flags": "HasRetVal | HasThis",
            "invoke_id": 4,
            "returns": {
                "name": "",
                "type": "via.GameObject"
            }
        },
        "set_Camera550749": {
            "flags": "FamANDAssem | Family | HideBySig | SpecialName",
            "function": "140062dc0",
            "id": 550749,
            "impl_flags": "HasThis",
            "invoke_id": 17,
            "params": [
                {
                    "name": "value",
                    "type": "via.Camera"
                }
            ],
            "returns": {
                "name": "",
                "type": "System.Void"
            }
        },
        "set_Player550747": {
            "flags": "FamANDAssem | Family | HideBySig | SpecialName",
            "function": "14005b6b0",
            "id": 550747,
            "impl_flags": "HasThis",
            "invoke_id": 17,
            "params": [
                {
                    "name": "value",
                    "type": "via.GameObject"
                }
            ],
            "returns": {
                "name": "",
                "type": "System.Void"
            }
        }
    },
    "parent": "app.SingletonBehavior`1<app.PropsManager>",
    "properties": {
        "Camera": {
            "getter": "get_Camera",
            "id": 126015,
            "setter": "set_Camera"
        },
        "Player": {
            "getter": "get_Player",
            "id": 126014,
            "setter": "set_Player"
        }
    },
    "size": "78"
}
```
## Singletons
单例是通常专门用于游戏中某些部分的全局管理器，例如 `app.EnemyManager` 用于敌人、`app.InteractManager` 用于交互等。

## 本地单例(Native Singletons)
也是全局管理器，但是它们是使用 C++ 创建而不是 C#。这意味着它们可能没有多少数据被公开，如果有任何数据的话。

这些单例通常与引擎行为比常规的单例更相关。

## TDB 字段
列出在 TDB 中可见的给定类型的所有字段。

## TDB 方法
列出在 TDB 中可见的给定类型的所有方法。可以右键单击任何方法来打开上下文菜单。

### 上下文菜单
#### 复制地址
#### 复制名称
#### 钩子(Hook)
钩住该方法并打开一个单独的窗口，如果它已经存在则添加到该窗口中。该窗口包含您从对象浏览器中钩住的每个方法。

每个方法都包含
* 跳过函数调用
* 调用计数

如果需要知道方法是否被调用或不被调用，则非常有用。您还可以选择跳过调用原始方法。