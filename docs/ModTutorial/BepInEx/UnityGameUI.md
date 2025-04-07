## 使用 UnityGameUI 构建UI

UnityGameUI地址：https://github.com/GlossMod/UnityGameUI

### 介绍

UnityGameUI（简称UGUI）是一个基于Unity的UI框架，可以在游戏中使用。使用 GameObject 构建，相较于之前的GUILayout大大的提高了运行效率。

### 与 GUILayout 的区别

GUILayout是运行在 OnGUI() 方法中，该方法会在每一帧都被调用，如果进行了数据调用，将浪费很多的资源，导致游戏卡顿。
UnityGameUI 是在游戏里面创建了一个 GameObject(游戏对象) ,你可以将他理解为一个厚度为0.0001的长方体，创建之后就一直在那里，通过 `SetActive(true/false)` 来控制是否显示, 在执行效率上没有效率的问题,显示设置为 `false` 之后也不会影响游戏的使用。

### 使用方法

将项目以子模块的形式添加到您的项目 然后 `using UnityGameUI`

- 需要使用 `UIControls.createUICanvas();` 创建一个 `Canvas` 当做整个UI的父级(画板)
- 使用 `UIControls.createUIPanel(GameObject canvas, string height, string width, Sprite BgSprite = null);` 创建一个 `Panel` 作为UI的容器
- 接下来就可以根据自己创意，进行自由发挥了。

### 组件

#### createUICanvas (创建画布)

画布是所有UI的父级对象，所有的UI都需要挂载到画布上，画布是一个独立的对象，可以在游戏中创建多个画布，但是一个画布只能有一个事件系统，所以如果需要多个画布，需要在每个画布上创建一个事件系统。

例子：

```cs
GameObject canvas = UIControls.createUICanvas();
```

#### createUIPanel (创建面板)

面板是UI组件的容器, 可以在面板上嵌套面板，可以将其当做容纳组件的一个框，组件放在面板的上面, 面板为矩形，可以设置宽高，背景图片，背景颜色等。

例子：

```cs
GameObject uiPanel = UIControls.createUIPanel(canvas, "300", "500", null);
uiPanel.GetComponent<Image>().color = UIControls.HTMLString2Color("#424242FF"); // 设置背景颜色
// 其他 GameObject 相关的设置也都可以直接使用 请不要被限制想象力
```

#### createUIButton (创建按钮)

按钮是一个可以点击的组件，可以设置按钮的文字，背景图片，背景颜色，点击事件等。

例子：

```cs
string backgroundColor = "#8C9EFFFF";
Vector3 localPosition = new Vector3(elementX, elementY, 0); // elementX, elementY 为按钮的位置， 0, 0位置在 Panel 的中心
GameObject button = UIControls.createUIButton(uiPanel, backgroundColor, "按钮1", btn1OnClick, localPosition);
// 可以根据自己的需求修改按钮样式
button.AddComponent<Shadow>().effectColor = UIControls.HTMLString2Color("#000000FF");   // 添加阴影
button.GetComponent<Shadow>().effectDistance = new Vector2(2, -2);              // 设置阴影偏移
button.GetComponentInChildren<Text>().fontSize = 14;     // 设置字体大小           
button.GetComponent<RectTransform>().sizeDelta = new Vector2(80, 30);    // 设置按钮大小
```

#### createUIText (创建文本)

文本是一个可以显示文字的组件，可以设置文字的内容，字体，字体大小，颜色等。

例子：

```cs
Sprite txtBgSprite = UIControls.createSpriteFrmTexture(UIControls.createDefaultTexture("#7AB900FF"));   // 背景样式
GameObject uiText = UIControls.createUIText(panel, txtBgSprite, "#FFFFFFFF");
uiText.GetComponent<Text>().text = "text";    // 设置文本内容
uiText.GetComponent<RectTransform>().localPosition = new Vector3(elementX, elementY, 0);    // 设置文本位置

// 设置字体样式
uiText.GetComponent<Text>().fontSize = 14;
uiText.GetComponent<Text>().fontStyle = FontStyle.Bold;
// ......
```

#### createUIInputField (创建输入框)

创建一个用于输入文本的输入框

例子：

```cs
// 输入框
Sprite inputFieldSprite = UIControls.createSpriteFrmTexture(UIControls.createDefaultTexture("#212121FF"));  // 背景颜色
GameObject uiInputField = UIControls.createUIInputField(panel, inputFieldSprite, "#FFFFFFFF");  
uiInputField.GetComponent<InputField>().text = defaultText; // 设置默认文本
uiInputField.GetComponent<RectTransform>().localPosition = new Vector3(elementX, elementY, 0);  // 设置输入框位置
uiInputField.GetComponent<RectTransform>().sizeDelta = new Vector2(width - 60, 30); // 设置输入框大小

// 文本框失去焦点时触发方法
uiInputField.GetComponent<InputField>().onEndEdit.AddListener((string text)=>{
    Debug.Log("您输入的内容是: " + text);
});
```

#### createUIToggle (创建复选框)

创建一个用于勾选的复选框

例子：

```cs
Sprite toggleBgSprite = UIControls.createSpriteFrmTexture(UIControls.createDefaultTexture("#3E3E42FF"));    // 背景颜色
Sprite toggleSprite = UIControls.createSpriteFrmTexture(UIControls.createDefaultTexture("#18FFFFFF"));  // 勾选颜色
GameObject uiToggle = UIControls.createUIToggle(panel, toggleBgSprite, toggleSprite);
uiToggle.GetComponentInChildren<Text>().color = Color.white;    // 设置文本颜色
uiToggle.GetComponentInChildren<Toggle>().isOn = false;     // 设置默认勾选状态
uiToggle.GetComponent<RectTransform>().localPosition = new Vector3(elementX, elementY, 0);  // 设置复选框位置
uiToggle.GetComponentInChildren<Text>().text = "Text";    // 设置文本内容
uiToggle.GetComponentInChildren<Toggle>().onValueChanged.AddListener((bool toggle)=>{
    Debug.Log($"复选框状态: {toggle}");
});
```

#### createUIDropDown (创建下拉框)

下拉框用起来稍微有点复杂,

例子：

```cs
List<string> options = new List<string>() { "选项1", "选项2", "选项3" };    // 下拉框的选项

// 创建下拉框
Sprite dropdownBgSprite = UIControls.createSpriteFrmTexture(UIControls.createDefaultTexture("#212121FF"));      // 背景颜色
Sprite dropdownScrollbarSprite = UIControls.createSpriteFrmTexture(UIControls.createDefaultTexture("#8C9EFFFF"));   // 滚动条颜色 (如果有的话
Sprite dropdownDropDownSprite = UIControls.createSpriteFrmTexture(UIControls.createDefaultTexture("#212121FF"));    // 框右侧小点的颜色
Sprite dropdownCheckmarkSprite = UIControls.createSpriteFrmTexture(UIControls.createDefaultTexture("#8C9EFFFF"));   // 选中时的颜色
Sprite dropdownMaskSprite = UIControls.createSpriteFrmTexture(UIControls.createDefaultTexture("#E65100FF"));        // 不知道是哪的颜色
Color LabelColor = UIControls.HTMLString2Color("#EFEBE9FF");
GameObject uiDropDown = UIControls.createUIDropDown(panel, dropdownBgSprite, dropdownScrollbarSprite, dropdownDropDownSprite, dropdownCheckmarkSprite, dropdownMaskSprite, options, LabelColor);
Object.DontDestroyOnLoad(uiDropDown);
uiDropDown.GetComponent<RectTransform>().localPosition = new Vector3(elementX, elementY, 0);

// 下拉框选中时触发方法
uiDropDown.GetComponent<Dropdown>().onValueChanged.AddListener((int index)=>{
    Debug.Log($"选择了: {options[index]}");
});
```
