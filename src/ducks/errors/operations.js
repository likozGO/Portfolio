import { getRandomFact } from '../../services/api.service';

import { sliceErrors } from './reducer';

const { actions } = sliceErrors;

function setNoFoundFact() {
  return async (dispatch) => {
    dispatch(actions.setNoFoundHasErrors(false));
    dispatch(actions.setNoFoundIsLoading(true));

    try {
      const fact = await getRandomFact();
      dispatch(actions.setNoFoundFact(fact.data[0].fact));
    } catch (error) {
      dispatch(actions.setNoFoundHasErrors(true));
      console.error(error);
    }

    dispatch(actions.setNoFoundIsLoading(false));
  };
}

export default {
  setNoFoundFact,
};
