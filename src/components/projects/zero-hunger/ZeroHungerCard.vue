<template>
    <ProjectCard
        :title="ZERO_HUNGER_INFO.title"
        :img="ZERO_HUNGER_INFO.img"
        :imgAlt="ZERO_HUNGER_INFO.imgAlt"
        :date="ZERO_HUNGER_INFO.date"
        :summary="ZERO_HUNGER_INFO.summary"
        @clicked="() => router.push('/portfolio/zero-hunger')"
    />
</template>

<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';
import ZERO_HUNGER_INFO from '@/definitions/zero-hunger-info';

import { useRouter } from 'vue-router';

defineOptions({
    name: 'ZeroHungerCard',
});

const router = useRouter();
</script>
