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
    firstStepTitleRuI18n: STAGES_DATA.STEPS__FIRST__TITLE__RU,
    firstStepTitleEnI18n: STAGES_DATA.STEPS__FIRST__TITLE__EN,
    firstStepTitleUaI18n: STAGES_DATA.STEPS__FIRST__TITLE__UA,

    secondStepTitleDefaultI18n: STAGES_DATA.STEPS__SECOND__TITLE__DEFAULT,
    secondStepTitleWhiteI18n: STAGES_DATA.STEPS__SECOND__TITLE__WHITE,
    secondStepTitleDarkI18n: STAGES_DATA.STEPS__SECOND__TITLE__DARK,

    secondStepTextDefaultI18n: STAGES_DATA.STEPS__SECOND__TEXT__DEFAULT,
    secondStepTextWhiteI18n: STAGES_DATA.STEPS__SECOND__TEXT__WHITE,
    secondStepTextDarkI18n: STAGES_DATA.STEPS__SECOND__TEXT__DARK,

    thirdStepTitleDisabledI18n: STAGES_DATA.STEPS__THIRD__TITLE__DISABLED,
    thirdStepTitleStarsI18n: STAGES_DATA.STEPS__THIRD__TITLE__STARS,
    thirdStepTitleSnowI18n: STAGES_DATA.STEPS__THIRD__TITLE__SNOW,
    thirdStepTitleBubblesI18n: STAGES_DATA.STEPS__THIRD__TITLE__BUBBLES,
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
