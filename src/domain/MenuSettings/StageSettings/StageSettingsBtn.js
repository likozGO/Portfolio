import React from 'react';
import './css/StageSettingsBtn.scss';

const StageSettingsBtn = () => {
  console.log(123);
  return (
    <a href="/" className="settings-btn">
      <div className="dots-container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <span>Go!</span>
    </a>
  );
};

export default StageSettingsBtn;
