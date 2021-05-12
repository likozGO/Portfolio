import React from 'react';
import {
  FaDownload, FaMailBulk, FaTelegram, FaSkype, FaCogs,
} from 'react-icons/fa';

import CvPDF from './CV.pdf';
import { SETTINGS_PATH } from '../../router/RouterUrl';

const biographyData = {
  en: {
    name: 'Porshnev Denis',
    position: 'Frontend Developer',
    about: 'Web developer with experience in the office and remotely. Experienced in dealing with people. Purposeful, proactive and responsible. I have experience working with back-end developers. Specializes in React JS and responsive design.',
    social: [
      {
        text: 'Download CV',
        link: CvPDF,
        icon: () => <FaDownload />,
      },
      {
        text: 'Email',
        link: 'porshnev.work@gmail.com',
        icon: () => <FaMailBulk />,
      },
      {
        text: 'Telegram',
        link: '@LikozGO',
        icon: () => <FaTelegram />,
      },
      {
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
    name: 'Поршнев Денис',
    position: 'ФронтЕнд разработчик',
    about: 'Веб-разработчик с опытом работы в офисе и удаленно. Опытный в общении с людьми. Целеустремленный, инициативный и ответственный. Имею опыт работы с БекЕнд разработчиками. Специализируюсь на React\'е и отзывчивом дизайне.',
    social: [
      {
        text: 'Скачать CV',
        link: CvPDF,
        icon: () => <FaDownload />,
      },
      {
        text: 'Емейл',
        link: 'porshnev.work@gmail.com',
        icon: () => <FaMailBulk />,
      },
      {
        text: 'Телеграм',
        link: '@LikozGO',
        icon: () => <FaTelegram />,
      },
      {
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
