import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { IconContext } from 'react-icons';
import {
  FaBars, FaTimes,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '../../components/Tooltip/Tooltip';
import { selectIsVisible, selectVisibleClass, toggleVisible } from './Navbar.slice';

const Navbar = () => {
  const dispatch = useDispatch();
  const selectVisible = useSelector(selectIsVisible);
  const selectVisibleModifier = useSelector(selectVisibleClass);
  const [isAnimationReady, setAnimationReady] = useState(false);
  const { t } = useTranslation();
  const navbarI18n = t('navbarData.navbar.links', { returnObjects: true });

  const toogleVisible = () => {
    if (selectVisible) {
      dispatch(toggleVisible({ isVisible: false, visibleClass: 'hide-navbar' }));
    } else {
      dispatch(toggleVisible({ isVisible: true, visibleClass: 'show-navbar' }));
    }
  };

  useEffect(() => {
    if (!selectVisibleModifier) dispatch(toggleVisible({ isVisible: false, visibleClass: 'hide-navbar' }));
  }, []);
  return (
    <>
      <div
        className={`navbar ${!isAnimationReady ? 'loading' : ''} ${selectVisibleModifier}`}
        onAnimationEnd={() => setAnimationReady(true)}
      >
        <IconContext.Provider value={{ className: 'btn navbar-btn' }} type="button">
          {selectVisible
            ? <FaTimes onClick={toogleVisible} />
            : <FaBars onClick={toogleVisible} />}
        </IconContext.Provider>
        <div className="navbar-icons">
          {/* eslint-disable react/no-array-index-key */}
          {navbarI18n.map((item, indx) => (
            <Tooltip
              key={indx}
              text={item.text}
              delayHide={0}
              clickable
              Elem={(
                <Link to={item.link}>
                  <IconContext.Provider value={{ className: 'navbar-icon-item' }}>
                    {item.icon()}
                  </IconContext.Provider>
                </Link>
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
