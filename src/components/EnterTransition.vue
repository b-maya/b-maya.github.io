<template>
    <Transition
        enter-from-class="opacity-0"
        :enter-active-class="cn('transition-opacity duration-1000', transitionClasses)"
        enter-to-class="opacity-100"
    >
        <slot v-if="show" />
    </Transition>
</template>

<script setup lang="ts">
import { type ClassValue } from 'clsx';

import { cn } from 'clsx-for-tailwind';

type EnterTransitionProps = {
    transitionClasses?: ClassValue;
    show?: boolean;
};

defineOptions({
    name: 'EnterTransition',
});

defineProps<EnterTransitionProps>();
</script>
