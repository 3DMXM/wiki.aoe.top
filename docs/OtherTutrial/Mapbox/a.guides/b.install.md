# 开始使用

> 在开始使用 Mapbox GL JS 之前，您需要拥有一个 Mapbox 访问令牌，并使用 CDN 或 mapbox-gl npm 包将 Mapbox GL JS 添加到您的项目中。

## 前提条件

要使用 Mapbox GL JS，您需要拥有一个 Mapbox [访问令牌](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/)。这个访问令牌将您的地图与 Mapbox 账户关联起来。有关创建和使用访问令牌的更多信息，请参阅我们的[令牌管理文档](https://docs.mapbox.com/accounts/guides/tokens/)。


> Internet Explorer - 浏览器支持
> 从 v2.0.0 开始，Mapbox GL JS 不再兼容任何版本的 Internet Explorer。
> 
> 如果您需要支持 Internet Explorer，考虑使用[静态图像 API](https://docs.mapbox.com/api/maps/static-images/)来实现非交互式地图，或者使用[静态瓦片 API](https://docs.mapbox.com/api/maps/static-tiles/)结合其他库如 [Leaflet](https://leafletjs.com/) 来实现交互式地图。

## 导入或安装 Mapbox-GL-JS

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Mapbox GL JS map</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
<link href="https://api.mapbox.com/mapbox-gl-js/v3.11.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.11.0/mapbox-gl.js"></script>
<style>
body { margin: 0; padding: 0; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>
</head>
<body>
<div id="map"></div>
<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoidGVycnkxMzE0MyIsImEiOiJjbThpbDdudTAwZGdyMmlvZ29oeXpqM2xiIn0.gZ4RJWcQlp9uTBRmOcD-ag';
    const map = new mapboxgl.Map({
        container: 'map', // 容器 ID
        center: [-74.5, 40], // 起始位置 [经度, 纬度]。注意：纬度必须设置在 -90 和 90 之间
        zoom: 9 // 起始缩放级别
    });
</script>

</body>
</html>

```

要在您的项目中使用 Mapbox GL JS，您需要使用 Mapbox GL JS CDN 导入它或安装 mapbox-gl npm 包。

::: code-group

```html [Mapbox CDN]
<!-- 在 HTML 文件的 head 部分包含 JavaScript 和 CSS 文件。CSS 文件对于显示地图和使 Popups 和 Markers 等元素工作是必需的。 -->
<script src='https://api.mapbox.com/mapbox-gl-js/v3.11.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v3.11.0/mapbox-gl.css' rel='stylesheet' />

<!-- 在 HTML 文件的 body 部分包含以下代码。 -->
<div id='map' style='width: 400px; height: 300px;'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoidGVycnkxMzE0MyIsImEiOiJjbThpbDdudTAwZGdyMmlvZ29oeXpqM2xiIn0.gZ4RJWcQlp9uTBRmOcD-ag';
const map = new mapboxgl.Map({
	container: 'map', // 容器 ID
	style: 'mapbox://styles/mapbox/streets-v12', // 样式 URL
	center: [-74.5, 40], // 起始位置 [经度, 纬度]
	zoom: 9, // 起始缩放级别
});
</script>

<!-- 要查看这些代码片段如何在网页应用程序中一起工作，请查看我们的"在网页上显示地图"示例。 -->

```

```sh [模块打包器]

# 安装 npm 包。
npm install --save mapbox-gl

# 如果您使用的是 CSS 加载器，例如 webpack css-loader，可以直接在 JavaScript 中导入 CSS。
import 'mapbox-gl/dist/mapbox-gl.css';

```

:::


## 转译
Mapbox GL JS v2 作为 ES6 兼容的 JavaScript 包分发，并且与所有主要的现代浏览器兼容。

由于 JavaScript 包在主线程和 Web Worker 之间共享代码的方式，它与某些 Babel 转换不兼容。我们这样做是为了减小包大小并提高渲染性能。如果您正在使用 v2 与模块打包器（如 Webpack 或 Rollup）以及转译器（如 Babel）一起使用，有三种方法可以使其兼容：

- 使用 browserslist 将转译目标设置为一组兼容的转换
- 明确禁用 Mapbox GL JS 包的转译
- 单独加载和转译 Web Worker 代码，但代价是增加包大小并降低性能。

### 使用 browserslist 将转译目标设置为 ES6
如果您正在使用 [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) 结合 [browserslist](https://github.com/browserslist/browserslist) 来设置目标浏览器环境，请考虑使用以下 browserslist 查询来选择一组兼容的转换。

- 如果您正在使用 @babel/preset-env 结合 browserslist 来设置目标浏览器环境，请考虑使用以下 browserslist 查询来选择一组兼容的转换。

```json
"browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all",
      "not safari < 10",
      "not chrome < 51",
      "not android < 5",
      "not ie < 12"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },

```

这可以在项目的 package.json 或 .browserslistrc 文件中指定。有关更多详细信息，请参阅 [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#browserslist-integration) 文档。


### 明确从转译中排除 Mapbox GL JS
- 如果您应用程序的其他部分需要 ES5 转译，则考虑明确地从转译中排除 GL JS。如果您使用的是 Webpack，您可以在 import 语句中使用 `!` 前缀，以排除 mapbox-gl 被现有加载器转换。有关更多详细信息，请参阅 Webpack 加载器的[内联使用文档](https://webpack.js.org/concepts/loaders/#inline)。

```sh
import mapboxgl from '!mapbox-gl';
```

或者

您也可以通过在 webpack.config.js 中添加 ignore 选项到 Babel 来集中配置这一点。

```js
use: {
  loader: 'babel-loader',
  options: {
    presets: ['my-custom-babel-preset'],
    ..,
    ..,
    ignore: [ './node_modules/mapbox-gl/dist/mapbox-gl.js' ]
  }
}
```

### 单独加载和转译 Web Worker

如果您的应用程序需要 ES5 兼容性，那么您的模块打包器需要配置为单独加载和转译 Mapbox GL JS 的 Web Worker。这会显著增加包大小并对渲染性能产生负面影响，因此只有在您有强烈需要支持传统浏览器时才应该这样做。Mapbox GL JS 可以使用特定于打包器的 `worker-loader` 插件进行配置。请参阅 [webpack-worker-loader](https://webpack.js.org/loaders/worker-loader/) 和 [rollup-plugin-worker-loader](https://www.npmjs.com/package/rollup-plugin-web-worker-loader)。

- 如果您使用的是 Webpack，可以配置 `worker-loader` 在导入 mapbox-gl 时内联使用：
``` ts
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'; // 使用 worker-loader 单独加载 worker 代码

mapboxgl.workerClass = MapboxWorker; // 将加载的 worker 连接起来，替代默认的
const map = new mapboxgl.Map({
  container: 'map', // 容器 ID
  style: 'mapbox://styles/mapbox/streets-v12', // 样式 URL
  center: [-74.5, 40], // 起始位置 [经度, 纬度]
  zoom: 9 // 起始缩放级别
});
```

或者

- 您也可以在 webpack.config.js 中集中配置 worker-loader：
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\bmapbox-gl-csp-worker.js\b/i,
        use: { loader: 'worker-loader' }
      }
    ]
  }
};
```

然后将 Webpack 加载的 worker 与 Mapbox GL JS 集成：

```js
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
const map = new mapboxgl.Map({
  container: 'map', // 容器 ID
  style: 'mapbox://styles/mapbox/streets-v12', // 样式 URL
  center: [-74.5, 40], // 起始位置 [经度, 纬度]
  zoom: 9 // 起始缩放级别
});
```

