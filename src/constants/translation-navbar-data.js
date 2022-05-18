import React from 'react';
import {
  FaCogs, FaUserNinja, FaCode, FaBuilding,
} from 'react-icons/fa';
import {
  COMPANY_PATH, HOME_PATH, SETTINGS_PATH, PROJECTS_PATH,
} from './router-urls';

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
        {
          text: 'Company',
          link: COMPANY_PATH,
          icon: () => <FaBuilding />,
        },
        {
          text: 'Projects',
          link: PROJECTS_PATH,
          icon: () => <FaCode />,
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
        {
          text: 'Компании',
          link: COMPANY_PATH,
          icon: () => <FaBuilding />,
        },
        {
          text: 'Проекты',
          link: PROJECTS_PATH,
          icon: () => <FaCode />,
        },
      ],
    },
  },
};

export default navbarData;
