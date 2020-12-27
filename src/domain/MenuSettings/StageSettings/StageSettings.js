import React from 'react';
import { useTranslation } from 'react-i18next';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import { useSelector } from 'react-redux';
import { selectHello } from '../sliceStageController';
import './StageSettings.scss';
import StageSettingsItem from './StageSettingsItem';

import RuFlag from './images/russianFlag.svg';
import EnFlag from './images/englishFlag.svg';

const StageSettings = () => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = React.useState('first');
  const stepsI18n = t(`stagesData.steps.${step}`);
  const [animController, setAnimController] = React.useState(false);
  const selectHelloAnim = useSelector(selectHello);
  const steps = {
    0: 'first',
    1: 'second',
    2: 'third',
    3: 'fourth',
  };

  return (
    <section
      className={`stage-settings ${selectHelloAnim && 'hide'}`}
    >
      <SettingsTitle word={stepsI18n} status={animController} />
      <div className="steps-container">
        <AwesomeSlider
          animation="foldOutAnimation"
          fillParent
          buttons={false}
          cssModule={[CoreStyles, AnimationStyles]}
          onTransitionStart={() => setAnimController(true)}
          onTransitionEnd={(info) => {
            setStep(() => steps[info.currentIndex]);
            setAnimController(false);
          }}
        >
          <div className="step step-1">
            <div className="container">
              <StageSettingsItem
                image={EnFlag}
                title="English"
                preset={['lang', 'en']}
                changeLang={() => i18n.changeLanguage('en')}
              />
              <StageSettingsItem
                image={RuFlag}
                title="Русский"
                preset={['lang', 'ru']}
                changeLang={() => i18n.changeLanguage('ru')}
              />
            </div>
          </div>
          <div className="step step-2">
            <div className="container">
              <StageSettingsItem text="2" />
            </div>
          </div>
          <div className="step step-3">
            <div className="container">
              <StageSettingsItem text="3" />
            </div>
          </div>
          <div className="step step-4">
            <div className="container">
              <StageSettingsItem text="Final step" />
            </div>
          </div>
        </AwesomeSlider>
      </div>
    </section>
  );
};

const SettingsTitle = ({ word, status }) => (
  <ul className={`c-rainbow ${status && 'hide'}`}>
    <li className="c-rainbow__layer c-rainbow__layer--white">{word}</li>
    <li className="c-rainbow__layer c-rainbow__layer--orange">{word}</li>
    <li className="c-rainbow__layer c-rainbow__layer--red">{word}</li>
    <li className="c-rainbow__layer c-rainbow__layer--violet">{word}</li>
    <li className="c-rainbow__layer c-rainbow__layer--blue">{word}</li>
    <li className="c-rainbow__layer c-rainbow__layer--green">{word}</li>
    <li className="c-rainbow__layer c-rainbow__layer--yellow">{word}</li>
  </ul>
);

export default StageSettings;
