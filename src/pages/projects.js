import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProjectsListing from '../components/projects-listing';
import { PROJECTS_DESCRIPTION_PATH } from '../constants/router-urls';
import { projectsSelectors, projectsOperations } from '../ducks/projects';
import { PROJECTS_DATA } from '../constants/translation-keys';
import './projects.scss';

const Projects = ({
  projects,

  setProject,
}) => {
  const history = useHistory();
  const { t } = useTranslation();
  const [isCatAnimated, setCatAnimated] = React.useState(false);
  const timerRef = React.useRef(null);

  const projectsI18n = t(...projects);

  const handleCatAnimation = (animationFlag) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    setCatAnimated(() => animationFlag);
    timerRef.current = setTimeout(() => setCatAnimated(() => false), 500);
  };

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
      onClick={() => handleCatAnimation(true)}
    >
      <ProjectsListing
        onItemSelected={onItemSelected}
        projects={projectsI18n}
      />
    </section>
  );
};

function mapStateToProps(state) {
  return {
    currentProject: projectsSelectors.selectCurrentProject(state),
    projects: [PROJECTS_DATA.PROJECTS, { returnObjects: true }],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setProject: (projectProps) => {
      dispatch(projectsOperations.setProject(projectProps));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
