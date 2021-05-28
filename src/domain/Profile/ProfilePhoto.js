import React from 'react';
import { useSelector } from 'react-redux';
import PersonalPhotoBlack from './images/photo-black.png';
import PersonalPhotoPurple from './images/photo-purple.png';
import PersonalPhotoWhite from './images/photo-white.png';
import CartmanPhoto from './images/cartman.webp';
import { selectPreset } from '../Settings/StageController.slice';

const ProfilePhoto = () => {
  const selectTheme = useSelector(selectPreset);

  const currentPhoto = {
    default: PersonalPhotoPurple,
    dark: PersonalPhotoBlack,
    white: PersonalPhotoWhite,
  };
  return (
    <div className="profile-photo">
      <div className="image-wrapper">
        <img alt="Profile" src={currentPhoto[selectTheme.theme]} className="image-personal" />
        <img alt="Mr Homer" src={CartmanPhoto} className="image-cartoon" />
      </div>
    </div>
  );
};

export default ProfilePhoto;
