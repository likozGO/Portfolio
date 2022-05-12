import { connect } from 'react-redux';
import { stagesSelectors, stagesOperations } from '../ducks/stages/index';
import StageHello from '../components/stage-hello';

function mapStateToProps(state) {
  return {
    helloFriendTranslation: 'stagesData.helloFriend',
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
