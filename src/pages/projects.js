import React from 'react';
import './projects.scss';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProjectsListing from '../components/projects-listing';
import { PROJECTS_DESCRIPTION_PATH } from '../constants/router-urls';
import { projectsSelectors, projectsOperations } from '../ducks/projects';

const Projects = ({ setProject }) => {
  const history = useHistory();

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
    <div
      className="projects"
    >
      <ProjectsListing onItemSelected={onItemSelected} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentProject: projectsSelectors.selectCurrentProject(state),
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
