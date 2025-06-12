# 指南

## 01. 网格

### 目的
- 建模背景或交互对象，导出为FBX格式，将网格导入Modkit后在游戏内放置和使用。

### 所需文件
- 完成的FBX文件（骨骼或静态网格）
- 基础色、组合贴图和法线贴图等纹理

---

### FBX导出设置指南
| 项目   | 设置/说明   |
| ------ | ----------- |
| 比例   | 1单位=1厘米 |
| Nanite | 启用        |

> ⚠️ 从Blender/Maya/3ds Max导出时，即使创建了UV2，除非明确包含否则可能会被忽略。

---

### 在Modkit中导入的步骤
1. 启动Modkit
2. 导入网格（根据情况选择）：
   a. 点击`导入静态网格`
   b. 点击`导入骨骼网格`
3. 选择准备好的FBX文件
4. 检查导入设置
5. `导入静态网格`：
   - 启用Nanite（推荐用于优化）
   - 材质：可自动生成，但建议手动重新分配
6. `导入骨骼网格`：
   - 材质曲线后缀
   - Index[0]：
     - `.mat`（用于将动画曲线值映射到材质参数）
7. 点击`导入`→ 网格加载完成

---

### 导入后检查清单
| 类型     | 图片                                                                  | 检查内容                                                                               |
| -------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 骨骼网格 | ![示例图片](https://p.aoe.top/playinzoiDoc/media/Modkit/Build_01.jpg) | 检查资产用户数据→Index[0]→动画曲线元数据                                               |
| 静态网格 | ![示例图片](https://p.aoe.top/playinzoiDoc/media/Modkit/Build_02.jpg) | - 碰撞<br>1. 使用简单碰撞作为复杂（推荐）<br>2. 使用复杂碰撞作为简单<br>3. 手动创建UCX |

---

### 常见问题及解决方法
| 问题       | 原因             | 解决方案                       |
| ---------- | ---------------- | ------------------------------ |
| 动画不兼容 | 缺少材质曲线后缀 | 在`index[0]`中输入`.mat`       |
| 导入错误   | 缺少碰撞         | 手动创建或使用简单碰撞作为复杂 |

---

### 章节总结
| 检查清单               | 完成 |
| ---------------------- | ---- |
| 比例是否设置为1cm？    | ✅    |
| 碰撞设置是否正确？     | ✅    |
| 是否应用材质曲线后缀？ | ✅    |
| 是否启用Nanite？       | ✅    |

---

## 02. 材质

| 编号 | 路径                                                                                   | 纹理用途                                                                                                                 | 用途                             |
| ---- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| 1    | `/Game/BG/Material/MasterMaterial/M_Layer_BLUE.M_Layer_BLUE`                           | - 层参数用途<br> - R: BC, N, Packed, Mask<br> - G: BC, N, Packed, Mask<br> - BG: BC, N, Packed, Mask<br> - Detail: OC, N | 大多数对象使用的默认材质         |
| 2    | `/Game/BG/citysample/Prop/Material/M_Prop_Main.M_Prop_Main`                            | BC, N, OMR                                                                                                               | 无图层的基材                     |
| 3    | `/Game/BG/Material/MasterMaterial/MasterLayer/ML_Default.ML_Default`                   | BC, Normal, Packed(AOMRD)                                                                                                | 与基材一起使用的层，适合分块贴图 |
| 4    | `/Game/BG/MSPresets/M_MS_Foliage_Material/M_MS_Foliage_Material.M_MS_Foliage_Material` | BC, Normal, ORT                                                                                                          | 草、树等使用                     |
| 5    | `/Game/BG/Material/MasterMaterial/M_Glass_BLUE.M_Glass_BLUE`                           | 不需要                                                                                                                   | 半透明玻璃使用                   |
| 6    | `/Game/BG/Material/MasterMaterial/M_GlassThin_BLUE.M_GlassThin_BLUE`                   | 不需要                                                                                                                   | 薄玻璃使用                       |
| 7    | `/Game/BG/Material/MasterMaterial/M_Layer_BLUE_Clock.M_Layer_BLUE_Clock`               | - R: BC, N, Packed, Mask<br> - G: BC, N, Packed, Mask<br> - BG: BC, N, Packed, Mask<br> - 无细节层                       | 钟表使用                         |

---

## 03. 纹理

| 名称               | 说明                                          |
| ------------------ | --------------------------------------------- |
| **BC**             | 基础色（Albedo）                              |
| **N**              | 法线贴图                                      |
| **OMR**            | R: AO / G: 金属度 / B: 粗糙度                 |
| **OC**             | R: AO / G: 曲率 / B: 自发光                   |
| **ORT**            | R: 不透明度 / G: 粗糙度 / B: 透光度           |
| **Packed (AOMRD)** | R: AO / G: 金属度 / B: 粗糙度 / A: D (未使用) |

---

### 纹理设置检查清单
| 编号 | 纹理                   | 压缩设置                     | sRGB | 虚拟纹理流送 |
| ---- | ---------------------- | ---------------------------- | ---- | ------------ |
| 1    | 反照率/基础色/颜色贴图 | Default(DXT1/5, DX11上BC1/3) | ✅    | ✅            |
| 2    | 法线贴图               | Normalmap(DXT5, DX11上BC5)   | ❌    | ✅            |
| 3    | OMR                    | Masks(no sRGB)               | ❌    | ✅            |
| 4    | OC                     | Masks(no sRGB)               | ❌    | ✅            |
| 5    | ORT                    | Masks(no sRGB)               | ❌    | ✅            |
| 6    | Packed(AOMRD)          | Masks(no sRGB)               | ❌    | ✅            |