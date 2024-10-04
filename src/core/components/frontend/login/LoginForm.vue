<template>
    <!-- Form -->
    <form>
        <div class="grid gap-y-4">
            <!-- Form Group -->
            <div>
                <label for="email" class="block text-sm mb-2">{{ t('EmailAddress') }}</label>
                <div class="relative">
                    <input type="email" id="email" name="email"
                        class="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required aria-describedby="email-error">
                </div>
            </div>
            <!-- End Form Group -->

            <!-- Form Group -->
            <div>
                <div class="flex justify-between items-center">
                    <label for="password" class="block text-sm mb-2">{{ t('Password') }}</label>
                    <router-link :to="{ path: `/${locale}/forgotPassword` }" class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium">{{ t('ForgotPasswordSymbol') }}</router-link>
                </div>
                <div class="relative">
                    <input type="password" id="password" name="password"
                        class="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required aria-describedby="password-error">
                </div>
            </div>
            <!-- End Form Group -->

            <!-- Checkbox -->
            <div class="flex items-center">
                <div class="flex">
                    <input id="remember-me" name="remember-me" type="checkbox"
                        class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500">
                </div>
                <div class="ms-3">
                    <label for="remember-me" class="text-sm">{{ t('RememberMe') }}</label>
                </div>
            </div>
            <!-- End Checkbox -->

            <button type="submit"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">{{
                    t('SignIn') }}</button>
        </div>
    </form>
    <!-- End Form -->
</template>

<script setup lang="ts" defer>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({
    inheritLocale: true,
    useScope: 'global'
})
</script>

<style scoped></style>