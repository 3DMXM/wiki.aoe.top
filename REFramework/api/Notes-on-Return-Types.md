本页面涉及以下函数：
* `sdk.call_native_func`
* `sdk.call_object_func`
* `sdk.get_native_field`
* `REManagedObject:call`
* `REManagedObject:get_field`

这些函数对一些类型进行了自动转换：
* `System.String`
    * 转换为普通的 Lua 字符串
* `System.Int`、`System.UInt`、`System.Boolean`、`System.Single` 类型
    * 转换为本机 Lua 等效类型
* `via.vec2`、`via.vec3`、`via.vec4`
    * 转换为 Vector2f、Vector3f、Vector4f
* `via.mat4`
    * 转换为 Matrix4x4f