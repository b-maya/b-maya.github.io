<template>
    <div
        ref="parentRef"
        class="flex h-full max-h-full w-full max-w-full items-center justify-center"
    >
        <div
            class="flex h-full rounded-lg outline-4 outline-white transition-all duration-500 dark:bg-gray-950/50"
            :style="{ width: albumDim.width }"
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
                    @scrolled-to="setAlbumDim"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import PhotoImage, { type ImageDetails, type PhotoDim } from './PhotoImage.vue';
import { useElementSize } from '@vueuse/core';

const ALBUM_BUFFER_WIDTH = 100; // px

type PhotoRollProps = {
    images: ImageDetails[];
};

defineProps<PhotoRollProps>();

const parentRef = ref<HTMLDivElement>();

const albumRef = ref<HTMLDivElement>();

const { width: parentWidth, height: parentHeight } = useElementSize(parentRef);

const albumDim = reactive({ height: '100%', width: '100%' });

const setAlbumDim = ({ height, width }: PhotoDim): void => {
    albumDim.width = `${width + ALBUM_BUFFER_WIDTH}px`;
    albumDim.height = `${height}px`;
};
</script>
