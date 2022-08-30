const setProject = (state, action) => {
  state.selectedProject = action.payload;
};

export default {
  setProject,
};
