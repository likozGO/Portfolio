import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import biographyData from '../domain/Profile/biographyData';
import stagesData from '../domain/Settings/stagesData';

const resources = {
  en: {
    translation: {
      biographyData: { ...biographyData.en },
      stagesData: { ...stagesData.en },
    },
  },
  ru: {
    translation: {
      biographyData: { ...biographyData.ru },
      stagesData: { ...stagesData.ru },
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
