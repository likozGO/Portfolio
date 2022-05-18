import React from 'react';
import {
  FaCogs, FaUserNinja,
} from 'react-icons/fa';
import { HOME_PATH, SETTINGS_PATH } from './router-urls';

const navbarData = {
  en: {
    navbar: {
      links: [
        {
          text: 'About me',
          link: HOME_PATH,
          icon: () => <FaUserNinja />,
        },
        {
          text: 'Settings',
          link: { pathname: SETTINGS_PATH, state: { fromHome: true } },
          icon: () => <FaCogs />,
        },
      ],
    },
  },
  ru: {
    navbar: {
      links: [
        {
          text: 'О мне',
          link: HOME_PATH,
          icon: () => <FaUserNinja />,
        },
        {
          text: 'Настройки',
          link: { pathname: SETTINGS_PATH, state: { fromHome: true } },
          icon: () => <FaCogs />,
        },
      ],
    },
  },
};

export default navbarData;
