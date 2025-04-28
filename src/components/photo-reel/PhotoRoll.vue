<template>
    <div
        ref="parentRef"
        class="absolute top-0 left-0 flex h-full max-h-full w-full max-w-full items-center justify-center"
    >
        <div
            class="flex h-full max-w-full rounded-lg outline-4 outline-white transition-all duration-500 dark:bg-gray-950/50"
        >
            <div
                ref="albumRef"
                class="flex h-full w-full snap-x snap-mandatory items-center gap-5 overflow-x-auto overflow-y-hidden"
            >
                <PhotoImage
                    v-for="image in images"
                    :key="`photo-roll-image-${image}`"
                    :image="image"
                    :parent-height="parentHeight - 10"
                    :parent-width="parentWidth"
                    :album-buffer="ALBUM_BUFFER_WIDTH"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PhotoImage, { type ImageDetails } from './PhotoImage.vue';
import { useElementSize } from '@vueuse/core';

const ALBUM_BUFFER_WIDTH = 100; // px

type PhotoRollProps = {
    images: ImageDetails[];
};

defineProps<PhotoRollProps>();

const parentRef = ref<HTMLDivElement>();

const albumRef = ref<HTMLDivElement>();

const { width: parentWidth, height: parentHeight } = useElementSize(parentRef);
</script>
