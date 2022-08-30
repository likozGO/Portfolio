import { createSlice } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = {
  noFound: {
    isLoading: false,
    hasErrors: false,
    fact: '',
  },
};

export const sliceErrors = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setNoFoundFact: (state, action) => actions.setNoFoundFact(state, action),
    setNoFoundIsLoading: (state, action) => actions.setNoFoundIsLoading(state, action),
    setNoFoundHasErrors: (state, action) => actions.setNoFoundHasErrors(state, action),

  },
});

export default sliceErrors.reducer;
