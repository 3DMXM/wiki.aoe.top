# VR
Lua绑定VR访问。

## 方法
### `vrmod:get_controllers()`
返回活动控制器的设备索引列表。

### `vrmod:get_position(index)`
返回给定设备索引的位置。

### `vrmod:get_rotation(index)`
返回给定设备索引的旋转。

### `vrmod:get_transform(index)`
返回给定设备索引的完整变换矩阵。

### `vrmod:get_velocity(index)`
返回给定设备索引的速度。

### `vrmod:get_angular_velocity(index)`
返回给定设备索引的角速度。

### `vrmod:get_left_stick_axis()`
返回一个`Vector2f`。

### `vrmod:get_right_stick_axis()`
返回一个`Vector2f`。

### `vrmod:get_current_eye_transform(flip)`
### `vrmod:get_current_projection_matrix(flip)`
### `vrmod:get_standing_origin()`
### `vrmod:set_standing_origin(pos)`
`pos`是一个`Vector4f`。

### `vrmod:get_rotation_offset()`
### `vrmod:set_rotation_offset(quat)`
### `vrmod:recenter_view()`
### `vrmod:recenter_gui(from)`
`from`是一个`Quaternion`。

### `vrmod:get_action_set()`
### `vrmod:get_active_action_set()`
### `vrmod:get_action_trigger()`
### `vrmod:get_action_grip()`
### `vrmod:get_action_joystick()`
### `vrmod:get_action_joystick_click()`
### `vrmod:get_action_a_button()`
### `vrmod:get_action_b_button()`
### `vrmod:get_action_weapon_dial()`
### `vrmod:get_action_minimap()`
### `vrmod:get_action_block()`
### `vrmod:get_action_dpad_up`
### `vrmod:get_action_dpad_down`
### `vrmod:get_action_dpad_left`
### `vrmod:get_action_dpad_right`
### `vrmod:get_action_heal`
### `vrmod:get_left_joystick()`
返回一个`vr::VRInputValueHandle_t`。要在`vrmod:is_action_active`中用作`source`。

### `vrmod:get_right_joystick()`
返回一个`vr::VRInputValueHandle_t`。要在`vrmod:is_action_active`中用作`source`。

### `vrmod:get_right_joystick()`
### `vrmod:is_using_controllers()`
如果用户在过去的10秒内向控制器发出任何输入，则返回`true`。

### `vrmod:is_openvr_loaded()`
如果加载了OpenVR，则返回`true`。

### `vrmod:is_openxr_loaded()`
如果加载了OpenXR，则返回`true`。

### `vrmod:is_hmd_active()`
如果用户当前戴着VR头盔，则返回`true`。
### `vrmod:is_action_active(action, source)`
如果属于`source`的`action`处于活动状态，则返回`true`。

“活动”表示用户是否按住A键等`action`。
### `vrmod:is_using_hmd_oriented_audio()`
### `vrmod:toggle_hmd_oriented_audio()`
### `vrmod:apply_hmd_transform(rotation, position)`
将头戴式显示器的变换应用于给定的旋转和位置。两个参数都是输入输出参数。

### `vrmod:apply_haptic_vibration(seconds_from_now, duration, frequency, amplitude, source)`
### `vrmod:get_last_render_matrix()`