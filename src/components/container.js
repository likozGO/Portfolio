import React, { memo } from 'react';

function Container({ children, classNames }) {
  console.log(classNames);
  return <div className={`container ${classNames}`}>{children}</div>;
}

export default memo(Container);
