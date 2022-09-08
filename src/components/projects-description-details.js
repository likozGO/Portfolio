import React, { useEffect, createRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import {
  AiOutlineClockCircle,
  AiOutlineYoutube,
  AiFillGithub,
} from 'react-icons/ai';
import { FaFigma } from 'react-icons/fa';
import { HiOutlineIdentification } from 'react-icons/hi';

import ProjectsTransitionLayer from './projects-transition-layer';
import './projects-description-details.scss';

import { PROJECTS_PATH } from '../constants/router-urls';
import ScreenImageWrapper from './screen-image-wrapper';
import Button from './button';

const ProjectsDescriptionDetails = ({
  itemPosition,
  selectedItemDetails,
  projectLanguage = 'en',
  projectLabels,
}) => {
  const history = useHistory();
  const imageRef = createRef();
  const [imagePosition, setImagePosition] = useState({});
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (isEmpty(selectedItemDetails)) {
      history.replace(PROJECTS_PATH);
      return;
    }
    const imageDimensions = imageRef.current.getBoundingClientRect();

    setImagePosition({
      width: imageDimensions.width || 'auto',
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
      className="description-details"
    >
      <div className="container">
        <ScreenImageWrapper
          ref={imageRef}
          imageClassName={
            `image ${showDescription ? 'show' : ''}`
          }
          image={selectedItemDetails?.image}
          imageMobile={selectedItemDetails?.imageMobile}
        />
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
        <div
          className={
          `details-container ${showDescription ? 'show' : ''} ${selectedItemDetails?.imageMobile ? 'has-screen__mobile' : ''}`
        }
        >
          <h1 className="details-container__title">
            {selectedItemDetails?.title}
          </h1>
          <span className="details-container__details">
            {selectedItemDetails?.details}
          </span>
        </div>

        <div
          className={`features ${showDescription ? 'show' : ''} `}
        >
          <div className="features-container">
            <span className="features-container__date">
              <span className="features-container__description">
                {projectLabels.release}
              </span>
              <div className="features-container__content">
                <AiOutlineClockCircle />
                {moment(selectedItemDetails?.isCreated, 'YYYYMMDD').locale(projectLanguage).fromNow()}
                {` (${moment(selectedItemDetails?.isCreated, 'YYYYMMDD').locale(projectLanguage).calendar()})`}
              </div>
            </span>
            <div className="features-container__tags">
              <span className="features-container__description">
                {projectLabels.tools}
              </span>
              <div className="features-container__content">
                {selectedItemDetails?.tag.map((tag) => (
                  <button type="button">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="features-container__role">
              <span className="features-container__description">
                {projectLabels.role}
              </span>
              <div className="features-container__content">
                <HiOutlineIdentification />
                {selectedItemDetails?.role}
              </div>
            </div>
          </div>
          <div className="features-container">
            <Button
              label={projectLabels.visitProjectButton}
              onClickHandler={() => window.open(selectedItemDetails?.links?.demo, '_blank')}
            />
            <div className="features-container__links">
              {selectedItemDetails?.links?.youtube ? (
                <a
                  href={selectedItemDetails?.links?.youtube}
                  className="features-container__links__youtube"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineYoutube />
                </a>
              ) : null}
              {selectedItemDetails?.links?.github
                ? (
                  <a
                    href={selectedItemDetails?.links?.github}
                    className="features-container__links__github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                ) : null}
              {selectedItemDetails?.links?.figma
                ? (
                  <a
                    href={selectedItemDetails?.links?.figma}
                    className="features-container__links__figma"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFigma />
                  </a>
                ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDescriptionDetails;
