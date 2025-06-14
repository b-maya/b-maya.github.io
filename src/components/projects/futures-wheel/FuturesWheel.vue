<template>
    <div class="h-full w-full snap-y snap-mandatory overflow-auto bg-white/90">
        <SnapSection class="flex flex-col">
            <div
                class="from-highlight to-highlight/80 sticky top-0 left-0 z-10 flex w-full flex-col items-center bg-gradient-to-b from-50% px-2 py-2"
            >
                <RespText as="h1" size="xl" class="text-center font-light">
                    {{ FUTURES_WHEEL_INFO.title }}
                </RespText>
            </div>
            <RespText
                size="xs"
                class="bg-highlight mx-auto w-fit rounded-b-lg px-2 py-1 font-extralight whitespace-nowrap sm:font-normal"
            >
                {{ FUTURES_WHEEL_INFO.date }}
            </RespText>
            <div class="flex h-full w-full grow flex-col">
                <div class="flex w-full flex-col gap-8 px-8 xl:gap-16">
                    <RespText size="xs" class="pt-4 text-center">
                        {{ FUTURES_WHEEL_INFO.title_sub }}
                    </RespText>
                    <div
                        class="flex w-3/4 justify-center gap-4 self-center lg:gap-8 xl:gap-16 xl:px-8"
                    >
                        <div class="w-full">
                            <RespText as="h2" size="sm" class="inline font-bold">
                                Process Followed:
                            </RespText>
                            <RespText as="span" size="sm">
                                As this was an individual speculative design project, the
                                consequences shown in the Futures Wheel was a result of my own
                                imagination.
                            </RespText>
                        </div>
                        <div class="flex w-full flex-col gap-8 xl:gap-16">
                            <div class="flex items-baseline gap-4">
                                <RespText as="h2" size="sm" class="font-bold whitespace-nowrap">
                                    My Role:
                                </RespText>
                                <RespText size="sm"> Independent Design Researcher </RespText>
                            </div>
                            <div class="flex items-baseline gap-4">
                                <RespText as="h2" size="sm" class="font-bold whitespace-nowrap">
                                    Digital Tools Used:
                                </RespText>
                                <RespText size="sm"> Figma, Canva </RespText>
                            </div>
                        </div>
                    </div>
                    <p>
                        <RespText as="h2" size="sm" class="inline font-bold"> Premise: </RespText>
                        <RespText as="span" size="sm">
                            This is a speculative critical design project with an imagined
                            futuristic prototype, the consequences of which are speculated using a
                            futures wheel. The prototype is a pair of smart glasses that identifies
                            misogynists based on facial recognition and online presence. Here’s a
                            <strong>
                                <a
                                    href="#futures-wheel-image"
                                    class="rounded-md px-0.5 py-1 text-violet-950 underline underline-offset-3 transition-all hover:bg-violet-400 hover:text-white"
                                    >Futures Wheel</a
                                >
                                that shows possible consequences of such technology</strong
                            >.
                        </RespText>
                    </p>
                </div>
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col">
            <div id="futures-wheel-image" class="flex h-full w-full flex-col justify-center pt-4">
                <PhotoRoll :images="coverImage" />
            </div>
        </SnapSection>
    </div>
</template>

<script setup lang="ts">
import RespText from '@/components/RespText.vue';
import FUTURES_WHEEL_INFO from '@/definitions/futures-wheel-info';
import SnapSection from '../../SnapSection.vue';

import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';

defineOptions({
    name: 'StopMakingExcuses',
});

const coverImage = [
    {
        src: FUTURES_WHEEL_INFO.img,
        alt: FUTURES_WHEEL_INFO.imgAlt,
    },
];
</script>
