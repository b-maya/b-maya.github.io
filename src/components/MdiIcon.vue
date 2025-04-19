<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :class="cn('text-black h-5 w-5', inheritedClasses)"
        stroke="currentColor"
        fill="currentColor"
    >
        <path :d="icon" />
    </svg>
</template>

<script setup lang="ts">
import { cn } from 'clsx-for-tailwind';
import { computed } from 'vue';

type MdiIconProps = {
    icon: string;
    class?: string | string[];
};

const props = defineProps<MdiIconProps>();

const inheritedClasses = computed(() => props.class ?? []);
</script>
