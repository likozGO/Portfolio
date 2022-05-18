import { connect } from 'react-redux';
import { stagesSelectors, stagesOperations } from '../ducks/stages/index';
import StageHello from '../components/stage-hello';
import { STAGES_DATA } from '../constants/translation-keys';

function mapStateToProps(state) {
  return {
    helloFriendTranslation: STAGES_DATA.HELLO_FRIEND,
    selectHello: stagesSelectors.selectHello(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setHello: (isReady) => {
      dispatch(stagesOperations.setHello(isReady));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StageHello);
