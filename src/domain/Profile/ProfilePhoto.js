import React from 'react';
import PersonalPhoto from './images/photo.png';
import CartmanPhoto from './images/cartman.webp';

const ProfilePhoto = () => (
  <div className="profile-photo">
    <div className="image-wrapper">
      <img alt="Profile" src={PersonalPhoto} className="image-personal" />
      <img alt="Mr Homer" src={CartmanPhoto} className="image-cartoon" />
    </div>
  </div>
);

export default ProfilePhoto;
