<template>
    <!-- Form -->
    <form>
        <div class="grid gap-y-4">
            <!-- Form Group -->
            <div>
                <label for="email" class="block text-sm mb-2">{{ t('EmailAddress') }}</label>
                <div class="relative">
                    <input type="email" id="email" name="text"
                        class="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required aria-describedby="text-error">
                </div>
            </div>
            <!-- End Form Group -->

            <button type="submit"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">{{
                    t('ResetPassword') }}</button>
        </div>
    </form>
    <!-- End Form -->
</template>

<script setup lang="ts" defer>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({
    inheritLocale: true,
    useScope: 'global'
})
</script>

<style scoped></style>