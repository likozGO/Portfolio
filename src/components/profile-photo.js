import React, { memo } from 'react';

import images from '../constants/images';

const CURRENT_PHOTO = {
  default: images.PERSONAL_PHOTO_BLACK,
  dark: images.PERSONAL_PHOTO_PURPLE,
  white: images.PERSONAL_PHOTO_WHITE,
};

function ProfilePhoto({ selectPreset }) {
  return (
    <div className="profile-photo">
      <div className="image-wrapper">
        <img
          alt="Profile"
          src={CURRENT_PHOTO[selectPreset.theme]}
          className="image-personal"
        />
      </div>
    </div>
  );
}

export default memo(ProfilePhoto);
