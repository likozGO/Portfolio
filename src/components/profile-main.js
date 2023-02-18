import React, { memo } from 'react';

function ProfileMain({ about }) {
  return (
    <div className="profile-about">
      <p>{about}</p>
    </div>
  );
}

export default memo(ProfileMain);
