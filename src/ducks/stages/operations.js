import { sliceStage } from './reducer';

const { actions } = sliceStage;

const setHello = (isReady) => (dispatch) => {
  dispatch(actions.setHello(isReady));
};

const setAnimationStart = (status = '') => (dispatch) => {
  dispatch(actions.setAnimationStart(status));
};

const setPreset = (first, second) => (dispatch) => {
  dispatch(actions.setPreset(first, second));
};

export default {
  setHello,
  setAnimationStart,
  setPreset,
};
