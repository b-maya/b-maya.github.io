<template>
    <div class="flex flex-col justify-center gap-4">
        <RespText :as="titleAs" size="sm" class="font-bold"> {{ title }} </RespText>
        <div class="flex w-full flex-wrap gap-3" :class="[isVertical ? 'flex-col' : 'flex-row']">
            <RespText
                v-for="item in items"
                :key="`list-item-${item}`"
                size="sm"
                class="bg-highlight/80 w-fit rounded-lg p-2"
            >
                {{ item }}
            </RespText>
        </div>
    </div>
</template>

<script setup lang="ts">
import RespText, { type TextTags } from '@/components/RespText.vue';
import { computed } from 'vue';

type ListSectionProps = {
    title: string;
    titleAs?: TextTags;
    items: string[];
    alignment?: 'vertical' | 'horizontal';
};

defineOptions({
    name: 'ListSection',
});

const props = withDefaults(defineProps<ListSectionProps>(), {
    alignment: 'vertical',
});

const isVertical = computed(() => props.alignment === 'vertical');
</script>
