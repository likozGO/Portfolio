import React from 'react';
import ProfilePhoto from './images/photo.png';

const ProfileHeader = () => (
  <header className="profile-header">
    <div className="image-wrapper">
      <img alt="Profile" src={ProfilePhoto} />
    </div>
  </header>
);

export default ProfileHeader;
