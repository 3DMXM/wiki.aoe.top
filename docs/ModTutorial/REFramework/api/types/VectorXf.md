这里有三种 `VectorXf` 类型：
* `Vector2f`
* `Vector3f`
* `Vector4f`

## 创建
### `Vector2f.new(x, y)`
创建一个包含 `x` 和 `y` 的 `Vector2f` 对象。

### `Vector3f.new(x, y, z)`
创建一个包含 `x`, `y`, 和 `z` 的 `Vector3f` 对象。

### `Vector4f.new(x, y, z, w)`
创建一个包含 `x`, `y`, `z`, 和 `w` 的 `Vector4f` 对象。

## 字段

### `x: number`
`VectorXf` 的 X 分量。

### `y: number`
`VectorXf` 的 Y 分量。

### `z: number`
`VectorXf` 的 Z 分量。只有 `Vector3f` 和 `Vector4f` 有这个字段。

### `w: number`
`VectorXf` 的 W 分量。只有 `Vector4f` 有这个字段。

## 方法

### `self:dot(other)`
返回 `self` 和 `other` 的点积。

### `self:cross(other)`
返回 `self` 和 `other` 的叉积。

### `self:length()`
返回 `self` 的长度。

### `self:normalize()`
将 `self` 标准化。什么都不返回。

### `self:normalized()`
返回 `self` 的标准化结果。

### `self:reflect(normal)`
返回相对于法向量 `normal` 的反射向量。

### `self:refract(normal, eta)`
返回相对于法向量 `normal` 和折射率 `eta` 的折射向量。

### `self:lerp(other, t)`
返回 `self` 和 `other` 之间按照比例 `t` 进行线性插值的结果。

### `self:to_vec2()`
将 `self` 转换为 `Vector2f`。如果 `self` 已经是一个 `Vector2f`，则不可用。

### `self:to_vec3()`
将 `self` 转换为 `Vector3f`。如果 `self` 已经是一个 `Vector3f`，则不可用。

### `self:to_vec4()`
将 `self` 转换为 `Vector4f`。如果 `self` 已经是一个 `Vector4f`，则不可用。

### `self:to_mat()`
将 `self` 转换为 `Matrix4x4f`。将 `self` 视为向前的向量。

### `self:to_quat()`
将 `self` 转换为 `Quaternion`。将 `self` 视为向前的向量。

等同于 `self:to_mat():to_quat()`。

## 元方法

### `VectorXf + VectorXf`
`VectorXf` 加法运算。

### `VectorXf - VectorXf`
`VectorXf` 减法运算。

### `VectorXf * scalar`
`VectorXf` 标量乘法运算。