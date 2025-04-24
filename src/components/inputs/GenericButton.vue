<template>
    <button :class="cn('rounded-lg p-2 transition-all enabled:cursor-pointer', inheritedClasses)">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { type ClassValue } from 'clsx';
import { cn } from 'clsx-for-tailwind';
import { computed } from 'vue';
defineOptions({
    name: 'GenericButton',
});

const props = defineProps<{ class?: ClassValue }>();
const inheritedClasses = computed(() => props.class ?? '');
</script>
