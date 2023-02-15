import appData from './translation-app-data';
import biographyData from './translation-biography-data';
import companiesData from './translation-companies-data';
import errorsData from './translation-errors-data';
import navbarData from './translation-navbar-data';
import projectsData from './translation-projects-data';
import stagesData from './translation-stages-data';

const internationalizationObject = {
  en: {
    translation: {
      appData: { ...appData.en },
      biographyData: { ...biographyData.en },
      stagesData: { ...stagesData.en },
      navbarData: { ...navbarData.en },
      errorsData: { ...errorsData.en },
      companiesData: { ...companiesData.en },
      projectsData: { ...projectsData.en },
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
      projectsData: { ...projectsData.ru },
    },
  },
  ua: {
    translation: {
      appData: { ...appData.ua },
      biographyData: { ...biographyData.ua },
      stagesData: { ...stagesData.ua },
      navbarData: { ...navbarData.ua },
      errorsData: { ...errorsData.ua },
      companiesData: { ...companiesData.ua },
      projectsData: { ...projectsData.ua },
    },
  },
};

export default internationalizationObject;
