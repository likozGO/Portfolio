import React from 'react';
import { Link } from 'react-router-dom';

import './stage-settings-button.scss';

const StageSettingsButton = () => (
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

export default StageSettingsButton;
