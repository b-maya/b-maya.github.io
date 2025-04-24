<template>
    <nav
        ref="SidebarCompRef"
        :class="
            cn(
                'z-50 flex h-full flex-col gap-6 bg-black/70 p-2 transition-all duration-1000 sm:gap-4',
                [
                    sm
                        ? ['relative', { 'mr-2 pr-0': isOpen }]
                        : [
                              'absolute top-0 left-0 justify-end pb-20 transition-all duration-500',
                              isOpen ? 'w-32' : 'w-0 -translate-x-32',
                          ],
                ],
                inheritedClasses,
            )
        "
        @pointerenter="sm && openExtension()"
        @pointerleave="sm && closeSidebarExtension()"
    >
        <RouterLink
            v-for="(option, index) in options"
            :key="`sidebar-option-icon-${option.label}`"
            :to="option.path"
        >
            <GenericButton
                :disabled="currentPath === option.path"
                @click="onSelect()"
                @pointerover="sm && onPointerIn(index)"
                @pointerleave="sm && onPointerLeave()"
                class="group flex w-full items-center gap-2 sm:w-auto"
                :class="[
                    currentPath === option.path || mouseOverIndex === index
                        ? 'bg-primary text-black'
                        : 'text-white',
                    currentPath !== option.path && isOpen && sm ? 'rounded-r-none' : '',
                ]"
            >
                <MdiIcon :icon="option.icon" :class="cn('h-6 w-6 text-inherit transition-all')" />
                <span v-if="!sm" class="text-inherit">{{ option.label }}</span>
            </GenericButton>
        </RouterLink>
        <Transition
            enter-from-class="w-0 opacity-0"
            enter-active-class="transition-all duration-1000"
            enter-to-class="opacity-100"
            leave-from-class="w-64 opacity-100"
            leave-active-class="transition-all duration-1000"
            leave-to-class="w-0 opacity-0"
        >
            <div
                v-if="sm && isOpen"
                :class="
                    cn(
                        'absolute top-0 left-full flex h-full w-64 flex-col items-start gap-4 overflow-hidden py-2 pr-2',
                        'bg-gradient-to-r from-black/70 to-black/40',
                    )
                "
            >
                <RouterLink
                    v-for="(option, index) in options"
                    :key="`sidebar-option-text-${option.label}`"
                    :to="option.path"
                    class="w-full"
                >
                    <GenericButton
                        @click="onSelect()"
                        :class="
                            cn('w-full rounded-none rounded-r-lg pl-4 text-start text-white', {
                                'bg-primary text-black':
                                    currentPath !== option.path && mouseOverIndex === index,
                            })
                        "
                        @pointerover="sm && onPointerIn(index)"
                        @pointerleave="sm && onPointerLeave()"
                        :disabled="currentPath === option.path"
                    >
                        {{ option.label }}
                    </GenericButton>
                </RouterLink>
            </div>
        </Transition>
    </nav>
    <div v-if="!sm" class="absolute bottom-0 left-0 z-50 p-2">
        <MenuToggleButton ref="toggleButtonRef" v-model="isOpen" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import MdiIcon from './MdiIcon.vue';
import { cn } from 'clsx-for-tailwind';
import { type ClassValue } from 'clsx';
import { onClickOutside, useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { useRoute } from 'vue-router';
import MenuToggleButton from './MenuToggleButton.vue';
import GenericButton from './inputs/GenericButton.vue';

type SidebarCompOption = {
    icon: string;
    label: string;
    path: string;
};

type SidebarCompProps = {
    options: SidebarCompOption[];
    class?: ClassValue;
};

defineOptions({
    name: 'SidebarComp',
});

const props = defineProps<SidebarCompProps>();

const { sm } = useBreakpoints(breakpointsTailwind);

const { path: currentPath } = toRefs(useRoute());

const isOpen = ref(false);
const mouseOverIndex = ref<number>();
const inheritedClasses = computed(() => props.class);
const SidebarCompRef = ref();

const onPointerIn = (index: number) => {
    isOpen.value = true;
    mouseOverIndex.value = index;
};

const onPointerLeave = () => {
    mouseOverIndex.value = undefined;
};

const openExtension = () => {
    isOpen.value = true;
};

const closeSidebarExtension = () => {
    setTimeout(() => {
        onPointerLeave();
        isOpen.value = false;
    }, 500);
};

const onSelect = (): void => {
    onPointerLeave();
    isOpen.value = false;
};

const toggleButtonRef = ref();

onClickOutside(SidebarCompRef, closeSidebarExtension, { ignore: [toggleButtonRef] });
</script>
