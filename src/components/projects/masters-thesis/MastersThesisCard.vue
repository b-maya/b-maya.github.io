<template>
    <ProjectCard
        :title="MASTERS_THESIS_INFO.title"
        :img="MASTERS_THESIS_INFO.img"
        :imgAlt="MASTERS_THESIS_INFO.imgAlt"
        :date="MASTERS_THESIS_INFO.date"
        :summary="MASTERS_THESIS_INFO.summary"
        @clicked="() => router.push('/portfolio/masters-thesis')"
    />
</template>

<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';
import MASTERS_THESIS_INFO from '@/definitions/masters-thesis-info';

import { useRouter } from 'vue-router';

defineOptions({
    name: 'MastersThesisCard',
});

const router = useRouter();
</script>
