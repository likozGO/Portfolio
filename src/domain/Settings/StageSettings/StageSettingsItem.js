import React from 'react';
import './css/StageSettingsItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectPreset, setAnimationStart, setPreset } from '../sliceStageController';
import IconSuccess from '../../../components/IconSuccess/IconSuccess';

const StageSettingsItem = ({
  image, title, text, preset, changeLang,
  disableAnimation, currentStep,
}) => {
  const dispatch = useDispatch();
  const selectedCard = useSelector(selectPreset);
  const selectedTheme = preset && selectedCard.theme === preset[1];
  const selectedLang = preset && selectedCard.lang === preset[1];
  const selectedParticles = preset && selectedCard.particles === preset[1];
  const activeExpression = {
    first: selectedLang,
    second: selectedTheme,
    third: selectedParticles,
  };
  const stepExpr = activeExpression[currentStep];

  const clickOnCard = () => {
    if (preset) {
      if (preset[0] === 'theme') {
        dispatch(setAnimationStart('animated'));
      }
      dispatch(setPreset([preset[0], preset[1]]));
    }
    if (changeLang && preset) changeLang(preset[1]);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="button"
      tabIndex={0}
      className="card"
      onClick={() => clickOnCard()}
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
          className="card__bg"
          d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
          stroke="transparent"
          fill="#000"
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
