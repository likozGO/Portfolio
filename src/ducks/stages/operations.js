import { sliceStage } from './reducer';

const { actions } = sliceStage;

const setHello = (isReady) => (dispatch) => {
  dispatch(actions.setHello(isReady));
};

const setAnimationStart = (status = 'animated') => (dispatch) => {
  dispatch(actions.setAnimationStart(status));
};

const setPreset = (first, second) => (dispatch) => {
  dispatch(actions.setPreset(first, second));
};

const setStep = (step) => (dispatch) => {
  dispatch(actions.setStep(step));
};

export default {
  setHello,
  setAnimationStart,
  setPreset,
  setStep,
};
