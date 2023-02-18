import React, { memo } from 'react';
import { Tooltip } from 'react-tooltip';

import './tooltip-wrapper.scss';

function TooltipWrapper({
  renderElement,
  text = 'default tooltip',
  clickable,
  place,
  delayHide,
}) {
  return (
    <>
      <Tooltip
        id={text}
        clickable={clickable}
        place={place}
        delayHide={delayHide}
        effect="solid"
      />
      <p
        className="tooltip-wrapper"
        data-tooltip-id={text}
        data-tooltip-content={text}
      >
        {renderElement() || 'default text'}
      </p>
    </>
  );
}

export default memo(TooltipWrapper);
