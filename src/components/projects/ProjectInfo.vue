<template>
    <div class="relative mb-8 flex w-full flex-col gap-4 sm:gap-6 md:gap-8">
        <div
            class="bg-primary/95 sticky top-0 left-0 flex w-full cursor-pointer flex-col items-baseline gap-2 p-4 pb-0 sm:flex-row sm:gap-6 md:gap-8"
            @click.stop="setVisibility(!isVisible)"
        >
            <RespText
                size="xl"
                class="rounded-r-lg bg-violet-300/80 py-1 pr-2 font-light whitespace-nowrap"
                >{{ title }}</RespText
            >
            <RespText size="sm" class="font-light whitespace-nowrap sm:font-normal">
                {{ date }}
            </RespText>
        </div>
        <div
            class="flex w-full flex-col justify-between overflow-hidden p-4 pt-0 transition-all duration-500"
            :class="[isVisible ? '' : 'h-20']"
            :style="[isVisible ? `height:${contentHeight}px` : '']"
        >
            <div
                ref="contentRef"
                class="w-full border-l-2 border-solid border-violet-500 pb-8 pl-4"
            >
                <slot />
                <div
                    v-if="!isVisible"
                    :class="
                        cn(
                            'absolute top-0 left-0 z-0 flex h-full w-full cursor-pointer flex-col items-center justify-end transition-all',
                            'from-primary/0 to-primary/100 via-primary/0 bg-gradient-to-b via-40%',
                        )
                    "
                    @click.stop="setVisibility(!isVisible)"
                />
            </div>
        </div>
        <GenericButton
            :class="
                cn(
                    'absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2',
                    'self-center rounded-2xl bg-violet-400 px-1 py-0.5 text-sm',
                    'opacity-50 hover:opacity-100 active:opacity-100',
                )
            "
            @click.stop="setVisibility(!isVisible)"
        >
            {{ isVisible ? 'Show less' : 'Show more' }}
        </GenericButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RespText from '../RespText.vue';
import GenericButton from '../inputs/GenericButton.vue';
import { cn } from 'clsx-for-tailwind';
import { useElementSize } from '@vueuse/core';

type ProjectInfoProps = {
    title: string;
    date: string;
};

defineOptions({
    name: 'ProjectInfo',
});

defineProps<ProjectInfoProps>();

const isVisible = ref(false);

const setVisibility = (state: boolean): void => {
    isVisible.value = state;
};

const contentRef = ref();

const { height: contentHeight } = useElementSize(contentRef);
</script>
