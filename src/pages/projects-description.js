import React from 'react';
import './projects-description.scss';
import { connect } from 'react-redux';
import ProjectsDescriptionDetails from '../components/projects-description-details';
import { projectsSelectors } from '../ducks/projects';

const ProjectsDescription = ({ currentProject }) => {
  const { containerPosition, imagePosition, selectedItemDetails } = currentProject;
  return (
    <div
      className="projects-description"
    >
      <ProjectsDescriptionDetails
        itemPosition={{
          containerPosition,
          imagePosition,
        }}
        selectedItemDetails={selectedItemDetails}
      />
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
