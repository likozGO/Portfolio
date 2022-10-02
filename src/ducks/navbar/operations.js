import { sliceNavbar } from './reducer';

const { actions } = sliceNavbar;

const toggleVisible = (selectVisible) => (dispatch, getState) => {
  const state = getState();
  const isHelloStage = state.stage.hello;

  if (isHelloStage) {
    dispatch(actions.toggleVisible({
      isVisible: false,
      visibleClass: 'hide-navbar',
    }));
    return;
  }

  if (selectVisible) {
    dispatch(actions.toggleVisible({
      isVisible: false,
      visibleClass: 'hide-navbar',
    }));
  } else {
    dispatch(actions.toggleVisible({
      isVisible: true,
      visibleClass: 'show-navbar',
    }));
  }
};

export default {
  toggleVisible,
};
