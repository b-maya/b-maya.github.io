<template>
    <SnapSection class="flex max-h-full flex-col gap-4 overflow-hidden p-8">
        <RespText size="lg" class="font-light"> Artefact 1: </RespText>
        <PhotoRoll :images="images" />
        <RespText size="base" class="shrink">
            We imagined a country where the government controls their citizens’ worldview;
            manipulates their visual and auditory stimuli; tries to cull their individuality; and
            furthers its totalitarian regime without the knowledge of the citizens. We designed an
            artefact that’s always on citizens’ eyes and ears that records everything that happens
            the users’ lives, and called it Lucifer.
        </RespText>
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';

import Artefact1_1 from '@/assets/images/projects/policing-via-a-trackable-pass/artefact-1-1.png';
import Artefact1_2 from '@/assets/images/projects/policing-via-a-trackable-pass/artefact-1-2.jpg';
import Artefact1_3 from '@/assets/images/projects/policing-via-a-trackable-pass/artefact-1-3.png';
import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';

defineOptions({
    name: 'ArtefactI',
});

const images = [
    {
        src: Artefact1_1,
        alt: 'Prototype creation',
    },
    {
        src: Artefact1_2,
        alt: 'Low-fidelity prototype of Lucifer',
    },
    {
        src: Artefact1_3,
        alt: 'Medium-fidelity prototype in use',
    },
];
</script>
