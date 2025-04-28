<template>
    <SnapSection class="flex max-h-full flex-col justify-center gap-4 overflow-hidden p-8">
        <RespText size="lg" class="font-light"> Focus Group Insights: </RespText>
        <div class="flex flex-col gap-4">
            <RespText size="base" class="font-light"> Participants asked: </RespText>
            <ul class="list-disc pl-4">
                <RespText as="li" size="sm" class="shrink">
                    What if everyone’s health data is not confidential anymore?
                </RespText>
                <RespText as="li" size="sm" class="shrink">
                    How would people’s mental health be affected?
                </RespText>
                <RespText as="li" size="sm" class="shrink">
                    What would be the consequences of being constantly monitored?
                </RespText>
                <RespText as="li" size="sm" class="shrink">
                    Will I be monitored inside my house?
                </RespText>
                <RespText as="li" size="sm" class="shrink">
                    Since everything is recorded, will crime rates go down?
                </RespText>
                <RespText as="li" size="sm" class="shrink">
                    What happens if the system breaks down or is hacked?
                </RespText>
                <RespText as="li" size="sm" class="shrink">
                    How will visitors and foreign citizens be treated in this country?
                </RespText>
            </ul>
        </div>
        <ListSection
            title="My Role:"
            :items="['Artefact ideation', 'Focus group facilitator']"
            alignment="horizontal"
        />
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';
import ListSection from '@/components/ListSection.vue';

defineOptions({
    name: 'FocusGroupInsights',
});
</script>
