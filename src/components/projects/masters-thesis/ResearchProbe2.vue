<template>
    <SnapSection class="flex max-h-full flex-col gap-4 overflow-hidden p-8">
        <RespText size="lg" class="font-light"> Research Probe 2: </RespText>
        <div class="relative w-full grow self-center p-4">
            <PhotoRoll class="absolute top-0" :images="images" />
        </div>
        <RespText size="base" class="shrink">
            Participants were shown the <strong>real PCOS timeline</strong> as well as a
            <strong>counterfactual scenarios timeline</strong>, with an aim to spark discussions
            about the state of PCOS research, literacy, and awareness.
        </RespText>
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';

import RealTimeline from '@/assets/images/projects/masters-thesis/real-timeline.png';
import CounterfactualTimeline from '@/assets/images/projects/masters-thesis/counterfactual-timeline.png';
import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';

defineOptions({
    name: 'ResearchProbe2',
});

const images = [
    {
        src: RealTimeline,
        alt: 'Real PCOS Timeline',
    },
    {
        src: CounterfactualTimeline,
        alt: 'Counterfactual PCOS timeline',
    },
];
</script>
