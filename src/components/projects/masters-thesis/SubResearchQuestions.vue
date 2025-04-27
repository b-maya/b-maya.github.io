<template>
    <SnapSection class="flex flex-col justify-center gap-4">
        <RespText as="h2" size="lg" class="px-8 font-light"> Sub-research Questions: </RespText>
        <ol class="flex list-decimal flex-col gap-4 pr-8 pl-12">
            <RespText as="li" size="base">
                What prior information about PCOS might help women identify the condition earlier on
                and better manage potential symptoms?
            </RespText>
            <RespText as="li" size="base">
                How suitable are empathy maps for evoking empathy about polycystic ovary syndrome
                (PCOS)?
            </RespText>
            <RespText as="li" size="base">
                How well can counterfactual timelines help familiarise an audience with a
                counterfactual scenario?
            </RespText>
            <RespText as="li" size="base">
                How well can counterfactual scenarios wheels help familiarise an audience with a
                counterfactual scenario?
            </RespText>
        </ol>
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';

defineOptions({
    name: 'SubResearchQuestions',
});
</script>
