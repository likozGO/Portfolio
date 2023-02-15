import { createSlice } from '@reduxjs/toolkit';

import actions from './actions';

const initialState = {
  selectedProject: {},
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProject: (state, action) => actions.setProject(state, action),
  },
});

export default projectsSlice.reducer;
