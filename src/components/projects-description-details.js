import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import ProjectsTransitionLayer from './projects-transition-layer';
import './projects-description-details.scss';

import { PROJECTS_PATH } from '../constants/router-urls';

const ProjectsDescriptionDetails = ({ itemPosition, selectedItemDetails }) => {
  const history = useHistory();
  const imageRef = useRef(null);
  const [imagePosition, setImagePosition] = useState({});
  const [showDescription, setShowDescription] = useState(false);

  console.log(selectedItemDetails);
  useEffect(() => {
    if (isEmpty(selectedItemDetails)) {
      history.replace(PROJECTS_PATH);
      return;
    }
    const imageDimensions = imageRef.current.getBoundingClientRect();

    setImagePosition({
      width: imageDimensions.width,
      height: imageDimensions.height || 'auto',
      top: imageDimensions.top,
      left: imageDimensions.left,
    });
  }, []);

  const onAnimationEnd = () => {
    setShowDescription(true);
  };

  return (
    <div
      className="page-container"
    >
      {
          (!isEmpty(imagePosition) && !isEmpty(itemPosition) && !showDescription) && (
            <ProjectsTransitionLayer
              selectedItemDetails={selectedItemDetails}
              itemPosition={itemPosition}
              imageToPosition={imagePosition}
              onAnimationEnd={onAnimationEnd}
            />
          )
        }

      <img
        ref={imageRef}
        alt="Selected project"
        src={selectedItemDetails?.image}
        className={
          `image ${showDescription ? 'show' : ''}`
        }
      />

      <div
        className={
          `description-container ${showDescription ? 'show' : ''}`
        }
      >
        {selectedItemDetails?.description}
      </div>
    </div>
  );
};

export default ProjectsDescriptionDetails;
