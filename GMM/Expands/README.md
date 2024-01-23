# 为 Gloss Mod Manager 添加游戏适配

在 v1.29.0 版本, 我们将 游戏适配部分进行了开源, 这将允许所有玩家和开发者来制作自己想要适配的游戏. 

如果你有一定的开发基础，那么可以来试试自己制作GMM的游戏适配.

部分游戏适配参考: https://github.com/GlossMod/gmm-expands

## 前置工具

- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en)
- [yarn](https://yarnpkg.com/) (可选)

## 安装 Yarn 和 TypeScript (已安装则跳过)

终端输入
```sh
npm install -g typescript yarn
```


## 初始化项目

新建一个文件夹, 用 VS Code 打开, 在终端输入
```sh
yarn init -y
yarn add @types/node typescript gmm-api -D
npx tsc --init
```

打开 `package.json` 文件，在里面添加:
```json
"scripts": {
    "build": "tsc --outDir dist"
}
```

## 入口文件

新建一个 `src/index.ts` 文件, 添加
```ts
import { ISupportedGames } from "gmm-api";

export const supportedGames: ISupportedGames = {

}
```

如果你安装了vs code 的ts 插件，那么你应该能看到报错信息，选择快速修复 "添加缺少的属性"
![](https://mod.3dmgame.com/static/upload/mod/202401/MOD65af29b613442.png@webp)

将会自动不全缺少的属性:
![](https://mod.3dmgame.com/static/upload/mod/202401/MOD65af2b1994ac1.png@webp)

## 属性介绍

### GlossGameId (必须)
- 类型: `number`
- Mod站的游戏ID
- 用于 在`游览`页面获取`3DM Mod`的数据, 如果Mod无该游戏, 可填 `0`

你可以在Mod站的游戏页面，按 F12 打开`开发者菜单`，你可在 `GetGameData` 接口中找到 游戏ID:

![](https://mod.3dmgame.com/static/upload/mod/202401/MOD65af2f06e8716.png@webp)

### steamAppID
- 类型: `number`
- 游戏在Steam中的AppId, 
- 主要用于定位游戏所在目录.

你可以直接在游戏商店找到游戏的 AppId 

### installdir
- 类型: `string`
- 游戏安装目录
- 主要用于定位 游戏 主程序所在目录.

eg:
比如说, 赛博朋克2077 的游戏主程序在 `F:\steam\steamapps\common\Cyberpunk 2077\bin\x64\Cyberpunk2077.exe`, 那么这就可以填:
```ts
installdir: join("Cyberpunk 2077", 'bin', 'x64')
// 或
installdir: "Cyberpunk 2077\\bin\\x64"
```

### gameName
- 类型: `string`
- 游戏名称
- 这个将是GMM定位游戏的唯一标识符, 请尽量使用游戏的英文名称, 且不要包含特殊字符

### gameExe
### startExe
### gameCoverImg
### modType
### checkModType
