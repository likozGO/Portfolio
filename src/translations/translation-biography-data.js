import React from 'react';
import {
  FaDownload, FaMailBulk, FaSkype,
  FaTelegram,
} from 'react-icons/fa';

import {
  CV,
  CV_LINK,
  EMAIL,
  EMAIL_ADDRESS,
  SKYPE,
  SKYPE_ID,
  TELEGRAM,
  TELEGRAM_LINK,
} from '../constants/contacts';

const biographyData = {
  en: {
    greeting: 'Hello, I’M',
    name: 'Porshniev Denis',
    position: 'Frontend Developer',
    about: 'I’m a software engineer specializing in building web applications. Currently, I’m focused on building accessible, human-centered products at N-IX, also I help designers and businesses bring their ideas to life using computer and coffee.',
    social: [
      {
        key: CV,
        text: 'Open CV',
        link: CV_LINK,
        icon: () => <FaDownload />,
      },
      {
        key: EMAIL,
        text: 'Copy email address',
        link: EMAIL_ADDRESS,
        icon: () => <FaMailBulk />,
      },
      {
        key: TELEGRAM,
        text: 'Go to telegram',
        link: TELEGRAM_LINK,
        icon: () => <FaTelegram />,
      },
      {
        key: SKYPE,
        text: 'Copy Skype ID',
        link: SKYPE_ID,
        icon: () => <FaSkype />,
      },
    ],
    toastCopy: 'Copied: ',
  },
  ru: {
    greeting: 'Привет! Я',
    name: 'Поршнев Денис',
    position: 'Фронт-енд разработчик',
    about: 'Я инженер-программист, специализирующийся на создании веб-приложений. В настоящее время я сосредоточен на создании качественных продуктов в N-IX, также помогаю дизайнерам и компаниям воплощать их идеи в жизнь используя компьютер и кофе.',
    social: [
      {
        key: CV,
        text: 'Открыть CV',
        link: CV_LINK,
        icon: () => <FaDownload />,
      },
      {
        key: EMAIL,
        text: 'Скопировать емейл адрес',
        link: EMAIL_ADDRESS,
        icon: () => <FaMailBulk />,
      },
      {
        key: TELEGRAM,
        text: 'Перейти в телеграм',
        link: TELEGRAM_LINK,
        icon: () => <FaTelegram />,
      },
      {
        key: SKYPE,
        text: 'Скопировать Skype ID',
        link: SKYPE_ID,
        icon: () => <FaSkype />,
      },
    ],
    toastCopy: 'Скопровано: ',
  },
  ua: {
    greeting: 'Привіт! Я',
    name: 'Поршнєв Денис',
    position: 'Фронт-енд розробник',
    about: 'Я інженер програміст, що спеціалізується на створенні веб-додатків. В даний час я зосереджений на створенні якісних продуктів у N-IX, також допомагаю дизайнерам та компаніям втілювати їхні ідеї в життя, використовуючи комп\'ютер та каву.',
    social: [
      {
        key: CV,
        text: 'Відкрити CV',
        link: CV_LINK,
        icon: () => <FaDownload />,
      },
      {
        key: EMAIL,
        text: 'Скопіювати емейл адресу',
        link: EMAIL_ADDRESS,
        icon: () => <FaMailBulk />,
      },
      {
        key: TELEGRAM,
        text: 'Перейти в телеграм',
        link: TELEGRAM_LINK,
        icon: () => <FaTelegram />,
      },
      {
        key: SKYPE,
        text: 'Скопіювати Skype ID',
        link: SKYPE_ID,
        icon: () => <FaSkype />,
      },
    ],
    toastCopy: 'Скопійовано: ',
  },
};

export default biographyData;
