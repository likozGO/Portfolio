import React from 'react';
import './projects.scss';
import { connect } from 'react-redux';
import Div from '../components/Div';
import DescriptionPage from '../components/projects-page-description';
import { projectsSelectors } from '../ducks/projects';

const AbsoluteDiv = ({ children, style }) => (
  <Div
    style={{
      ...style,
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      position: 'absolute',
    }}
  >
    {children}
  </Div>
);

const ProjectsDescription = ({ currentProject }) => {
  const { containerPosition, imagePosition, selectedItemDetails } = currentProject;
  console.log(selectedItemDetails);
  return (
    <div style={{
      position: 'absolute', top: 0, right: 0, left: 0, bottom: 0,
    }}
    >
      <Div
        fillParent
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        <AbsoluteDiv style={{ zIndex: 99999 }}>
          <DescriptionPage
            itemPosition={{
              containerPosition,
              imagePosition,
            }}
            selectedItemDetails={selectedItemDetails}
          />
        </AbsoluteDiv>

      </Div>
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
