import React from 'react';
import './stage-hello.scss';
import { useTranslation } from 'react-i18next';

const StageHello = ({ selectHello, setHello, helloFriendTranslation }) => {
  const { t } = useTranslation();
  const helloFriendI18n = t(helloFriendTranslation);
  const hello = new Array(40).fill(helloFriendI18n);
  return (
    <div
      className={`stage-hello ${!selectHello ? 'hide' : 'visible'}`}
      onAnimationStart={() => !selectHello && setHello(true)}
      onAnimationEnd={() => selectHello && setHello(false)}
    >
      <div
        id="ui"
      >
        {/* eslint-disable-next-line react/no-array-index-key */}
        {hello.map((a, index) => <span className="text" key={index}>{a}</span>)}
      </div>
    </div>
  );
};

export default StageHello;
