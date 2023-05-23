这是文件系统API。~~REFramework有意限制脚本访问常规的Lua `io` API，以使脚本不能无限制地访问用户系统。~~ 取而代之的是，该API专注于 `reframework/data` 子目录。

在最新版本的REFramework中，完全支持 `io` API，但它只能访问 `reframework/data` 目录和标准输出/输入/错误流。`io.popen` 也已被删除。

`io` API可以通过在任何函数的文件路径字符串开头传递 `$natives` 令牌来访问 `natives` 目录。

## 方法

### `fs.glob(filter)`
返回与 `filter` 匹配的文件路径表。`filter` 应为您希望匹配的文件的正则表达式字符串。

#### 示例

```lua
-- 获取我的模组JSON文件。
local json_files = fs.glob([[my-cool-mod\\.*json]])

-- 遍历它们。
for k, v in ipairs(json_files) do
    -- v 将是类似于 `my-cool-mod\config-file-1.json` 的东西。
end
```

### `fs.read(filename)`
读取 `filename` 并将数据作为字符串返回。

### `fs.write(filename, data)`
将 `data` 写入到 `filename`。`data` 是一个字符串。