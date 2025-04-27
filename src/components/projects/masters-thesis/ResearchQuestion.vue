<template>
    <SnapSection class="flex flex-col justify-center gap-4">
        <RespText size="lg" class="px-8 font-light"> Research Question: </RespText>
        <RespText size="base" class="px-8">
            How can the co-design of counterfactual scenarios help evoke empathy about polycystic
            ovary syndrome (PCOS) in a way that could be used in educational settings?
        </RespText>
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';

defineOptions({
    name: 'ResearchQuestion',
});
</script>
