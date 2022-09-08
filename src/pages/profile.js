import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import ProfileMain from '../components/profile-main';
import ProfilePhoto from '../components/profile-photo';
import ProfileSocial from '../components/profile-social';
import './profile.scss';
import NavbarContainer from '../containers/navbar-container';
import { stagesSelectors } from '../ducks/stages';
import { BIOGRAPHY_DATA } from '../constants/translation-keys';

const Profile = ({
  socialTranslation,
  greetingTranslation,
  nameTranslation,
  positionTranslation,
  aboutTranslation,
  toastCopy,
  selectPreset,
}) => {
  const { t } = useTranslation();

  const socialI18n = t(...socialTranslation);
  const greetingI18n = t(greetingTranslation);
  const nameI18n = t(nameTranslation);
  const positionI18n = t(positionTranslation);
  const aboutI18n = t(aboutTranslation);
  const toastCopyI18n = t(toastCopy);

  const history = useHistory();
  useEffect(() => {
    console.log(history);
    // history.push('/settings');
  }, []);
  return (
    <section className="profile-card">
      <div className="container">
        <ProfilePhoto
          selectPreset={selectPreset}
        />
        <div className="component-group">
          <ProfileSocial
            social={socialI18n}
            name={nameI18n}
            position={positionI18n}
            greeting={greetingI18n}
            toastCopy={toastCopyI18n}
          />
          <ProfileMain about={aboutI18n} />
        </div>
        <NavbarContainer />
      </div>
    </section>
  );
};

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
  return {
    socialTranslation: [BIOGRAPHY_DATA.SOCIAL, { returnObjects: true }],
    greetingTranslation: BIOGRAPHY_DATA.GREETING,
    nameTranslation: BIOGRAPHY_DATA.NAME,
    positionTranslation: BIOGRAPHY_DATA.POSITION,
    aboutTranslation: BIOGRAPHY_DATA.ABOUT,
    toastCopy: BIOGRAPHY_DATA.TOAST_COPY,
    selectPreset: stagesSelectors.selectPreset(state),
  };
}

export default connect(
  mapStateToProps,
)(Profile);
