<template>
    <div class="flex h-full w-full flex-col gap-2 overflow-x-hidden overflow-y-auto">
        <MastersThesis />
        <CourseAssignment />
    </div>
</template>

<script setup lang="ts">
import MastersThesis from '../projects/MastersThesis.vue';
import CourseAssignment from '../projects/CourseAssignment.vue';
</script>
