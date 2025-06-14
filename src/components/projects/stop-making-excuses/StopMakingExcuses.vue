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
                <PhotoRoll class="mt-4" :images="coverImage" />
                <RespText size="sm" class="my-auto p-8 text-center">
                    {{ STOP_MAKING_EXCUSES_INFO.summary }}
                </RespText>
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col justify-center gap-8 xl:gap-16">
            <RespText as="h2" size="sm" class="px-8 font-bold whitespace-nowrap">
                Concept:
            </RespText>
            <RespText size="sm" class="px-8">
                Twenty-two-year-old Maria struggles with managing her time efficiently, gets
                distracted easily, often loses focus, and tends to procrastinate. Her parents think
                she’s lazy and unmotivated. However, these are symptoms of her undiagnosed Attention
                Deficit Hyperactivity Disorder (ADHD).
            </RespText>
            <RespText size="sm" class="px-8">
                In this interactive digital narrative, you play as Maria — a regular girl trying to
                figure out life as she tries to prove her worth to parents who mistake her
                neurodivergence for laziness. Follow Maria's journey as she receives her diagnosis,
                and learns to understand and cope with her ADHD.
            </RespText>
            <RespText size="sm" class="px-8">
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

        <SnapSection class="flex flex-col justify-center gap-8 pb-4 xl:gap-16">
            <div class="flex flex-col gap-2">
                <div class="flex gap-4 px-8 lg:gap-8">
                    <div class="w-full">
                        <RespText as="h3" size="sm" class="inline font-bold">
                            Process Followed:
                        </RespText>

                        <ol class="flex list-inside list-decimal flex-col gap-4 px-8">
                            <RespText as="li" size="sm">
                                Contextual Inquiry – Conducted semi-structured interviews to
                                understand ADHD
                            </RespText>
                            <RespText as="li" size="sm">
                                Design Thinking – Created a wireframe on Figma to determine the
                                branching structure and outcomes
                            </RespText>
                            <RespText as="li" size="sm">
                                Design Process – Created the prototype on Figma
                            </RespText>
                            <RespText as="li" size="sm">
                                Testing & User Research – Collected insights from participants
                            </RespText>
                        </ol>
                    </div>
                    <div class="flex w-full flex-col gap-2">
                        <RespText as="h3" size="sm" class="font-bold"> My Role: </RespText>

                        <ul class="flex list-inside list-disc flex-col gap-4 px-8">
                            <RespText as="li" size="sm">
                                Designing semi-structured interviews
                            </RespText>
                            <RespText as="li" size="sm">
                                UX Writing (Crafting text for buttons/choices and Dialogue writing)
                            </RespText>
                            <RespText as="li" size="sm">
                                Narrative development from ideas to dialogues
                            </RespText>
                            <RespText as="li" size="sm">
                                Prototype testing to identify points for improvement
                            </RespText>
                            <RespText as="li" size="sm"> User research </RespText>
                            <RespText size="sm"> (<i>Worked in a team of 5</i>) </RespText>
                        </ul>
                    </div>
                </div>
            </div>
        </SnapSection>
        <SnapSection class="flex flex-col justify-center gap-8 pb-4 xl:gap-16">
            <PhotoRoll class="mt-4" :images="[figmaImages[0]]" />
        </SnapSection>
        <SnapSection class="flex flex-col justify-center gap-8 pb-4 xl:gap-16">
            <PhotoRoll class="mt-4" :images="[figmaImages[1]]" />
        </SnapSection>
        <SnapSection class="flex flex-col justify-center gap-8 pb-4 xl:gap-16">
            <PhotoRoll class="mt-4" :images="[figmaImages[2]]" />
        </SnapSection>

        <SnapSection class="flex flex-col justify-center gap-8 pb-4 xl:gap-16">
            <PhotoRoll class="mt-4" :images="finalWireframe" />
            <div class="flex flex-col gap-4">
                <RespText as="h2" size="sm" class="px-8 font-bold whitespace-nowrap">
                    Results:
                </RespText>
                <ol class="flex list-inside list-decimal flex-col gap-4 px-8">
                    <RespText as="li" size="sm" class="px-8">
                        Many participants said they plan to get assessed for ADHD after playing the
                        game.
                    </RespText>
                    <RespText as="li" size="sm" class="px-8">
                        Three participants with ADHD said they could relate to many parts of the
                        narrative.
                    </RespText>
                </ol>
            </div>
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
