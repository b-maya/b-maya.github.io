<template>
    <SnapSection
        class="flex max-h-full flex-col justify-center gap-4 p-8"
        @scrolled-to="show = true"
    >
        <RespText size="sm" class="font-bold"> Results: </RespText>
        <div class="w-full self-center overflow-hidden">
            <ImageModaller :src="FocusGroup1" alt="A photo of the Focus Group in action.">
                <template #default="{ showModal }">
                    <img
                        :src="FocusGroup1"
                        class="m-auto h-auto w-full cursor-pointer object-contain md:h-full md:w-auto"
                        alt="A photo of the Focus Group in action."
                        @click="showModal"
                    />
                </template>
            </ImageModaller>
        </div>

        <ol class="flex list-inside list-decimal flex-col gap-4 pr-8">
            <EnterTransition transition-classes="delay-300" :show="show">
                <RespText as="li" size="sm">
                    The focus group prompted discussions about PCOS symptoms, other
                    lesser-researched conditions like endometriosis, dismissal of menstrual health-
                    related symptoms by doctors, impact on mental health, and trailing research of
                    women’s health subjects, during which participants expressed their frustration
                    and disappointment at the current state of PCOS research.
                </RespText>
            </EnterTransition>
            <EnterTransition transition-classes="delay-600" :show="show">
                <RespText as="li" size="sm">
                    Participants highlighted the need to challenge beauty standards as everyday
                    cosmetic issues faced by women can be closely related to menstrual health
                    disorders.
                </RespText>
            </EnterTransition>
        </ol>
    </SnapSection>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';
import ImageModaller from '@/components/photo-reel/ImageModaller.vue';
import EnterTransition from '@/components/EnterTransition.vue';

import FocusGroup1 from '@/assets/images/projects/masters-thesis/focus-group-1.jpg';

defineOptions({
    name: 'ResultsPageI',
});

const show = ref(false);
</script>
