import { h } from 'vue';
import Theme from 'vitepress/theme';
import GiscusComment from './components/GiscusComment.vue';

import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';

export default {
    ...Theme,
    Layout() {
        return h(Theme.Layout, null, {
            'doc-after': () => h(GiscusComment),
        });
    },
    enhanceApp(ctx) {
        Theme.enhanceApp(ctx);
        // Register global components, if you don't want to use it, you don't need to add it
        ctx.app.component('vImageViewer', vImageViewer);
        // ...
    },
    setup() {
        // Get route
        const route = useRoute();
        // Using
        imageViewer(route);
    }

};