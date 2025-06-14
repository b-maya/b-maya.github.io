<template>
    <SnapSection class="flex max-h-full flex-col justify-center gap-4 p-8">
        <RespText size="sm" class="font-bold"> Research Probe 3: </RespText>
        <div class="w-full self-center overflow-hidden">
            <ImageModaller
                :src="FuturesWheel"
                alt="The counterfactual scenarios wheel depicting possible consequences of a counterfactual timeline."
            >
                <template #default="{ showModal }">
                    <img
                        :src="FuturesWheel"
                        class="m-auto h-auto w-full cursor-pointer object-contain md:h-full md:w-auto"
                        alt="The counterfactual scenarios wheel depicting possible consequences of a counterfactual timeline."
                        @click="showModal"
                    />
                </template>
            </ImageModaller>
        </div>
        <RespText size="sm">
            The <strong>counterfactual scenarios wheel</strong> depicts the possible consequences of
            PCOS being introduced to school text books in 2000, which is part of the counterfactual
            timeline. E.g.: with PCOS being taught in schools, infertility is accepted as a common
            occurring and the society understands stress-induced infertility.
        </RespText>
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';
import ImageModaller from '@/components/photo-reel/ImageModaller.vue';

import FuturesWheel from '@/assets/images/projects/masters-thesis/futures-wheel.png';

defineOptions({
    name: 'ResearchProbe3',
});
</script>
