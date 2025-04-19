<template>
    <button
        :class="
            cn(
                'text-primary rounded-lg bg-black p-2 transition-all',
                {
                    'rotate-90 bg-black/0': isOpen,
                },
                inheritedClasses,
            )
        "
        @click="isOpen = !isOpen"
    >
        <MdiIcon :icon="isOpen ? mdiClose : mdiMenu" class="h-6 w-6 text-inherit transition-all" />
    </button>
</template>

<script setup lang="ts">
import { type ClassValue } from 'clsx';
import { cn } from 'clsx-for-tailwind';
import { computed } from 'vue';
import { mdiMenu, mdiClose } from '@mdi/js';

import MdiIcon from './MdiIcon.vue';

type MenuToggleButtonProps = {
    class?: ClassValue;
};

const isOpen = defineModel<boolean>({ default: false });

const props = defineProps<MenuToggleButtonProps>();

const inheritedClasses = computed(() => props.class ?? '');
</script>
