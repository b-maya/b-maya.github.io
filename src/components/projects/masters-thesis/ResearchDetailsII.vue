<template>
    <SnapSection class="flex flex-col justify-evenly gap-4 p-8">
        <ListSection
            title="My Role:"
            :items="['Independent qualitative researcher']"
            alignment="horizontal"
        />
        <ListSection
            title="Software Tools Used:"
            :items="['ATLAS.ti', 'Figma', 'Canva']"
            alignment="horizontal"
        />
        <ListSection
            title="Data Analysis Method:"
            :items="['Thematic Analysis']"
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
