<template>
    <div class="flex w-full flex-col gap-2">
        <ProjectInfo title="Master’s Thesis" date="August 2024 - January 2025">
            <template #short>
                <RespText size="base">
                    Exploring the potential of eliciting counterfactual evidence about polycystic
                    ovary syndrome (PCOS) through co-design, to inform educational practices
                </RespText>
            </template>
            <template #default>
                <div class="flex w-full flex-col gap-4">
                    <RespText size="base">
                        Exploring the potential of eliciting counterfactual evidence about
                        polycystic ovary syndrome (PCOS) through co-design, to inform educational
                        practices
                    </RespText>
                    <RespText size="base">
                        Medical conditions such as polycystic ovary syndrome (PCOS) that affect only
                        women are seldom topics of everyday discussion, despite being a common
                        occurrence. PCOS not only affects women’s menstrual health but also impacts
                        their day-to-day routines, mental wellbeing, and long-term physical health
                        with risks of diabetes and cardiovascular diseases.
                    </RespText>
                    <div class="flex flex-col gap-2">
                        <RespText size="lg"> Abstract: </RespText>

                        <RespText size="base">
                            This thesis explored a novel co-design process with counterfactual
                            scenarios, a speculative critical design (SCD) tool, to evoke empathy
                            about PCOS symptoms and experiences, in a way that could be adapted in
                            educational settings. The method included two studies: (1)
                            semi-structured interviews with women with PCOS to understand their
                            experiences and (2) a classroom-like focus group where participants
                            observed SCD research probes and engaged in a co-design activity,
                            creating counterfactual artefacts.
                        </RespText>
                    </div>
                </div>
            </template>
        </ProjectInfo>
    </div>
</template>

<script setup lang="ts">
import RespText from '../RespText.vue';
import ProjectInfo from './ProjectInfo.vue';
</script>
