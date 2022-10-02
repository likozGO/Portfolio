import React from 'react';
import {
  FaDownload, FaMailBulk, FaTelegram, FaSkype,
} from 'react-icons/fa';

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
        text: 'Open CV',
        link: 'https://docs.google.com/document/d/1NF053cUUUXmXEvlOQuAx5uaxn0xR5FjyOFpKF8oWmgI',
        icon: () => <FaDownload />,
      },
      {
        key: EMAIL,
        text: 'Copy email address',
        link: 'porshnev.work@gmail.com',
        icon: () => <FaMailBulk />,
      },
      {
        key: TELEGRAM,
        text: 'Go to telegram',
        link: 'https://t.me/LikozGO',
        icon: () => <FaTelegram />,
      },
      {
        key: SKYPE,
        text: 'Copy Skype ID',
        link: 'ikoneon',
        icon: () => <FaSkype />,
      },
    ],
    toastCopy: 'Copied: ',
  },
  ru: {
    greeting: 'Привет комрад! Я',
    name: 'Поршнев Денис',
    position: 'ФронтЕнд разработчик',
    about: 'Веб-разработчик с опытом работы в офисе и удаленно. Опытный в общении с людьми. Целеустремленный, инициативный и ответственный. Имею опыт работы с БекЕнд разработчиками. Специализируюсь на React\'е и отзывчивом дизайне.',
    social: [
      {
        key: CV,
        text: 'Открыть CV',
        link: 'https://docs.google.com/document/d/1NF053cUUUXmXEvlOQuAx5uaxn0xR5FjyOFpKF8oWmgI',
        icon: () => <FaDownload />,
      },
      {
        key: EMAIL,
        text: 'Скопировать емейл адрес',
        link: 'porshnev.work@gmail.com',
        icon: () => <FaMailBulk />,
      },
      {
        key: TELEGRAM,
        text: 'Перейти в телеграм',
        link: 'https://t.me/LikozGO',
        icon: () => <FaTelegram />,
      },
      {
        key: SKYPE,
        text: 'Скопировать Skype ID',
        link: 'ikoneon',
        icon: () => <FaSkype />,
      },
    ],
    toastCopy: 'Скопровано: ',
  },
};

export default biographyData;
