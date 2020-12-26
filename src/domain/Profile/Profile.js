import React from 'react';
import { useTranslation } from 'react-i18next';

import ProfileSocial from './ProfileSocial';
import ProfileMain from './ProfileMain';
import ProfileHeader from './ProfileHeader';
import './Profile.scss';

const Profile = () => {
  const { t } = useTranslation();

  const nameI18n = t('biography.name');
  const positionI18n = t('biography.position');
  const aboutI18n = t('biography.about');
  const socialI18n = t('biography.social', { returnObjects: true });

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
