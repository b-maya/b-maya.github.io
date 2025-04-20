<template>
    <div class="flex h-full w-full flex-row-reverse gap-2">
        <img
            src="@/assets/images/maya-image-2.jpg"
            alt="Image 2 of Maya B"
            class="absolute top-1/2 left-0 h-auto w-full grow -translate-y-1/2 object-cover opacity-85 sm:static sm:h-full sm:w-auto sm:translate-y-0 sm:opacity-100"
        />

        <div class="sm: z-1 flex h-full grow flex-col items-center justify-center p-4">
            <div
                class="bg-primary/75 z-1 flex flex-col items-start justify-center gap-8 rounded-lg p-4 sm:bg-none"
            >
                <RespText as="p" size="base">
                    I am an interdisciplinary researcher and content professional with expertise in
                    <strong>qualitative research</strong>, <strong>content strategy</strong>, and
                    <strong>digital communication</strong>.
                </RespText>
                <RespText as="p" size="base">
                    Over a career of 9+ years across journalism, technology, and marketing, I have
                    sharpened my skills in <strong>user research</strong>,
                    <strong>UX research</strong>, <strong>content design</strong>,
                    <strong>UX writing</strong>, <strong>content strategy</strong>,
                    <strong>technical writing</strong>, <strong>(interactive) storytelling</strong>,
                    <strong>stakeholder management</strong>, and
                    <strong>strategic planning</strong>.
                </RespText>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RespText from '../RespText.vue';
</script>
