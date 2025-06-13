<template>
    <ProjectCard
        :title="FUTURES_WHEEL_INFO.title"
        :img="FUTURES_WHEEL_INFO.img"
        :imgAlt="FUTURES_WHEEL_INFO.imgAlt"
        :date="FUTURES_WHEEL_INFO.date"
        :summary="FUTURES_WHEEL_INFO.summary"
        @clicked="() => router.push('/portfolio/futures-wheel')"
    />
</template>

<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';
import FUTURES_WHEEL_INFO from '@/definitions/futures-wheel-info';

import { useRouter } from 'vue-router';

defineOptions({
    name: 'FuturesWheelCard',
});

const router = useRouter();
</script>
