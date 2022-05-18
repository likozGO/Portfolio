import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import biographyData from './constants/translation-biography-data';
import stagesData from './constants/translation-stages-data';
import navbarData from './constants/translation-navbar-data';

const resources = {
  en: {
    translation: {
      biographyData: { ...biographyData.en },
      stagesData: { ...stagesData.en },
      navbarData: { ...navbarData.en },
    },
  },
  ru: {
    translation: {
      biographyData: { ...biographyData.ru },
      stagesData: { ...stagesData.ru },
      navbarData: { ...navbarData.ru },
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
