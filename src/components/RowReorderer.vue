<template>
    <slot v-for="item in order" :name="item" />
</template>

<script setup lang="ts">
type RowOrdererProps = {
    order: (number | string)[];
};
defineProps<RowOrdererProps>();
</script>
