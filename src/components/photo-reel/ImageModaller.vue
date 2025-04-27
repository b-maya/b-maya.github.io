<template>
    <slot :showModal="showModal" />
    <Teleport to="#modal-container">
        <div
            v-if="open"
            class="z-modal fixed top-0 left-0 h-screen w-screen bg-black/80"
            v-on:click="open = false"
        >
            <div class="flex h-full w-full flex-col items-center justify-center">
                <img
                    ref="imageRef"
                    :src="src"
                    :alt="alt"
                    :style="[
                        imageDimensionStyle,
                        marginAdjustmentStyle,
                        isRotated ? 'transform: rotate(90deg)' : '',
                    ]"
                    class="rounded-md"
                    v-on:click.stop="showCaption = !showCaption"
                />
                <Transition>
                    <p
                        v-if="showCaption"
                        class="fixed bottom-4 rounded-2xl bg-black/50 p-4 text-center text-white"
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
                    class="bg-primary fixed top-4 right-4 hover:opacity-60"
                    v-on:click.stop="open = false"
                >
                    <MdiIcon :icon="mdiClose" class="text-light h-4 w-4" />
                </GenericButton>
                <GenericButton
                    class="bg-primary fixed right-4 bottom-4 hover:opacity-60"
                    v-on:click.stop="isRotated = !isRotated"
                >
                    <MdiIcon
                        :icon="isRotated ? mdiRotateLeft : mdiRotateRight"
                        class="text-light h-4 w-4"
                    />
                </GenericButton>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { useScreenOrientation } from '@vueuse/core';
import { ref, computed, onMounted } from 'vue';

import { mdiRotateLeft, mdiRotateRight, mdiClose } from '@mdi/js';
import MdiIcon from '../MdiIcon.vue';
import GenericButton from '../inputs/GenericButton.vue';

const IMAGE_MARGINS = 20; // in px
defineOptions({
    name: 'ImageModaller',
});

type ImageModallerProps = {
    src: string;
    alt: string;
};

defineProps<ImageModallerProps>();

const { orientation } = useScreenOrientation();
const isPortraitMode = computed(
    () =>
        orientation.value && ['portrait-primary', 'portrait-secondary'].includes(orientation.value),
);

const imageRef = ref<HTMLImageElement>();
const showCaption = ref(true);
const open = ref(false);
const isRotated = ref(false);
const windowHeight = ref(0);
const windowWidth = ref(0);
const setDimensions = () => {
    windowHeight.value = window.innerHeight - IMAGE_MARGINS;
    windowWidth.value = window.innerWidth - IMAGE_MARGINS;
};
const height = computed(() => (isRotated.value ? windowWidth.value : windowHeight.value));
const width = computed(() => (isRotated.value ? windowHeight.value : windowWidth.value));
const showModal = () => {
    setDimensions();
    open.value = true;
    showCaption.value = true;
    isRotated.value = false;
};
const imageDimensionStyle = computed(() => {
    if ((isPortraitMode.value && !isRotated.value) || (!isPortraitMode.value && isRotated.value)) {
        // returning width.
        let widthToSet = width.value;
        if (imageRef.value) {
            const imageHeight = imageRef.value.naturalHeight;
            const imageWidth = imageRef.value.naturalWidth;
            const newHeight = (imageHeight / imageWidth) * widthToSet;
            if (newHeight > height.value) {
                widthToSet = (imageWidth / imageHeight) * height.value;
            }
        }
        return 'width:' + widthToSet + 'px';
    } else {
        // returning height
        let heightToSet = height.value;
        if (imageRef.value) {
            const imageHeight = imageRef.value.naturalHeight;
            const imageWidth = imageRef.value.naturalWidth;
            const newWidth = (imageWidth / imageHeight) * heightToSet;
            if (newWidth > width.value) {
                heightToSet = (imageHeight / imageWidth) * width.value;
            }
        }
        return 'height:' + heightToSet + 'px';
    }
});

const marginAdjustmentStyle = computed(() => {
    return isPortraitMode.value ? 'margin-top: -15%' : '';
});

onMounted(() => {
    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'escape' && open.value) {
            open.value = false;
        }
    });
});
</script>
