import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import ProfileMain from '../components/profile-main';
import ProfilePhoto from '../components/profile-photo';
import './profile.scss';
import ProfileSocial from '../components/profile-social';
import Navbar from '../components/navbar';

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
        <ProfilePhoto />
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
