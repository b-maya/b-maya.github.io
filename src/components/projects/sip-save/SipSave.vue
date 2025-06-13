<template>
    <div class="h-full w-full snap-y snap-mandatory overflow-auto bg-white/90">
        <SnapSection class="flex flex-col">
            <div
                class="from-highlight to-highlight/80 sticky top-0 left-0 z-10 flex w-full flex-col items-center bg-gradient-to-b from-50% py-2"
            >
                <RespText as="h1" size="xl" class="font-light whitespace-nowrap">
                    {{ SIP_SAVE_INFO.title }}
                </RespText>
            </div>
            <RespText
                size="xs"
                class="bg-highlight mx-auto w-fit rounded-b-lg px-2 py-1 font-extralight whitespace-nowrap sm:font-normal"
            >
                {{ SIP_SAVE_INFO.date }}
            </RespText>
            <div class="flex h-full w-full grow flex-col justify-center pb-4">
                <PhotoRoll class="mt-4" :images="image1" />
                <RespText size="lg" class="my-auto p-8 text-center">
                    {{ SIP_SAVE_INFO.summary }}
                </RespText>
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col justify-center gap-8 xl:gap-16">
            <PhotoRoll class="mt-4" :images="image2" />
        </SnapSection>
        <SnapSection class="flex flex-col justify-center gap-8 xl:gap-16">
            <RespText as="h2" size="lg" class="px-8 font-light whitespace-nowrap">
                Process
            </RespText>
            <ol class="flex list-inside list-decimal flex-col gap-4 px-8">
                <RespText as="li" size="base" class="px-8">
                    Contextual Enquiry – Conducted a survey and interviews to understand alcohol
                    intake in university students
                </RespText>
                <RespText as="li" size="base" class="px-8">
                    Value Specification – Identified values based on behavioural change theories
                    (BCTs)
                </RespText>
                <RespText as="li" size="base" class="px-8">
                    Design – Created a clickable prototype on Figma
                </RespText>
                <RespText as="li" size="base" class="px-8">
                    Operationalisation – Created a roadmap for app release and iterations
                </RespText>
                <RespText as="li" size="base" class="px-8">
                    Evaluation – Drew up a plan to analyse impact and uptake
                </RespText>
            </ol>
        </SnapSection>

        <SnapSection class="flex flex-col justify-center gap-8 xl:gap-16">
            <RespText as="h2" size="lg" class="px-8 font-light whitespace-nowrap">
                My Role
            </RespText>
            <ul class="flex list-inside list-disc flex-col gap-4 px-8">
                <RespText as="li" size="base" class="px-8"> Contextual Enquiry </RespText>
                <RespText as="li" size="base" class="px-8">
                    UX Writing (content crafting for the App)
                </RespText>
                <RespText as="li" size="base" class="px-8"> User testing </RespText>
                <RespText as="li" size="base" class="px-8"> Report writing and editing </RespText>
                <RespText size="base" class="px-8"> (<i>Worked in a team of 5</i>) </RespText>
            </ul>
        </SnapSection>
    </div>
</template>

<script setup lang="ts">
import RespText from '@/components/RespText.vue';
import SIP_SAVE_INFO from '@/definitions/sip-save-info';
import SnapSection from '../../SnapSection.vue';

import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';

import Photo1 from '@/assets/images/projects/sip-save/Photo-1.png';
import Photo2 from '@/assets/images/projects/sip-save/Photo-2.png';

defineOptions({
    name: 'SipSave',
});

const image1 = [
    {
        src: Photo1,
        alt: 'Prototype for the Cover screen and the Dashboard of the SipSave app,',
        withCaption: true,
    },
];

const image2 = [
    {
        src: Photo2,
        alt: 'Prototypes of the other pages in the SipSave app, including Money-Tracker, Drink-Selector and Trending-Information.',
        withCaption: true,
    },
];
</script>
