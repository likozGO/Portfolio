import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { IconContext } from 'react-icons';
import {
  FaBars, FaTimes,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Tooltip from './tooltip';
import { HOME_PATH } from '../constants/router-urls';

const Navbar = ({
  toggleVisible, navbarTranslation, selectVisible, selectVisibleModifier,
}) => {
  const [isAnimationReady, setAnimationReady] = useState(false);
  const { t } = useTranslation();
  const navbarI18n = t(...navbarTranslation);

  useEffect(() => {
    if (!selectVisibleModifier) toggleVisible(selectVisible);
  }, []);

  return (
    <>
      <div
        className={`navbar ${!isAnimationReady ? 'loading' : ''} ${selectVisibleModifier}`}
        onAnimationEnd={() => setAnimationReady(true)}
      >
        <IconContext.Provider value={{ className: 'btn navbar-btn' }} type="button">
          {selectVisible
            ? <FaTimes onClick={() => toggleVisible(selectVisible)} />
            : <FaBars onClick={() => toggleVisible(selectVisible)} />}
        </IconContext.Provider>
        <div className="navbar-icons">
          {/* eslint-disable react/no-array-index-key */}
          {navbarI18n.map((item, ind) => (
            <Tooltip
              key={ind}
              text={item.text}
              delayHide={0}
              clickable
              Elem={(
                <NavLink onClick={toggleVisible} to={item.link} activeClassName="active-link" exact={item.link === HOME_PATH}>
                  <IconContext.Provider value={{ className: 'navbar-icon-item' }}>
                    {item.icon()}
                  </IconContext.Provider>
                </NavLink>
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
