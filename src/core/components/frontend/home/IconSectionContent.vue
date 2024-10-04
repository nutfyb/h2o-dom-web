<template>
    <!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-36 mx-auto">
    <!-- Grid -->
    <div class="grid lg:grid-cols-[1fr_3fr] gap-12">
        <!-- Title -->
        <div class="lg:w-full text-center lg:text-start">
            <h2 class="text-3xl text-blue font-bold lg:text-4xl">
                {{ t('FullServiceDormitory') }}
            </h2>
            <p class="mt-3 text-gray-800">
                {{ t('MeetEveryLifestyleYouDesire') }}
            </p>

            <img v-lazy="imageUrls.roomSection" class="inset-0 object-cover inline-table" alt="">
        </div>
        <!-- End Title -->

        <!-- Icon Blocks -->
        <div class="w-full mx-auto flex justify-center">
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-center justify-center">
                <!-- Icon Block -->
                <div class="text-center flex flex-col justify-center items-center h-full">
                    <img v-lazy="imageUrls.iconWashingMachine" class="shrink-0 size-16 mx-auto" alt="">
                    <div class="mt-3">
                        <h3 class="text-lg font-semibold text-gray-800">{{ t('Convenient') }}</h3>
                        <p class="mt-1 text-gray-600">
                            {{ t('BecauseThereAreVariousFacilitiesSuchAsWashingMachinesAndDryers') }}
                        </p>
                    </div>
                </div>
                <!-- End Icon Block -->

                <!-- Icon Block -->
                <div class="text-center flex flex-col justify-center items-center h-full">
                    <img v-lazy="imageUrls.iconCarbonClean" class="shrink-0 size-16 mx-auto" alt="">
                    <div class="mt-3">
                        <h3 class="text-lg font-semibold text-gray-800">{{ t('Clean') }}</h3>
                        <p class="mt-1 text-gray-600">
                            {{ t('BecauseWeProvideCleaningServicesAndGarbageTrucks') }}
                        </p>
                    </div>
                </div>
                <!-- End Icon Block -->

                <!-- Icon Block -->
                <div class="text-center flex flex-col justify-center items-center h-full">
                    <img v-lazy="imageUrls.iconVideSecurity" class="shrink-0 size-16 mx-auto" alt="">
                    <div class="mt-3">
                        <h3 class="text-lg font-semibold text-gray-800">{{ t('Security') }}</h3>
                        <p class="mt-1 text-gray-600">
                            {{ t('OnEveryFloorBothInsideAndOutsideWeHaveCCTVCamerasCoveringTheEntireBuilding') }}
                        </p>
                    </div>
                </div>
                <!-- End Icon Block -->
            </div>
        </div>
        <!-- End Icon Blocks -->
    </div>
    <!-- End Grid -->
</div>



</template>

<script setup lang="ts" defer>
import { useI18n } from 'vue-i18n';
const { t } = useI18n({
    inheritLocale: true,
    useScope: 'global'
})

</script>

<script lang="ts" defer>

export default {
    data() {
        return {
            imageUrls: {
                roomSection: "/assets/images/image-section-1.webp",
                iconWashingMachine: "/assets/icons/icons-washing-machine.svg",
                iconVideSecurity: "/assets/icons/icon-viideo-security-filled.svg",
                iconCarbonClean: "/assets/icons/icon-carbon-clean.svg",
            },
        }
    }
}
</script>

<style scoped></style>