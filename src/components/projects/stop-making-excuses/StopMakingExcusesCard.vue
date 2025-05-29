<template>
    <ProjectCard
        :title="STOP_MAKING_EXCUSES_INFO.title"
        :img="STOP_MAKING_EXCUSES_INFO.img"
        :imgAlt="STOP_MAKING_EXCUSES_INFO.imgAlt"
        :date="STOP_MAKING_EXCUSES_INFO.date"
        :summary="STOP_MAKING_EXCUSES_INFO.summary"
        @clicked="() => router.push('/portfolio/stop-making-excuses')"
    />
</template>

<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';
import STOP_MAKING_EXCUSES_INFO from '@/definitions/stop-making-excuses-info';

import { useRouter } from 'vue-router';

defineOptions({
    name: 'StopMakingExcusesCard',
});

const router = useRouter();
</script>
