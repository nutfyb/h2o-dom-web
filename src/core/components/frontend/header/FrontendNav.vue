<template>
  <!-- ========== HEADER ========== -->
  <header :class="[{ 'translate-y-full': !showMenu, 'fixed': showMenu }]"
    class="flex flex-wrap md:flex-col md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
    <!-- Topbar -->
    <div class="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div class="flex-1 flex items-center justify-end gap-x-3 pt-2">
        <LanguageSwitcher />

        <!-- Button Group -->
        <div class="flex flex-wrap items-center gap-x-1.5">
          <router-link :to="{ path: `/${locale}/login` }" @click="scrollToTop">
            <p v-if="!isLoggedIn"
              class="py-2 px-2.5 inline-flex items-center font-medium text-[12px] rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              {{ t('SignIn') }}</p>
          </router-link>

          <div v-if="isLoggedIn" @click.self="toggleProfile" @click="toggleProfile"
            class="relative inline-block font-medium text-sm pr-5 py-2.5 text-center items-center rounded-lg cursor-pointer border px-4">
            <div class="flex items-center justify-center space-x-2">
              <img src="https://avatars.githubusercontent.com/u/56430739?v=4&size=64" alt="User Image"
                class="w-8 h-8 rounded-full border-2 border-white object-cover">
              <p class="text-sm font-medium">John Doe</p>
            </div>
            <div :class="isDropdownOpen ? 'block' : 'hidden'"
              class="absolute left-1/2 transform -translate-x-1/2 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My
                    Account</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <p @click="handleLogout"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</p>
                </li>
              </ul>
            </div>
          </div>



        </div>
        <!-- End Button Group -->
      </div>
    </div>
    <!-- End Topbar -->
    <nav
      class="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center gap-x-1">
        <a class="flex-none text-xl text-black focus:outline-none focus:opacity-80 font-bold" href="/">H2O DOM</a>

        <!-- Collapse Button -->
        <button type="button"
          class="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          id="hs-header-base-collapse" aria-expanded="false" aria-controls="hs-header-base"
          aria-label="Toggle navigation" data-hs-collapse="#hs-header-base" @click="toggleMenu">
          <svg class="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg class="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span class="sr-only">Toggle navigation</span>
        </button>
        <!-- End Collapse Button -->
      </div>

      <!-- Collapse -->
      <div id="hs-header-base"
        class="hs-collapse overflow-hidden hidden transition-all duration-300 basis-full grow md:block "
        aria-labelledby="hs-header-base-collapse">
        <div
          class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]">
          <div class="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
            <div class="grow">
              <div class="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                <router-link :to="{ path: `/${locale}/` }" @click="scrollToTop"
                  class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg">
                  <span class="icon-home shrink-0 size-4 me-3 md:me-2 block"></span>
                  {{ t('Home') }}
                </router-link>

                <router-link :to="{ path: `/${locale}/about` }" @click="scrollToTop"
                  class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg">
                  <span class="icon-user shrink-0 size-4 me-3 md:me-2 block"></span>
                  {{ t('About') }}
                </router-link>

                <router-link :to="{ path: `/${locale}/services` }" @click="scrollToTop"
                  class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg">
                  <span class="icon-bag shrink-0 size-4 me-3 md:me-2 block"></span>
                  {{ t('Services') }}
                </router-link>

                <router-link :to="{ path: `/${locale}/contact` }" @click="scrollToTop"
                  class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg">
                  <span class="icon-newspaper shrink-0 size-4 me-3 md:me-2 block"></span>
                  {{ t('Contact') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Collapse -->

      <!-- Drawer -->
      <transition name="drawer" @click.self="closeDialog">
        <div>
          <!-- Backdrop -->
          <div v-if="showMenuPopup" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" @click="toggleOffcanvas">
          </div>

          <!-- Drawer Content -->
          <div id="hs-header-base-drawer" :class="showMenuPopup ? 'translate-x-0' : 'translate-x-full'"
            class="fixed top-0 right-0 h-full max-w-xs w-full z-[80] bg-white shadow-lg transition-transform duration-300"
            role="dialog" tabindex="-1">
            <div class="flex justify-between items-center py-3 px-4 border-b">
              <h3 id="hs-header-base-drawer-label" class="font-bold text-gray-800">
                {{ t('Menu') }}
              </h3>
              <button type="button"
                class="inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200"
                aria-label="Close" @click="toggleOffcanvas">
                <span class="sr-only">Close</span>
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-col gap-1 p-4">
              <router-link :to="{ path: `/${locale}/` }" @click="scrollToTop"
                class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg" href="#"
                aria-current="page">
                <span class="icon-home shrink-0 size-4 me-3 md:me-2 block"></span>
                {{ t('Home') }}
              </router-link>

              <router-link :to="{ path: `/${locale}/about` }" @click="scrollToTop"
                class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg" href="#">
                <span class="icon-user shrink-0 size-4 me-3 md:me-2 block"></span>
                {{ t('About') }}
              </router-link>

              <router-link :to="{ path: `/${locale}/services` }" @click="scrollToTop"
                class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg" href="#">
                <span class="icon-bag shrink-0 size-4 me-3 md:me-2 block"></span>
                {{ t('Services') }}
              </router-link>

              <router-link :to="{ path: `/${locale}/contact` }" @click="scrollToTop"
                class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg" href="#">
                <span class="icon-newspaper shrink-0 size-4 me-3 md:me-2 block"></span>
                {{ t('Contact') }}
              </router-link>
            </div>
          </div>
        </div>
      </transition>


    </nav>
  </header>


  <!-- ========== END HEADER ========== -->
</template>

<script setup lang="ts" defer>

import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from '@/core/components/frontend/header/LanguageSwitcher.vue'
import { useAuthStore } from '@/core/store/auth';
import router from '@/core/router';
// import CompanyLogo from '../components/CompanyLogo.vue';

const showMenu = ref(true);
const previousScrollPosition = ref();
const navTopScroll = ref(true);
const showMenuPopup = ref(false);
const isDropdownOpen = ref(false);
const authStore = useAuthStore();
const isLoggedIn = authStore.isLoggedIn;


const handleLogout = async () => {
  const authStore = useAuthStore();

  try {
    authStore.logout();

    await router.replace({ name: 'Login' });

    window.location.reload();
  } catch (error) {
    console.error('Logout failed', error);
  }
};

// Function to toggle the drawer
const toggleOffcanvas = () => {
  showMenuPopup.value = !showMenuPopup.value;
  document.body.style.overflow = showMenuPopup.value ? 'hidden' : 'visible'; // Adjust scrolling
};

// Function to close the drawer
const closeDialog = () => {
  showMenuPopup.value = false;
  document.body.style.overflow = 'visible'; // Restore scrolling
};

// Function to handle window resize
const handleResize = () => {
  if (window.innerWidth >= 768) { // Assuming 768px is your breakpoint for mobile/tablet
    closeDialog(); // Close the drawer when resizing to web size
  }
};


const toggleMenu = () => {
  showMenuPopup.value = !showMenuPopup.value;
};

const toggleProfile = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
}

const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.querySelector('.relative.inline-block');
  if (dropdown && !dropdown.contains(event.target as Node)) {
    isDropdownOpen.value = false;
  }
}

// call function useI18n
const { t, locale } = useI18n({
  inheritLocale: true,
  useScope: 'global'
})

// Method scroll to top
const scrollToTop = () => {
  window.scrollTo(0, 0);
  showMenuPopup.value = false;
}

const handleScroll = () => {
  let currentScrollPosition = window.scrollY


  if (currentScrollPosition < 0) {
    currentScrollPosition = 0
  }

  if (
    currentScrollPosition > previousScrollPosition.value
  ) {
    showMenu.value = false;
    showMenuPopup.value = false;
  } else {
    showMenu.value = true;
  }

  previousScrollPosition.value = currentScrollPosition

}

const navTop = () => {
  if (window.scrollY == 0) {
    navTopScroll.value = true;
  } else {
    navTopScroll.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', navTop);
  window.addEventListener('resize', handleResize);
  document.addEventListener('click', handleClickOutside);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', handleClickOutside);
})

</script>

<style scoped lang="scss">
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s ease;
}

.drawer-enter,
.drawer-leave-to {
  transform: translateX(100%);
}

.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

.router-link-exact-active {
  color: #136FFE;
}

.icon-home {
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url('/assets/icons/icon-home.svg');
  mask-image: url('/assets/icons/icon-home.svg');
  -webkit-mask-size: cover;
  mask-size: cover;
}

.router-link-exact-active .icon-home {
  background-color: #136FFE;
}

.icon-user {
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url('/assets/icons/icon-user.svg');
  mask-image: url('/assets/icons/icon-user.svg');
  -webkit-mask-size: cover;
  mask-size: cover;
}

.router-link-exact-active .icon-user {
  background-color: #136FFE;
}

.icon-bag {
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url('/assets/icons/icon-bag.svg');
  mask-image: url('/assets/icons/icon-bag.svg');
  -webkit-mask-size: cover;
  mask-size: cover;
}

.router-link-exact-active .icon-bag {
  background-color: #136FFE;
}

.icon-newspaper {
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url('/assets/icons/icon-newspaper.svg');
  mask-image: url('/assets/icons/icon-newspaper.svg');
  -webkit-mask-size: cover;
  mask-size: cover;
}

.router-link-exact-active .icon-newspaper {
  background-color: #136FFE;
}

.translate-y-full {
  transform: translateY(-100%);
}

header {
  transition: 0.5s all ease-out;
}
</style>