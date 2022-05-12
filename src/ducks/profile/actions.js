const setExample = (state, action) => {
  state.example = action.payload;
};

export default {
  setExample,
};
