import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    example: '',
  },
  reducers: {
    setExample: (state, action) => {
      state.example = action.payload;
    },
  },
});

export const selectCount = (state) => state.profile.value;

export const { setExample } = profileSlice.actions;

export default profileSlice.reducer;
