# SDK
大多数事情的主要起点。

## 方法
### `sdk.get_tdb_version()`
返回类型数据库的版本。可以很好地近似游戏正在运行的 RE 引擎的版本。

### `sdk.game_namespace(name)`
返回 `game_namespace.name`。

DMC5：`name` 会被转换为 `app.name`

RE3：`name` 会被转换为 `offline.name`

### `sdk.get_thread_context()`

### `sdk.get_native_singleton(name)`
返回一个 `void*`。可与 [sdk.call_native_func](#sdkcall_native_funcobject-type_definition-method_name-args) 一起使用。

可能的单例可以在对象浏览器的 Native Singletons 视图中找到。
### `sdk.get_managed_singleton(name)`
返回一个 [REManagedObject*](types/REManagedObject.md)。

可能的单例可以在对象浏览器的 Singletons 视图中找到。
### `sdk.find_type_definition(name)`
返回一个 [RETypeDefinition*](types/RETypeDefinition.md)。

### `sdk.typeof(name)`
返回一个 `System.Type`。

相当于调用 `sdk.find_type_definition(name):get_runtime_type()`。

与 C# 中的 `typeof` 相同。

### `sdk.create_instance(typename, simplify)`
返回一个 [REManagedObject](types/REManagedObject.md)。

相当于调用 `sdk.find_type_definition(typename):create_instance()`

`simplify` - 默认为 `false`。如果此函数返回 `nil`，请将其设置为 `true`。

### `sdk.create_managed_string(str)`
从 `str` 创建并返回一个新的 `System.String`。

### `sdk.create_managed_array(type, length)`
使用给定的 `type` 和 `length` 创建并返回一个新的 [SystemArray](types/SystemArray.md)。

`type` 可以是以下任何一种：

* 从 [sdk.typeof](#sdktypeofname) 返回的 `System.Type`
* 从 [sdk.find_type_definition](#sdkfind_type_definitionname) 返回的 [RETypeDefinition](types/RETypeDefinition.md)
* 表示类型名称的 Lua `string`。

任何其他类型都将抛出 Lua 错误。

如果 `type` 无法解析为有效的 `System.Type`，则会抛出 Lua 错误。


### `sdk.create_sbyte(value)`
如果给定 `value`，则返回一个类型为 `System.SByte` 的完全构建好的 [REManagedObject](types/REManagedObject.md)。

### `sdk.create_byte(value)`
如果给定 `value`，则返回一个类型为 `System.Byte` 的完全构建好的 [REManagedObject](types/REManagedObject.md)。

### `sdk.create_int16(value)`
如果给定 `value`，则返回一个类型为 `System.Int16` 的完全构建好的 [REManagedObject](types/REManagedObject.md)。

### `sdk.create_uint16(value)`
如果给定 `value`，则返回一个类型为 `System.UInt16` 的完全构建好的 [REManagedObject](types/REManagedObject.md)。

### `sdk.create_int32(value)`
如果给定 `value`，则返回一个类型为 `System.Int32` 的完全构建好的 [REManagedObject](types/REManagedObject.md)。

### `sdk.create_uint32(value)`
如果给定 `value`，则返回一个类型为 `System.UInt32` 的完全构建好的 [REManagedObject](types/REManagedObject.md)。

### `sdk.create_int64(value)`
如果给定 `value`，则返回一个类型为 `System.Int64` 的完全构建好的 [REManagedObject](types/REManagedObject.md)。

### `sdk.create_uint64(value)`
如果给定 `value`，则返回一个类型为 `System.UInt64` 的完全构建好的 [REManagedObject](types/REManagedObject.md)。

### `sdk.create_single(value)`
如果给定 `value`，则返回一个类型为 `System.Single` 的完全构建好的 [REManagedObject](types/REManagedObject.md)。

### `sdk.create_double(value)`
如果给定 `value`，则返回一个类型为 `System.Double` 的完全构建好的 [REManagedObject](types/REManagedObject.md)。

### `sdk.create_resource(typename, resource_path)`
返回一个 `REResource`。

### `sdk.create_userdata(typename, userdata_path)`
返回一个 [REManagedObject](types/REManagedObject.md)，它是 `via.UserData`。`typename` 可以为 `"via.UserData"`，除非你知道完整的 typename。

### `sdk.deserialize(data)`
从 `data` 生成 [REManagedObject](types/REManagedObject.md) 列表。

`data` 是原始 RSZ 数据，例如在 `.scn` 文件中，从头部的 `RSZ` 魔数开始。

`data` 必须以数组格式作为字节表。

示例用法：
```
local rsz_data = json.load_file("Foobar.json")
local objects = sdk.deserialize(rsz_data)

for i, v in ipairs(objects) do
    local obj_type = v:get_type_definition()
    log.info(obj_type:get_full_name())
end
```

### `sdk.call_native_func(object, type_definition, method_name, args...)`
返回值取决于方法的返回值。

如果有多个参数不同但名字相同的函数，则可以传递完整的函数原型作为 `method_name`。

只应与本机类型一起使用，而不与 [REManagedObject](types/REManagedObject.md) 一起使用（尽管如果需要，也可以这样做）。

示例：
```lua
local scene_manager = sdk.get_native_singleton("via.SceneManager")
local scene_manager_type = sdk.find_type_definition("via.SceneManager")
local scene = sdk.call_native_func(scene_manager, scene_manager_type, "get_CurrentScene")

if scene ~= nil then
    -- 因为 scene 是受管对象而不是本机对象，所以我们可以像这样调用：
    scene:call("set_TimeScale", 5.0)
end
```
### `sdk.call_object_func(managed_object, method_name, args...)`
返回值取决于方法的返回值。

如果有多个参数不同但名字相同的函数，则可以传递完整的函数原型作为 `method_name`。

也可以使用以下替代调用方法：`managed_object:call(method_name, args...)`

### `sdk.get_native_field(object, type_definition, field_name)`
### `sdk.set_native_field(object, type_definition, field_name, value)`

### `sdk.get_primary_camera()`
返回一个 [REManagedObject*](types/REManagedObject.md)。返回引擎正在使用的当前相机。

### `sdk.hook(method_definition, pre_function, post_function, ignore_jmp)`
为 [method_definition](types/REMethodDefinition.md) 创建挂钩，拦截游戏对其进行的所有调用。

`ignore_jmp` - 跳过尝试跟踪函数中的第一个 jmp。默认值为 `false`。

使用 `pre_function` 和 `post_function`，可以修改这些函数的行为。

注意：某些本机方法可能无法使用此方法挂钩，例如它们只是本机函数的包装器。我们需要从我们的端口完成一些额外的工作才能使它们正常工作。
预处理函数和后处理函数如下所示：
```lua
local function pre_function(args)
    -- args 可修改
    -- args[1] = thread_context
    -- args[2] = "this"/对象指针
    -- 其余参数为实际参数
    -- 实际参数从静态函数中的 args[2] 开始
    -- 有些本地函数将对象从 args[1] 开始，其余参数从 args[2] 开始
    -- 所有参数都是 void* 类型，不会自动转换为它们各自的类型。
    -- 您需要执行 sdk.to_managed_object(args[2])
    -- 或 sdk.to_int64(args[3]) 等操作以更好地交互或读取参数。

    -- 可选：指定 sdk.PreHookResult
    -- 例如：
    -- return sdk.PreHookResult.SKIP_ORIGINAL -- 防止调用原始函数
    -- return sdk.PreHookResult.CALL_ORIGINAL -- 调用原始函数，与不返回任何内容相同
end

local function post_function(retval)
    -- 如果不想要原始的返回值，可以返回其他东西
    -- 注意：如果从 pre_function 返回了 SKIP_ORIGINAL，则仍将调用 post_function
    -- 因此，如果您的函数希望返回有效值，请记住这一点，因为 retval 将无效。
    -- 确保将自定义的 retvals 转换为 sdk.to_ptr(retval)
    return retval
end
```

示例挂钩：
```lua
local function on_pre_get_timescale(args)
end

local function on_post_get_timescale(retval)
    -- 让游戏以 5 倍速运行
    -- TODO：使类似这样的返回值转换不是必需的
    return sdk.float_to_ptr(5.0)
end

sdk.hook(sdk.find_type_definition("via.Scene"):get_method("get_TimeScale"), on_pre_get_timescale, on_post_get_timescale)
```

### `sdk.hook_vtable(obj, method, pre, post)`
类似于 `sdk.hook`，但是基于 **每个对象** 而非全局地钩住函数，适用于目标方法是 **虚拟方法** 的情况。

### `sdk.is_managed_object(value)`
如果 `value` 是有效的 [REManagedObject](types/REManagedObject.md)，则返回 true。

仅在必要时使用。执行一堆检查并频繁调用 [IsBadReadPtr](https://docs.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-isbadreadptr)。

### `sdk.to_managed_object(value)`
尝试将 `value` 转换为 [REManagedObject*](types/REManagedObject.md)。

`value` 可以是以下任意类型：

* [REManagedObject*](types/REManagedObject.md)，在这种情况下原样返回
* 可转换为 `uintptr_t` 的 lua 数字，表示对象的地址
* `void*`

任何其他类型都将返回 `nil`。

不是有效的 [REManagedObject*](types/REManagedObject.md) 的 `value` 将返回 `nil`，相当于在其上调用 [sdk.is_managed_object](#sdkis_managed_objectvalue)。

### `sdk.to_double(value)`
尝试将 `value` 转换为 `double`。

`value` 可以是以下任意类型：

* `void*`

### `sdk.to_float(value)`
尝试将 `value` 转换为 `float`。

`value` 可以是以下任意类型：
* `void*`

### `sdk.to_int64(value)`
尝试将 `value` 转换为 `int64`。

`value` 可以是以下任意类型：
* `void*`

如果需要更小的数据类型，可以执行：
* `(sdk.to_int64(value) & 1) == 1` 获取布尔值
* `(sdk.to_int64(value) & 0xFF)` 获取无符号字节
* `(sdk.to_int64(value) & 0xFFFF)` 获取无符号短整型（2 字节）
* `(sdk.to_int64(value) & 0xFFFFFFFF)` 获取无符号整型（4 字节）

### `sdk.to_ptr(value)`
尝试将 `value` 转换为 `void*`。

`value` 可以是以下任意类型：

* [REManagedObject*](types/REManagedObject.md)
* 可转换为 `int64_t` 的 lua 数字
* 可转换为 `double` 的 lua 数字
* lua 布尔值
* `void*`，在这种情况下原样返回

任何其他类型都将返回 `nil`。

### `sdk.float_to_ptr(number)`
将 `number` 转换为 `void*`。

## 枚举
### `sdk.PreHookResult`
* `sdk.PreHookResult.CALL_ORIGINAL`
* `sdk.PreHookResult.SKIP_ORIGINAL`