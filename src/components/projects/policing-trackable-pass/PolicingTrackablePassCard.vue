<template>
    <ProjectCard
        :title="POLICING_TRACKABLE_PASS_INFO.title"
        :img="POLICING_TRACKABLE_PASS_INFO.img"
        :imgAlt="POLICING_TRACKABLE_PASS_INFO.imgAlt"
        :date="POLICING_TRACKABLE_PASS_INFO.date"
        :summary="POLICING_TRACKABLE_PASS_INFO.summary"
        @clicked="() => router.push('/portfolio/policing-trackable-pass')"
    />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ProjectCard from '../ProjectCard.vue';

import POLICING_TRACKABLE_PASS_INFO from '@/definitions/policing-trackable-pass-info';

defineOptions({
    name: 'PolicingTrackablePassCard',
});

const router = useRouter();
</script>
