import React from 'react';

import images from '../constants/images';

const ProfilePhoto = ({ selectPreset }) => {
  const CURRENT_PHOTO = {
    default: images.PERSONAL_PHOTO_BLACK,
    dark: images.PERSONAL_PHOTO_PURPLE,
    white: images.PERSONAL_PHOTO_WHITE,
  };
  return (
    <div className="profile-photo">
      <div className="image-wrapper">
        <img alt="Profile" src={CURRENT_PHOTO[selectPreset.theme]} className="image-personal" />
      </div>
    </div>
  );
};

export default ProfilePhoto;
