## imgui
imgui是一个用于创建用户界面的库，主要提供了一系列的UI控件，包括按钮、文本编辑器、滑块等。

以下为一些常用的API:

### `imgui.begin_window(name, open, flags)`
创建带有标题`name`的新窗口。

`open` 是一个布尔值，可以为 `nil`。如果不是 `nil`，则在窗口的右上角将显示一个关闭按钮。

`flags`-- ImGuiWindowFlags.

`begin_window`必须对应一个`end_window`调用。

此函数只能在`on_frame`而不是`on_draw_ui`中调用。

返回一个布尔值。如果用户想关闭窗口，则返回false。

### `imgui.end_window()`
结束最后一个`begin_window`调用。 必填项。

### `imgui.begin_child_window(size, border, flags)`
`size` - Vector2f

`border` - bool

`flags` - ImGuiWindowFlags

### `imgui.end_child_window()`
### `imgui.begin_group()`
### `imgui.end_group()`

### `imgui.begin_rect()`
### `imgui.end_rect(additional_size, rounding)`
这两个方法在`begin_rect`和`end_rect`之间的元素周围绘制一个矩形

### `imgui.button(label)`
绘制带有“label”文本的按钮。

用户按下按钮时返回“true”。

### `imgui.small_button(label)`

### `imgui.invisible_button(id, size, flags)`
`size`是Vector2f或大小为2的数组。

### `imgui.arrow_button(id, dir)`
`dir`是一个`ImguiDir`

### `imgui.text(text)`
绘制文本。

### `imgui.text_colored(text, color)`
以颜色绘制文本。

`color`是ARGB格式的整数颜色。

### `imgui.checkbox(label, value)`
返回元组“changed”，“value”

### `imgui.drag_float(label, value, speed, min, max, display_format (optional))`
返回元组`changed`，`value`

### `imgui.drag_float2(label, value (Vector2f), speed, min, max, display_format (optional))`
返回元组`changed`，`value`

### `imgui.drag_float3(label, value (Vector3f), speed, min, max, display_format (optional))`
返回元组`changed`，`value`

### `imgui.drag_float4(label, value (Vector4f), speed, min, max, display_format (optional))`
返回元组`changed`，`value`

### `imgui.drag_int(label, value, speed, min, max, display_format (optional))`
返回元组`changed`，`value`

### `imgui.slider_float(label, value, min, max, display_format (optional))`
返回元组`changed`，`value`

### `imgui.slider_int(label, value, min, max, display_format (optional))`
返回元组`changed`，`value`

### `imgui.input_text(label, value, flags (optional))`
返回元组`changed`，`value`，`selection_start`，`selection_end`

### `imgui.input_text_multiline(label, value, size, flags (optional))`
返回元组`changed`，`value`，`selection_start`，`selection_end`

### `imgui.combo(label, selection, values)`
返回元组`changed`，`value`。

当选择更改时，`changed`为`true`。

`value`是`values`(一个表)中的选择索引。

`values`可以是具有任何类型键的表，只要值是字符串即可。

### `imgui.color_picker(label, color, flags)`

返回元组`changed`，`value`。`颜色`是ABGR格式的整数颜色，`imgui`和`draw`API期望。

### `imgui.color_picker_argb(label, color, flags)`

返回元组`changed`，`value`。`color`是ARGB格式的整数颜色。

### `imgui.color_picker3(label, color (Vector3f), flags)`

返回元组`changed`，`value`

### `imgui.color_picker4(label, color (Vector4f), flags)`

返回元组`changed`，`value`

### `imgui.color_edit(label, color, flags)`

返回元组`changed`，`value`。`颜色`是ABGR格式的整数颜色，`imgui`和`draw`API期望。

### `imgui.color_edit_argb(label, color, flags)`

返回元组`changed`，`value`。`color`是ARGB格式的整数颜色。

### `imgui.color_edit3(label, color (Vector3f), flags)`

返回元组`changed`，`value`

### `imgui.color_edit4(label, color (Vector4f), flags)`

返回元组`changed`，`value`

`color_picker/edit`API的`flags`：`ImGuiColorEditFlags`

### `imgui.tree_node(label)`
### `imgui.tree_node_ptr_id(id, label)`
### `imgui.tree_node_str_id(id, label)`
### `imgui.tree_pop()`
所有上面的`tree`函数都必须有相应的`tree_pop`！

### `imgui.same_line()`
### `imgui.spacing()`
### `imgui.new_line()`
### `imgui.is_item_hovered(flags)`
### `imgui.is_item_active()`
### `imgui.is_item_focused()`

### `imgui.collapsing_header(name)`

### `imgui.load_font(filepath, size, [ranges])`
从指定的大小为“size”的“reframework/fonts”子目录中加载字体文件，包括可选的Unicode“ranges”(以0结尾的开始、结束对数组)。返回用于与`imgui.push_font()`一起使用的句柄。如果`filepath`为nil，则会在指定的大小下加载默认字体。

### `imgui.push_font(font)`
为接下来的一组ImGui窗口小部件/绘图命令设置要使用的字体，直到调用`imgui.pop_font`为止。

### `imgui.pop_font()`
取消之前推入的字体。

### `imgui.get_default_font_size()`
返回REFramework UI的默认字体大小。

### `imgui.set_next_window_pos(pos (Vector2f或table)，condition，pivot（Vector2f或table))`
`condition`是`ImGuiCond`枚举。

```cpp
enum ImGuiCond_
{
    ImGuiCond_None          = 0,        // No condition (always set the variable), same as _Always
    ImGuiCond_Always        = 1 << 0,   // No condition (always set the variable)
    ImGuiCond_Once          = 1 << 1,   // Set the variable once per runtime session (only the first call will succeed)
    ImGuiCond_FirstUseEver  = 1 << 2,   // Set the variable if the object/window has no persistently saved data (no entry in .ini file)
    ImGuiCond_Appearing     = 1 << 3    // Set the variable if the object/window is appearing after being hidden/inactive (or the first time)
};
```

### `imgui.set_next_window_size(size (Vector2f或table)，condition)`
`condition`是`ImGuiCond`枚举。

### `imgui.push_id(id)`
`id`可以是`int`、`const char*`或`void*`。

### `imgui.pop_id()`

### `imgui.get_id()`

### `imgui.get_mouse()`
返回一个 `Vector2f` 对象，表示用户在窗口空间中的鼠标位置。

## 待记录的方法
该函数的具体实现可以在 [https://github.com/praydog/REFramework/blob/master/src/mods/bindings/ImGui.cpp](https://github.com/praydog/REFramework/blob/master/src/mods/bindings/ImGui.cpp) 找到，直至文档编写完成。

### `imgui.get_key_index(...)`

### `imgui.is_key_down(...)`

### `imgui.is_key_pressed(...)`

### `imgui.is_key_released(...)`

### `imgui.is_mouse_down(...)`

### `imgui.is_mouse_clicked(...)`

### `imgui.is_mouse_released(...)`

### `imgui.is_mouse_double_clicked(...)`

### `imgui.indent(...)`

### `imgui.unindent(...)`

### `imgui.begin_tooltip(...)`

### `imgui.end_tooltip(...)`

### `imgui.set_tooltip(...)`

### `imgui.open_popup(...)`

### `imgui.begin_popup(...)`

### `imgui.begin_popup_context_item(...)`

### `imgui.end_popup(...)`

### `imgui.close_current_popup(...)`

### `imgui.is_popup_open(...)`

### `imgui.calc_text_size(...)`

### `imgui.get_window_size(...)`

### `imgui.get_window_pos(...)`

### `imgui.set_next_item_open(...)`

### `imgui.begin_list_box(...)`

### `imgui.end_list_box(...)`

### `imgui.begin_menu_bar(...)`

### `imgui.end_menu_bar(...)`

### `imgui.begin_main_menu_bar(...)`

### `imgui.end_main_menu_bar(...)`

### `imgui.begin_menu(...)`

### `imgui.end_menu(...)`

### `imgui.menu_item(...)`

### `imgui.get_display_size(...)`

### `imgui.push_item_width(...)`

### `imgui.pop_item_width(...)`

### `imgui.set_next_item_width(...)`

### `imgui.calc_item_width(...)`

### `imgui.push_style_color(...)`

### `imgui.pop_style_color(...)`

### `imgui.push_style_var(...)`

### `imgui.pop_style_var(...)`

### `imgui.get_cursor_pos(...)`

### `imgui.set_cursor_pos(...)`

### `imgui.get_cursor_start_pos(...)`

### `imgui.get_cursor_screen_pos(...)`

### `imgui.set_cursor_screen_pos(...)`

### `imgui.set_item_default_focus(...)`

## Table API
### `imgui.begin_table(...)`

### `imgui.end_table(...)`

### `imgui.table_next_row(...)`

### `imgui.table_next_column(...)`

### `imgui.table_set_column_index(...)`

### `imgui.table_setup_column(...)`

### `imgui.table_setup_scroll_freeze(...)`

### `imgui.table_headers_row(...)`

### `imgui.table_header(...)`

### `imgui.table_get_sort_specs(...)`

### `imgui.table_get_column_count(...)`

### `imgui.table_get_column_index(...)`

### `imgui.table_get_row_index(...)`

### `imgui.table_get_column_name(...)`

### `imgui.table_get_column_flags(...)`

### `imgui.table_set_bg_color(...)`
