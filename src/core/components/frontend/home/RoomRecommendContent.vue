<template>
  <div className="relative w-full overflow-hidden py-16 z-10">
    <img v-lazy="imageUrls.homeBanner" class=" absolute inset-0 h-full w-full object-cover -z-30" alt="">
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-white/70 -z-20" />
    <!-- <div className="absolute inset-0 flex items-center"> -->
    <!-- Card Blog -->
    <div
      class="inset-0 items-center max-w-[85rem] py-10 px-4 sm:px-6 mx-auto grid xl:flex justify-center xl:justify-between">
      <!-- Title -->
      <div class="container mx-auto px-4 mb-6 lg:w-1/3 text-center xl:text-start">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-white">{{ t('RecommendedRooms') }}</h2>
        <p class="mt-1 text-white">{{ t('TheRightRoomForYou') }}</p>


        <div class="xl:flex mt-6">
          <a class="py-2 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full bg-primary text-white"
            href="#">
            {{ t('SeeAll') }}
          </a>
        </div>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <!-- <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-4 xl:gap-16 sm:w-2/3"> -->
      <!-- <div class="grid grid-flow-col auto-cols-max gap-6"> -->
      <div class="grid md:grid-flow-col md:auto-cols-max gap-6">
        <CardDetail />
        <CardDetail />
        <CardDetail />
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
    <!-- </div> -->
  </div>

</template>

<script setup lang="ts" defer>
import { useI18n } from 'vue-i18n';
import CardDetail from '@/core/components/frontend/cards/CardDetail.vue'

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
        homeBanner: "/assets/images/image-hero-content-2.webp",
      },
    }
  }
}
</script>


<style lang="scss" scoped></style>