# 使用GUILayout来定制化高级UI
### 介绍
GUI和GUILayout都是unity的UI布局类，且都寄托在UnityEngine.IMGUIModule中，所以，我们在使用时，需要从游戏目录中将 UnityEngine.IMGUIModule.dll 引用到我们的项目中来。  
其中，  
GUI是手动布局，需要我们手动给定x,y,w,h的值；  
GUILayout是自动布局，我们只需设置每行排列数量即可；  
GUI的布局比较的繁琐，且非常不灵活，所以我比较推荐使用GUILayout来进行UI自动布局；  
关于GUILayout的使用与介绍，Unity官网有更加详细的说明，我这边就不做复杂的讲解，大家可以另行见：https://docs.unity3d.com/ScriptReference/GUILayout.html  

我这边只做基础的使用方法以及对一些常用的控件进行说明

### 制作一个窗口
上面说过GUILayout是寄托在UnityEngine.IMGUIModule中的类了，那么，请自行引用UnityEngine.IMGUIModule.dll（在游戏目录 XXX_Data\\Managed中）文件到vs工程中。

现在来给大家介绍一个新函数—— OnGUI()；  
OnGUI()的作用和之前我们介绍的Update()是同类型的，都是在游戏运行后会一直循环执行函数中的内容，不过OnGUI()是unity专门为GUI设定的一个函数，虽然我们窗口写到OnGUI()和写到Update()都可以达到我们想要的效果，但是为了代码更加的规范，我建议大家将UI相关的代码写到OnGUI()中，监听插件相关的代码写到Update()中。

所以，若我们想实现按F9打开/关闭窗口的“开关”，我们可以这样写：
```csharp
using System;
using BepInEx;
using BepInEx.Configuration;
using UnityEngine;

namespace AdvancedUI
{
    [BepInPlugin("aoe.top.plugins.AdvancedUI", "高级UI示例", "1.0.0.0")]
    public class AdvancedUI : BaseUnityPlugin
    {
        // 窗口开关
        public bool DisplayingWindow = false;
        // 启动按键
        private ConfigEntry ShowCounter { get; set; }

        [Obsolete]
        public void Start()
        {
            // 允许用户自定义启动快捷键
            ShowCounter = Config.AddSetting("打开窗口快捷键", "Key", new BepInEx.Configuration.KeyboardShortcut(KeyCode.F9));
        }
        public void Update()
        {
            // 监听脚本按键按下
            if (ShowCounter.Value.IsDown())
            {
                DisplayingWindow = !DisplayingWindow;
                if (DisplayingWindow)
                {
                    Debug.Log("打开窗口");
                }
                else
                {
                    Debug.Log("关闭窗口");
                }
            }
        }

        // GUI函数
        private void OnGUI()
        {
            if (this.DisplayingWindow)
            {
                // 定义窗口位置 x y 宽 高
                Rect windowRect = new Rect(500, 200, 500, 300);
                // 创建一个新窗口
                // 注意：第一个参数(20210218)为窗口ID，ID尽量设置的与众不同，若与其他Mod的窗口ID相同，将会导致窗口冲突
                windowRect = GUI.Window(20210218, windowRect, DoMyWindow, "我的一个窗口");

            }
        }

        public void DoMyWindow(int winId)
        {

        }
    }
}

```

以上代码即可简单实现按F9打开/关闭窗口：  
![](https://mod.3dmgame.com/static/upload/mod/202102/MOD602e380b844af.png)

### 自动UI布局

定义新的区域：GUILayout.BeginArea  
默认，GUILayout都是从左上角0,0坐标开始进行自动布局的，有时候，我们希望它显示在窗口中的其他位置，我们则需要使用GUILayout.BeginArea来定义一个新的区域，然后再将我们的控件写进去。

注意：GUILayout.BeginArea需要搭配 GUILayout.EndArea一起使用，否则会报错。

示例：
```csharp
public void DoMyWindow(int winId)
{
        GUILayout.BeginArea(new Rect(10, 20, 490, 250));
        // 这里的大括号是可选的，我个人为了代码的阅读性,习惯性的进行了添加
        // 建议大家也使用大括号这样包裹起来，让代码看起来不那么的乱
        {
                GUILayout.Label("这是一行普通的文本框");
                if (GUILayout.Button("按钮1"))
                {
                        Debug.Log("你点击了按钮1");
                }
                if (GUILayout.Button("按钮2"))
                {
                        Debug.Log("你点击了按钮2");
                }
        }
        GUILayout.EndArea();
}
```
运行结果：
![](https://mod.3dmgame.com/static/upload/mod/202102/MOD602e3852bb3d2.png)

### 横向自动布局：GUILayout.BeginHorizontal
默认，GUILayout是竖向自动排列的，但我们可以使用GUILayout.BeginHorizontal让我们的控件进行横向排列。

注意：GUILayout.BeginHorizontal需要与GUILayout.EndHorizontal配合使用，否则会报错。

示例：
```csharp
public void DoMyWindow(int winId)
{
        GUILayout.BeginArea(new Rect(10, 20, 480, 250));
        {
                GUILayout.Label("这是一行普通的文本框");
                // 第一行
                GUILayout.BeginHorizontal();
                {
                        if (GUILayout.Button("按钮1.1"))
                        {
                                Debug.Log("你点击了按钮1.1");
                        }
                        if (GUILayout.Button("按钮1.2"))
                        {
                                Debug.Log("你点击了按钮1.2");
                        }
                        if (GUILayout.Button("按钮1.3"))
                        {
                                Debug.Log("你点击了按钮1.3");
                        }
                        if (GUILayout.Button("按钮1.4"))
                        {
                                Debug.Log("你点击了按钮1.4");
                        }
                }
                GUILayout.EndHorizontal();

                // 第二行
                GUILayout.BeginHorizontal();
                {
                        if (GUILayout.Button("按钮2.1"))
                        {
                                Debug.Log("你点击了按钮2.1");
                        }
                        if (GUILayout.Button("按钮2.2"))
                        {
                                Debug.Log("你点击了按钮2.2");
                        }
                        if (GUILayout.Button("按钮2.3"))
                        {
                                Debug.Log("你点击了按钮2.3");
                        }
                        if (GUILayout.Button("按钮2.4"))
                        {
                                Debug.Log("你点击了按钮2.4");
                        }
                }
                GUILayout.EndHorizontal();

        }
        GUILayout.EndArea();
}
```
运行结果：
![](https://mod.3dmgame.com/static/upload/mod/202102/MOD602e389fc2e52.png)

### 窗口滚动条：GUILayout.BeginScrollView
若我们的内容太多，又不想制作分页，那么就可能需要用到滚动条了，滚动条需要定义一个全局 Vector2 变量来接收、传递、储存滚动条的x,y坐标位置；

注意：GUILayout.BeginScrollView需与GUILayout.EndHorizontal配合使用，否则会报错

示例：
```csharp
private Vector2 scrollPosition;
public void DoMyWindow(int winId)
{
        GUILayout.BeginArea(new Rect(10, 20, 480, 250));
        {
                GUILayout.Label("这是一行普通的文本框");
                
                // 第一行
                GUILayout.BeginHorizontal();
                {
                        if (GUILayout.Button("按钮1.1"))
                        {
                                Debug.Log("你点击了按钮1.1");
                        }
                        if (GUILayout.Button("按钮1.2"))
                        {
                                Debug.Log("你点击了按钮1.2");
                        }
                        if (GUILayout.Button("按钮1.3"))
                        {
                                Debug.Log("你点击了按钮1.3");
                        }
                        if (GUILayout.Button("按钮1.4"))
                        {
                                Debug.Log("你点击了按钮1.4");
                        }
                }
                GUILayout.EndHorizontal();

                // 第二行
                GUILayout.BeginHorizontal();
                {
                        if (GUILayout.Button("按钮2.1"))
                        {
                                Debug.Log("你点击了按钮2.1");
                        }
                        if (GUILayout.Button("按钮2.2"))
                        {
                                Debug.Log("你点击了按钮2.2");
                        }
                        if (GUILayout.Button("按钮2.3"))
                        {
                                Debug.Log("你点击了按钮2.3");
                        }
                        if (GUILayout.Button("按钮2.4"))
                        {
                                Debug.Log("你点击了按钮2.4");
                        }
                }
                GUILayout.EndHorizontal();

                // 滚动条区域
                scrollPosition = GUILayout.BeginScrollView(scrollPosition, false, false, GUILayout.Width(480), GUILayout.Height(150));
                {
                        if (GUILayout.Button("按钮3"))
                        {
                                Debug.Log("你点击了按钮3");
                        }
                        if (GUILayout.Button("按钮4"))
                        {
                                Debug.Log("你点击了按钮4");
                        }
                        if (GUILayout.Button("按钮5"))
                        {
                                Debug.Log("你点击了按钮5");
                        }
                        if (GUILayout.Button("按钮6"))
                        {
                                Debug.Log("你点击了按钮6");
                        }
                        if (GUILayout.Button("按钮7"))
                        {
                                Debug.Log("你点击了按钮7");
                        }
                        if (GUILayout.Button("按钮8"))
                        {
                                Debug.Log("你点击了按钮8");
                        }
                        if (GUILayout.Button("按钮9"))
                        {
                                Debug.Log("你点击了按钮9");
                        }
                        if (GUILayout.Button("按钮10"))
                        {
                                Debug.Log("你点击了按钮10");
                        }
                }
                GUILayout.EndScrollView();

        }
        GUILayout.EndArea();
}

```

运行结果：
![](https://mod.3dmgame.com/static/upload/mod/202102/MOD602e38e88f021.png)

