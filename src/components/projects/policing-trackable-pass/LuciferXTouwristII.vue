<template>
    <SnapSection class="flex max-h-full flex-col justify-center gap-4 overflow-hidden p-8">
        <RespText size="lg" class="font-light">
            The interplay between ‘Lucifer’ and ‘Tou-wrist’
        </RespText>
        <div class="w-full self-center overflow-hidden">
            <ImageModaller :src="InterPlay2" alt="Empathy Map">
                <template #default="{ showModal }">
                    <img
                        :src="InterPlay2"
                        class="m-auto h-auto w-full cursor-pointer object-contain md:h-full md:w-auto"
                        alt="Citizen reports a citizen for waving back a tourists."
                        @click="showModal"
                    />
                </template>
            </ImageModaller>
        </div>
        <RespText size="base">
            A citizen waves back at tourists. Another citizen reports this activity.
        </RespText>
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
