import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSave } from 'react-icons/bi';
import { BUTTON_TYPES } from '../constants/button-types';
import './button.scss';

export const ButtonTypes = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
});

export const ButtonSizes = Object.freeze({
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
});

const Icon = ({ icon }) => {
  switch (icon) {
    case BUTTON_TYPES.SAVE:
      return <BiSave />;

    default:
      return null;
  }
};

export default class Button extends Component {
  getButtonClasses() {
    const {
      icon, size, type,
    } = this.props;
    const buttonClasses = [
      'button',
      `button--${size}`,
      `button--${type}`,
    ];

    if (icon && icon !== BUTTON_TYPES.NONE) buttonClasses.push('button--icon');

    return buttonClasses.join(' ');
  }

  render() {
    const {
      disabled, onClickHandler, label, icon,
    } = this.props;
    return (
      <button
        type="button"
        className={this.getButtonClasses()}
        onClick={(event) => onClickHandler(event.target)}
        disabled={disabled}
      >
        {icon && <Icon icon={icon} />}
        {label}
      </button>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
};

Icon.defaultProps = {
  icon: BUTTON_TYPES.NONE,
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(ButtonTypes)),
  disabled: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(ButtonSizes)),
  icon: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
};

Button.defaultProps = {
  type: ButtonTypes.PRIMARY,
  disabled: false,
  size: ButtonSizes.MEDIUM,
  icon: BUTTON_TYPES.NONE,
};
