<template>
    <div class="bg-primary flex h-full w-full overflow-hidden">
        <IntroSidebar />
        <RouterView />
    </div>
</template>
<script setup lang="ts">
import IntroSidebar from './components/IntroSidebar.vue';
</script>
