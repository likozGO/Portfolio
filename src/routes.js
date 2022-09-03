import ViewSettings from './pages/stage-controller';
import ViewHome from './pages/profile';
import ViewCompany from './pages/company';
import ViewProjects from './pages/projects';
import ViewProjectsDescription from './pages/projects-description';
import ViewNoFound from './pages/error-no-found';

import {
  HOME_PATH,
  SETTINGS_PATH,
  NO_FOUND_PATH,
  COMPANY_PATH,
  PROJECTS_PATH,
  PROJECTS_DESCRIPTION_PATH,
} from './constants/router-urls';

export const HOME = {
  component: ViewHome,
  exact: true,
  path: HOME_PATH,
  isPrivate: false,
  isRestricted: false,
};

export const SETTINGS = {
  component: ViewSettings,
  exact: false,
  path: SETTINGS_PATH,
  isPrivate: false,
  isRestricted: false,
};

export const COMPANY = {
  component: ViewCompany,
  exact: false,
  path: COMPANY_PATH,
  isPrivate: false,
  isRestricted: false,
};

export const PROJECTS = {
  component: ViewProjects,
  exact: true,
  path: PROJECTS_PATH,
  isPrivate: false,
  isRestricted: false,
};

export const PROJECTS_DESCRIPTION = {
  component: ViewProjectsDescription,
  exact: false,
  path: PROJECTS_DESCRIPTION_PATH,
  isPrivate: false,
  isRestricted: false,
};

export const NO_FOUND = {
  component: ViewNoFound,
  exact: false,
  path: NO_FOUND_PATH,
  isPrivate: false,
  isRestricted: false,
};

export default [
  HOME,
  SETTINGS,
  NO_FOUND,
  COMPANY,
  PROJECTS,
  PROJECTS_DESCRIPTION,
];
