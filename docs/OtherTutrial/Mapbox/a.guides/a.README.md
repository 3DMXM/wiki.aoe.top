# Mapbox GL 中文文档

> 当前版本：v3.11.0 [查看更新日志](https://github.com/mapbox/mapbox-gl-js/releases)

- [x] 自定义地图样式
- [x] 快速矢量地图
- [x] 与其他Mapbox工具兼容

[安装](https://docs.mapbox.com/mapbox-gl-js/guides/install/) | [在GitHub上贡献](https://github.com/mapbox/mapbox-gl-js)

Mapbox GL JS是一个客户端JavaScript库，用于使用Mapbox的现代地图技术构建Web地图和Web应用程序。您可以使用Mapbox GL JS在Web浏览器或客户端中显示Mapbox地图，添加用户交互功能，并自定义应用程序中的地图体验。

<<< @/OtherTutrial/code/guides-code-1.html

在本页上了解有关如何在您自己的应用程序中使用Mapbox GL JS的更多信息。想立即开始使用？请查看[快速入门指南](https://docs.mapbox.com/mapbox-gl-js/guides/install/)，或查看我们的[示例](https://docs.mapbox.com/mapbox-gl-js/example/)。

## 使用场景

Mapbox GL JS的使用场景包括：

- 可视化和动画地理数据
- 查询和过滤地图上的特征
- 在Mapbox样式的图层之间放置您的数据
- 动态显示和样式化地图上的自定义客户端数据
- 3D数据可视化和动画
- 以编程方式向地图添加标记和弹出窗口

有关Mapbox GL JS功能的更多灵感，请参阅我们的[教程](https://docs.mapbox.com/help/tutorials/?product=Mapbox+GL+JS)、[示例](https://docs.mapbox.com/mapbox-gl-js/example/)和Mapbox[客户展示页面](https://www.mapbox.com/showcase)。

## 核心概念

### Mapbox GL
Mapbox GL JS中的"GL"指的是[Mapbox GL](https://docs.mapbox.com/help/glossary/mapbox-gl/)，这是一个图形库，可以在任何兼容的Web浏览器中使用[OpenGL](https://en.wikipedia.org/wiki/OpenGL)将2D和3D Mapbox地图呈现为动态视觉图形，无需使用额外插件。

### 客户端渲染
Mapbox GL JS依赖于客户端渲染。Mapbox GL JS地图是通过在浏览器中而不是在服务器上将矢量切片与样式规则相结合来动态渲染的，这使得可以根据用户交互更改地图的样式和显示的数据。

### Map类
[mapboxgl.Map](https://docs.mapbox.com/mapbox-gl-js/api/map/)类是每个Mapbox GL JS项目的基础。本节中的示例代码演示了将地图添加到页面所需的最少内容：

<<< @/OtherTutrial/code/guides-code-2.js

- accessToken：此Mapbox访问令牌将您的Mapbox GL JS地图与Mapbox账户关联。
- container：放置地图的HTML元素。在上面的示例中，此元素是ID为"map"的`<div>`。
- style：用于确定地图包含哪些图块集以及如何设置样式的地图样式的样式URL。上面的示例使用Mapbox Streets v12样式。当没有向Map构造函数提供样式选项时，默认启用Mapbox标准样式。
- center：地图起始位置的坐标，按经度、纬度顺序排列。
- zoom：应初始化地图的缩放级别。这可以是整数或小数值。


















