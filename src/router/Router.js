import views from './RouterView';
import {
  HOME_PATH,
  SETTINGS_PATH,
  NO_FOUND_PATH,
} from './RouterUrl';

export const HOME = {
  component: views.ViewHome,
  path: HOME_PATH,
  isPrivate: false,
  isRestricted: false,
  exact: true,
};

export const SETTINGS = {
  component: views.ViewSettings,
  path: SETTINGS_PATH,
  isPrivate: false,
  isRestricted: false,
  exact: true,
};

export const NO_FOUND = {
  component: views.ViewNoFound,
  path: NO_FOUND_PATH,
  isPrivate: false,
  isRestricted: false,
  exact: false,
};

export default [
  HOME,
  SETTINGS,
  NO_FOUND,
];
