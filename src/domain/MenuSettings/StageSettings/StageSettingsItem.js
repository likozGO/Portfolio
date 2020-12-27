import React from 'react';
import './StageSettingsItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectPreset, setPreset } from '../sliceStageController';
import IconSuccess from '../../../components/IconSuccess/IconSuccess';

const StageSettingsItem = ({
  image, title, text, preset, changeLang, disableAnimation, currentStep,
}) => {
  const dispatch = useDispatch();
  const selectedCard = useSelector(selectPreset);

  const selectedTheme = selectedCard.theme === preset[1];
  const selectedLang = selectedCard.lang === preset[1];
  const selectedParicles = selectedCard.particles === preset[1];

  const activeExpression = {
    first: selectedLang,
    second: selectedTheme,
    third: selectedParicles,
  };

  const stepExpr = activeExpression[currentStep];

  return (
    <div
      role="button"
      tabIndex={0}
      className="card"
      onKeyDown={() => {
        dispatch(setPreset([preset[0], preset[1]]));
        if (changeLang) changeLang(preset[1]);
      }}
      onClick={() => {
        dispatch(setPreset([preset[0], preset[1]]));
        if (changeLang) changeLang(preset[1]);
      }}
    >
      <IconSuccess active={stepExpr ? 'active' : false} />
      <div className="card__image-container" style={{ display: !image && 'none' }}>
        <img
          className="card__image"
          src={image}
          alt=""
        />
      </div>

      <svg className="card__svg" viewBox="0 0 800 500" style={{ display: disableAnimation && 'none' }}>

        <path
          d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
          stroke="transparent"
          fill="#333"
        />
        <path
          className="card__line"
          d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
          stroke="pink"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>

      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p style={{ display: !text && 'none' }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default StageSettingsItem;
