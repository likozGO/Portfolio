import React from 'react';
import PersonalPhotoBlack from '../assets/images/photo-black.png';
import PersonalPhotoPurple from '../assets/images/photo-purple.png';
import PersonalPhotoWhite from '../assets/images/photo-white.png';
import CartmanPhoto from '../assets/images/cartman.webp';

const ProfilePhoto = ({ selectPreset }) => {
  const currentPhoto = {
    default: PersonalPhotoPurple,
    dark: PersonalPhotoBlack,
    white: PersonalPhotoWhite,
  };
  return (
    <div className="profile-photo">
      <div className="image-wrapper">
        <img alt="Profile" src={currentPhoto[selectPreset.theme]} className="image-personal" />
        <img alt="Mr Homer" src={CartmanPhoto} className="image-cartoon" />
      </div>
    </div>
  );
};

export default ProfilePhoto;
