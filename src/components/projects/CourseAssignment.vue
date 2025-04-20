<template>
    <div class="flex w-full flex-col gap-2">
        <ProjectInfo title="Course Assignment" date="March 2024 - May 2024">
            <template #short>
                <RespText size="base">
                    An assignment in the theme ‘Politics and Democracy’, submitted for the course
                    ‘Research through Design’ at Tilburg University
                </RespText>
            </template>
            <template #default>
                <div class="flex w-full flex-col gap-4">
                    <RespText size="base">
                        The assignment for the course ‘Research though Design’ was divided into two
                        parts. The first part was a group assignment in which we created an artefact
                    </RespText>
                </div>
            </template>
        </ProjectInfo>
    </div>
</template>

<script setup lang="ts">
import RespText from '../RespText.vue';
import ProjectInfo from './ProjectInfo.vue';
</script>
