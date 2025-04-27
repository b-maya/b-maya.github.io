<template>
    <SnapSection class="flex flex-col gap-4 p-4 sm:p-6 md:p-8" @scrolledTo="showFlows = true">
        <RespText size="lg" class="font-light"> Methodology: </RespText>
        <div
            ref="flowParentRef"
            class="flex grow flex-wrap items-stretch justify-center gap-8 sm:gap-4 md:gap-6 lg:gap-8"
        >
            <template v-for="(textBox, index) in textBoxes" :key="`text-${index}`">
                <EnterTransition :transitionClasses="textBox.transitionClasses" :show="showFlows">
                    <div
                        class="relative max-w-44 content-center rounded-lg border-1 border-solid border-violet-600 p-3 text-center transition"
                    >
                        <RespText size="base" class="my-auto font-light">
                            <template
                                v-for="(text, k) in textBox.texts"
                                :key="`text-${index}-${k}`"
                            >
                                <InlineText
                                    :link="text.link"
                                    :emphasis="text.emphasis"
                                    :strong="text.strong"
                                >
                                    {{ text.text }}
                                </InlineText>
                            </template>
                        </RespText>
                        <RespText
                            size="xs"
                            class="absolute top-0.5 right-0.5 rounded-full bg-yellow-200 px-2 py-0.5"
                        >
                            {{ index + 1 }}
                        </RespText>
                    </div>
                </EnterTransition>
            </template>
        </div>
    </SnapSection>
</template>

<script setup lang="ts">
import SnapSection from '@/components/SnapSection.vue';
import RespText from '@/components/RespText.vue';
import EnterTransition from '@/components/EnterTransition.vue';
import { ref } from 'vue';
import InlineText, { type InlineTextProps } from '@/components/InlineText.vue';

defineOptions({
    name: 'MethodologyFlow',
});

type TextString = {
    text: string;
} & InlineTextProps;

type TextBoxes = {
    transitionClasses?: string;
    texts: TextString[];
};

const textBoxes: TextBoxes[] = [
    {
        texts: [
            {
                strong: true,
                text: 'Semi-structured interviews',
            },
            {
                strong: false,
                text: ' with women with PCOS',
            },
        ],
    },
    {
        texts: [
            {
                strong: true,
                text: 'Interview insights',
            },
            {
                strong: false,
                text: ' used to create an ',
            },
            {
                strong: true,
                text: 'empathy map',
            },
            {
                strong: false,
                text: ' showing a persona with PCOS',
            },
        ],
        transitionClasses: 'delay-750',
    },
    {
        texts: [
            {
                strong: true,
                text: 'Interview insights',
            },
            {
                strong: false,
                text: '  used to create a ',
            },
            {
                strong: true,
                text: 'counterfactual scenario timeline',
            },
            {
                strong: false,
                text: ' and ',
            },
            {
                strong: true,
                text: 'wheel',
            },
        ],
        transitionClasses: 'delay-1500',
    },
    {
        texts: [
            {
                strong: true,
                text: 'Focus Group',
            },
            {
                strong: false,
                text: ' participants ',
            },
            {
                strong: true,
                text: 'presented with SCD research probes',
            },
        ],
        transitionClasses: 'delay-2250',
    },
    {
        texts: [
            {
                strong: true,
                text: 'Discussions sparked',
            },
            {
                strong: false,
                text: '  about PCOS awareness, doctors’ attitudes, and more',
            },
        ],
        transitionClasses: 'delay-3000',
    },
];

const showFlows = ref(false);
const flowParentRef = ref(null);
</script>
