import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Container from '../components/container';
import ProfileMain from '../components/profile-main';
import ProfilePhoto from '../components/profile-photo';
import ProfileSocial from '../components/profile-social';
import { stagesSelectors } from '../ducks/stages';
import { BIOGRAPHY_DATA } from '../translations/translation-keys';

import './profile.scss';

function Profile({ biographyTranslations, selectPreset }) {
  const { t } = useTranslation();
  const {
    greeting, name, position, about,
  } = t(...biographyTranslations);

  return (
    <section className="profile-card">
      <Container>
        <ProfilePhoto selectPreset={selectPreset} />
        <div className="component-group">
          <ProfileSocial
            name={name}
            position={position}
            greeting={greeting}
          />
          <ProfileMain about={about} />
        </div>
      </Container>
    </section>
  );
}

// eslint-disable-next-line no-unused-vars
function mapStateToProperties(state) {
  return {
    biographyTranslations: [BIOGRAPHY_DATA.BIOGRAPHY, { returnObjects: true }],
    selectPreset: stagesSelectors.selectPreset(state),
  };
}

export default connect(mapStateToProperties)(Profile);
