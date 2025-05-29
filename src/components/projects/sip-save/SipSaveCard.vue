<template>
    <ProjectCard
        :title="SIP_SAVE_INFO.title"
        :img="SIP_SAVE_INFO.img"
        :imgAlt="SIP_SAVE_INFO.imgAlt"
        :date="SIP_SAVE_INFO.date"
        :summary="SIP_SAVE_INFO.summary"
        @clicked="() => router.push('/portfolio/sip-save')"
    />
</template>

<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';
import SIP_SAVE_INFO from '@/definitions/sip-save-info';

import { useRouter } from 'vue-router';

defineOptions({
    name: 'SipSaveCard',
});

const router = useRouter();
</script>
