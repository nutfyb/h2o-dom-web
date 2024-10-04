import { createI18n } from 'vue-i18n';

import en from '@/core/langs/en.json';
import th from '@/core/langs/th.json';

export default createI18n({
	legacy: false,
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		en,
		th,
	},
})