// import { createSelector } from '@reduxjs/toolkit';

export const selectCurrentProject = (state) => state.projects.selectedProject;

export default {
  selectCurrentProject,
};
