import React, { memo } from 'react';

const COLORS = ['white', 'orange', 'red', 'violet', 'blue', 'green', 'yellow'];

function RainbowText({ word, status }) {
  return (
    <ul className={`c-rainbow ${status ? 'hide' : ''}`}>
      {COLORS.map((color) => (
        <li
          key={color}
          className={`c-rainbow__layer c-rainbow__layer--${color}`}
        >
          {word}
        </li>
      ))}
    </ul>
  );
}

export default memo(RainbowText);
