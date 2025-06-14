<template>
    <SnapSection class="flex max-h-full flex-col justify-center gap-4 overflow-hidden p-8">
        <RespText size="sm" class="font-bold">
            The interplay between ‘Lucifer’ and ‘Tou-wrist’:
        </RespText>
        <div class="w-full self-center overflow-hidden">
            <ImageModaller :src="InterPlay2" alt="Empathy Map">
                <template #default="{ showModal }">
                    <div class="flex flex-col items-center gap-2">
                        <img
                            :src="InterPlay2"
                            class="m-auto h-auto w-full cursor-pointer object-contain md:h-full md:w-auto"
                            alt="Citizen reports a citizen for waving back a tourists."
                            @click="showModal"
                        />
                        <RespText
                            size="xs"
                            class="shrink text-center font-light text-wrap md:w-3/5"
                        >
                            Fig. A citizen waves back at tourists. Another citizen reports this
                            activity.
                        </RespText>
                    </div>
                </template>
            </ImageModaller>
        </div>
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';
import ImageModaller from '@/components/photo-reel/ImageModaller.vue';

import InterPlay2 from '@/assets/images/projects/policing-via-a-trackable-pass/the-interplay-2.png';

defineOptions({
    name: 'LuciferXTouwristII',
});
</script>
