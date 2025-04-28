<template>
    <SnapSection class="flex max-h-full flex-col justify-evenly gap-4 overflow-hidden p-8">
        <div class="flex flex-col gap-4">
            <RespText size="lg" class="font-light"> Part 2: Individual Assignment </RespText>
            <RespText size="base">
                In the individual assignment, every group member had to pick an insight from the
                focus group learnings and create another provocatype. The assignment also required
                us to create a pictorial to describe the new provocatype and critically reflect on
                it.
            </RespText>
        </div>
        <div class="flex flex-col gap-4">
            <RespText size="lg" class="font-light"> Insight Chosen: </RespText>
            <RespText size="base">
                How will visitors and foreign citizens be treated in this country?
            </RespText>
        </div>
        <div class="flex flex-col gap-4">
            <RespText size="lg" class="font-light"> Research Question: </RespText>
            <RespText size="base">
                How would outsiders who are visiting a country with mandated mass surveillance and
                control perceive the ethical implications of the foreign government's manipulation
                of their movement and interaction with locals?
            </RespText>
        </div>
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';

defineOptions({
    name: 'IndividualAssignment',
});
</script>
