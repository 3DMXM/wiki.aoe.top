import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "小莫的维基库",
    description: "小莫的wiki库,记录一些有用的合集",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: 'BepInEx', link: '/BepInEx/README.md' },
            { text: '博客', link: 'https://blog.aoe.top/' },
            { text: '网盘', link: 'https://pan.aoe.top/' },
            { text: '游戏', link: 'https://game.aoe.top/' },
            { text: 'Mod', link: 'https://mod.3dmgame.com/' },
        ],

        sidebar: [
            {
                text: 'GTA3三部曲 秘籍代码',
                link: '/GTA3-Cheat-List/README.md',
                items: [
                    { text: 'GTA SA', link: '/GTA3-Cheat-List/GTASA.md' },
                    { text: 'GTA VC', link: '/GTA3-Cheat-List/GTAVC.md' },
                    { text: 'GTA 3', link: '/GTA3-Cheat-List/GTA3.md' },
                ]
            },
            {
                text: 'BepInEx Mod制作教程',
                link: 'BepInEx/README.md',
                items: [
                    { text: 'BepInEx的说明与介绍', link: '/BepInEx/BepInEx的说明与介绍.md' },
                    { text: 'BepInEx的下载与安装', link: '/BepInEx/BepInEx的下载与安装.md' },
                    { text: '搭建开发环境', link: '/BepInEx/搭建开发环境.md' },
                    { text: '创建插件', link: '/BepInEx/创建插件.md' },
                    { text: '拦截/注入 游戏函数', link: '/BepInEx/拦截-注入-游戏函数.md' },
                    { text: '制作简易配置和UI', link: '/BepInEx/制作简易配置和UI.md' },
                    { text: '制作高级UI', link: '/BepInEx/制作高级UI.md' },
                    { text: '结语', link: '/BepInEx/结语.md' },
                ]
            },
            {
                text: '怪物猎人崛起 Mod教程',
                link: 'MonsterHunterRise/README.md',
                items: [
                    {
                        text: "一般教程(Switch)",
                        items: [
                            { text: '提取游戏文件', link: 'MonsterHunterRise/Extracting-Game-Files.md' },
                            { text: '使用自定义文件', link: 'MonsterHunterRise/Using-Custom-Files.md' }
                        ],
                    }, {
                        text: '文件和游戏内 ID',
                        items: [
                            { text: '服装 ID', link: 'MonsterHunterRise/Armor-IDs.md' },
                            { text: '物品 ID', link: 'MonsterHunterRise/Item-IDs.md' },
                            { text: '龙 ID', link: 'MonsterHunterRise/Monster-IDs.md' },
                            { text: '技能 ID', link: 'MonsterHunterRise/Skill-IDs.md' },
                            { text: '武器 ID', link: 'MonsterHunterRise/Weapon-IDs.md' }
                        ]
                    },
                    {
                        text: '其他',
                        items: [
                            { text: '工具', link: 'MonsterHunterRise/Tool-Collection.md' }
                        ]
                    }
                ]
            },
            {
                text: 'Vue教程',
                items: [
                    { text: 'Vue2教程', link: 'vue/README.md' },
                ]
            },
            {
                text: 'aria2教程', link: 'aria2/README.md'
            },
            {
                text: 'XMDS大神语录', link: 'XMDS/README.md',
                items: [
                    { text: 'Hook介绍', link: 'XMDS/Hook.md' },
                    { text: '怎么写hook', link: 'XMDS/Hook-How-To-Write.md' },
                ]
            },
            {
                text: '小故事', link: '/story/README.md',
                items: [
                    { text: '囚徒困境', link: '/story/Prisoner_Dilemma.md' },
                    { text: '糟心的一天', link: '/story/2022-2-15.md' },
                    { text: '花鸟的演讲', link: '/story/花鸟的演讲.md' },
                    { text: '梦 2022.7.17', link: '/story/2022-7-17.md' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/3DMXM/wiki.aoe.top' },
        ]
    }
})
