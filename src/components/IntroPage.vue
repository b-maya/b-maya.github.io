<template>
    <div class="flex h-full w-full flex-row-reverse gap-2">
        <img
            src="../assets/images/maya-image.jpg"
            alt="Image of Maya B"
            class="absolute top-1/2 left-0 h-auto w-full grow -translate-y-1/2 opacity-85 sm:static sm:h-full sm:w-auto sm:translate-y-0 sm:opacity-100"
        />

        <div class="sm: z-1 flex h-full grow flex-col items-center justify-center p-4">
            <div
                class="bg-primary/75 z-1 flex flex-col items-start justify-center gap-8 rounded-lg p-4 sm:bg-none"
            >
                <RespText as="h1" size="7xl"> Maya Balasubramanya </RespText>
                <RespText as="p" size="2xl">
                    CONTENT DESIGNER & STRATEGIST | USER (UX) RESEARCHER
                </RespText>
                <RespText as="p" size="xl">
                    <strong>MSc</strong> in
                    <strong>Communication and Information Sciences</strong> (New Media Design),
                    Tilburg University
                </RespText>
                <ContactInfo class="pt-8" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactInfo from './ContactInfo.vue';
import RespText from './RespText.vue';
</script>
