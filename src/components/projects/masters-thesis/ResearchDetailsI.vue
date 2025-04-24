<template>
    <SnapSection class="flex flex-col justify-evenly gap-4 p-8">
        <ListSection
            title="Research Areas:"
            :items="['Speculative critical design (SCD)', 'Co-design', 'Participatory methods']"
            alignment="horizontal"
        />
        <ListSection
            title="SCD Research Probes Used:"
            :items="[
                'Counterfactual scenario',
                'Repurposed futures wheel as a counterfactual scenarios wheel',
                'Reporposed empathy map',
            ]"
            alignment="horizontal"
        />
        <ListSection
            title="User Research Methods:"
            :items="['Semi-structured interviews', 'Focus group']"
            alignment="horizontal"
        />
    </SnapSection>
</template>

<script setup lang="ts">
import ListSection from '@/components/ListSection.vue';
import SnapSection from '../../SnapSection.vue';

defineOptions({
    name: 'ResearchDetailsI',
});
</script>
