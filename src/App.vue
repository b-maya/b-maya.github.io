<template>
    <div class="flex h-full w-full overflow-hidden bg-violet-50">
        <IntroSidebar />
        <RouterView />
    </div>
</template>
<script setup lang="ts">
import IntroSidebar from './components/IntroSidebar.vue';
</script>
