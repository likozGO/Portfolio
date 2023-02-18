import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { FaBars, FaCreativeCommonsPdAlt, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CV, SOCIAL_TYPES, TELEGRAM } from '../constants/contacts';
import { HOME_PATH } from '../constants/router-urls';
import { copyToClipboard, navigateToLink } from '../utilities';

import TooltipWrapper from './tooltip-wrapper';

import './navbar.scss';

function socialBuilder(type, data, toastText) {
  if (!SOCIAL_TYPES.includes(type)) return;
  if (type === TELEGRAM || type === CV) {
    navigateToLink(data);
    return;
  }
  copyToClipboard(data);
  toast.info(`${toastText}${data}`, { autoClose: 1000 });
}
const navbarClasses = { className: 'btn navbar-btn' };
const socialClasses = { className: 'social-icon copied' };
const navbarIconItemClasses = { className: 'navbar-icon-item' };

function Navbar({
  toggleVisible,
  navbarTranslation,
  selectVisible,
  selectVisibleModifier,
  toastCopy,
  socialTranslation,
}) {
  const [isAnimationReady, setAnimationReady] = useState(false);
  const { t } = useTranslation();
  const navbarI18n = t(...navbarTranslation);
  const socialI18n = t(...socialTranslation);
  const toastCopyI18n = t(toastCopy);

  useEffect(() => {
    if (!selectVisibleModifier) toggleVisible(selectVisible);
  }, []);

  return (
    <nav
      className={`navbar ${
        isAnimationReady ? '' : 'loading'
      } ${selectVisibleModifier}`}
      onAnimationEnd={() => setAnimationReady(true)}
    >
      <IconContext.Provider
        value={navbarClasses}
        type="button"
      >
        <>
          <NavLink
            onClick={toggleVisible}
            to={HOME_PATH}
            className="navbar-logo"
          >
            <FaCreativeCommonsPdAlt />
          </NavLink>
          {selectVisible ? (
            <FaTimes onClick={() => toggleVisible(selectVisible)} />
          ) : (
            <FaBars onClick={() => toggleVisible(selectVisible)} />
          )}
        </>
      </IconContext.Provider>
      <div className="navbar-container">
        <NavLink
          onClick={toggleVisible}
          to={HOME_PATH}
          className="navbar-logo"
        >
          <FaCreativeCommonsPdAlt />
        </NavLink>
        <div className="navbar-icons">
          {/* eslint-disable react/no-array-index-key */}
          {navbarI18n.map((item) => (
            <NavLink
              onClick={toggleVisible}
              to={item.link}
              key={item.text}
              activeClassName="active-link"
              exact={item.link === HOME_PATH}
            >
              <IconContext.Provider value={navbarIconItemClasses}>
                {item.icon()}
              </IconContext.Provider>
              {item.text}
            </NavLink>
          ))}
        </div>
        <ul className="navbar-social-links">
          {socialI18n.map((icon) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={icon.key}
              onClick={() => socialBuilder(icon.key, icon.link, toastCopyI18n)}
            >
              <TooltipWrapper
                text={icon.text}
                delayHide={icon.key === CV ? 0 : 150}
                clickable
                renderElement={() => (
                  <span href={icon.link}>
                    <IconContext.Provider value={socialClasses}>
                      {icon.icon()}
                    </IconContext.Provider>
                  </span>
                )}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-underlay" />
    </nav>
  );
}

export default Navbar;
