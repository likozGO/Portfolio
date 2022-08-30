import { projectsSlice } from './reducer';

const { actions } = projectsSlice;

const setProject = (data) => (dispatch) => {
  dispatch(actions.setProject(data));
};

export default {
  setProject,
};
