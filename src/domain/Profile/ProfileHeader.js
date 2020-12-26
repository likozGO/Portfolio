import React from 'react';
import ProfilePhoto from './images/photo.jpg';

const ProfileHeader = ({ name, position }) => {
  console.log(123);
  return (
    <header className="profile-header">
      <a href="/" className="image-wrapper">
        <img alt="Profile" src={ProfilePhoto} />
      </a>

      <div className="text-wrapper">
        <h1>{name}</h1>
        <h2>{position}</h2>
      </div>
    </header>
  );
};

export default ProfileHeader;
