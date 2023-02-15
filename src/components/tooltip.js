import React from 'react';
import ReactTooltip from 'react-tooltip';

import './tooltip.scss';

const Tooltip = ({
  Elem = 'default text', text = 'default tooltip', clickable, place,
  delayHide,
}) => (
  <>
    <ReactTooltip id={text} clickable={clickable} place={place} delayHide={delayHide} effect="solid" />
    <p className="tooltip" data-for={text} data-tip={text}>{Elem}</p>
  </>
);

export default Tooltip;
