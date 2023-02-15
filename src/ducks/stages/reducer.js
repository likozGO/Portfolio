import { createSlice } from '@reduxjs/toolkit';

import actions from './actions';

const initialState = {
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
  step: 'first',
};

export const sliceStage = createSlice({
  name: 'stage',
  initialState,
  reducers: {
    setHello: (state, action) => actions.setHello(state, action),
    setSettings: (state, action) => actions.setSettings(state, action),
    setPreset: (state, action) => actions.setPreset(state, action),
    setAnimationStart: (state, action) => actions.setAnimationStart(state, action),
    setStep: (state, action) => actions.setStep(state, action),
  },
});

export default sliceStage.reducer;
