import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import {
  internationalizationObject,
} from './translations';

i18n
  .use(initReactI18next)
  .init({
    resources: internationalizationObject,
    lng: 'en',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
