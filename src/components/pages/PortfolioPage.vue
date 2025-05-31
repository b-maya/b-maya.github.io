<template>
    <transition-group
        name="project-list"
        tag="div"
        class="flex max-h-full w-full flex-col overflow-x-hidden overflow-y-auto transition-all duration-2000"
    >
        <component
            v-for="(project, index) in projects"
            :is="project.component"
            :key="`project-card-${project.name}`"
            :ref="project.ref"
            :index="index + 1"
            order="n-d-i"
            :class="{ 'bg-primary/60': route.params.projectsType === project.type }"
        />
    </transition-group>
</template>

<script setup lang="ts">
import MastersThesisCard from '../projects/masters-thesis/MastersThesisCard.vue';
import PolicingTrackablePassCard from '../projects/policing-trackable-pass/PolicingTrackablePassCard.vue';
import StopMakingExcusesCard from '../projects/stop-making-excuses/StopMakingExcusesCard.vue';
import SipSaveCard from '../projects/sip-save/SipSaveCard.vue';
import { useRoute } from 'vue-router';
import { computed, markRaw, nextTick, ref, watch, type ComponentPublicInstance } from 'vue';

const PROJECT_TYPES = {
    design: 'design-research-projects',
    figma: 'figma-projects',
};

defineOptions({
    name: 'PortfolioPage',
});

const route = useRoute();

const prioritizeFigmaProjects = computed(() => route.params.projectsType === PROJECT_TYPES.figma);

const projects = computed(() =>
    prioritizeFigmaProjects.value
        ? [
              {
                  name: 'StopMakingExcusesCard',
                  component: markRaw(StopMakingExcusesCard),
                  type: PROJECT_TYPES.figma,
                  ref: ref<ComponentPublicInstance[]>(),
              },
              {
                  name: 'SipSaveCard',
                  component: markRaw(SipSaveCard),
                  type: PROJECT_TYPES.figma,
                  ref: ref<ComponentPublicInstance[]>(),
              },
              {
                  name: 'MastersThesisCard',
                  component: markRaw(MastersThesisCard),
                  type: PROJECT_TYPES.design,
                  ref: ref<ComponentPublicInstance[]>(),
              },
              {
                  name: 'PolicingTrackablePassCard',
                  component: markRaw(PolicingTrackablePassCard),
                  type: PROJECT_TYPES.design,
                  ref: ref<ComponentPublicInstance[]>(),
              },
          ]
        : [
              {
                  name: 'MastersThesisCard',
                  component: markRaw(MastersThesisCard),
                  type: PROJECT_TYPES.design,
                  ref: ref<ComponentPublicInstance[]>(),
              },
              {
                  name: 'PolicingTrackablePassCard',
                  component: markRaw(PolicingTrackablePassCard),
                  type: PROJECT_TYPES.design,
                  ref: ref<ComponentPublicInstance[]>(),
              },
              {
                  name: 'StopMakingExcusesCard',
                  component: markRaw(StopMakingExcusesCard),
                  type: PROJECT_TYPES.figma,
                  ref: ref<ComponentPublicInstance[]>(),
              },
              {
                  name: 'SipSaveCard',
                  component: markRaw(SipSaveCard),
                  type: PROJECT_TYPES.figma,
                  ref: ref<ComponentPublicInstance[]>(),
              },
          ],
);

watch(
    () => prioritizeFigmaProjects.value,
    (newValue) => {
        setTimeout(() => {
            nextTick(() => {
                const project = projects.value.find(
                    (project) =>
                        project.type === (newValue ? PROJECT_TYPES.figma : PROJECT_TYPES.design),
                );
                project?.ref.value?.[0]?.$el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            });
        }, 500);
    },
);
</script>
