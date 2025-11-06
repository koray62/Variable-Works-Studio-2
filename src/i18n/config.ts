import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './locales/en/common.json';
import enModules from './locales/en/modules.json';
import enContent from './locales/en/content.json';
import enFooter from './locales/en/footer.json';
import enFaq from './locales/en/faq.json';
import trCommon from './locales/tr/common.json';
import trModules from './locales/tr/modules.json';
import trContent from './locales/tr/content.json';
import trFooter from './locales/tr/footer.json';
import trFaq from './locales/tr/faq.json';


const savedLanguage = localStorage.getItem('language') || 'tr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        modules: enModules,
        content: enContent,
        footer: enFooter,
        faq: enFaq
      },
      tr: {
        common: trCommon,
        modules: trModules,
        content: trContent,
        footer: trFooter,
        faq: trFaq
      }
    },

    lng: savedLanguage,
    fallbackLng: 'tr',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
