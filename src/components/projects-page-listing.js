import React from 'react';

import Div from './Div';
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
    <Div column fillParent align className={styles.page_container}>
      <h1 className={styles.page_title}>Page Transition Example</h1>
      <h3> Click on any one of the below items </h3>
      <Div fillParent row align justify="space_evenly" className={styles.page_container}>
        {images.map((image, index) => (
          // Adds different color class to different items
          <Div
            align
            justify
            onClick={(event) => onItemSelected(event, { image, index })}
            className={`${styles.image_container} ${styles[`color_${index + 1}`]}`}
          >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              className={styles.tech_image}
              src={image}
            />
          </Div>
        ))}
      </Div>
    </Div>
  );
};

export default ListingPage;
