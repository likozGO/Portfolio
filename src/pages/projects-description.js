import React from 'react';
import './projects.scss';
import { connect } from 'react-redux';
import DescriptionPage from '../components/projects-page-description';
import { projectsSelectors } from '../ducks/projects';

const ProjectsDescription = ({ currentProject }) => {
  const { containerPosition, imagePosition, selectedItemDetails } = currentProject;
  console.log(selectedItemDetails);
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      zIndex: 10001,
    }}
    >
      <div
        style={{
          height: '100%', width: '100%', position: 'relative', flex: 1, alignSelf: 'stretch',
        }}
      >
        <div style={{
          zIndex: 10000,
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          position: 'absolute',
        }}
        >
          <DescriptionPage
            itemPosition={{
              containerPosition,
              imagePosition,
            }}
            selectedItemDetails={selectedItemDetails}
          />
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

export default connect(
  mapStateToProps,
)(ProjectsDescription);
