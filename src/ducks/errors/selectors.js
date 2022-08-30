// import { createSelector } from '@reduxjs/toolkit';

export const selectNoFoundFact = (state) => state.errors.noFound.fact;
export const selectNoFoundIsLoading = (state) => state.errors.noFound.isLoading;
export const selectNoFoundHasErrors = (state) => state.errors.noFound.hasErrors;

export default {
  selectNoFoundFact,
  selectNoFoundIsLoading,
  selectNoFoundHasErrors,
};
