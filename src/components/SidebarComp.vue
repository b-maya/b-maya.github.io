<template>
    <nav
        ref="SidebarCompRef"
        :class="
            cn(
                'z-50 flex h-full shrink-0 flex-col gap-6 transition-all duration-1000 md:gap-4',
                [
                    md
                        ? [
                              'from-primary w-64 justify-center bg-gradient-to-r from-60% to-violet-50 py-2 pr-5',
                          ]
                        : [
                              'absolute top-0 left-0 justify-end bg-black/70 p-2 pb-20 transition-all duration-500',
                              isOpen ? 'w-64' : 'w-0 -translate-x-64',
                          ],
                ],
                inheritedClasses,
            )
        "
    >
        <RouterLink
            v-for="option in options"
            :key="`sidebar-option-icon-${option.label}`"
            :to="option.path"
        >
            <GenericButton
                :disabled="currentPath === option.path"
                @click="!md && onSelect()"
                :class="
                    cn(
                        'group flex w-full items-center gap-2',
                        styles.button,
                        currentPath === option.path ? styles.selectedButton : '',
                    )
                "
            >
                <MdiIcon :icon="option.icon" :class="cn('h-6 w-6 text-inherit transition-all')" />
                <span class="text-inherit">{{ option.label }}</span>
            </GenericButton>
            <div
                v-if="option.children?.length"
                class="border-r-solid mt-2 ml-2 border-l-2 border-violet-700 pr-2 md:mr-2 md:ml-0 md:border-r-2 md:border-l-0 md:pr-0 md:pl-2"
            >
                <div v-for="child in option.children" :key="`sidebar-option-child-${child.label}`">
                    <RouterLink :to="child.path">
                        <GenericButton
                            :disabled="currentPath === child.path"
                            @click="!md && onSelect()"
                            :class="
                                cn(
                                    'group flex w-full items-center gap-2',
                                    styles.button,
                                    currentPath === child.path ? styles.selectedButton : '',
                                )
                            "
                        >
                            <MdiIcon
                                :icon="child.icon"
                                :class="cn('h-7 w-7 text-inherit transition-all')"
                            />
                            <span class="w-fit whitespace-nowrap text-inherit md:text-end">{{
                                child.label
                            }}</span>
                        </GenericButton>
                    </RouterLink>
                </div>
            </div>
        </RouterLink>
    </nav>
    <div v-if="!md" class="absolute bottom-0 left-0 z-50 p-2">
        <MenuToggleButton ref="toggleButtonRef" v-model="isOpen" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import MdiIcon from './MdiIcon.vue';
import { cn } from 'clsx-for-tailwind';
import { type ClassValue } from 'clsx';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { useRoute } from 'vue-router';
import MenuToggleButton from './MenuToggleButton.vue';
import GenericButton from './inputs/GenericButton.vue';

type SidebarCompOption = {
    icon: string;
    label: string;
    path: string;
    children?: SidebarCompOption[];
};

type SidebarCompProps = {
    options: SidebarCompOption[];
    class?: ClassValue;
};

const VARIANTS = {
    plain: {
        button: 'text-black hover:text-violet-800 hover:underline justify-end',
        selectedButton:
            'hover:text-black  bg-violet-300/60 rounded-none rounded-r-lg -ml-1 hover:no-underline',
    },
    tile: {
        button: 'text-white hover:bg-primary hover:text-black',
        selectedButton: 'bg-primary text-black',
    },
};

defineOptions({
    name: 'SidebarComp',
});

const props = defineProps<SidebarCompProps>();

const { md } = useBreakpoints(breakpointsTailwind);

const { path: currentPath } = toRefs(useRoute());

const isOpen = ref(false);
const inheritedClasses = computed(() => props.class);
const SidebarCompRef = ref();

const onSelect = (): void => {
    isOpen.value = false;
};

const toggleButtonRef = ref();

const styles = computed(() => (md.value ? VARIANTS.plain : VARIANTS.tile));
</script>
