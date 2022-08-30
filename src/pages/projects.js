import React from 'react';
import './projects.scss';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ListingPage from '../components/projects-page-listing';
import { PROJECTS_DESCRIPTION_PATH } from '../constants/router-urls';
import { projectsSelectors, projectsOperations } from '../ducks/projects';

const Projects = ({ setProject }) => {
  const history = useHistory();

  const onItemSelected = (event, item) => {
    const containerTarget = event.currentTarget;
    const imageTarget = event.currentTarget.firstElementChild;

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
    <div style={{
      position: 'absolute', top: 0, right: 0, left: 0, bottom: 0,
    }}
    >
      <div
        style={{
          height: '100%', width: '100%', position: 'relative', flex: 1, alignSelf: 'stretch',
        }}
      >
        <div style={{
          zIndex: 9999,
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          position: 'absolute',
        }}
        >
          <ListingPage onItemSelected={onItemSelected} />
        </div>
      </div>
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
