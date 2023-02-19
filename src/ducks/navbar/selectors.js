// import { createSelector } from '@reduxjs/toolkit';

export const selectIsVisible = (state) => state.navbar.isVisible;
export const selectVisibleClass = (state) => state.navbar.visibleClass;

export default {
  selectIsVisible,
  selectVisibleClass,
};
