import { createApp } from 'vue'
import App from './App.vue'

import '@/core/tailwind/app.css'
import '@/core/tailwind/custom.css'

import i18n from '@/core/plugins/i18n';

import router from '@/core/router'

import VueLazyload from 'vue-lazyload';
import { createPinia } from 'pinia';


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(i18n)
app.use(router)

app.use(VueLazyload, {
	// set observer to true
	observer: true,
  
	// optional
	observerOptions: {
	  rootMargin: '0px',
	  threshold: 0.1
	}
  });

app.mount('#app')
