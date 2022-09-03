import React from 'react';
import moment from 'moment';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiArrowRightCircle } from 'react-icons/fi';
import laravelBackgroundImage from '../assets/images/company-n_ix-en.webp';
import electronBackgroundImage from '../assets/images/company-aivix-ru.webp';
import './projects-listing.scss';

const ProjectsListing = ({ onItemSelected }) => {
  const projects = [
    {
      isCreated: '1999-08-09',
      title: 'First example',
      tag: ['React', 'Material UI', 'Docker'],
      details: 'Forj is a blockchain technology company specialising in NFTs. This design combines maximalism and brutalism to create an intense space inspired by neon lights in the streets of Tokyo. The target audience are teenage boys so this high octane aesthetic resonates with teenage angst and the fast pace digital landscapes these type of personas are synonymous.',
      image: laravelBackgroundImage,
    },
    {
      isCreated: '2014-08-09',
      title: 'Second example',
      tag: ['JQuery', 'Bootstrap 4', 'Moment JS'],
      details: 'Als Designer ist es meine Aufgabe, die Werte einer Marke im Medium einer Website visuell darzustellen. In diesem Fall ist es das Ziel der Organisation, die Kreativität im Berlin zu verstärken. Das Kreativzentrum vereint alle kreativen Medien an einem Ort; Aufbau einer Plattform für Film, Musik, Grafik + mehr, um unsere Arbeit zu präsentieren und Kontakte zu knüpfen.',
      image: electronBackgroundImage,
    },
    {
      isCreated: '2016-08-09',
      title: 'First example',
      tag: ['React', 'Material UI', 'Docker'],
      details: 'Forj is a blockchain technology company specialising in NFTs. This design combines maximalism and brutalism to create an intense space inspired by neon lights in the streets of Tokyo. The target audience are teenage boys so this high octane aesthetic resonates with teenage angst and the fast pace digital landscapes these type of personas are synonymous.',
      image: laravelBackgroundImage,
    },
    {
      isCreated: '2019-08-09',
      title: 'Second example',
      tag: ['JQuery', 'Bootstrap 4', 'Moment JS'],
      details: 'Als Designer ist es meine Aufgabe, die Werte einer Marke im Medium einer Website visuell darzustellen. In diesem Fall ist es das Ziel der Organisation, die Kreativität im Berlin zu verstärken. Das Kreativzentrum vereint alle kreativen Medien an einem Ort; Aufbau einer Plattform für Film, Musik, Grafik + mehr, um unsere Arbeit zu präsentieren und Kontakte zu knüpfen.',
      image: electronBackgroundImage,
    },
    {
      isCreated: '2020-08-09',
      title: 'Second example',
      tag: ['JQuery', 'Bootstrap 4', 'Moment JS'],
      details: 'Als Designer ist es meine Aufgabe, die Werte einer Marke im Medium einer Website visuell darzustellen. In diesem Fall ist es das Ziel der Organisation, die Kreativität im Berlin zu verstärken. Das Kreativzentrum vereint alle kreativen Medien an einem Ort; Aufbau einer Plattform für Film, Musik, Grafik + mehr, um unsere Arbeit zu präsentieren und Kontakte zu knüpfen.',
      image: electronBackgroundImage,
    },
  ];

  return (
    <div
      className="projects-listing-container"
    >
      <section className="container">
        {projects.map((project, index) => (
          <button
            type="button"
            onClick={(event) => onItemSelected(event, { ...project, index, description: project.details })}
            className="projects-listing-item"
          >
            <div className="projects-laptop">
              <div className="projects-laptop__screen">
                <img
                  src={project.image}
                  width="1600"
                  height="1000"
                  alt="Screen"
                />
              </div>
              <div className="projects-laptop__bottom">
                <div className="projects-laptop__under" />
              </div>
              <div className="projects-laptop__shadow" />
            </div>
            <div className="item-description">
              <span className="date">
                <AiOutlineClockCircle />
                {moment(project.isCreated, 'YYYYMMDD').fromNow()}
                {` (${moment(project.isCreated, 'YYYYMMDD').calendar()})`}
              </span>
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
      </section>
      <div className="get-in-touch">
        <h1>
          Anything is possible,
        </h1>
        <span>
          Let&apos;s make dreams a reality
        </span>
        <button
          type="button"
          className="button"
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default ProjectsListing;
