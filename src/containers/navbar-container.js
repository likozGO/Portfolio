import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import { navbarSelectors, navbarOperations } from '../ducks/navbar';
import { BIOGRAPHY_DATA, NAVBAR_DATA } from '../constants/translation-keys';

function mapStateToProps(state) {
  return {
    selectVisible: navbarSelectors.selectIsVisible(state),
    selectVisibleModifier: navbarSelectors.selectVisibleClass(state),
    navbarTranslation: [NAVBAR_DATA.NAVBAR__LINKS, { returnObjects: true }],
    socialTranslation: [BIOGRAPHY_DATA.SOCIAL, { returnObjects: true }],
    toastCopy: BIOGRAPHY_DATA.TOAST_COPY,
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
