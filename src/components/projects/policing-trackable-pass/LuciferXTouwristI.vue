<template>
    <SnapSection class="flex max-h-full flex-col justify-center gap-4 overflow-hidden p-8">
        <RespText size="sm" class="font-bold">
            The interplay between ‘Lucifer’ and ‘Tou-wrist’:
        </RespText>
        <div class="w-full self-center overflow-hidden">
            <ImageModaller :src="InterPlay1" alt="Empathy Map">
                <template #default="{ showModal }">
                    <div class="flex flex-col items-center gap-2">
                        <img
                            :src="InterPlay1"
                            class="m-auto h-auto w-full cursor-pointer object-contain md:h-full md:w-auto"
                            alt="Citizen pressing a button on ‘Lucifer’ to report an anomaly"
                            @click="showModal"
                        />
                        <RespText
                            size="xs"
                            class="shrink text-center font-light text-wrap md:w-3/5"
                        >
                            Fig. Citizen pressing a button on ‘Lucifer’ to report an anomaly. As the
                            ‘Tou-wrist’ is trackable, the authorities can locate the rule- breaker
                            in real time.
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

import InterPlay1 from '@/assets/images/projects/policing-via-a-trackable-pass/the-interplay-1.png';

defineOptions({
    name: 'LuciferXTouwristI',
});
</script>
