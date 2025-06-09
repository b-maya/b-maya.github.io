<template>
    <SnapSection class="flex max-h-full flex-col gap-4 overflow-hidden p-8">
        <RespText size="lg" class="font-light"> Artefact 2: </RespText>
        <RespText size="base" class="shrink">
            To investigate the impact of monitoring on outsiders, I designed a trackable wristband
            called <em>‘Tou-wrist’</em>, which would be given to every outsider who enters the
            imagined country and is advertised to the outside world as an
            <em>“all access pass”</em>. With citizens wearing ‘Lucifer’, the government would be
            able to keep an eye on travellers’ actions without deploying police. Some examples are
            given below.
        </RespText>
        <PhotoRoll :images="images" />
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';

import Artefact2_1 from '@/assets/images/projects/policing-via-a-trackable-pass/artefact-2-1.jpg';
import Artefact2_2 from '@/assets/images/projects/policing-via-a-trackable-pass/artefact-2-2.jpg';
import Artefact2_3 from '@/assets/images/projects/policing-via-a-trackable-pass/artefact-2-3.jpg';
import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';

defineOptions({
    name: 'ArtefactII',
});

const images = [
    {
        src: Artefact2_1,
        alt: 'The trackable wristband with the display screen obscured.',
        withCaption: true,
    },
    {
        src: Artefact2_2,
        alt: 'Entry denied - a red light is displayed.',
        withCaption: true,
    },
    {
        src: Artefact2_3,
        alt: 'Entry permitted - a green light is displayed.',
        withCaption: true,
    },
];
</script>
