import { connect } from 'react-redux';

import ParticlesBg from '../components/particles-bg';
import { stagesOperations, stagesSelectors } from '../ducks/stages/index';

function mapStateToProps(state) {
  return {
    selectAnimationStart: stagesSelectors.selectAnimationStart(state),
    selectPreset: stagesSelectors.selectPreset(state),
    isEnabled: stagesSelectors.isPresetEnabled(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAnimationStart: (status = '') => {
      dispatch(stagesOperations.setAnimationStart(status));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParticlesBg);
