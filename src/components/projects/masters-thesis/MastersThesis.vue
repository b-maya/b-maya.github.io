<template>
    <div class="h-full w-full snap-y snap-mandatory overflow-auto bg-white/90">
        <SnapSection class="flex flex-col">
            <div
                class="from-highlight to-highlight/80 sticky top-0 left-0 z-10 flex w-full flex-col items-center bg-gradient-to-b from-50% py-2"
            >
                <RespText as="h1" size="xl" class="font-light whitespace-nowrap">
                    {{ MASTERS_THESIS_INFO.title }}
                </RespText>
            </div>
            <RespText
                size="xs"
                class="bg-highlight mx-auto w-fit rounded-b-lg px-2 py-1 font-extralight whitespace-nowrap sm:font-normal"
            >
                {{ MASTERS_THESIS_INFO.date }}
            </RespText>
            <div class="flex h-full w-full grow flex-col justify-center">
                <RespText size="lg" class="my-auto p-8 text-center">
                    Exploring the potential of eliciting counterfactual evidence about polycystic
                    ovary syndrome (PCOS) through co-design, to inform educational practices.
                </RespText>
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col justify-center gap-8">
            <RespText as="h2" size="lg" class="px-8 font-light whitespace-nowrap">
                Introduction
            </RespText>
            <RespText size="base" class="px-8">
                Medical conditions such as polycystic ovary syndrome (PCOS) that affect only women
                are seldom topics of everyday discussion, despite being a common occurrence. PCOS
                not only affects women’s menstrual health but also impacts their day-to-day
                routines, mental wellbeing, and long-term physical health with risks of diabetes and
                cardiovascular diseases.
            </RespText>
            <RespText size="base" class="px-8">
                This thesis explored a novel co-design process with counterfactual scenarios, a
                speculative critical design (SCD) tool, to evoke empathy about PCOS symptoms and
                experiences, in a way that could be adapted in educational settings. The method
                included two studies: (1) semi-structured interviews with women with PCOS to
                understand their experiences and (2) a classroom-like focus group where participants
                observed SCD research probes and engaged in a co-design activity, creating
                counterfactual artefacts.
            </RespText>
        </SnapSection>
        <ResearchDetailsI />
        <ResearchDetailsII />
        <ResearchQuestion />
        <SubResearchQuestions />
        <MethodologyFlow />
        <ResearchProbe1 />
        <ResearchProbe2 />
        <ResearchProbe3 />
        <ResultsPageI />
        <ResultsPageII />
    </div>
</template>

<script setup lang="ts">
import RespText from '@/components/RespText.vue';
import MASTERS_THESIS_INFO from '@/definitions/masters-thesis-info';
import SnapSection from '../../SnapSection.vue';
import ResearchDetailsI from './ResearchDetailsI.vue';
import ResearchDetailsII from './ResearchDetailsII.vue';
import ResearchQuestion from './ResearchQuestion.vue';
import SubResearchQuestions from './SubResearchQuestions.vue';
import MethodologyFlow from './MethodologyFlow.vue';
import ResearchProbe1 from './ResearchProbe1.vue';
import ResearchProbe2 from './ResearchProbe2.vue';
import ResearchProbe3 from './ResearchProbe3.vue';
import ResultsPageI from './ResultsPageI.vue';
import ResultsPageII from './ResultsPageII.vue';

defineOptions({
    name: 'MastersThesis',
});
</script>
