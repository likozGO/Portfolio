import React from 'react';
import './StageHello.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectHello, setHello } from '../StageController.slice';

const StageHello = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const selectHelloAnim = useSelector(selectHello);
  const helloFriendI18n = t('stagesData.helloFriend');
  console.log(selectHello);
  console.log(123);
  const hello = new Array(40).fill(helloFriendI18n);
  return (
    <div
      className={`stage-hello ${!selectHelloAnim && 'hide'}`}
      onAnimationStart={() => !selectHelloAnim && dispatch(setHello(true))}
      onAnimationEnd={() => selectHelloAnim && dispatch(setHello(false))}
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
