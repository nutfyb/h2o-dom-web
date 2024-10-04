<template>
  <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden z-10">
    <img v-lazy="imageUrls.homeBanner" class="absolute inset-0 h-full w-full object-cover" alt="">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-purple-500/70" />
    <div className="absolute inset-0 flex items-center">
      <div className="container mx-auto px-4 max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-36">
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
            {{ t('TheBestRoom') }}
          </h2>
          <p className="mt-1 text-white">
            {{ t('MeetEveryLifestyleRequirementInYourOwnStyleBecauseWeBelieveThatTheRoomIsTheBestChefZone') }}
          </p>
        </div>
      </div>
    </div>
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
        homeBanner: "/src/assets/images/image-hero-content-1.webp",
      },
    }
  }
}
</script>

<style scoped></style>