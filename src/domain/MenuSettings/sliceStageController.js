import { createSlice } from '@reduxjs/toolkit';

export const sliceStage = createSlice({
  name: 'stage',
  initialState: {
    hello: false,
    settings: false,
    preset: {
      lang: 'en',
      theme: 'default',
      particles: 'default',
    },
  },
  reducers: {
    setHello: (state, action) => {
      state.hello = action.payload;
    },
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
    setPreset: (state, action) => {
      console.log(action.payload);
      // eslint-disable-next-line prefer-destructuring
      state.preset[action.payload[0]] = action.payload[1];
    },
  },
});

export const selectHello = (state) => state.stage.hello;
export const selectSettings = (state) => state.stage.settings;
export const selectPreset = (state) => state.stage.settings;

export const { setHello, setSettings, setPreset } = sliceStage.actions;

export default sliceStage.reducer;
