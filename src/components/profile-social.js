import React, { memo } from 'react';

function ProfileSocial({ greeting, name, position }) {
  return (
    <div className="profile-title">
      <span>{greeting}</span>
      <h1>{name}</h1>
      <h2>{position}</h2>
    </div>
  );
}

export default memo(ProfileSocial);
