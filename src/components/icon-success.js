import React, { memo } from 'react';

import './icon-success.scss';

const STYLE_TOP_RIGHT = {
  top: '0',
  right: '20px',
};

const STYLE_TOP_LEFT = {
  top: '0',
  left: '20px',
};

const presets = {
  STYLE_TOP_RIGHT,
  STYLE_TOP_LEFT,
};

function IconSuccess({ active, template = 'STYLE_TOP_RIGHT' }) {
  return (
    <svg
      id="success-animation"
      className={`animated ${!active ? 'hide' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 70 70"
      style={presets[template]}
    >
      <path
        id="success-animation-result"
        fill="#D8D8D8"
        d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
      />
      <circle
        id="success-animation-circle"
        cx="35"
        cy="35"
        r="24"
        stroke="#979797"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />
      <polyline
        id="success-animation-check"
        stroke="#979797"
        strokeWidth="2"
        points="23 34 34 43 47 27"
        fill="transparent"
      />
    </svg>
  );
}

export default memo(IconSuccess);
