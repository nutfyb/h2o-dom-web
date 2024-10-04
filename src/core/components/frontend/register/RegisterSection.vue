<template>
    <div className="relative h-[100vh] w-full overflow-hidden z-10 pt-[32rem] pb-[32rem]">
        <img v-lazy="imageUrls.homeBanner" class="absolute inset-0 h-full w-full object-cover" alt="">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-purple-500/70" />
        <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-36">

                <div class="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div class="lg:col-span-1">
                        <div className="max-w-lg">
                            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
                                {{ t('TheBestRoom') }}
                            </h2>
                            <p className="mt-1 text-white">
                                {{
                                    t('MeetEveryLifestyleRequirementInYourOwnStyleBecauseWeBelieveThatTheRoomIsTheBestChefZone')
                                }}
                            </p>
                        </div>
                    </div>
                    <div class="lg:col-span-1 mt-10 lg:mt-0 lg:w-2/3">
                        <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
                            <div class="p-4 sm:p-7">
                                <h1 class="block text-2xl font-bold text-gray-800">{{ t('SignUp') }}</h1>
                                <p class="mt-2 text-sm text-gray-600">
                                    {{ t('AlreadyHaveAnAccountSymbol') }}
                                    <router-link :to="{ path: `/${locale}/login` }"
                                        class="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium">
                                        {{ t('SignInHere') }}
                                    </router-link>
                                </p>

                                <div class="mt-5">
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


</template>

<script setup lang="ts" defer>
import { useI18n } from 'vue-i18n';
import LoginForm from './RegisterForm.vue';

const { t, locale } = useI18n({
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