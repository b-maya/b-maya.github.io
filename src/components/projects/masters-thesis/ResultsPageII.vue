<template>
    <SnapSection
        class="flex max-h-full flex-col justify-center gap-4 p-8"
        @scrolled-to="show = true"
    >
        <RespText size="sm" class="font-bold"> Results: </RespText>
        <div class="w-full self-center overflow-hidden">
            <ImageModaller
                :src="FocusGroup2"
                alt="Participants brainstorm during a focus group activity."
            >
                <template #default="{ showModal }">
                    <img
                        :src="FocusGroup2"
                        class="m-auto h-auto w-full cursor-pointer object-contain md:h-full md:w-auto"
                        alt="Participants brainstorm during a focus group activity."
                        @click="showModal"
                    />
                </template>
            </ImageModaller>
        </div>

        <ol class="flex list-inside list-decimal flex-col gap-4 pr-8" start="3">
            <EnterTransition transition-classes="delay-300" :show="show">
                <RespText as="li" size="sm">
                    Participants provided innovative ideas to increase empathy for PCOS, calling for
                    behavioural and societal changes.
                </RespText>
            </EnterTransition>
            <EnterTransition transition-classes="delay-600" :show="show">
                <RespText as="li" size="sm">
                    The focus group findings encourage the use of co-design of counterfactual
                    scenarios in high schools, universities, and beyond, to spark discussions about
                    lesser-researched areas (eg.: health, climate change, and sustainability).
                </RespText>
            </EnterTransition>
            <EnterTransition transition-classes="delay-900" :show="show">
                <RespText as="li" size="sm">
                    Combined findings from both studies also highlight the need for men to
                    understand PCOS and the general public to understand PCOS’s impact on mental
                    health.
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

import FocusGroup2 from '@/assets/images/projects/masters-thesis/focus-group-2.jpg';

defineOptions({
    name: 'ResultsPageII',
});

const show = ref(false);
</script>
