<template>
    <GenericButton
        :class="cn('group flex w-full gap-2 sm:gap-4 md:gap-8 lg:gap-8', styles.button)"
        @click.stop="onClick"
    >
        <RowReorderer :order="ordering">
            <template #numbering>
                <div>
                    <RespText size="xl" class="font-light">
                        {{ numbering }}
                    </RespText>
                </div>
            </template>
            <template #image>
                <div
                    class="bg-highlight/80 my-auto grow overflow-hidden rounded-lg transition-all duration-300 group-hover:bg-violet-100"
                >
                    <img
                        class="h-auto max-h-60 w-full self-center rounded-lg object-contain p-2 transition-all duration-300 group-hover:rotate-12 group-active:rotate-12 lg:max-h-96"
                        :src="img"
                        :alt="imgAlt"
                    />
                </div>
            </template>
            <template #description>
                <div
                    class="sm:gap-o flex w-full max-w-3/5 flex-col items-start gap-4 sm:justify-evenly"
                >
                    <div class="flex w-full flex-wrap items-baseline gap-2">
                        <RespText
                            size="xl"
                            :class="
                                cn(
                                    'rounded-r-lg py-1 pr-2 text-start font-light sm:whitespace-nowrap',
                                    styles.text,
                                )
                            "
                        >
                            {{ title }}
                        </RespText>
                        <RespText size="sm" class="font-light sm:font-normal sm:whitespace-nowrap">
                            {{ date }}
                        </RespText>
                    </div>
                    <RespText size="sm" class="text-start">
                        {{ summary }}
                    </RespText>
                </div>
            </template>
        </RowReorderer>
    </GenericButton>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import RowReorderer from '../RowReorderer.vue';
import RespText from '../RespText.vue';
import GenericButton from '../inputs/GenericButton.vue';

import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { cn } from 'clsx-for-tailwind';

type InfoOrder = 'n-i-d' | 'n-d-i'; // numbering-image-description || numbering-description-image

type ItemTypes = 'numbering' | 'image' | 'description';

type ProjectCardProps = {
    title: string;
    date: string;
    summary: string;
    index?: number;
    img: string;
    imgAlt: string;
    order?: InfoOrder;
};

const VARIANTS = {
    plain: {
        button: 'p-4 rounded-none',
        text: 'group-hover:bg-highlight/80 group-active:bg-highlight/80',
    },
    tile: {
        button: 'p-2 rounded-none hover:bg-violet-400 active:bg-violet-400',
        text: 'bg-highlight/80',
    },
};

defineOptions({
    name: 'ProjectCard',
});

type ProjectCardEmits = {
    clicked: [];
};

const emit = defineEmits<ProjectCardEmits>();

const props = withDefaults(defineProps<ProjectCardProps>(), {
    order: 'n-i-d',
    index: 0,
});
const numbering = computed(() =>
    props.index.toString().length === 1 ? `0${props.index}` : props.index.toString(),
);

const ordering = computed<ItemTypes[]>(() =>
    props.order === 'n-i-d'
        ? ['numbering', 'image', 'description']
        : ['numbering', 'description', 'image'],
);

const onClick = () => {
    emit('clicked');
};

const { md } = useBreakpoints(breakpointsTailwind);
const styles = computed(() => (md.value ? VARIANTS.plain : VARIANTS.tile));
</script>
