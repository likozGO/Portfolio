import React from 'react';

import './screen-image-wrapper.scss';

const ScreenImageWrapper = React.forwardRef(
  ({
    image, imageMobile, wrapperClassName = 'screen-image', imageClassName,
  }, ref) => (
    <div className={`${wrapperClassName}`}>
      <div className={`${wrapperClassName}__screen`}>
        <img
          ref={ref}
          src={image}
          className={`${imageClassName} screen-image__image`}
          alt="Screen"
        />
      </div>
      {imageMobile ? (
        <div className={`${wrapperClassName}__screen__mobile`}>
          <img
            src={imageMobile}
            className={`${imageClassName} screen-image__screen__mobile-image`}
            alt="Screen"
          />
        </div>
      ) : null}
      <div className={`${wrapperClassName}__bottom`}>
        <div className={`${wrapperClassName}__under`} />
      </div>
      <div className={`${wrapperClassName}__shadow`} />
    </div>
  ),
);

export default ScreenImageWrapper;
