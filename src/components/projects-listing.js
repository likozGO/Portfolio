import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import images from '../constants/images';
import './projects-listing.scss';
import ScreenImageWrapper from './screen-image-wrapper';

const ProjectsListing = ({ onItemSelected }) => {
  const projects = [
    {
      isCreated: '1999-08-09',
      title: 'First example',
      tag: ['React', 'Material UI', 'Docker'],
      details: 'Forj is a blockchain technology company specialising in NFTs. This design combines maximalism and brutalism to create an intense space inspired by neon lights in the streets of Tokyo. The target audience are teenage boys so this high octane aesthetic resonates with teenage angst and the fast pace digital landscapes these type of personas are synonymous.',
      image: images.COMPANY_AIVIX_EN,
      imageMobile: images.MOBILE_TEMP,
      role: 'Frontend Developer',
      links: {
        github: 'http://github.com',
        demo: 'http://demo.com',
        youtube: 'http://youtube.com',
        figma: 'http://www.figma.com/',
      },
    },
    {
      isCreated: '2014-08-09',
      title: 'Second example',
      tag: ['JQuery', 'Bootstrap 4', 'Moment JS'],
      details: 'Als Designer ist es meine Aufgabe, die Werte einer Marke im Medium einer Website visuell darzustellen. In diesem Fall ist es das Ziel der Organisation, die Kreativität im Berlin zu verstärken. Das Kreativzentrum vereint alle kreativen Medien an einem Ort; Aufbau einer Plattform für Film, Musik, Grafik + mehr, um unsere Arbeit zu präsentieren und Kontakte zu knüpfen.',
      image: images.COMPANY_AIVIX_EN,
      role: 'Frontend Developer',
      links: {
        github: 'http://github.com',
        demo: 'http://demo.com',
        youtube: 'http://youtube.com',
      },
    },
    {
      isCreated: '2016-08-09',
      title: 'First example',
      tag: ['React', 'Material UI', 'Docker'],
      details: 'Forj is a blockchain technology company specialising in NFTs. This design combines maximalism and brutalism to create an intense space inspired by neon lights in the streets of Tokyo. The target audience are teenage boys so this high octane aesthetic resonates with teenage angst and the fast pace digital landscapes these type of personas are synonymous.',
      image: images.COMPANY_AIVIX_EN,
      role: 'Frontend Developer',
      links: {
        github: 'http://github.com',
        demo: 'http://demo.com',
        youtube: 'http://youtube.com',
      },
    },
    {
      isCreated: '2019-08-09',
      title: 'Second example',
      tag: ['JQuery', 'Bootstrap 4', 'Moment JS'],
      details: 'Als Designer ist es meine Aufgabe, die Werte einer Marke im Medium einer Website visuell darzustellen. In diesem Fall ist es das Ziel der Organisation, die Kreativität im Berlin zu verstärken. Das Kreativzentrum vereint alle kreativen Medien an einem Ort; Aufbau einer Plattform für Film, Musik, Grafik + mehr, um unsere Arbeit zu präsentieren und Kontakte zu knüpfen.',
      image: images.COMPANY_AIVIX_EN,
      role: 'Frontend Developer',
      links: {
        github: 'http://github.com',
        demo: 'http://demo.com',
        youtube: 'http://youtube.com',
      },
    },
    {
      isCreated: '2022-09-09',
      title: 'Second example',
      tag: ['JQuery', 'Bootstrap 4', 'Moment JS'],
      details: 'Als Designer ist es meine Aufgabe, die Werte einer Marke im Medium einer Website visuell darzustellen. In diesem Fall ist es das Ziel der Organisation, die Kreativität im Berlin zu verstärken. Das Kreativzentrum vereint alle kreativen Medien an einem Ort; Aufbau einer Plattform für Film, Musik, Grafik + mehr, um unsere Arbeit zu präsentieren und Kontakte zu knüpfen.',
      image: images.COMPANY_AIVIX_EN,
      role: 'Frontend Developer',
      links: {
        github: 'http://github.com',
        demo: 'http://demo.com',
        youtube: 'http://youtube.com',
      },
    },
  ];

  return (
    <div
      className="projects-listing-container"
    >
      <div className="container">
        {projects.map((project, index) => (
          <button
            type="button"
            onClick={(event) => onItemSelected(event, { ...project, index })}
            className="projects-listing-item"
          >
            <ScreenImageWrapper
              image={project.image}
            />
            <div className="item-description">
              <h1 className="title">
                {project.title}
              </h1>
              <div className="tags">
                {project.tag.map((tag) => (
                  <button type="button">{tag}</button>
                ))}
              </div>
              <p className="details">
                {project.details}
              </p>
              <FiArrowRightCircle className="arrow-enter" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsListing;
