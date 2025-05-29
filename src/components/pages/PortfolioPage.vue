<template>
    <div class="flex max-h-full w-full flex-col overflow-x-hidden overflow-y-auto">
        <MastersThesisCard :index="1" order="n-d-i" />
        <PolicingTrackablePassCard :index="2" order="n-d-i" />
        <StopMakingExcusesCard :index="3" order="n-d-i" />
        <SipSaveCard :index="4" order="n-d-i" />
    </div>
</template>

<script setup lang="ts">
import MastersThesisCard from '../projects/masters-thesis/MastersThesisCard.vue';
import PolicingTrackablePassCard from '../projects/policing-trackable-pass/PolicingTrackablePassCard.vue';
import StopMakingExcusesCard from '../projects/stop-making-excuses/StopMakingExcusesCard.vue';
import SipSaveCard from '../projects/sip-save/SipSaveCard.vue';

defineOptions({
    name: 'PortfolioPage',
});
</script>
