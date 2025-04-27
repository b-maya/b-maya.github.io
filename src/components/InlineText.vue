<template>
    <component
        v-if="nextProps.tag"
        :is="nextProps.tag"
        :href="link?.link"
        :target="link?.target"
        :class="classes"
    >
        <InlineText
            :link="nextProps.props.link"
            :strong="nextProps.props.strong"
            :emphasis="nextProps.props.emphasis"
        >
            <slot />
        </InlineText>
    </component>
    <template v-else>
        <slot />
    </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type InlineTextTags = 'a' | 'strong' | 'em' | '';

type LinkProps = {
    link: string;
    target?: 'self' | '_blank';
};

export type InlineTextProps = {
    link?: LinkProps;
    strong?: boolean;
    emphasis?: boolean;
};

const props = defineProps<InlineTextProps>();

const nextProps = computed<{ tag: InlineTextTags; props: InlineTextProps }>(() => {
    if (props.link) {
        return {
            tag: 'a',
            props: { ...props, link: undefined },
        };
    }
    if (props.strong) {
        return {
            tag: 'strong',
            props: {
                ...props,
                strong: false,
            },
        };
    }
    if (props.emphasis) {
        return {
            tag: 'em',
            props: {
                ...props,
                emphasis: false,
            },
        };
    }
    return {
        tag: '',
        props: {},
    };
});

const classes = computed(() =>
    nextProps.value.tag === 'a'
        ? 'visited:text-blue-700 visited:decoration-blue-700 underline decoration-violet-700 hover:decoration-violet-700 hover:text-violet-700 active:text-violet-700'
        : '',
);
</script>
