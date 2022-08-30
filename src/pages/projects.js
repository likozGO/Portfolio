import React from 'react';
import './projects.scss';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Div from '../components/Div';
import ListingPage from '../components/projects-page-listing';
import { PROJECTS_DESCRIPTION_PATH } from '../constants/router-urls';
import { projectsSelectors, projectsOperations } from '../ducks/projects';

// TODO
// 1. Убрать import Div from '../components/Div'; везде
// 2. Убрать отовсюду модули, переделать в scss
// 3. Проверить z-index при смене роута
// 4. Убрать стейты (возможно оставить там где анимация, нужно подумать)
// 5. Проверить как работает на моб устройствах
// 6. Проверить что будет если открыть без кэша
// 7. Изменить анимацию если открывается не через /projects
// а просто переходом на данную страницу или рефреш

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
      <Div
        fillParent
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        <AbsoluteDiv style={{ zIndex: 99999 }}>
          <ListingPage onItemSelected={onItemSelected} />
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
