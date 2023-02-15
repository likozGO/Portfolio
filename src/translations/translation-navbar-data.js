import React from 'react';
import {
  FaRegBuilding,
} from 'react-icons/fa';
import {
  GrContactInfo,
  GrCode,
} from 'react-icons/gr';
import {
  RiSettings2Line,
} from 'react-icons/ri';
import {
  COMPANY_PATH, HOME_PATH, SETTINGS_PATH, PROJECTS_PATH,
} from '../constants/router-urls';

const navbarData = {
  en: {
    navbar: {
      links: [
        {
          text: 'About me',
          link: HOME_PATH,
          icon: () => <GrContactInfo />,
        },
        {
          text: 'Settings',
          link: { pathname: SETTINGS_PATH, state: { fromHome: true } },
          icon: () => <RiSettings2Line />,
        },
        {
          text: 'Company',
          link: COMPANY_PATH,
          icon: () => <FaRegBuilding />,
        },
        {
          text: 'Projects',
          link: PROJECTS_PATH,
          icon: () => <GrCode />,
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
          icon: () => <GrContactInfo />,
        },
        {
          text: 'Настройки',
          link: { pathname: SETTINGS_PATH, state: { fromHome: true } },
          icon: () => <RiSettings2Line />,
        },
        {
          text: 'Компании',
          link: COMPANY_PATH,
          icon: () => <FaRegBuilding />,
        },
        {
          text: 'Проекты',
          link: PROJECTS_PATH,
          icon: () => <GrCode />,
        },
      ],
    },
  },
  ua: {
    navbar: {
      links: [
        {
          text: 'Про мене',
          link: HOME_PATH,
          icon: () => <GrContactInfo />,
        },
        {
          text: 'Налаштування',
          link: { pathname: SETTINGS_PATH, state: { fromHome: true } },
          icon: () => <RiSettings2Line />,
        },
        {
          text: 'Компанії',
          link: COMPANY_PATH,
          icon: () => <FaRegBuilding />,
        },
        {
          text: 'Проекти',
          link: PROJECTS_PATH,
          icon: () => <GrCode />,
        },
      ],
    },
  },
};

export default navbarData;
