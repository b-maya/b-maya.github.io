<template>
    <SnapSection class="flex flex-col justify-evenly gap-4 p-8">
        <ListSection
            title="My Role:"
            title-as="h2"
            :items="['Qualitative researcher']"
            alignment="horizontal"
        />
        <ListSection
            title="Data Analysis Method:"
            title-as="h2"
            :items="['Thematic analysis']"
            alignment="horizontal"
        />
        <ListSection
            title="Software Tools Used:"
            title-as="h2"
            :items="['ATLAS.ti', 'Figma', 'Canva', 'Jamovi', 'Qualtrics']"
            alignment="horizontal"
        />
    </SnapSection>
</template>

<script setup lang="ts">
import ListSection from '@/components/ListSection.vue';
import SnapSection from '../../SnapSection.vue';

defineOptions({
    name: 'ResearchDetailsII',
});
</script>
