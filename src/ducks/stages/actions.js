const setHello = (state, action) => {
  state.hello = action.payload;
};
const setSettings = (state, action) => {
  state.settings = action.payload;
};
const setPreset = (state, action) => {
  // eslint-disable-next-line prefer-destructuring
  state.preset[action.payload[0]] = action.payload[1];
};
const setAnimationStart = (state, action) => {
  state.animationStart = action.payload;
};

export default {
  setHello,
  setSettings,
  setPreset,
  setAnimationStart,
};
