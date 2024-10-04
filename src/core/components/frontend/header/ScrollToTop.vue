<template>
    <button class="animate-bounce scroll-to-top bg-gradient-to-r from-blue-500/70 to-purple-500/40" v-if="showButton" @click="scrollToTop">
        <img src="/assets/icons/icon-arrow-up.svg" class="inline w-6 h-6 text-white" alt="">
    </button>
  </template>
  
  <script lang="ts" defer>
  import { defineComponent, onMounted, ref, watch } from 'vue'
  
  export default defineComponent({
    name: 'ScrollToTopButton',
    components: {},

    setup() {
      const showButton = ref(false)
  
      const handleScroll = () => {
        showButton.value = window.pageYOffset > 100
      }
  
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll)
      })
  
      watch(() => window.pageYOffset, handleScroll)
  
      return {
        showButton,
        scrollToTop,
      }
    },
  })
  </script>
  
  <style>
  .scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    background-color: #136ffe;
    border: none;
    color: #fff;
    font-size: 24px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity:1;
    transition: opacity 0.4s ease-in-out;
    z-index: 9999;
  }
  
  .scroll-to-top:hover {
    opacity: 1;
  }
  
  .scroll-to-top .fas {
    font-size: 16px;
  }
  </style>
  