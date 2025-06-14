<template>
    <div class="h-full w-full snap-y snap-mandatory overflow-auto bg-white/90">
        <SnapSection class="flex flex-col">
            <div
                class="from-highlight to-highlight/80 sticky top-0 left-0 z-10 flex w-full flex-col items-center bg-gradient-to-b from-50% px-2 py-2"
            >
                <RespText as="h1" size="xl" class="text-center font-light">
                    {{ ZERO_HUNGER_INFO.title }}
                </RespText>
            </div>
            <RespText
                size="xs"
                class="bg-highlight mx-auto w-fit rounded-b-lg px-2 py-1 font-extralight whitespace-nowrap sm:font-normal"
            >
                {{ ZERO_HUNGER_INFO.date }}
            </RespText>
            <RespText size="xs" class="px-8 pt-4 text-center">
                {{ ZERO_HUNGER_INFO.title_sub }}
            </RespText>
            <div class="flex h-full w-full grow flex-col justify-center gap-8 px-8 py-4">
                <p class="w-full">
                    <RespText as="h2" size="sm" class="inline font-bold">
                        Research Question:
                    </RespText>
                    <RespText as="span" size="sm" class="italic">
                        How can we ensure equitable distribution of food in Tilburg University in
                        order for students to have sufficient access to food?
                    </RespText>
                </p>
                <RespText as="h2" size="base" class="font-bold">
                    Part 1 – Individual Assignment
                </RespText>
                <div class="flex gap-4 px-8 lg:gap-8">
                    <p class="w-full">
                        <RespText as="h3" size="sm" class="inline font-bold">
                            Process Followed:
                        </RespText>
                        <RespText as="span" size="sm">
                            The assignment was to individually brainstorm solutions that can solve
                            the aforementioned research question. Scroll below to see the prototypes
                            I built using objects found at home, along with a short rationale behind
                            them.
                        </RespText>
                    </p>
                    <div class="flex w-full flex-col gap-2">
                        <RespText as="h3" size="sm" class="font-bold"> My Role: </RespText>
                        <ul class="flex list-inside list-disc flex-col gap-4 pl-4">
                            <RespText as="li" size="sm">
                                Independently created three prototypes, with community-building and
                                job-creation approaches
                            </RespText>
                            <RespText as="li" size="sm">
                                Used found objects to build the solutions
                            </RespText>
                        </ul>
                    </div>
                </div>
                <p class="w-full text-center">
                    <RespText as="h3" size="sm" class="inline font-bold">
                        Materials and Tools Used:
                    </RespText>
                    <RespText as="span" size="sm"> Indoor found objects, Figma, Canva </RespText>
                </p>
                <!-- <PhotoRoll class="mt-4" :images="coverImage" /> -->
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col">
            <div class="flex h-full w-full grow flex-col justify-center pt-4">
                <p class="w-full px-8">
                    <RespText as="h3" size="sm" class="font-bold">
                        Prototype 1: Community greenhouse and compost pit at Tilburg University.
                    </RespText>
                    <RespText as="h4" size="sm" class="inline font-bold"> Idea: </RespText>
                    <RespText as="span" size="sm">
                        A greenhouse to grow vegetables and fruits in order to provide for students
                        from low-income backgrounds and others based on priority. The greenhouse
                        could also provide jobs to students. In addition, all canteens and cafes in
                        the premises can dispose of their biodegradable waste into a compost pit,
                        which can be used as manure for the crops. This idea is based on the common
                        practice in many south Indian homes where plant waste is used as manure.
                    </RespText>
                </p>

                <PhotoRoll
                    :images="[
                        {
                            src: LoFiGreenhouse,
                            alt: 'A low-fidelity prototype of a greenhouse and compost pit, built with kitchen organisers, coloured paper, plastic sheet, a paper-based egg holder wrapped with paper.',
                            withCaption: true,
                        },
                    ]"
                />
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col">
            <div class="flex h-full w-full grow flex-col justify-center pt-4">
                <p class="w-full px-8">
                    <RespText as="h3" size="sm" class="font-bold">
                        Prototype 2: Soup kitchen at Maranatha Student Church at Tilburg University.
                    </RespText>
                    <RespText as="h4" size="sm" class="inline font-bold"> Idea: </RespText>
                    <RespText as="span" size="sm">
                        A scalable soup kitchen that runs entirely on volunteers who cook and
                        donations from local residents and wealthy donors, at the Maranatha Student
                        Church in the university premises. This idea is based on the ‘Langar’ free
                        food system run by people of Sikh religion at their religious temples called
                        ‘Gurudwaras’ in India and abroad.
                    </RespText>
                </p>

                <PhotoRoll
                    :images="[
                        {
                            src: LoFiKitchen,
                            alt: 'A low-fidelity prototype of a community kitchen, built with a shoebox and coloured chart paper.',
                            withCaption: true,
                        },
                    ]"
                />
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col">
            <div class="flex h-full w-full grow flex-col justify-center pt-4">
                <RespText size="sm" class="w-full px-8">
                    The second idea could be operationalized by getting able senior citizens and
                    others who are willing to volunteer to cook food, as well as by requesting local
                    residents and wealthy donors to donate food. Flyers (customized for this project
                    on Canva) such as the following can be part of the scalable community-driven
                    campaign:
                </RespText>
                <div class="flex h-full w-full grow">
                    <PhotoRoll
                        class="h-full"
                        :images="[
                            {
                                src: FoodDriveImage,
                                alt: 'Prototypes of flyers that could be used to campaign for food drives at the aforementioned community kitchen idea.',
                            },
                        ]"
                    />
                    <PhotoRoll
                        class="h-full"
                        :images="[
                            {
                                src: CookForNeedy,
                                alt: 'Prototypes of flyers that could be used to campaign for food drives at the aforementioned community kitchen idea.',
                                withCaption: true,
                            },
                        ]"
                    />
                </div>
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col">
            <div class="flex h-full w-full grow flex-col justify-center pt-4">
                <p class="w-full px-8">
                    <RespText as="h3" size="sm" class="inline font-bold">
                        Prototype 3: An app-based tie-up with local restaurants and supermarkets
                    </RespText>
                    <RespText as="span" size="sm">
                        to provide edible but days-old food that may be thrown away, at discounted
                        prices to Tilburg University students. (The below image was created on
                        Figma).
                    </RespText>
                </p>

                <PhotoRoll
                    :images="[
                        {
                            src: DiscountFoodApp,
                            alt: `A low-fidelity prototype of the app. (This was the first time I’d used Figma, so the design may not be visually appealing!)`,
                            withCaption: true,
                        },
                    ]"
                />
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col">
            <div class="flex h-full w-full grow flex-col justify-center pt-4">
                <div class="flex w-full flex-col gap-4 px-8">
                    <RespText as="h2" size="sm" class="font-bold">
                        Part 2 - Group Assignment
                    </RespText>
                    <RespText as="span" size="sm">
                        The group assignment was to create one medium-fidelity prototype, by merging
                        aspects from five individual assignments. ‘Food Share’ which was run by a
                        food bus was the concept chosen and a video was created to show how the food
                        bus would work.
                    </RespText>
                    <div class="flex gap-4 px-8 lg:gap-8">
                        <p class="w-full">
                            <RespText as="h3" size="sm" class="inline font-bold">
                                Process Followed:
                            </RespText>
                            <RespText as="span" size="sm">
                                Elements from 5 individual low-fidelity prototypes were combined to
                                create a medium-fidelity prototype and concept video. See below a
                                visual representation of the process.
                            </RespText>
                        </p>
                        <div class="flex w-full flex-col gap-2">
                            <RespText as="h3" size="sm" class="font-bold"> My Role: </RespText>
                            <ul class="flex list-inside list-disc flex-col gap-4 pl-4">
                                <RespText as="li" size="sm"> Poster design on Canva </RespText>
                                <RespText as="li" size="sm">
                                    Created the visual representation of merging aspects from
                                    individual prototypes on Figma.
                                </RespText>
                                <RespText as="li" size="sm">
                                    Crafted the ‘critical reflection’ part of the assignment.
                                </RespText>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col">
            <div class="flex h-full w-full flex-col justify-center pt-4">
                <RespText as="h3" size="sm" class="px-8 font-bold">
                    Visual representation of merging aspects from individual prototypes (created on
                    Figma):
                </RespText>
                <PhotoRoll
                    :images="[
                        {
                            src: FoodShareMerged,
                            alt: 'Visual representation of merging aspects from individual prototypes (created on Figma)',
                        },
                    ]"
                />
            </div>
        </SnapSection>

        <SnapSection class="flex flex-col">
            <div class="flex h-full w-full flex-col justify-center pt-4">
                <RespText as="h3" size="sm" class="px-8 font-bold">
                    A poster featuring the schedule of ‘Food Share’ (created on Canva):
                </RespText>

                <div class="flex h-full w-full grow">
                    <PhotoRoll
                        class="h-full"
                        :images="[
                            {
                                src: FoodBus,
                                alt: 'Page 1 of the poster featuring the schedule of ‘Food Share’ (created on Canva)',
                            },
                        ]"
                    />
                    <PhotoRoll
                        class="h-full"
                        :images="[
                            {
                                src: FoodBus2,
                                alt: 'Page 2 of the poster featuring the schedule of ‘Food Share’ (created on Canva)',
                            },
                        ]"
                    />
                </div>
            </div>
        </SnapSection>
    </div>
</template>

<script setup lang="ts">
import RespText from '@/components/RespText.vue';
import ZERO_HUNGER_INFO from '@/definitions/zero-hunger-info';
import SnapSection from '../../SnapSection.vue';

import LoFiGreenhouse from '@/assets/images/projects/zero-hunger/lo-fi-greenhouse.png';
import LoFiKitchen from '@/assets/images/projects/zero-hunger/lo-fi-kitchen.png';
import FoodDriveImage from '@/assets/images/projects/zero-hunger/food-drive.png';
import CookForNeedy from '@/assets/images/projects/zero-hunger/cook-for-needy.png';
import DiscountFoodApp from '@/assets/images/projects/zero-hunger/discount-food-app.png';
import FoodShareMerged from '@/assets/images/projects/zero-hunger/food-share-merged.png';
import FoodBus from '@/assets/images/projects/zero-hunger/food-bus.jpg';
import FoodBus2 from '@/assets/images/projects/zero-hunger/food-bus-2.jpg';

import PhotoRoll from '@/components/photo-reel/PhotoRoll.vue';

defineOptions({
    name: 'StopMakingExcuses',
});
</script>
