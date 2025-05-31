<template>
    <SidebarComp :options="sections" />
</template>

<script setup lang="ts">
import { mdiHome, mdiAccount, mdiShape, mdiClipboardSearch, mdiBrush } from '@mdi/js';
import { ref } from 'vue';

import SidebarComp from './SidebarComp.vue';

defineOptions({
    name: 'IntroSidebar',
});

const sections = ref([
    {
        label: 'Home',
        icon: mdiHome,
        path: '/',
    },
    {
        label: 'About',
        icon: mdiAccount,
        path: '/about',
    },
    {
        label: 'Portfolio',
        icon: mdiShape,
        path: '/portfolio',
        children: [
            {
                label: 'Design Research Projects',
                icon: mdiClipboardSearch,
                path: '/portfolio/design-research-projects',
            },
            {
                label: 'Figma-heavy Projects',
                icon: mdiBrush,
                path: '/portfolio/figma-projects',
            },
        ],
    },
]);
</script>
