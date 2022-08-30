import React from 'react';

import reactBackgroundImage from '../assets/images/Images/react-background-image.png';
import reactNativeBackgroundImage from '../assets/images/photo-black.png';
import androidBackgroundImage from '../assets/images/Images/404-peter.png';
import laravelBackgroundImage from '../assets/images/Images/laravel-background-image.png';
import electronBackgroundImage from '../assets/images/Images/electron-background-image.png';
import styles from './projects-page-listing.module.scss';

const ListingPage = ({ onItemSelected }) => {
  const images = [
    reactBackgroundImage,
    reactNativeBackgroundImage,
    androidBackgroundImage,
    laravelBackgroundImage,
    electronBackgroundImage,
  ];

  return (
    <div style={{
      color: 'white',
      alignItems: 'center',
      flex: 1,
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <h1 className={styles.page_title}>Page Transition Example</h1>
      <h3> Click on any one of the below items </h3>
      <div
        style={{
          flex: 1,
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          color: 'white',
        }}
      >
        {images.map((image, index) => (
          // Adds different color class to different items
          <button
            type="button"
            key={`${image}123`}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={(event) => onItemSelected(event, { image, index })}
            className={`${styles.image_container} ${styles[`color_${index + 1}`]}`}
          >
            <img
              className={styles.tech_image}
              alt="Project"
              src={image}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
