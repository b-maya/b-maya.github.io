<template>
    <div class="relative mb-8 flex w-full flex-col gap-4 sm:gap-6 md:gap-8">
        <GenericButton
            class="sticky top-0 left-0 z-10 w-full rounded-none p-0"
            @click.stop="setVisibility(!isVisible)"
        >
            <slot name="header" />
        </GenericButton>
        <div
            class="w-full overflow-hidden transition-all duration-500"
            :class="[isVisible ? '' : 'h-20']"
            :style="[isVisible ? `height:${contentHeight}px` : '']"
        >
            <div
                ref="contentRef"
                class="w-full border-l-2 border-solid border-violet-500 pb-8 pl-4"
            >
                <slot name="content" />
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
                    expandButtonClasses,
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
import GenericButton from './inputs/GenericButton.vue';
import { type ClassValue } from 'clsx';
import { cn } from 'clsx-for-tailwind';
import { useElementSize } from '@vueuse/core';

type ExpandingSectionProps = {
    withoutExpandButton?: boolean;
    expandButtonLabel?: string;
    expandButtonClasses?: ClassValue;
};

defineOptions({
    name: 'ExpandingSection',
});

defineProps<ExpandingSectionProps>();

const isVisible = ref(false);

const setVisibility = (state: boolean): void => {
    isVisible.value = state;
};

const contentRef = ref();

const { height: contentHeight } = useElementSize(contentRef);
</script>
