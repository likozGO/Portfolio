import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ProjectsListing from '../components/projects-listing';
import { PROJECTS_DESCRIPTION_PATH } from '../constants/router-urls';
import { projectsOperations, projectsSelectors } from '../ducks/projects';
import { useTimeout } from '../hooks';
import { PROJECTS_DATA } from '../translations/translation-keys';

import './projects.scss';

const Projects = ({
  projectsTranslations,

  setProject,
}) => {
  const history = useHistory();
  const { t } = useTranslation();
  const [isCatAnimated, setCatAnimated] = useState(false);

  const projectsI18n = t(...projectsTranslations);

  useTimeout(() => {
    setCatAnimated((previous) => !previous);
  }, 1000);

  const onItemSelected = (event, item) => {
    const containerTarget = event.currentTarget.firstElementChild;
    const imageTarget = event.currentTarget.firstElementChild.firstElementChild.firstElementChild;

    const containerDimensions = containerTarget.getBoundingClientRect();
    const imageDimensions = imageTarget.getBoundingClientRect();

    setProject({
      containerPosition: {
        width: containerDimensions.width,
        height: containerDimensions.height,
        top: containerDimensions.top,
        left: containerDimensions.left,
      },
      imagePosition: {
        width: imageDimensions.width,
        height: imageDimensions.height,
        top: imageDimensions.top,
        left: imageDimensions.left,
      },
      selectedItemDetails: item,
    });

    history.push(PROJECTS_DESCRIPTION_PATH);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <section
      className={`projects ${isCatAnimated ? 'projects__cat__animation' : ''}`}
    >
      <ProjectsListing
        onItemSelected={onItemSelected}
        projects={projectsI18n}
      />
    </section>
  );
};

function mapStateToProperties(state) {
  return {
    currentProject: projectsSelectors.selectCurrentProject(state),
    projectsTranslations: [PROJECTS_DATA.PROJECTS, { returnObjects: true }],
  };
}

function mapDispatchToProperties(dispatch) {
  return {
    setProject: (projectProperties) => {
      dispatch(projectsOperations.setProject(projectProperties));
    },
  };
}

export default connect(mapStateToProperties, mapDispatchToProperties)(Projects);
