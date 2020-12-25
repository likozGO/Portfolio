import { createSlice } from '@reduxjs/toolkit';

export const sliceProfile = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const selectCount = (state) => state.counter.value;

export const { increment, decrement, incrementByAmount } = sliceProfile.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export default sliceProfile.reducer;
