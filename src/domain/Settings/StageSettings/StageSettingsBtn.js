import React from 'react';
import './css/StageSettingsBtn.scss';
import { Link } from 'react-router-dom';

const StageSettingsBtn = () => {
  console.log(123);
  return (
    <Link to="/" className="settings-btn">
      <div className="dots-container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <span>Go!</span>
    </Link>
  );
};

export default StageSettingsBtn;
