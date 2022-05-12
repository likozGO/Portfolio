// import { createSelector } from '@reduxjs/toolkit';

export const selectCount = (state) => state.profile.value;

// const alertsAsArraySelector = createSelector(
//   rawAlertSelector,
//   (alerts) => Object.values(alerts),
// );

export default {
  selectCount,
};
