import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { IconContext } from 'react-icons';
import {
  FaBars, FaTimes, FaCreativeCommonsPdAlt,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { HOME_PATH } from '../constants/router-urls';
import Tooltip from './tooltip';
import { CV, socialTypes, TELEGRAM } from '../translations/translation-biography-data';

const Navbar = ({
  toggleVisible,
  navbarTranslation,
  selectVisible,
  selectVisibleModifier,
  toastCopy,
  socialTranslation,
}) => {
  const [isAnimationReady, setAnimationReady] = useState(false);
  const { t } = useTranslation();
  const navbarI18n = t(...navbarTranslation);
  const socialI18n = t(...socialTranslation);
  const toastCopyI18n = t(toastCopy);

  useEffect(() => {
    if (!selectVisibleModifier) toggleVisible(selectVisible);
  }, []);

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
    toast.info(`${toastCopyI18n}${data}`, { autoClose: 1000 });
  };

  console.log(navbarI18n);

  return (
    <nav
      className={`navbar ${!isAnimationReady ? 'loading' : ''} ${selectVisibleModifier}`}
      onAnimationEnd={() => setAnimationReady(true)}
    >
      <IconContext.Provider value={{ className: 'btn navbar-btn' }} type="button">
        <>
          <NavLink onClick={toggleVisible} to={HOME_PATH} className="navbar-logo">
            <FaCreativeCommonsPdAlt />
          </NavLink>
          {selectVisible
            ? <FaTimes onClick={() => toggleVisible(selectVisible)} />
            : <FaBars onClick={() => toggleVisible(selectVisible)} />}
        </>
      </IconContext.Provider>
      <div className="navbar-container">
        <NavLink onClick={toggleVisible} to={HOME_PATH} className="navbar-logo">
          <FaCreativeCommonsPdAlt />
        </NavLink>
        <div className="navbar-icons">
          {/* eslint-disable react/no-array-index-key */}
          {navbarI18n.map((item) => (
            <NavLink onClick={toggleVisible} to={item.link} activeClassName="active-link" exact={item.link === HOME_PATH}>
              <IconContext.Provider value={{ className: 'navbar-icon-item' }}>
                {item.icon()}
              </IconContext.Provider>
              {item.text}
            </NavLink>
          ))}
        </div>
        <ul className="navbar-social-links">
          {
              socialI18n.map((icon, ind) => (
                // eslint-disable-next-line react/no-array-index-key,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
                <li key={ind} onClick={() => socialBuilder(icon.key, icon.link)}>
                  {/* eslint-disable eqeqeq */}
                  <Tooltip
                    text={icon.text}
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
      </div>
      <div className="navbar-underlay" />
    </nav>
  );
};

export default Navbar;
