import React from 'react';
import './css/StageSettingsBtn.scss';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const StageSettingsBtn = () => {
  // const dispatch = useDispatch();
  const navigateToMenu = () => {

  };
  return (
    <Link
      to="/"
      className="settings-btn"
      onClick={navigateToMenu}
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
};

export default StageSettingsBtn;
