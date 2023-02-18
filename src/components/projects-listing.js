import React, { memo } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';

import Container from './container';
import ScreenImageWrapper from './screen-image-wrapper';

import './projects-listing.scss';

function ProjectsListing({ onItemSelected, projects }) {
  return (
    <div className="projects-listing">
      <Container>
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
      </Container>
    </div>
  );
}

export default memo(ProjectsListing);
