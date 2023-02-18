import React, {
  createRef, useEffect, useRef, useState,
} from 'react';
import {
  AiFillGithub,
  AiOutlineClockCircle,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { FaFigma } from 'react-icons/fa';
import { HiOutlineIdentification } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

import { BUTTON_TYPES } from '../constants/button-types';
import { PROJECTS_PATH } from '../constants/router-urls';
import { useIntersectionObserver } from '../hooks';

import Button from './button';
import ProjectsTransitionLayer from './projects-transition-layer';
import ScreenImageWrapper from './screen-image-wrapper';

import './projects-description-details.scss';

function BackButton({
  forwardReference, navigationBack, customClass, label,
}) {
  return (
    <Button
      customClass={customClass}
      label={label}
      size="small"
      type="tertiary"
      onClickHandler={navigationBack}
      icon={BUTTON_TYPES.BACK}
      forwardRef={forwardReference || null}
    />
  );
}

function ProjectsDescriptionDetails({
  itemPosition,
  selectedItemDetails,
  projectLanguage = 'en',
  projectLabels,
}) {
  const history = useHistory();
  const imageReference = createRef();
  const [imagePosition, setImagePosition] = useState({});
  const [showDescription, setShowDescription] = useState(false);

  const backButtonReference = useRef(null);
  const onScreen = useIntersectionObserver(backButtonReference, {
    threshold: 0,
  });
  const navigateToProjects = () => history.replace(PROJECTS_PATH);

  useEffect(() => {
    if (isEmpty(selectedItemDetails)) {
      navigateToProjects();
      return;
    }
    const imageDimensions = imageReference.current.getBoundingClientRect();

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
    <div className="description-details">
      <BackButton
        forwardReference={backButtonReference}
        navigationBack={navigateToProjects}
        customClass="button--top"
        label={projectLabels.back}
      />
      <div className="container">
        <ScreenImageWrapper
          ref={imageReference}
          imageClassName={`image ${showDescription ? 'show' : ''}`}
          image={selectedItemDetails?.image}
          imageMobile={selectedItemDetails?.imageMobile}
        />
        {!isEmpty(imagePosition)
          && !isEmpty(itemPosition)
          && !showDescription && (
            <ProjectsTransitionLayer
              selectedItemDetails={selectedItemDetails}
              itemPosition={itemPosition}
              imageToPosition={imagePosition}
              onAnimationEnd={onAnimationEnd}
            />
        )}
        <div
          className={`details-container ${showDescription ? 'show' : ''} ${
            selectedItemDetails?.imageMobile ? 'has-screen__mobile' : ''
          }`}
        >
          <h1 className="details-container__title">
            {selectedItemDetails?.title}
          </h1>
          <span className="details-container__details">
            {selectedItemDetails?.details}
          </span>
        </div>

        <div className={`features ${showDescription ? 'show' : ''} `}>
          <div className="features-container">
            <span className="features-container__date">
              <span className="features-container__description">
                {projectLabels.release}
              </span>
              <div className="features-container__content">
                <AiOutlineClockCircle />
                {moment(selectedItemDetails?.isCreated, 'YYYYMMDD')
                  .locale(projectLanguage)
                  .fromNow()}
                {` (${moment(selectedItemDetails?.isCreated, 'YYYYMMDD')
                  .locale(projectLanguage)
                  .calendar()})`}
              </div>
            </span>
            <div className="features-container__tags">
              <span className="features-container__description">
                {projectLabels.tools}
              </span>
              <div className="features-container__content">
                {selectedItemDetails?.tag.map((tag, index) => (
                  <button
                    type="button"
                    key={index}
                  >
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
              {selectedItemDetails?.links?.github ? (
                <a
                  href={selectedItemDetails?.links?.github}
                  className="features-container__links__github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              ) : null}
              {selectedItemDetails?.links?.figma ? (
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
      <BackButton
        navigationBack={navigateToProjects}
        label={projectLabels.back}
        customClass={`button--bottom ${
          !onScreen?.isIntersecting ? 'button--enter' : 'button--left'
        }`}
      />
    </div>
  );
}

export default ProjectsDescriptionDetails;
