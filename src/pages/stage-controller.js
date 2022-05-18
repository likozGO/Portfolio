import React, { useEffect } from 'react';
import './stage-controller.scss';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StageHelloContainer from '../containers/stage-hello-container';
import StageSettingsContainer from '../containers/stage-settings-container';
import { stagesSelectors, stagesOperations } from '../ducks/stages';
import NavbarContainer from '../containers/navbar-container';

const StageController = ({ setHello, isHelloStage }) => {
  const history = useHistory();

  // При первом рендере запускаем хелло
  const isFirstVisit = isHelloStage !== false && !history.location.state.fromHome;

  useEffect(() => {
    if (isFirstVisit) setHello();
  }, []);

  return (
    <section className="stage-controller">
      <StageHelloContainer />
      <StageSettingsContainer />
      <NavbarContainer />
    </section>
  );
};

function mapStateToProps(state) {
  return {
    isHelloStage: stagesSelectors.selectHello(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setHello: () => {
      dispatch(stagesOperations.setHello(true));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StageController);
