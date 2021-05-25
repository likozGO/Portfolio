import React from 'react';
import {
  FaCogs, FaUserNinja,
} from 'react-icons/fa';
import { HOME_PATH, SETTINGS_PATH } from '../../router/RouterUrl';

const navbarData = {
  en: {
    navbar: {
      links: [
        {
          text: 'Settings',
          link: { pathname: SETTINGS_PATH, state: { fromHome: true } },
          icon: () => <FaCogs />,
        },
        {
          text: 'About me',
          link: HOME_PATH,
          icon: () => <FaUserNinja />,
        },
      ],
    },
  },
  ru: {
    navbar: {
      links: [
        {
          text: 'Настройки',
          link: { pathname: SETTINGS_PATH, state: { fromHome: true } },
          icon: () => <FaCogs />,
        },
        {
          text: 'О мне',
          link: HOME_PATH,
          icon: () => <FaUserNinja />,
        },
      ],
    },
  },
};

export default navbarData;
