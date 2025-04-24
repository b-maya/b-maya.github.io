<template>
    <div class="m-auto flex h-full w-24 flex-col gap-2 bg-pink-200 p-4">
        <GenericButton class="w-fit bg-gray-300" @click.stop="onClick">Click me</GenericButton>
        <div class="relative w-full bg-green-500 duration-700" :class="[toggle ? 'h-50' : 'h-24']">
            <div class="h-full w-full overflow-hidden bg-amber-500 transition-all duration-700">
                <p class="text-xl font-bold text-black">yoooooooo hahahaha this is the new stuff</p>
            </div>
        </div>

        <div class="h-24 w-full overflow-hidden bg-green-500 duration-700">
            <p class="text-xl font-bold text-black">This is the text below</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GenericButton from '../inputs/GenericButton.vue';

const toggle = ref(false);
const onClick = () => {
    toggle.value = !toggle.value;
};
</script>
