import React from 'react';
import { IconContext } from 'react-icons';
import Tooltip from '../../components/Tooltip/Tooltip';

const ProfileSocial = ({ social }) => {
  const ExprDownload = 'Download CV';
  return (
    <ul className="profile-social-links">
      {
        social.map((a, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            {/* eslint-disable eqeqeq */}
            <Tooltip
              text={a.text === ExprDownload ? a.text : a.link}
              delayHide={a.text !== ExprDownload ? 150 : 0}
              clickable={a.text !== ExprDownload}
              Elem={
                (a.text === ExprDownload
                  ? (
                    <a download href={a.link}>
                      <IconContext.Provider value={{ className: 'social-icon' }}>
                        {a.icon()}
                      </IconContext.Provider>
                    </a>
                  )
                  : (
                    <span href={a.link}>
                      <IconContext.Provider value={{ className: 'social-icon' }}>
                        {a.icon()}
                      </IconContext.Provider>
                    </span>
                  )
                )
              }
            />
          </li>
        ))
      }
    </ul>
  );
};

export default ProfileSocial;
