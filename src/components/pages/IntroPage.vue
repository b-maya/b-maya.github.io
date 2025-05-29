<template>
    <div class="flex h-full w-full flex-row-reverse gap-2">
        <img
            src="@/assets/images/maya-image.jpg"
            alt="Image of Maya B"
            class="absolute top-1/2 left-0 h-auto w-full grow -translate-y-1/2 object-cover opacity-85 sm:static sm:h-full sm:w-auto sm:max-w-full sm:translate-y-0 sm:opacity-100"
        />

        <div class="z-1 flex h-full flex-col items-center justify-center p-4 sm:z-0">
            <div
                class="bg-primary/75 z-1 flex flex-col items-start justify-center gap-8 rounded-lg p-4 sm:bg-none"
            >
                <RespText as="h1" size="2xl"> Maya Balasubramanya </RespText>
                <RespText as="p" size="base">
                    DESIGN RESEARCHER | CONTENT DESIGNER & STRATEGIST | UX RESEARCHER
                </RespText>
                <RespText as="p" size="base">
                    <strong>MSc</strong> in <strong>New Media Design</strong>, Tilburg University,
                    Netherlands
                </RespText>
                <ContactInfo class="sm:pt-8" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactInfo from '../ContactInfo.vue';
import RespText from '../RespText.vue';
</script>
