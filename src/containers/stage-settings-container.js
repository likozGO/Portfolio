import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { stagesSelectors, stagesOperations } from '../ducks/stages/index';
import StageSettings from '../components/stage-settings';
import { STAGES_DATA } from '../constants/translation-keys';

function mapStateToProps(state) {
  return {
    selectHello: stagesSelectors.selectHello(state),
    selectPreset: stagesSelectors.selectPreset(state),
    selectStep: stagesSelectors.selectStep(state),
    firstStepTitleRuI18n: STAGES_DATA.STEPS__FIRST__TITLE__RU,
    firstStepTitleEnI18n: STAGES_DATA.STEPS__FIRST__TITLE__EN,

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
function mapDispatchToProps(dispatch) {
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
  mapStateToProps,
  mapDispatchToProps,
)(StageSettings);
