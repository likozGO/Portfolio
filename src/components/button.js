import React from 'react';
import { BiArrowBack, BiSave } from 'react-icons/bi';
import PropTypes from 'prop-types';

import {
  BUTTON_SIZES,
  BUTTON_STYLE,
  BUTTON_TYPES,
} from '../constants/button-types';

import './button.scss';

function getButtonClasses(icon, size, type, customClass) {
  const buttonClasses = ['button', `button--${size}`, `button--${type}`];

  if (customClass?.length) buttonClasses.push(`${customClass}`);

  if (icon && icon !== BUTTON_TYPES.NONE) buttonClasses.push('button--icon');

  return buttonClasses.join(' ');
}

function Icon({ icon }) {
  switch (icon) {
    case BUTTON_TYPES.SAVE: {
      return <BiSave />;
    }
    case BUTTON_TYPES.BACK: {
      return <BiArrowBack />;
    }

    default: {
      return null;
    }
  }
}

function Button({
  disabled,
  onClickHandler,
  label,
  icon,
  forwardRef,
  size,
  type,
  customClass,
}) {
  const generateClassName = getButtonClasses(icon, size, type, customClass);
  return (
    <button
      type="button"
      ref={forwardRef}
      className={generateClassName}
      onClick={(event) => onClickHandler(event.target)}
      disabled={disabled}
    >
      {icon && <Icon icon={icon} />}
      {label}
    </button>
  );
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
};

Icon.defaultProps = {
  icon: BUTTON_TYPES.NONE,
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(BUTTON_STYLE)),
  disabled: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  icon: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
};

Button.defaultProps = {
  type: BUTTON_STYLE.PRIMARY,
  disabled: false,
  size: BUTTON_SIZES.MEDIUM,
  icon: BUTTON_TYPES.NONE,
};

export default Button;
