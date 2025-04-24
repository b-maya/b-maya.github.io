<template>
    <ProjectCard
        :title="projectInfo.title"
        :img="projectInfo.img"
        :imgAlt="projectInfo.imgAlt"
        :date="projectInfo.date"
        :summary="projectInfo.summary"
    />
</template>

<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';
import ArtefactImage from '@/assets/images/projects/policing-via-a-trackable-pass/artefact-2-2.jpg';

defineOptions({
    name: 'PolicingTrackablePass',
});

const projectInfo = {
    title: `Policing via a Trackable Pass`,
    date: 'April 2024 - June 2024',
    summary: `An assignment in the theme of ‘Politics and Democracy’, submitted for the course ‘Design Research’ at Tilburg University`,
    img: ArtefactImage,
    imgAlt: 'A low fidelity prototype to demonstrate a wearable pass',
};
</script>
