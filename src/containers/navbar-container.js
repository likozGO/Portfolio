import { connect } from 'react-redux';

import Navbar from '../components/navbar';
import { navbarOperations, navbarSelectors } from '../ducks/navbar';
import { BIOGRAPHY_DATA, NAVBAR_DATA } from '../translations/translation-keys';

function mapStateToProperties(state) {
  return {
    selectVisible: navbarSelectors.selectIsVisible(state),
    selectVisibleModifier: navbarSelectors.selectVisibleClass(state),
    navbarTranslation: [NAVBAR_DATA.NAVBAR__LINKS, { returnObjects: true }],
    socialTranslation: [BIOGRAPHY_DATA.SOCIAL, { returnObjects: true }],
    toastCopy: BIOGRAPHY_DATA.TOAST_COPY,
  };
}

function mapDispatchToProperties(dispatch) {
  return {
    toggleVisible: (selectVisible) => {
      dispatch(navbarOperations.toggleVisible(selectVisible));
    },
  };
}

export default connect(mapStateToProperties, mapDispatchToProperties)(Navbar);
