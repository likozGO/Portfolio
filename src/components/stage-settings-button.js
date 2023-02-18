import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import './stage-settings-button.scss';

function StageSettingsButton() {
  return (
    <Link
      to="/"
      className="settings-button"
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
