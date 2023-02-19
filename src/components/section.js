import React, { memo } from 'react';

import './section.scss';

function Section({ children, classNames = '' }) {
  return <section className={classNames}>{children}</section>;
}

export default memo(Section);
