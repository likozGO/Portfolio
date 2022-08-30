const setNoFoundFact = (state, action) => {
  state.noFound.fact = action.payload;
};

const setNoFoundIsLoading = (state, action) => {
  state.noFound.isLoading = action.payload;
};

const setNoFoundHasErrors = (state, action) => {
  state.noFound.hasErrors = action.payload;
};

export default {
  setNoFoundFact,
  setNoFoundIsLoading,
  setNoFoundHasErrors,
};
