import React from 'react';

const ProfileMain = ({ about }) => {
  console.log('123');
  return (
    <div className="profile-about">
      <p>{about}</p>
    </div>
  );
};

export default ProfileMain;
