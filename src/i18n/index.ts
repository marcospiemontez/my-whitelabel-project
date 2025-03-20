import { createI18n } from 'vue-i18n';
import en from '@/i18n/en.json';
import es from '@/i18n/es.json';
import pt from '@/i18n/pt.json';

export const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    es,
    pt,
  },
});
