import React from 'react';
import { Link } from 'react-router-dom';

import './stage-settings-btn.scss';

const StageSettingsBtn = () => (
  <Link
    to="/"
    className="settings-btn"
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

export default StageSettingsBtn;
