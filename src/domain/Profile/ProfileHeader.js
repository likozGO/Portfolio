import React from 'react';
import ProfilePhoto from './images/photo.jpg';

const ProfileHeader = ({ name, position }) => {
  console.log(123);
  return (
    <header className="profile-header">
      <a href="/">
        <img alt="Profile" src={ProfilePhoto} />
      </a>

      <h1>{name}</h1>

      <h2>{position}</h2>
    </header>
  );
};

export default ProfileHeader;
