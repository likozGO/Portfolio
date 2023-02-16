import React from 'react';
import {
  FaAngular,
  FaBuilding,
  FaDocker,
  FaFileCode,
  FaJs,
  FaReact,
} from 'react-icons/fa';
import { SiJquery, SiMaterialui, SiSocketdotio } from 'react-icons/si';
import { VscChecklist } from 'react-icons/vsc';

export const categories = {
  crypto: {
    color: 'red',
    text: 'Product',
    icon: () => <FaBuilding />,
  },
  html_css: {
    color: 'gold',
    text: 'HTML/CSS',
    icon: () => <FaFileCode />,
  },
  jquery: {
    color: 'green',
    text: 'JQuery',
    icon: () => <SiJquery />,
  },
  javascript: {
    color: '#002bff',
    text: 'JavaScript',
    icon: () => <FaJs />,
  },
  react_redux: {
    color: 'black',
    text: 'React/Redux',
    icon: () => <FaReact />,
  },
  socket_io: {
    color: 'pink',
    text: 'Socket.io',
    icon: () => <SiSocketdotio />,
  },
  outstaff: {
    color: 'coral',
    text: 'Outstaff',
    icon: () => <FaBuilding />,
  },
  material_ui: {
    color: 'cornflowerblue',
    text: 'Material UI',
    icon: () => <SiMaterialui />,
  },
  jest: {
    color: 'chartreuse',
    text: 'Jest',
    icon: () => <VscChecklist />,
  },
  angular_v_1_6: {
    color: 'darkviolet',
    text: 'Angular v.1.6',
    icon: () => <FaAngular />,
  },
  docker: {
    color: 'blueviolet',
    text: 'Docker',
    icon: () => <FaDocker />,
  },
};

export const tags = {
  aivix: [
    categories.crypto,
    categories.javascript,
    categories.html_css,
    categories.react_redux,
    categories.socket_io,
    categories.jquery,
  ],
  n_ix: [
    categories.outstaff,
    categories.javascript,
    categories.html_css,
    categories.react_redux,
    categories.socket_io,
    categories.material_ui,
    categories.jest,
    categories.angular_v_1_6,
    categories.docker,
  ],
};

export default {
  tags,
  categories,
};
