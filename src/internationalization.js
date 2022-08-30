import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import appData from './constants/translation-app-data';
import biographyData from './constants/translation-biography-data';
import stagesData from './constants/translation-stages-data';
import navbarData from './constants/translation-navbar-data';
import errorsData from './constants/translation-errors-data';
import companiesData from './constants/translation-companies-data';

const resources = {
  en: {
    translation: {
      appData: { ...appData.en },
      biographyData: { ...biographyData.en },
      stagesData: { ...stagesData.en },
      navbarData: { ...navbarData.en },
      errorsData: { ...errorsData.en },
      companiesData: { ...companiesData.en },
    },
  },
  ru: {
    translation: {
      appData: { ...appData.ru },
      biographyData: { ...biographyData.ru },
      stagesData: { ...stagesData.ru },
      navbarData: { ...navbarData.ru },
      errorsData: { ...errorsData.ru },
      companiesData: { ...companiesData.ru },
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
