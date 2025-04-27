<template>
    <SnapSection class="flex max-h-full flex-col justify-center gap-4 p-8">
        <RespText size="lg" class="font-light"> Research Probe 1: </RespText>
        <div class="w-full self-center overflow-hidden">
            <ImageModaller :src="EmpathyMap" alt="Empathy Map">
                <template #default="{ showModal }">
                    <img
                        :src="EmpathyMap"
                        class="m-auto h-auto w-full cursor-pointer object-contain md:h-full md:w-auto"
                        alt="Empathy Map"
                        @click="showModal"
                    />
                </template>
            </ImageModaller>
        </div>
        <RespText size="base">
            An <strong>empathy map</strong>, generally used in user research to elicit consumer
            requirements, needs, and demands, and to understand beyond just functional requirements,
            was populated, for this thesis, with PCOS symptoms experienced by interview
            participants.
        </RespText>
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';
import ImageModaller from '@/components/photo-reel/ImageModaller.vue';

import EmpathyMap from '@/assets/images/projects/masters-thesis/empathy-map.png';

defineOptions({
    name: 'ResearchProbe1',
});
</script>
