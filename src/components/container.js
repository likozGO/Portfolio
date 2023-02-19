import React, { memo } from 'react';

function Container({ children, classNames = '' }) {
  return <div className={`container ${classNames}`}>{children}</div>;
}

export default memo(Container);
