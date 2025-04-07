// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'

export default {
    ...DefaultTheme,
    Layout: h(DefaultTheme.Layout, null, {
        'nav-bar-content-before': () => h(Documate, {
            endpoint: 'https://es1fryngs7.us.aircode.run/ask',
        }),
    }),
}