import ViewSettings from './pages/stage-controller';
import ViewHome from './pages/profile';
import ViewNoFound from './pages/no-found';

import {
  HOME_PATH,
  SETTINGS_PATH,
  NO_FOUND_PATH,
} from './constanst/router-urls';

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
];
