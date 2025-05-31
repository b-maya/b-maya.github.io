<template>
    <div class="h-full w-full snap-y snap-mandatory overflow-auto bg-white/90">
        <SnapSection class="flex flex-col">
            <div
                class="from-highlight to-highlight/80 sticky top-0 left-0 z-10 flex w-full flex-col items-center bg-gradient-to-b from-50% py-2"
            >
                <RespText as="h1" size="xl" class="font-light whitespace-nowrap">
                    {{ STOP_MAKING_EXCUSES_INFO.title }}
                </RespText>
            </div>
            <RespText
                size="xs"
                class="bg-highlight mx-auto w-fit rounded-b-lg px-2 py-1 font-extralight whitespace-nowrap sm:font-normal"
            >
                {{ STOP_MAKING_EXCUSES_INFO.date }}
            </RespText>
            <div class="flex h-full w-full grow flex-col justify-center">
                <div class="relative mt-4 w-full grow self-center p-4">
                    <PhotoRoll :images="coverImage" />
                </div>
                <RespText size="lg" class="my-auto p-8 text-center">
                    {{ STOP_MAKING_EXCUSES_INFO.summary }}
                </RespText>
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col justify-center gap-8">
            <RespText as="h2" size="lg" class="px-8 font-light whitespace-nowrap">
                Concept
            </RespText>
            <RespText size="base" class="px-8">
                Twenty-two-year-old Maria struggles with managing her time efficiently, gets
                distracted easily, often loses focus, and tends to procrastinate. Her parents think
                she’s lazy and unmotivated. However, these are symptoms of her undiagnosed Attention
                Deficit Hyperactivity Disorder (ADHD).
            </RespText>
            <RespText size="base" class="px-8">
                In this interactive digital narrative, you play as Maria — a regular girl trying to
                figure out life as she tries to prove her worth to parents who mistake her
                neurodivergence for laziness. Follow Maria's journey as she receives her diagnosis,
                and learns to understand and cope with her ADHD.
            </RespText>
            <RespText size="base" class="px-8">
                How will you guide her through young adulthood? Can you help her improve
                relationships, develop coping strategies, and find her path?
                <a
                    href="https://www.figma.com/proto/aTrntGAcrmF2E5FYcYvafI/Stop-Making-Excuses?node-id=246-347&t=2SUJJkAn2etCykwZ-1&disable-default-keyboard-nav=1&starting-point-node-id=246%3A347"
                    target="_blank"
                    class="rounded-md px-0.5 py-1 text-violet-950 underline underline-offset-3 transition-all hover:bg-violet-400 hover:text-white"
                >
                    Play the narrative here</a
                >.
            </RespText>
        </SnapSection>

        <SnapSection class="flex flex-col justify-center gap-8 pb-4">
            <div class="flex flex-col gap-2">
                <RespText as="h2" size="lg" class="px-8 font-light whitespace-nowrap">
                    Process
                </RespText>
                <ol class="flex list-inside list-decimal flex-col gap-4 px-8">
                    <RespText as="li" size="base" class="px-8">
                        Contextual Inquiry – Conducted semi-structured interviews to understand ADHD
                        Design
                    </RespText>
                    <RespText as="li" size="base" class="px-8">
                        Thinking – Created a wireframe on Figma to determine the branching structure
                        and outcomes
                    </RespText>
                    <RespText as="li" size="base" class="px-8">
                        Design Process – Created the prototype on Figma
                    </RespText>
                    <RespText as="li" size="base" class="px-8">
                        Testing & User Research – Collected insights from participants
                    </RespText>
                </ol>
            </div>
        </SnapSection>
        <SnapSection class="flex flex-col justify-center gap-8 pb-4">
            <div class="mt-4 w-full grow self-center p-4">
                <div class="relative h-full w-full">
                    <PhotoRoll :images="[figmaImages[0]]" />
                </div>
            </div>
        </SnapSection>
        <SnapSection class="flex flex-col justify-center gap-8 pb-4">
            <div class="mt-4 w-full grow self-center p-4">
                <div class="relative h-full w-full">
                    <PhotoRoll :images="[figmaImages[1]]" />
                </div>
            </div>
        </SnapSection>
        <SnapSection class="flex flex-col justify-center gap-8 pb-4">
            <div class="mt-4 w-full grow self-center p-4">
                <div class="relative h-full w-full">
                    <PhotoRoll :images="[figmaImages[2]]" />
                </div>
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col justify-center gap-8">
            <RespText as="h2" size="lg" class="px-8 font-light whitespace-nowrap">
                My Role
            </RespText>
            <ul class="flex list-inside list-disc flex-col gap-4 px-8">
                <RespText as="li" size="base" class="px-8">
                    Designing semi-structured interviews
                </RespText>
                <RespText as="li" size="base" class="px-8">
                    UX Writing (Crafting text for buttons/choices and Dialogue writing)
                </RespText>
                <RespText as="li" size="base" class="px-8">
                    Narrative development from ideas to dialogues
                </RespText>
                <RespText as="li" size="base" class="px-8">
                    Prototype testing to identify points for improvement
                </RespText>
                <RespText as="li" size="base" class="px-8"> User research </RespText>
                <RespText size="base" class="px-8"> (<i>Worked in a team of 5</i>) </RespText>
            </ul>
        </SnapSection>
        <SnapSection class="flex flex-col justify-center gap-8 pb-4">
            <div class="mt-4 w-full grow self-center p-4">
                <div class="relative h-full w-full">
                    <PhotoRoll :images="finalWireframe" />
                </div>
            </div>

            <RespText as="h2" size="lg" class="px-8 font-light whitespace-nowrap">
                Results
            </RespText>
            <ol class="flex list-inside list-decimal flex-col gap-4 px-8">
                <RespText as="li" size="base" class="px-8">
                    Many participants said they plan to get assessed for ADHD after playing the
                    game.
                </RespText>
                <RespText as="li" size="base" class="px-8">
                    Three participants with ADHD said they could relate to many parts of the
                    narrative.
                </RespText>
            </ol>
        </SnapSection>
    </div>
</template>

<script setup lang="ts">
import RespText from '@/components/RespText.vue';
import STOP_MAKING_EXCUSES_INFO from '@/definitions/stop-making-excuses-info';
import SnapSection from '../../SnapSection.vue';

import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';

import CoverPhoto from '@/assets/images/projects/stop-making-excuses/1-Cover-Page.png';
import DecisionTree from '@/assets/images/projects/stop-making-excuses/2-Decision-Tree.png';
import IDNDraft from '@/assets/images/projects/stop-making-excuses/3-IDN-Draft.png';
import FinalWireframeOverview from '@/assets/images/projects/stop-making-excuses/4-Final-IDN-Wireframe.png';
import FinalWireframe from '@/assets/images/projects/stop-making-excuses/5-Final-IDN-Wireframe.png';

defineOptions({
    name: 'StopMakingExcuses',
});

const coverImage = [
    {
        src: CoverPhoto,
        alt: 'Cover page of the Stop Making Excuses interactive game',
        withCaption: true,
    },
];
const finalWireframe = [
    {
        src: FinalWireframe,
        alt: 'Stills from the game',
        withCaption: true,
    },
];

const figmaImages = [
    {
        src: DecisionTree,
        alt: 'The decision tree during the ideation process on figma',
        withCaption: true,
    },
    {
        src: IDNDraft,
        alt: 'A more refined draft of the interactive digital narrative on figma',
        withCaption: true,
    },
    {
        src: FinalWireframeOverview,
        alt: 'The finalised interactive digital narrative wireframe on figma',
        withCaption: true,
    },
];
</script>
