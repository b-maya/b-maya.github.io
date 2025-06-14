<template>
    <div ref="photoRef" class="shrink-0 snap-center first:ml-10 last:mr-10">
        <div class="relative">
            <ImageModaller :src="image.src" :alt="image.alt">
                <template #default="{ showModal }">
                    <img
                        ref="imageRef"
                        class="shrink-0 cursor-pointer rounded-lg object-contain"
                        :src="image.src"
                        :alt="image.alt"
                        :style="photoStyle"
                        @click="showModal"
                    />
                </template>
            </ImageModaller>
        </div>
        <Transition
            appear-from-class="opacity-0"
            appear-active-class="transition-all duration-1000 delay-500"
            appear-to-class="opacity-0"
        >
            <RespText
                v-if="image.withCaption && showCaption"
                size="xs"
                class="bg-primary/80 pointer-events-none absolute bottom-0 left-1/2 mx-2 w-9/10 -translate-x-1/2 rounded-t-lg px-1 py-1 text-center leading-5 text-black"
            >
                {{ image.alt }}
            </RespText>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref, watchEffect } from 'vue';
import ImageModaller from './ImageModaller.vue';
import RespText from '../RespText.vue';

export type ImageDetails = {
    src: string;
    alt: string;
    withCaption?: boolean;
};

type PhotoImageProps = {
    image: ImageDetails;
    parentHeight: number;
    parentWidth: number;
    albumBuffer: number;
};

export type PhotoDim = { width: number; height: number };

type PhotoImageEmits = {
    scrolledTo: [PhotoDim];
};

defineOptions({
    name: 'PhotoImage',
});

const emits = defineEmits<PhotoImageEmits>();

const props = defineProps<PhotoImageProps>();

const photoRef = ref<HTMLDivElement>();

const imageRef = ref<HTMLImageElement>();

const photoDim = reactive<PhotoDim>({ height: 0, width: 0 });

const showCaption = ref(false);

const calculateDim = () => {
    if (!props.parentHeight || !props.parentWidth || !imageRef.value) {
        photoDim.height = 0;
        photoDim.width = 0;
        return;
    }

    const aspectRatio = (imageRef.value.naturalWidth || 1) / (imageRef.value.naturalHeight || 1);

    let width = (props.parentHeight - 20) * aspectRatio;

    if (width + props.albumBuffer > props.parentWidth) {
        width = props.parentWidth - props.albumBuffer;

        photoDim.height = width / aspectRatio;
        photoDim.width = width;
        return;
    }
    photoDim.height = props.parentHeight;
    photoDim.width = width;
};

watchEffect(() => {
    calculateDim();
});

const photoStyle = computed(() =>
    !photoDim.width && !photoDim.height
        ? { height: '100%', width: '100%' }
        : { height: `${photoDim.height}px`, width: `${photoDim.width}px` },
);

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting && imageRef.value) {
            showCaption.value = true;
            emits('scrolledTo', photoDim);
            return;
        }
        showCaption.value = false;
    },
    {
        threshold: 0.5,
    },
);

const getPhotoDim = () => {
    calculateDim();
    return photoDim;
};

defineExpose({
    getPhotoDim,
});

onMounted(() => {
    if (photoRef.value) {
        observer.observe(photoRef.value);
    }
});

onUnmounted(() => {
    observer.disconnect();
});
</script>
