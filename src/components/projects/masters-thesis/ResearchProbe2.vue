<template>
    <SnapSection class="flex max-h-full flex-col gap-4 overflow-hidden p-8">
        <RespText size="sm" class="font-bold"> Research Probe 2: </RespText>
        <PhotoRoll :images="image1" />
        <RespText size="sm" class="shrink">
            Participants were shown the <strong>real PCOS timeline</strong> as well as a
            <strong>counterfactual scenarios timeline</strong>, with an aim to spark discussions
            about the state of PCOS research, literacy, and awareness.
        </RespText>
    </SnapSection>
    <SnapSection class="flex max-h-full flex-col gap-4 overflow-hidden p-8">
        <PhotoRoll :images="image2" />
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

const image1 = [
    {
        src: RealTimeline,
        alt: 'Real PCOS Timeline',
    },
];
const image2 = [
    {
        src: CounterfactualTimeline,
        alt: 'Counterfactual PCOS timeline',
    },
];
</script>
