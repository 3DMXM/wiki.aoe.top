import { withMermaid } from "vitepress-plugin-mermaid";
import { generateSidebar } from 'vitepress-sidebar';
import { imagetools } from 'vite-imagetools';
import viteCompression from 'vite-plugin-compression';


// https://vitepress.dev/reference/site-config
export default withMermaid({
    title: "小莫的维基库",
    description: "小莫的wiki库,记录一些有用的合集",
    ignoreDeadLinks: true,
    markdown: {
        theme: 'material-theme-palenight',
        lineNumbers: true,
    },
    mermaid: {
        //mermaidConfig !theme here works for ligth mode since dark theme is forced in dark mode
    },
    vite: {
        plugins: [
            imagetools({
                defaultDirectives: new URLSearchParams({
                    format: 'webp',
                    quality: '80',
                    w: '800',
                }),
            }),
            viteCompression()
        ],
    },
    themeConfig: {
        logo: 'https://mod.3dmgame.com/static/upload/mod/202307/MOD64a7767d0409f.png@webp',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: 'GMM', link: 'https://gmm.aoe.top/' },
            {
                text: "小莫全家桶", items: [
                    { text: '首页', link: 'https://www.aoe.top/' },
                    { text: '博客', link: 'https://blog.aoe.top/' },
                    { text: '网盘', link: 'https://pan.aoe.top/' },
                    { text: '游戏', link: 'https://game.aoe.top/' },
                    { text: 'Mod', link: 'https://mod.3dmgame.com/u/9688990/Home' },
                    { text: '买下我', link: 'https://wanwang.aliyun.com/nametrade/detail/online.html?domainName=aoe.top' },
                ]
            },
        ],

        // 侧边栏
        sidebar: generateSidebar({
            useTitleFromFileHeading: true,
            collapsed: true,
            documentRootPath: '/docs',
            sortFolderTo: 'bottom',
            useFolderTitleFromIndexFile: true,
            includeFolderIndexFile: false,
        }),

        socialLinks: [
            { icon: 'github', link: 'https://github.com/3DMXM/wiki.aoe.top' },
        ],
        search: {
            provider: 'local'
        },
        editLink: {
            text: "在GitHub上编辑此页面",
            pattern: 'https://github.com/3DMXM/wiki.aoe.top/edit/master/docs/:path'
        },
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2022-${new Date().getFullYear()} 小莫 <br/> 
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="nopener norefoerrer" data-v-a41d4df4="">湘ICP备2021011453号-1</a>`,
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outline: {
            label: '页面导航'
        },
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
        [
            'script',
            {},
            `var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?0fba1f3013c5565107a4b39759647150";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();`
        ],
        ['meta', { name: 'og:site_name', content: '小莫的维基库' }],
        ['meta', { name: 'og:locale', content: 'zh' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        [
            'script',
            {
                "async": "true",
                'src': 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5978423097771370',
            }
        ],
        [
            'link',
            {
                "rel": "icon",
                "href": "https://mod.3dmgame.com/static/upload/mod/202307/MOD64a7767d0409f.png@webp",
            }
        ]
    ],
    sitemap: {
        hostname: "https://wiki.aoe.top"
    },
    lastUpdated: true,
})
