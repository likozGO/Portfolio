import { createSlice } from '@reduxjs/toolkit';

export const sliceStage = createSlice({
  name: 'stage',
  initialState: {
    hello: true,
    settings: false,
    preset: {
      lang: 'en',
      theme: 'default',
      particles: 'disabled',
    },
    presetImages: {
      lang: '',
      theme: '',
      particles: '',
    },
    animationStart: '',
  },
  reducers: {
    setHello: (state, action) => {
      state.hello = action.payload;
    },
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
    setPreset: (state, action) => {
      // eslint-disable-next-line prefer-destructuring
      state.preset[action.payload[0]] = action.payload[1];
    },
    setAnimationStart: (state, action) => {
      state.animationStart = action.payload;
    },
  },
});

export const selectHello = (state) => state.stage.hello;
export const selectSettings = (state) => state.stage.settings;
export const selectPreset = (state) => state.stage.preset;
export const selectAnimationStart = (state) => state.stage.animationStart;

export const {
  setHello, setSettings, setPreset, setAnimationStart,
} = sliceStage.actions;

export default sliceStage.reducer;
