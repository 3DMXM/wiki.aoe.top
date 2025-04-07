这是一份 Lua 值和 JSON 值之间转换的函数列表，非常有用，可以用来保存配置表（最好在一个 [config save callback](re.md#reon_config_savefunction) 中），导入用户打算在外部编辑的数据，以及将大型数据结构存储在 Lua 代码之外。

`indent` 参数是一个整数，指定转储表格时缩进的空格数。0 表示禁用缩进，-1 同样禁用换行符。

支持 Lua 的布尔值、数字、字符串和表格类型（请注意下面的警告）。其他类型将被转换为 `nil` 并存储为 JSON 的 `null`。由于 JSON 的限制，非字符串表键将被转换为字符串（如果是数字）或空字符串（如果是其他类型），除非表格是一个序列（连续的整数键，从 1 开始；更多详情请参见[lua 手册](https://www.lua.org/manual/5.4/manual.html #3.4.7)）。序列被存储为 JSON 数组。

**警告：**在存储具有数字键的非序列表时，应当小心，因为这些键将被转换为字符串。必须额外工作才能将这些键转换回数字。

以下是不会在转换为 JSON 后发生变化的表格示例：
```lua
{1, 3, 2, "this is a sequence"}
{foo="bar", baz=42}
{table1={1,2,3}, table2={foo=1,bar=2}}
```
以下是会在转换为 JSON 后发生变化的表格示例：
```lua
{9, 8, nil, 6, 5} -- "hole" 序列，变成 {["1"]=9,["2"]=8,["4"]=6,["5"]=5}
{[0]=0,[1]=1,[2]=2} -- 序列不以 1 开始，变成 {["0"]=0,["1"]=1,["2"]=2}
{"foo", "bar", baz=17} -- 变成 {["1"]="foo", ["2"]="bar", baz=17}
local function f() end
{[f]="function key", funcval=f} -- 变成 {[""]="function key"}
```

## 方法

### `json.load_string(json_str)`
将 JSON 字符串转换成 Lua 值（通常是一个表）。出错返回 `nil`。

### `json.dump_string(value, [indent])`
将 Lua 值（通常是一个表）转换成 JSON 字符串。出错返回空字符串。如果未指定，`indent` 将默认为 -1。

### `json.load_file(filepath)`
从与 `reframework/data` 子目录相对应的 `filepath` 中加载 JSON 文件，并将其作为 Lua 值（通常是一个表）返回。如果文件不存在，则返回 `nil`。

### `json.dump_file(filepath, value, [indent])`
将 Lua 值（通常是一个表）转换成一个标识为 `filepath` 的 JSON 文件，相对于 `reframework/data` 子目录。如果未指定，`indent` 将默认为 4。如果转储成功，则返回 `true`，否则返回 `false`。