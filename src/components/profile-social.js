import React from 'react';
import { IconContext } from 'react-icons';
import { toast } from 'react-toastify';
import Tooltip from './tooltip';

import {
  socialTypes, CV, TELEGRAM,
} from '../constants/translation-biography-data';

const ProfileSocial = ({
  social, greeting, name, position,
}) => {
  const navigateToLink = (location) => {
    window.open(location, '_blank');
  };
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e);
  };

  const socialBuilder = (type, data) => {
    if (!socialTypes.includes(type)) return;
    if (type === TELEGRAM || type === CV) {
      navigateToLink(data);
      return;
    }
    copyToClipboard(data);
    toast.info(`Copied: ${data}`, { autoClose: 1000 });
  };

  return (
    <>
      <div className="profile-title">
        <span>{greeting}</span>
        <h1>{name}</h1>
        <h2>{position}</h2>
      </div>
      <ul className="profile-social-links">
        {
        social.map((icon, ind) => (
          // eslint-disable-next-line react/no-array-index-key,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
          <li key={ind} onClick={() => socialBuilder(icon.key, icon.link)}>
            {/* eslint-disable eqeqeq */}
            <Tooltip
              text={icon.key === CV ? icon.text : icon.link}
              delayHide={icon.key !== CV ? 150 : 0}
              clickable
              Elem={(
                <span href={icon.link}>
                  <IconContext.Provider value={{ className: 'social-icon copied' }}>
                    {icon.icon()}
                  </IconContext.Provider>
                </span>
                  )}
            />
          </li>
        ))
      }
      </ul>
    </>
  );
};

export default ProfileSocial;
