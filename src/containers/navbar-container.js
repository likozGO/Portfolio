import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import { navbarSelectors, navbarOperations } from '../ducks/navbar';

function mapStateToProps(state) {
  return {
    selectVisible: navbarSelectors.selectIsVisible(state),
    selectVisibleModifier: navbarSelectors.selectVisibleClass(state),
    navbarTranslation: ['navbarData.navbar.links', { returnObjects: true }],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleVisible: (selectVisible) => {
      dispatch(navbarOperations.toggleVisible(selectVisible));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
