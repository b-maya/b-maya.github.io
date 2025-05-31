<template>
    <div class="flex h-full w-full flex-row-reverse gap-2">
        <img
            src="@/assets/images/maya-image-2.jpg"
            alt="Image 2 of Maya B"
            class="absolute top-1/2 left-0 h-auto w-full grow -translate-y-1/2 object-cover opacity-85 sm:static sm:h-full sm:w-auto sm:translate-y-0 sm:opacity-100"
        />

        <div
            class="flex h-full grow flex-col items-center justify-center p-4 sm:z-1 sm:justify-start sm:overflow-y-auto lg:justify-center"
        >
            <div
                class="bg-primary/75 z-1 flex flex-col items-start justify-center gap-8 rounded-lg p-4 md:bg-transparent"
            >
                <RespText as="p" size="base">
                    I am an interdisciplinary content and design professional with expertise in
                    <strong>content design</strong>, <strong>design research</strong>,
                    <strong>UX research</strong>, and digital marketing.
                </RespText>
                <RespText as="p" size="base">
                    Please contact me for projects involving <strong>user research</strong>,
                    <strong>UX research</strong>, <strong>content design</strong>,
                    <strong>UX writing</strong>, <strong>strategic content marketing</strong>,
                    <strong>corporate content strategy</strong>,
                    <strong>thought leadership content</strong>, and
                    <strong>(interactive) storytelling</strong>.
                </RespText>
                <RespText as="p" size="base">
                    With over 9 years of experience across media, technology, and marketing
                    industries, I also provide content development services, including copywriting,
                    blogging, email marketing, editing, proofreading, and sales enablement content
                    creation.
                </RespText>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RespText from '../RespText.vue';
</script>
