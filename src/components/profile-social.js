import React from 'react';

const ProfileSocial = ({ greeting, name, position }) => (
  <>
    <div className="profile-title">
      <span>{greeting}</span>
      <h1>{name}</h1>
      <h2>{position}</h2>
    </div>
  </>
);

export default ProfileSocial;
