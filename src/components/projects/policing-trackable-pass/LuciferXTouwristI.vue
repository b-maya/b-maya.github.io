<template>
    <SnapSection class="flex max-h-full flex-col justify-center gap-4 overflow-hidden p-8">
        <RespText size="lg" class="font-light">
            The interplay between ‘Lucifer’ and ‘Tou-wrist’
        </RespText>
        <div class="w-full self-center overflow-hidden">
            <ImageModaller :src="InterPlay1" alt="Empathy Map">
                <template #default="{ showModal }">
                    <img
                        :src="InterPlay1"
                        class="m-auto h-auto w-full cursor-pointer object-contain md:h-full md:w-auto"
                        alt="Citizen pressing a button on ‘Lucifer’ to report an anomaly"
                        @click="showModal"
                    />
                </template>
            </ImageModaller>
        </div>
        <RespText size="base">
            Citizen pressing a button on ‘Lucifer’ to report an anomaly. As the ‘Tou-wrist’ is
            trackable, the authorities can locate the rule- breaker in real time.
        </RespText>
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
