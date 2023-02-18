import { connect } from 'react-redux';

import StageSettings from '../components/stage-settings';
// eslint-disable-next-line no-unused-vars
import { stagesOperations, stagesSelectors } from '../ducks/stages/index';
import { STAGES_DATA } from '../translations/translation-keys';

function mapStateToProperties(state) {
  return {
    selectHello: stagesSelectors.selectHello(state),
    selectPreset: stagesSelectors.selectPreset(state),
    selectStep: stagesSelectors.selectStep(state),

    stagesStepsTranslations: [
      STAGES_DATA.STAGES_STEPS,
      { returnObjects: true },
    ],
  };
}

// eslint-disable-next-line no-unused-vars
function mapDispatchToProperties(dispatch) {
  return {
    setAnimationStart: () => {
      dispatch(stagesOperations.setAnimationStart());
    },
    setPreset: (first, second) => {
      dispatch(stagesOperations.setPreset(first, second));
    },
    setStep: (step) => {
      dispatch(stagesOperations.setStep(step));
    },
  };
}

export default connect(
  mapStateToProperties,
  mapDispatchToProperties,
)(StageSettings);
