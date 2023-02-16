import { connect } from 'react-redux';

import ParticlesBg from '../components/particles-bg';
import { stagesOperations, stagesSelectors } from '../ducks/stages/index';

function mapStateToProperties(state) {
  return {
    selectAnimationStart: stagesSelectors.selectAnimationStart(state),
    selectPreset: stagesSelectors.selectPreset(state),
    isEnabled: stagesSelectors.isPresetEnabled(state),
  };
}

function mapDispatchToProperties(dispatch) {
  return {
    setAnimationStart: (status = '') => {
      dispatch(stagesOperations.setAnimationStart(status));
    },
  };
}

export default connect(
  mapStateToProperties,
  mapDispatchToProperties,
)(ParticlesBg);
