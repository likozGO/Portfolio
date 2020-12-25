import React from 'react';
import ProfileSocial from './ProfileSocial';
import ProfileMain from './ProfileMain';
import ProfileHeader from './ProfileHeader';
import biography from './biography.json';
import './Profile.scss';

const Profile = () => {
  console.log(123);
  return (
    <main className="profile-card">
      <ProfileHeader
        name={biography.name}
        position={biography.position}
      />
      <ProfileMain about={biography.about} />
      <ProfileSocial social={biography.social} />
    </main>
  );
};

export default Profile;
