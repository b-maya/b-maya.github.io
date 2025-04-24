<template>
    <GenericButton
        :class="
            cn(
                'text-primary bg-black',
                {
                    'rotate-90 bg-black/0': isOpen,
                },
                inheritedClasses,
            )
        "
        @click="isOpen = !isOpen"
    >
        <MdiIcon :icon="isOpen ? mdiClose : mdiMenu" class="h-6 w-6 text-inherit transition-all" />
    </GenericButton>
</template>

<script setup lang="ts">
import { type ClassValue } from 'clsx';
import { cn } from 'clsx-for-tailwind';
import { computed } from 'vue';
import { mdiMenu, mdiClose } from '@mdi/js';

import MdiIcon from './MdiIcon.vue';
import GenericButton from './inputs/GenericButton.vue';

type MenuToggleButtonProps = {
    class?: ClassValue;
};

const isOpen = defineModel<boolean>({ default: false });

const props = defineProps<MenuToggleButtonProps>();

const inheritedClasses = computed(() => props.class ?? '');
</script>
