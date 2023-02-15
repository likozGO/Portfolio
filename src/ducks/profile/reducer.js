import { createSlice } from '@reduxjs/toolkit';

import actions from './actions';

const initialState = {
  example: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setExample: (state, action) => actions.setExample(state, action),
  },
});

export default profileSlice.reducer;
