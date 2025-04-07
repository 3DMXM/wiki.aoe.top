<template>
    <div style="margin-top: 24px">
        <Giscus id="comments" repo="3DMXM/wiki.aoe.top" repoid="R_kgDOJcmFng" category="General"
            categoryid="DIC_kwDOJcmFns4Co2n1" mapping="pathname" term="Welcome to giscus!" reactionsenabled="1"
            lang="zh-CN" emitmetadata="0" inputposition="top" loading="lazy" :theme="isDark ? 'dark' : 'light'"
            :key="route.path">
        </Giscus>
    </div>
</template>

<script setup>
import Giscus from '@giscus/vue';
import { useRoute, useData } from 'vitepress';




const route = useRoute();
const { isDark } = useData();
</script>