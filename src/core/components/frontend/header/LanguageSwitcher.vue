<template>
    <button
        class="inline-flex justify-center items-center gap-x-2 font-medium text-[12px] text-gray-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-500"
        @click="openDialog">
        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
            <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
            <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
            <circle cx="12" cy="12" r="10" />
        </svg>
        <p>{{ activeLang }}</p>
    </button>
    <transition name="dialog">
        <div v-if="isOpen" class="dialog-overlay backdrop-blur-sm" @click.self="closeDialog">
            <ul class="dialog-content bg-white text-black p-4">
                <li v-for="(value, key) in langs" :key="key">
                    <button class="flex px-4 py-2 w-full text-left text-sm"
                        @click="handleMenuItemClick(key.toString())">
                        <img v-if="String(key) === locale" src="/assets/icons/icon-check.svg" alt="" class="w-5">
                        <img v-else src="/assets/icons/icon-check.svg" alt="" class="w-5 opacity-0">
                        <img :src="`/src/assets/icons/icon-${key}.svg`" alt="Language icon"
                            class="inline-block w-5 h-5 mr-2 ml-4" />
                        {{ value }}
                    </button>
                </li>
                <li @click="closeDialog"
                    class="text-center button-secondary text-white rounded-full shadow-sm py-1 mt-2 cursor-pointer">
                    <button>{{ $t('Close') }}</button>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script setup lang="ts">

import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router'

const router = useRouter();
const isOpen = ref(false);

// Method Open Dialog
const openDialog = () => {
    isOpen.value = !isOpen.value;
    document.body.style.overflow = 'hidden'; // Disable screen scrolling when Dialog opens.
    document.body.style.insetInlineEnd = '17px';
};

// Method Close Dialog
const closeDialog = () => {
    isOpen.value = false;
    document.body.style.overflow = 'visible'; // Turn on screen scrolling when Dialog closes.
    document.body.style.position = 'revert';
    document.body.style.insetInlineEnd = '0px';
};

// call function useI18n
const { locale } = useI18n({
    inheritLocale: true,
    useScope: 'global'
})

// Switch Multi Language
const langs: any = {
    'en': 'English',
    'th': 'ไทย',
}

// The activeLang variable references the currently selected language.
const activeLang = ref(langs[`${locale.value}`]);

// Method Change Language
function handleMenuItemClick(lang: string) {
    // set new locale switch
    locale.value = lang
    // switch lang from dialog
    activeLang.value = langs[lang]
    // save language to localStorage
    localStorage.setItem('lang', lang)
    // close dialog
    isOpen.value = false
    document.body.style.overflow = 'visible'; // Turn on screen scrolling when Dialog closes.
    document.body.style.position = 'revert';

    try {
        // Redirect URL with selected language
        router.replace({ params: { locale: lang } })
        // router.replace(`/${lang}/`)
    } catch (e) {
        // router.push("/")
        router.push({ params: { locale: lang } })
    }
}

onMounted(() => {
    // Check the language from the parameters in the URL and change the language as needed.
    const langFromPath: any = router.currentRoute.value.params.locale;
    if (langFromPath && Object.keys(langs).includes(langFromPath)) {
        locale.value = langFromPath;
        // switch lang from path url
        activeLang.value = langs[langFromPath]
        // save language to localStorage
        localStorage.setItem('lang', langFromPath)
    } else {
        const storedLang = localStorage.getItem('lang');
        const storedRoute = storedLang ? `/${storedLang}/` : `/${locale}/`;
        // const storedRoute = storedLang ? `/${lang}/` : `/${locale.value}/`;
        router.replace(storedRoute);
    }

    // Check if the previously selected language exists in localStorage.
    const storedLang = localStorage.getItem('lang')
    if (storedLang && Object.keys(langs).includes(storedLang)) {
        locale.value = storedLang;
        activeLang.value = langs[storedLang];
    } else if (router.currentRoute.value.path === '/') {
        // If the current route is the root URL, set the language based on the preferred language
        // For example, if preferred language is "en", set the locale to "en"
        let preferredLang = navigator.language.split('-')[0] ?? 'en';
        if (Object.keys(langs).includes(preferredLang)) {
            locale.value = preferredLang;
            activeLang.value = langs[preferredLang];
            localStorage.setItem('lang', preferredLang);
        } else {
            preferredLang = langs[0];
            locale.value = preferredLang;
            activeLang.value = langs[preferredLang];
            localStorage.setItem('lang', preferredLang);
            router.replace(`/${preferredLang}/`);
        }
    }
})

watch(locale, (newLocale) => {
    activeLang.value = langs[`${newLocale}`];
});

</script>

<style scoped>
.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
}

.dialog-content {
    border-radius: 5px;
}

.dialog-enter-active,
.dialog-leave-active {
    transition: all 0.25s ease;
}

.dialog-enter-from,
.dialog-leave-to {
    opacity: 0;
    transform: scale(1.1);
}
</style>