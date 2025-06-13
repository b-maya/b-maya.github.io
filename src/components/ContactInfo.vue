<template>
    <div
        class="flex items-center justify-center"
        :class="[vertical ? 'flex-col gap-2' : 'w-full gap-8 xl:gap-16']"
    >
        <a
            href="mailto:maya.b.researcher@gmail.com"
            title="mailto:maya.b.researcher@gmail.com"
            target="_blank"
            class="group rounded-lg p-2 hover:bg-black/70"
        >
            <MdiIcon :icon="GMAIL_ICON" class="group-hover:text-primary h-10 w-10 text-black" />
        </a>

        <a
            href="https://www.linkedin.com/in/maya-balasubramanya-8ba38546/"
            title="https://www.linkedin.com/in/maya-balasubramanya-8ba38546/"
            target="_blank"
            class="group rounded-lg p-2 hover:bg-black/70"
        >
            <MdiIcon :icon="LINKEDIN_ICON" class="group-hover:text-primary h-10 w-10 text-black" />
        </a>
    </div>
</template>

<script setup lang="ts">
import MdiIcon from './MdiIcon.vue';

const GMAIL_ICON =
    'M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z';

const LINKEDIN_ICON =
    'M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z';

type ContactInfoProps = {
    vertical?: boolean;
};
defineOptions({
    name: 'ContactInfo',
});
defineProps<ContactInfoProps>();
</script>
