<template>
    <SidebarComp :options="sections" />
</template>

<script setup lang="ts">
import { mdiHome, mdiAccount, mdiShape } from '@mdi/js';
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
    },
]);
</script>
