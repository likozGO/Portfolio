import React, { Component, memo } from 'react';
import { animated } from 'react-spring';
import styles from './Div.module.scss';

class Div extends Component {
  render() {
    const {
      row,
      align,
      alignSelf,
      justify,
      fillParent,
      className,
      children,
      animate,
      flex,
      style,
      passRef,
      ...rest
    } = this.props;

    // eslint-disable no-nested-ternary
    const classNameArray = [
      row ? styles.div_row : styles.div_column,
      // eslint-disable-next-line no-nested-ternary
      align
        ? typeof align === 'string'
          ? styles[`align_${align}`]
          : styles.align_center
        : '',
      // eslint-disable-next-line no-nested-ternary
      justify
        ? typeof justify === 'string'
          ? styles[`justify_${justify}`]
          : styles.justify_center
        : '',
      // eslint-disable-next-line no-nested-ternary
      alignSelf
        ? typeof alignSelf === 'string'
          ? styles[`align_self_${alignSelf}`]
          : styles.align_self_center
        : '',
      fillParent ? styles.fill_parent : '',
      className,
    ];

    let styleValue = style || {};

    if (flex) {
      styleValue = { ...styleValue, flex: typeof flex === 'number' ? flex : 1 };
    }

    if (animate) {
      return (
        <animated.div
          className={classNameArray.join(' ')}
          style={styleValue}
          {...rest}
        >
          {children}
        </animated.div>
      );
    }

    return (
      <div ref={passRef} className={classNameArray.join(' ')} style={styleValue} {...rest}>
        {children}
      </div>
    );
  }
}

Div.defaultProps = {
  passRef: null,
};

export default memo(Div);
