<template>
    <div class="flex w-full flex-col gap-4 sm:gap-6 md:gap-8">
        <button
            class="bg-primary/95 flex w-full cursor-pointer flex-col items-baseline gap-2 p-4 pb-0 sm:flex-row sm:gap-6 md:gap-8"
            :class="{ 'sticky top-0 left-0': contentIsVisible }"
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
        </button>
        <div ref="projectContentRef" class="w-full p-4 pt-0">
            <Transition
                enter-from-class="h-0"
                enter-active-class="transition-all duration-500"
                enter-to-class="h-full"
                leave-from-class="h-full"
                leave-active-class="transition-all duration-500"
                leave-to-class="h-0"
            >
                <div
                    v-show="isVisible"
                    class="w-full overflow-hidden border-l-2 border-solid border-violet-500 pl-4 transition-all duration-500"
                >
                    <slot />
                </div>
            </Transition>

            <div v-if="!isVisible" class="w-full">
                <slot name="short" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RespText from '../RespText.vue';
import { useElementVisibility } from '@vueuse/core';

type ProjectInfoProps = {
    title: string;
    date: string;
};

defineOptions({
    name: 'ProjectInfo',
});

defineProps<ProjectInfoProps>();

const projectContentRef = ref();

const contentIsVisible = useElementVisibility(projectContentRef, { rootMargin: '0px 0px -100px' });

const isVisible = ref(false);

const setVisibility = (state: boolean): void => {
    isVisible.value = state;
};
</script>
