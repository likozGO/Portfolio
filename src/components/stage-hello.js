import React from 'react';
import { useTranslation } from 'react-i18next';

import './stage-hello.scss';

const StageHello = ({ selectHello, setHello, helloFriendTranslation }) => {
  const { t } = useTranslation();
  const helloFriendI18n = t(helloFriendTranslation);
  const hello = Array.from({ length: 40 }).fill(helloFriendI18n);
  return (
    <div
      className={`stage-hello ${!selectHello ? 'hide' : 'visible'}`}
      onAnimationStart={() => !selectHello && setHello(true)}
      onAnimationEnd={() => selectHello && setHello(false)}
    >
      <div id="stage-hello-wrapper">
        {/* eslint-disable-next-line react/no-array-index-key */}
        {hello.map((text) => (
          <span className="stage-hello-word">{text}</span>
        ))}
      </div>
    </div>
  );
};

export default StageHello;
