<template>
    <div class="h-full w-full snap-y snap-mandatory overflow-auto bg-white/90">
        <SnapSection class="flex flex-col">
            <div
                class="from-highlight to-highlight/80 sticky top-0 left-0 z-10 flex w-full flex-col items-center bg-gradient-to-b from-50% py-2"
            >
                <RespText as="h1" size="xl" class="font-light whitespace-nowrap">
                    {{ POLICING_TRACKABLE_PASS_INFO.title }}
                </RespText>
            </div>
            <RespText
                size="xs"
                class="bg-highlight mx-auto w-fit rounded-b-lg px-2 py-1 font-extralight whitespace-nowrap sm:font-normal"
            >
                {{ POLICING_TRACKABLE_PASS_INFO.date }}
            </RespText>
            <div class="flex h-full w-full grow flex-col justify-center">
                <RespText size="lg" class="my-auto p-8 text-center">
                    {{ POLICING_TRACKABLE_PASS_INFO.summary }}
                </RespText>
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col justify-center gap-8">
            <RespText size="base" class="px-8">
                The assignment for the course ‘Design Research’ was divided into two parts.
            </RespText>
            <div class="flex w-full flex-col gap-4">
                <RespText size="lg" class="px-8 font-light"> Part 1: Group Assignment </RespText>
                <RespText size="base" class="px-8">
                    The first part was a group assignment was to pick a sub-theme within ‘Politics
                    and Democracy’ and create a provocative futuristic artefact. We then had to
                    conduct focus groups for user research, and gather reactions and comments about
                    the artefact from the focus group participants.
                </RespText>
            </div>
            <RespText size="base" class="px-8">
                The sub-theme <em>‘censorship in authoritarian regimes’</em> was chosen.
            </RespText>
        </SnapSection>
        <SnapSection class="flex flex-col justify-center gap-4">
            <RespText size="lg" class="px-8 font-light"> Research Question: </RespText>
            <RespText size="base" class="px-8">
                How would people perceive and internalise the ethical implications of government
                manipulation of visual and auditory stimuli as a form of mass surveillance and
                control?
            </RespText>
        </SnapSection>
        <ArtefactI />
        <FocusGroupInsights />
        <IndividualAssignment />
        <ArtefactII />
        <LuciferXTouwristI />
        <LuciferXTouwristII />
    </div>
</template>

<script setup lang="ts">
import RespText from '@/components/RespText.vue';
import POLICING_TRACKABLE_PASS_INFO from '@/definitions/policing-trackable-pass-info';
import SnapSection from '../../SnapSection.vue';

import ArtefactI from './ArtefactI.vue';
import ArtefactII from './ArtefactII.vue';
import FocusGroupInsights from './FocusGroupInsights.vue';
import IndividualAssignment from './IndividualAssignment.vue';
import LuciferXTouwristI from './LuciferXTouwristI.vue';
import LuciferXTouwristII from './LuciferXTouwristII.vue';

defineOptions({
    name: 'PolicingTrackablePass',
});
</script>
