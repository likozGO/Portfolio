import React from 'react';
import { useTranslation } from 'react-i18next';

import ProfileSocial from './ProfileSocial';
import ProfileMain from './ProfileMain';
import ProfileHeader from './ProfileHeader';
import './Profile.scss';

const Profile = () => {
  const { t } = useTranslation();

  const nameI18n = t('biographyData.name');
  const positionI18n = t('biographyData.position');
  const aboutI18n = t('biographyData.about');
  const socialI18n = t('biographyData.social', { returnObjects: true });

  return (
    <section className="profile-card">
      <div className="container">
        <ProfileHeader
          name={nameI18n}
          position={positionI18n}
        />
        <ProfileMain about={aboutI18n} />
        <ProfileSocial social={socialI18n} />
      </div>
    </section>
  );
};

export default Profile;
