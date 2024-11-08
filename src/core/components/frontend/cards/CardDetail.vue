<template>
    <router-link :to="{ path: `/${locale}/roomDetail/1` }" @click="scrollToTop"
        class="flex flex-col focus:outline-none bg-secondary px-2 py-2 rounded-xl w-72 md:w-56 lg:w-72 h-auto" href="#">
        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                v-lazy="imageUrls.roomCard" alt="Blog Image">
        </div>

        <div class="mt-7">
            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-blue-500">
                ห้องแอร์
            </h3>
            <p><span>{{ t('RoomNumber') }}</span> 110</p>
            <p><span>{{ t('Status') }}:</span> ว่าง</p>
            <h5 class="text-sm text-gray-800 text-right"><span class="text-xl font-bold">5500</span> {{
                t('BahtSymbolMonth') }}</h5>
        </div>
    </router-link>
</template>

<script setup lang="ts" defer>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const showMenuPopup = ref(false);

const { t, locale } = useI18n({
    inheritLocale: true,
    useScope: 'global'
})
// Method scroll to top
const scrollToTop = () => {
    window.scrollTo(0, 0);
    showMenuPopup.value = false;
}

</script>

<script lang="ts" defer>

export default {
    data() {
        return {
            imageUrls: {
                roomCard: "/assets/images/room-empty.webp",
            },
        }
    }
}
</script>

<style scoped></style>