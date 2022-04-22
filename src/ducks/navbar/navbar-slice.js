import { createSlice } from '@reduxjs/toolkit';

export const sliceNavbar = createSlice({
  name: 'navbar',
  initialState: {
    isVisible: false,
    visibleClass: '',
  },
  reducers: {
    toggleVisible: (state, action) => {
      state.isVisible = action.payload.isVisible;
      state.visibleClass = action.payload.visibleClass;
    },
  },
});

export const selectIsVisible = (state) => state.navbar.isVisible;
export const selectVisibleClass = (state) => state.navbar.visibleClass;

export const {
  toggleVisible,
} = sliceNavbar.actions;

export default sliceNavbar.reducer;
