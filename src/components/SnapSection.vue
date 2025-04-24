<template>
    <div ref="sectionRef" class="odd:bg-primary group relative h-full w-full snap-center">
        <slot />
        <GenericButton
            class="absolute top-3 right-3 rounded-full bg-yellow-200/50 p-3 group-first:hidden hover:bg-yellow-200/100 active:bg-yellow-200/100"
            @click.stop="scrollUp"
        >
            <MdiIcon :icon="mdiArrowUp" />
        </GenericButton>
        <GenericButton
            class="absolute right-3 bottom-3 rounded-full bg-yellow-200/50 p-3 group-last:hidden hover:bg-yellow-200/100 active:bg-yellow-200/100"
            @click.stop="scrollDown"
        >
            <MdiIcon :icon="mdiArrowDown" />
        </GenericButton>
    </div>
</template>

<script setup lang="ts">
import { useElementSize, useScroll } from '@vueuse/core';
import { computed, ref } from 'vue';
import GenericButton from './inputs/GenericButton.vue';
import MdiIcon from './MdiIcon.vue';
import { mdiArrowUp, mdiArrowDown } from '@mdi/js';

defineOptions({
    name: 'SnapSection',
});

const sectionRef = ref<HTMLDivElement>();

const { height } = useElementSize(sectionRef);

const parentElement = computed(() => sectionRef.value?.parentElement);

const { y: scrollY } = useScroll(parentElement, { behavior: 'smooth' });

const scrollUp = () => {
    scrollY.value = scrollY.value - height.value;
};
const scrollDown = () => {
    scrollY.value = scrollY.value + height.value;
};
</script>
