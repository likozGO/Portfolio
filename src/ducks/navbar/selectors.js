// import { createSelector } from '@reduxjs/toolkit';

export const selectIsVisible = (state) => state.navbar.isVisible;
export const selectVisibleClass = (state) => state.navbar.visibleClass;

// const alertsAsArraySelector = createSelector(
//   rawAlertSelector,
//   (alerts) => Object.values(alerts),
// );

export default {
  selectIsVisible,
  selectVisibleClass,
};
