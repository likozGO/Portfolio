import React from 'react';

const ProfileSocial = ({ social }) => {
  console.log(123);
  return (
    <ul className="profile-social-links">

      {
        social.map((a, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            <a href={a.link}>
              {a.text}
            </a>
          </li>
        ))
      }
    </ul>
  );
};

export default ProfileSocial;
