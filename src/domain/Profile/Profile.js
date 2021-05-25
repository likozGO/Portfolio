import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import ProfileMain from './ProfileMain';
import ProfileHeader from './ProfileHeader';
import './Profile.scss';
import ProfileSocial from './ProfileSocial';
import Navbar from '../Navbar/Navbar';

const Profile = () => {
  const { t } = useTranslation();

  const socialI18n = t('biographyData.social', { returnObjects: true });
  const greetingI18n = t('biographyData.greeting');
  const nameI18n = t('biographyData.name');
  const positionI18n = t('biographyData.position');
  const aboutI18n = t('biographyData.about');

  const history = useHistory();
  useEffect(() => {
    console.log(history);
    // history.push('/settings');
  }, []);
  return (
    <section className="profile-card">
      <div className="container">
        <ProfileHeader />
        <div className="component-group">
          <ProfileSocial
            social={socialI18n}
            name={nameI18n}
            position={positionI18n}
            greeting={greetingI18n}
          />
          <ProfileMain about={aboutI18n} />
        </div>
        <Navbar />
      </div>
    </section>
  );
};

export default Profile;
