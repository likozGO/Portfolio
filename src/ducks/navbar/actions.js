const toggleVisible = (state, action) => {
  state.isVisible = action.payload.isVisible;
  state.visibleClass = action.payload.visibleClass;
};

export default {
  toggleVisible,
};
