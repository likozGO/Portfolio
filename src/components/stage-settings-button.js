import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { HOME_PATH } from '../constants/router-urls';

import './stage-settings-button.scss';

function StageSettingsButton({ isVisible }) {
  return (
    <Link
      to={HOME_PATH}
      className={`settings-button ${isVisible ? '' : 'hide'}`}
    >
      <div className="dots-container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <span>Go!</span>
    </Link>
  );
}

export default memo(StageSettingsButton);
