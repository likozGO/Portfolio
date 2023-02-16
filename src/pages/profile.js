import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import ProfileMain from '../components/profile-main';
import ProfilePhoto from '../components/profile-photo';
import ProfileSocial from '../components/profile-social';
import { stagesSelectors } from '../ducks/stages';
import { BIOGRAPHY_DATA } from '../translations/translation-keys';

import './profile.scss';

const Profile = ({
  greetingTranslation,
  nameTranslation,
  positionTranslation,
  aboutTranslation,
  selectPreset,
}) => {
  const { t } = useTranslation();

  const greetingI18n = t(greetingTranslation);
  const nameI18n = t(nameTranslation);
  const positionI18n = t(positionTranslation);
  const aboutI18n = t(aboutTranslation);

  return (
    <section className="profile-card">
      <div className="container">
        <ProfilePhoto selectPreset={selectPreset} />
        <div className="component-group">
          <ProfileSocial
            name={nameI18n}
            position={positionI18n}
            greeting={greetingI18n}
          />
          <ProfileMain about={aboutI18n} />
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line no-unused-vars
function mapStateToProperties(state) {
  return {
    greetingTranslation: BIOGRAPHY_DATA.GREETING,
    nameTranslation: BIOGRAPHY_DATA.NAME,
    positionTranslation: BIOGRAPHY_DATA.POSITION,
    aboutTranslation: BIOGRAPHY_DATA.ABOUT,
    selectPreset: stagesSelectors.selectPreset(state),
  };
}

export default connect(mapStateToProperties)(Profile);
