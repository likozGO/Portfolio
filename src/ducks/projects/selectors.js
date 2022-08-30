// import { createSelector } from '@reduxjs/toolkit';

export const selectCurrentProject = (state) => state.projects.selectedProject;

// const alertsAsArraySelector = createSelector(
//   rawAlertSelector,
//   (alerts) => Object.values(alerts),
// );

export default {
  selectCurrentProject,
};
