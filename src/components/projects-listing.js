import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';

import ScreenImageWrapper from './screen-image-wrapper';

import './projects-listing.scss';

const ProjectsListing = ({ onItemSelected, projects }) => {
  console.log(projects);
  return (
    <div className="projects-listing-container">
      <div className="container">
        {projects.map((project, index) => (
          <article
            role="presentation"
            key={index}
            onClick={(event) => onItemSelected(event, { ...project, index })}
            className="projects-listing-item"
          >
            <ScreenImageWrapper image={project.image} />
            <div className="item-description">
              <h1 className="title">{project.title}</h1>
              <div className="tags">
                {project.tag.map((tag, ind) => {
                  const key = ind + tag;
                  return (
                    <button
                      type="button"
                      key={key}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
              <p className="details">{project.details}</p>
              <FiArrowRightCircle className="arrow-enter" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectsListing;
