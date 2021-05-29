import views from './RouterView';
import {
  HOME_PATH,
  SETTINGS_PATH,
  NO_FOUND_PATH,
} from './RouterUrl';

export const HOME = {
  component: views.ViewHome,
  exact: true,
  path: HOME_PATH,
  isPrivate: false,
  isRestricted: false,
};

export const SETTINGS = {
  component: views.ViewSettings,
  exact: false,
  path: SETTINGS_PATH,
  isPrivate: false,
  isRestricted: false,
};

export const NO_FOUND = {
  component: views.ViewNoFound,
  exact: false,
  path: NO_FOUND_PATH,
  isPrivate: false,
  isRestricted: false,
};

export default [
  HOME,
  SETTINGS,
  NO_FOUND,
];
