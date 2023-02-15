import { createSlice } from '@reduxjs/toolkit';

import actions from './actions';

const initialState = {
  isVisible: false,
  visibleClass: '',
};

export const sliceNavbar = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleVisible: (state, action) => actions.toggleVisible(state, action),
  },
});

export default sliceNavbar.reducer;
