<template>
    <div class="flex max-h-full w-full flex-col gap-2 overflow-x-hidden overflow-y-auto">
        <MastersThesisCard :index="1" order="n-d-i" />
        <PolicingTrackablePassCard :index="2" order="n-d-i" />
    </div>
</template>

<script setup lang="ts">
import MastersThesisCard from '../projects/masters-thesis/MastersThesisCard.vue';
import PolicingTrackablePassCard from '../projects/policing-trackable-pass/PolicingTrackablePassCard.vue';
</script>
