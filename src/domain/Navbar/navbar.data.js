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
          link: SETTINGS_PATH,
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
          link: SETTINGS_PATH,
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
