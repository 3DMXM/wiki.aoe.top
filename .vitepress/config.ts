import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "小莫的维基库",
    description: "小莫的wiki库,记录一些有用的合集",
    ignoreDeadLinks: true,
    markdown: {
        theme: 'material-theme-palenight',
        lineNumbers: true,

        // adjust how header anchors are generated,
        // useful for integrating with tools that use different conventions
        anchor: {
            slugify(str) {
                return encodeURIComponent(str)
            }
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: 'GMM', link: '/GMM/README.md' },
            { text: 'BepInEx', link: '/BepInEx/README.md' },
            { text: '博客', link: 'https://blog.aoe.top/' },
            { text: '网盘', link: 'https://pan.aoe.top/' },
            { text: '游戏', link: 'https://game.aoe.top/' },
            { text: 'Mod', link: 'https://mod.3dmgame.com/' },
        ],

        sidebar: [
            {
                text: 'BepInEx Mod制作教程',
                link: 'BepInEx/README.md',
                collapsed: true,
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
                text: 'Gloss Mod Manager',
                collapsed: true,
                items: [
                    { text: "介绍、下载与安装", link: '/GMM/README.md' },
                    { text: "运行和使用", link: "/GMM/Use.md" },
                    { text: "安装与卸载Mod", link: "/GMM/Install.md" },
                    { text: "翻译软件 | Translate GMM", link: "/GMM/Translate.md" },
                    {
                        text: "常见问题",
                        collapsed: true,
                        items: [
                            { text: '没有找到程序的EXE程序', link: "/GMM/FQA/NotExe.md" },
                            { text: 'Mod安装后没有效果', link: "/GMM/FQA/NotWork.md" },
                            { text: '启动游戏没反应或报错', link: "/GMM/FQA/NotStart.md" },
                            { text: "Mod类型未知", link: "/GMM/FQA/TypeUnknown.md" },
                            { text: "下载错误", link: "/GMM/FQA/DownloadError.md" },
                        ]
                    },
                    {
                        text: "GMM文件",
                        collapsed: true,
                        items: [
                            { text: "制作GMM文件", link: "/GMM/GMMFile/Make.md" },
                            { text: "打开GMM文件", link: "/GMM/GMMFile/Open.md" },
                        ]
                    }
                ]
            },
            {
                text: 'GTA3三部曲 秘籍代码',
                link: '/GTA3-Cheat-List/README.md',
                collapsed: true,
                items: [
                    { text: 'GTA SA', link: '/GTA3-Cheat-List/GTASA.md' },
                    { text: 'GTA VC', link: '/GTA3-Cheat-List/GTAVC.md' },
                    { text: 'GTA 3', link: '/GTA3-Cheat-List/GTA3.md' },
                ]
            },
            {
                text: '怪物猎人崛起 Mod教程',
                link: 'MonsterHunterRise/README.md',
                collapsed: true,
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
                text: 'XMDS大神语录', link: 'XMDS/README.md',
                collapsed: true,
                items: [
                    { text: 'Hook介绍', link: 'XMDS/Hook.md' },
                    { text: '怎么写hook', link: 'XMDS/Hook-How-To-Write.md' },
                ]
            },
            {
                text: 'REFramework中文维基', link: 'REFramework/README.md',
                collapsed: true,
                items: [
                    {
                        text: 'Introduction',
                        link: 'REFramework/README.md'
                    },
                    {
                        text: 'Troubleshooting',
                        link: 'REFramework/troubleshooting/VR-Troubleshooting.md'
                    },
                    {
                        text: 'Examples',
                        items:
                            [
                                {
                                    text: 'Example Scripts',
                                    link: 'REFramework/examples/Example-Scripts.md'
                                },
                                {
                                    text: 'Example Snippets',
                                    link: 'REFramework/examples/Example-Snippets.md'
                                }
                            ]
                    },

                    {
                        text: 'Tools',
                        items:
                            [
                                {
                                    text: 'Object Explorer',
                                    link: 'REFramework/object_explorer/object_explorer.md'
                                },
                                {
                                    text: 'Chain Viewer',
                                    link: 'REFramework/chain_viewer/chain_viewer.md'
                                },
                                {
                                    text: 'Behavior Tree/FSM Editor',
                                    link: 'REFramework/bhvt_editor/bhvt_editor.md'
                                }
                            ]
                    },

                    {
                        text: 'Scripting Reference',
                        items: [
                            {
                                text: 'General',
                                items: [
                                    { text: 'Notes on Return Types', link: 'REFramework/api/general/Notes-on-Return-Types.md' },
                                    { text: 'Notes on Method Arguments', link: 'REFramework/api/general/Notes-on-Method-Arguments.md' },
                                    { text: 'Best Practices', link: 'REFramework/api/general/best-practices.md' }
                                ]
                            },

                            {
                                text: 'APIs',
                                items: [
                                    { text: 'draw', link: 'REFramework/api/draw.md' },
                                    { text: 'fs', link: 'REFramework/api/fs.md' },
                                    { text: 'imgui', link: 'REFramework/api/imgui.md' },
                                    { text: 'imnodes', link: 'REFramework/api/imnodes.md' },
                                    { text: 'imguizmo', link: 'REFramework/api/imguizmo.md' },
                                    { text: 'json', link: 'REFramework/api/json.md' },
                                    { text: 'log', link: 'REFramework/api/log.md' },
                                    { text: 're (Callbacks)', link: 'REFramework/api/re.md' },
                                    { text: 'reframework', link: 'REFramework/api/reframework.md' },
                                    { text: 'sdk', link: 'REFramework/api/sdk.md' },
                                    { text: 'vrmod', link: 'REFramework/api/vrmod.md' },
                                    { text: 'object_explorer', link: 'REFramework/api/object_explorer.md' }
                                ]
                            },

                            {
                                text: 'Types',
                                items: [
                                    { text: 'VectorXf', link: 'REFramework/api/types/VectorXf.md' },
                                    { text: 'Matrix4x4f', link: 'REFramework/api/types/Matrix4x4f.md' },
                                    { text: 'Quaternion', link: 'REFramework/api/types/Quaternion.md' },
                                    { text: 'REComponent', link: 'REFramework/api/types/REComponent.md' },
                                    { text: 'REField', link: 'REFramework/api/types/REField.md' },
                                    { text: 'REManagedObject', link: 'REFramework/api/types/REManagedObject.md' },
                                    { text: 'REMethodDefinition', link: 'REFramework/api/types/REMethodDefinition.md' },
                                    { text: 'RETypeDefinition', link: 'REFramework/api/types/RETypeDefinition.md' },
                                    { text: 'RETransform', link: 'REFramework/api/types/RETransform.md' },
                                    { text: 'REResource', link: 'REFramework/api/types/REResource.md' },
                                    { text: 'SystemArray', link: 'REFramework/api/types/SystemArray.md' },
                                    { text: 'ValueType', link: 'REFramework/api/types/ValueType.md' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                text: 'CMake',
                link: '/CMake/README.md',
                collapsed: true,
                items: [
                    { text: '入门', link: '/CMake/how-to.md' },
                    { text: '工具包', link: '/CMake/kits.md' },
                    { text: '配置', link: '/CMake/configure.md' },
                    { text: '变量', link: '/CMake/variants.md' },
                    { text: '构建', link: '/CMake/build.md' },
                    { text: '调试和启动', link: '/CMake/debug-launch.md' },
                    { text: '配置和设置', link: '/CMake/cmake-settings.md' },
                    { text: '使用CMakePresets', link: '/CMake/cmake-presets.md' },
                    { text: 'CMake工具故障排除', link: '/CMake/troubleshoot.md' },
                    { text: '常见问题', link: '/CMake/faq.md' },
                ]
            },
            {
                text: '小故事', link: '/story/README.md',
                collapsed: true,
                items: [
                    { text: '囚徒困境', link: '/story/Prisoner_Dilemma.md' },
                    { text: '糟心的一天', link: '/story/2022-2-15.md' },
                    { text: '花鸟的演讲', link: '/story/花鸟的演讲.md' },
                    { text: '梦 2022.7.17', link: '/story/2022-7-17.md' }
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/3DMXM/wiki.aoe.top' },
        ]
    },
    head: [
        [
            'script',
            {
                async: "true",
                src: 'https://www.googletagmanager.com/gtag/js?id=G-L04H04RSS7',
            },
        ],
        [
            'script',
            {},
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-L04H04RSS7');",
        ],
    ]
})
