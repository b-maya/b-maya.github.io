<template>
    <component :is="as" :class="cn('transition-all', SIZE_CLASSES[size], inheritedClasses)">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { type ClassValue } from 'clsx';
import { cn } from 'clsx-for-tailwind';
import { computed } from 'vue';

type TextSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
type TextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const SIZE_CLASSES: Record<TextSize, string> = {
    '7xl': 'text-2xl sm:text-4xl md:text-5xl lg:text-7xl',
    '6xl': 'text-xl sm:text-3xl md:text-4xl lg:text-6xl',
    '5xl': 'text-lg sm:text-2xl md:text-3xl lg:text-5xl',
    '4xl': 'text-base sm:text-xl md:text-2xl lg:text-4xl',
    '3xl': 'text-sm sm:text-lg md:text-xl lg:text-3xl',
    '2xl': 'text-xs sm:text-base md:text-lg lg:text-2xl',
    xl: 'text-xs sm:text-sm md:text-base lg:text-xl',
    lg: 'text-xs sm:text-sm md:text-base lg:text-lg',
    base: 'text-xs sm:text-sm md:text-base',
    sm: 'text-xs md:text-sm',
};

type RespTextProps = {
    size?: TextSize;
    as?: TextTags;
    class?: ClassValue;
};

const props = withDefaults(defineProps<RespTextProps>(), {
    size: 'lg',
    as: 'p',
});

const inheritedClasses = computed(() => props.class ?? '');
</script>
