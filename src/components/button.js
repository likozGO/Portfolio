import React, { Component } from 'react';
import { BiSave } from 'react-icons/bi';
import PropTypes from 'prop-types';

import { BUTTON_SIZES, BUTTON_STYLE, BUTTON_TYPES } from '../constants/button-types';

import './button.scss';

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
