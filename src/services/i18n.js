import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import biography from '../domain/Profile/biography';

const resources = {
  en: {
    translation: {
      biography: { ...biography.en },
    },
  },
  ru: {
    translation: {
      biography: { ...biography.ru },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
