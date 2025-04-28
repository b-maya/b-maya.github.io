<template>
    <slot :showModal="showModal" />
    <Teleport to="#modal-container">
        <div
            v-if="open"
            ref="parentRef"
            class="z-modal fixed top-0 left-0 h-dvh w-dvw bg-black/80"
            v-on:click="open = false"
        >
            <img
                ref="imageRef"
                :src="src"
                :alt="alt"
                :style="[imageDimensionStyle, isRotated ? 'transform: rotate(90deg)' : '']"
                class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md object-cover"
                v-on:click.stop="showCaption = !showCaption"
            />
            <Transition>
                <p
                    v-if="showCaption"
                    class="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-2xl bg-black/50 p-4 text-center text-white"
                    :class="[
                        isPortraitMode
                            ? 'text-relative-base xs:text-relative-sm md:text-relative-xxs'
                            : 'text-xs',
                    ]"
                >
                    {{ alt }}
                </p>
            </Transition>
            <GenericButton
                class="bg-primary fixed top-4 right-4"
                :class="[
                    showCaption
                        ? 'hover:opacity-60 active:opacity-60'
                        : 'opacity-40 hover:opacity-100 active:opacity-100',
                ]"
                v-on:click.stop="open = false"
            >
                <MdiIcon :icon="mdiClose" class="text-light h-4 w-4" />
            </GenericButton>
            <GenericButton
                class="bg-primary fixed right-4 bottom-4"
                :class="[
                    showCaption
                        ? 'hover:opacity-60 active:opacity-60'
                        : 'opacity-40 hover:opacity-100 active:opacity-100',
                ]"
                v-on:click.stop="isRotated = !isRotated"
            >
                <Transition
                    :enterFromClass="isRotated ? 'rotate-90' : '-rotate-90'"
                    enterActiveClass="transition-all duration-300"
                    enterToClass="rotate-0"
                >
                    <MdiIcon
                        v-if="isRotated"
                        :icon="mdiRotateLeft"
                        class="text-light h-4 w-4 transition-all"
                    />
                    <MdiIcon
                        v-else
                        :icon="mdiRotateRight"
                        class="text-light h-4 w-4 transition-all"
                    />
                </Transition>
            </GenericButton>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

import { mdiRotateLeft, mdiRotateRight, mdiClose } from '@mdi/js';
import MdiIcon from '../MdiIcon.vue';
import GenericButton from '../inputs/GenericButton.vue';
import { useElementSize } from '@vueuse/core';

const IMAGE_MARGINS = 20; // in px
defineOptions({
    name: 'ImageModaller',
});

type ImageModallerProps = {
    src: string;
    alt: string;
};

defineProps<ImageModallerProps>();

const parentRef = ref<HTMLDivElement>();

const aspectRatio = ref(1);

const imageRef = ref<HTMLImageElement>();

watch(
    () => imageRef.value,
    () => {
        if (!imageRef.value) return;
        aspectRatio.value = imageRef.value.naturalWidth / imageRef.value.naturalHeight;
    },
);

const showCaption = ref(true);
const open = ref(false);
const isRotated = ref(false);

const { height: windowHeight, width: windowWidth } = useElementSize(parentRef);

const availableWindowHeight = computed(() => windowHeight.value - IMAGE_MARGINS);
const availableWindowWidth = computed(() => windowWidth.value - IMAGE_MARGINS);

const isPortraitMode = computed(() => windowHeight.value > windowWidth.value);

const height = computed(() =>
    isRotated.value ? availableWindowWidth.value : availableWindowHeight.value,
);
const width = computed(() =>
    isRotated.value ? availableWindowHeight.value : availableWindowWidth.value,
);
const showModal = () => {
    open.value = true;
    showCaption.value = true;
    isRotated.value = false;
};
const imageDimensionStyle = computed(() => {
    if ((isPortraitMode.value && !isRotated.value) || (!isPortraitMode.value && isRotated.value)) {
        // returning width.
        let widthToSet = width.value;
        if (imageRef.value) {
            let heightToSet = widthToSet / aspectRatio.value;
            if (heightToSet > height.value) {
                heightToSet = height.value;
                widthToSet = aspectRatio.value * heightToSet;
            }
            return `width: ${widthToSet}px; height: ${heightToSet}px;`;
        }
        return `width: auto; height: auto;`;
    } else {
        // returning height
        let heightToSet = height.value;
        if (imageRef.value) {
            let widthToSet = aspectRatio.value * heightToSet;
            if (widthToSet > width.value) {
                widthToSet = width.value;
                heightToSet = widthToSet / aspectRatio.value;
            }
            return `height: ${heightToSet}px; width: ${widthToSet}px;`;
        }
        return `height: auto; width: auto;`;
    }
});

onMounted(() => {
    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'escape' && open.value) {
            open.value = false;
        }
    });
});
</script>
