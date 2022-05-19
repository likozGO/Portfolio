import React from 'react';
import {
  FaDownload, FaMailBulk, FaTelegram, FaSkype, FaCogs,
} from 'react-icons/fa';

import CvPDF from '../assets/documents/CV.pdf';
import { SETTINGS_PATH } from './router-urls';

export const CV = 'cv';
export const EMAIL = 'email';
export const TELEGRAM = 'telegram';
export const SKYPE = 'skype';

export const socialTypes = [CV, EMAIL, TELEGRAM, SKYPE];

const biographyData = {
  en: {
    greeting: 'Hello there! IM',
    name: 'Porshnev Denis',
    position: 'Frontend Developer',
    about: 'Web developer with experience in the office and remotely. Experienced in dealing with people. Purposeful, proactive and responsible. I have experience working with back-end developers. Specializes in React JS and responsive design.',
    social: [
      {
        key: CV,
        text: 'Download CV',
        link: CvPDF,
        icon: () => <FaDownload />,
      },
      {
        key: EMAIL,
        text: 'Email',
        link: 'porshnev.work@gmail.com',
        icon: () => <FaMailBulk />,
      },
      {
        key: TELEGRAM,
        text: 'Telegram',
        link: 'https://t.me/LikozGO',
        icon: () => <FaTelegram />,
      },
      {
        key: SKYPE,
        text: 'Skype',
        link: 'ikoneon',
        icon: () => <FaSkype />,
      },
    ],
    header: {
      links: [
        {
          text: 'Settings',
          link: SETTINGS_PATH,
          icon: () => <FaCogs />,
        },
      ],
    },
  },
  ru: {
    greeting: 'Привет комрад! Я',
    name: 'Поршнев Денис',
    position: 'ФронтЕнд разработчик',
    about: 'Веб-разработчик с опытом работы в офисе и удаленно. Опытный в общении с людьми. Целеустремленный, инициативный и ответственный. Имею опыт работы с БекЕнд разработчиками. Специализируюсь на React\'е и отзывчивом дизайне.',
    social: [
      {
        key: CV,
        text: 'Скачать CV',
        link: CvPDF,
        icon: () => <FaDownload />,
      },
      {
        key: EMAIL,
        text: 'Емейл',
        link: 'porshnev.work@gmail.com',
        icon: () => <FaMailBulk />,
      },
      {
        key: TELEGRAM,
        text: 'Телеграм',
        link: 'https://t.me/LikozGO',
        icon: () => <FaTelegram />,
      },
      {
        key: SKYPE,
        text: 'Скайп',
        link: 'ikoneon',
        icon: () => <FaSkype />,
      },
    ],
    header: {
      links: [
        {
          text: 'Настройки',
          link: SETTINGS_PATH,
          icon: () => <FaCogs />,
        },
      ],
    },
  },
};

export default biographyData;
