import React from 'react';
import './stage-settings-btn.scss';
import { Link } from 'react-router-dom';

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
