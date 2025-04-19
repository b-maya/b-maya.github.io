<template>
    <button
        :disabled="copied"
        @click.stop="doCopy"
        :class="
            cn(
                'group flex items-center gap-2 rounded-lg p-2 enabled:cursor-pointer enabled:hover:bg-black/70',
                'enabled:hover:text-primary text-black',
            )
        "
    >
        <slot />
        <MdiIcon
            :icon="copied ? mdiCheckCircle : mdiContentCopy"
            :class="cn('h-5 w-5', copied ? 'text-green-600' : 'text-inherit', inheritedClasses)"
        />
    </button>
</template>

<script setup lang="ts">
import { mdiContentCopy, mdiCheckCircle } from '@mdi/js';
import { cn } from 'clsx-for-tailwind';
import { type ClassValue } from 'clsx';
import MdiIcon from './MdiIcon.vue';
import { computed, ref } from 'vue';

type CopyTextProps = {
    text: string;
    class?: ClassValue;
};

const props = defineProps<CopyTextProps>();

const inheritedClasses = computed(() => props.class ?? '');

const copied = ref(false);

const doCopy = (): void => {
    navigator.clipboard.writeText(props.text);
    copied.value = true;
    setTimeout(() => {
        copied.value = false;
    }, 1500);
};
</script>
