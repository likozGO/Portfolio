// import { createSelector } from '@reduxjs/toolkit';

export const selectHello = (state) => state.stage.hello;
export const selectSettings = (state) => state.stage.settings;
export const selectPreset = (state) => state.stage.preset;
export const isPresetEnabled = (state) => state.stage.preset.particles !== 'disabled';
export const selectAnimationStart = (state) => state.stage.animationStart;

export default {
  selectHello,
  selectSettings,
  selectPreset,
  selectAnimationStart,
  isPresetEnabled,
};
