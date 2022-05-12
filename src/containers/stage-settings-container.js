import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { stagesSelectors, stagesOperations } from '../ducks/stages/index';
import StageSettings from '../components/stage-settings';

function mapStateToProps(state) {
  return {
    selectHello: stagesSelectors.selectHello(state),
    selectPreset: stagesSelectors.selectPreset(state),
  };
}

// eslint-disable-next-line no-unused-vars
function mapDispatchToProps(dispatch) {
  return {
    setAnimationStart: () => {
      dispatch(stagesOperations.setAnimationStart());
    },
    setPreset: (first, second) => {
      dispatch(stagesOperations.setPreset(first, second));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StageSettings);
