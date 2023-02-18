import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import StageHelloContainer from '../containers/stage-hello-container';
import StageSettingsContainer from '../containers/stage-settings-container';
import { stagesOperations, stagesSelectors } from '../ducks/stages';

import './stage-controller.scss';

function StageController({ setHello, isHelloStage }) {
  const history = useHistory();

  useEffect(() => {
    if (isHelloStage && !history.location.state?.fromHome) setHello();
  }, []);

  return (
    <section className="stage-controller">
      <StageHelloContainer />
      <StageSettingsContainer />
    </section>
  );
}

function mapStateToProperties(state) {
  return {
    isHelloStage: stagesSelectors.selectHello(state) !== false,
  };
}

function mapDispatchToProperties(dispatch) {
  return {
    setHello: () => {
      dispatch(stagesOperations.setHello(true));
    },
  };
}

export default connect(
  mapStateToProperties,
  mapDispatchToProperties,
)(StageController);
