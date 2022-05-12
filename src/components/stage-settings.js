import React from 'react';
import { useTranslation } from 'react-i18next';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles
  from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import './stage-settings.scss';
import StageSettingsItem from './stage-settings-item';

import RuFlag from '../assets/images/russianFlag.svg';
import EnFlag from '../assets/images/englishFlag.svg';

import defaultPallete from '../assets/images/palette-default.jpg';
import darkPallete from '../assets/images/palette-dark.jpg';
import whitePallete from '../assets/images/palette-white.jpg';

import noParticles from '../assets/images/particles-no.png';
import starsParticles from '../assets/images/particles-stars.jpg';
import snowParticles from '../assets/images/particles-snow.jpg';
import bubblesParticles from '../assets/images/particles-bubbles.jpg';
import StageSettingsBtn from './stage-settings-btn';

const StageSettings = ({
  selectPreset,
  selectHello,
  setAnimationStart,
  setPreset,
}) => {
  const [step, setStep] = React.useState('first');
  const [animController, setAnimController] = React.useState(false);
  const { t, i18n } = useTranslation();
  const stepsI18n = t(`stagesData.steps.${step}.headline`);
  const stepData = `stagesData.steps.${step}`;

  const steps = {
    0: 'first',
    1: 'second',
    2: 'third',
    3: 'fourth',
  };

  const FirstStepTitleI18n = {
    en: t(`${stepData}.title.en`),
    ru: t(`${stepData}.title.ru`),
  };
  const SecondStepTitleI18n = {
    default: t(`${stepData}.title.default`),
    white: t(`${stepData}.title.white`),
    dark: t(`${stepData}.title.dark`),
  };
  const SecondStepTextI18n = {
    default: t(`${stepData}.text.default`),
    white: t(`${stepData}.text.white`),
    dark: t(`${stepData}.text.dark`),
  };
  const ThirdStepTitleI18n = {
    disabled: t(`${stepData}.title.disabled`),
    stars: t(`${stepData}.title.stars`),
    snow: t(`${stepData}.title.snow`),
    bubbles: t(`${stepData}.title.bubbles`),
  };

  const imageCompare = {
    first: {
      en: EnFlag,
      ru: RuFlag,
    },
    second: {
      default: defaultPallete,
      dark: darkPallete,
      white: whitePallete,
    },
    third: {
      disabled: noParticles,
      stars: starsParticles,
      snow: snowParticles,
      bubbles: bubblesParticles,
    },
  };

  return (
    <section
      className={`stage-settings ${selectHello && 'hide'}`}
    >
      <SettingsTitle word={stepsI18n} status={animController} />
      <div className={`steps-container ${selectPreset.particles && 'bg-transparent'}`}>
        <AwesomeSlider
          animation="foldOutAnimation"
          fillParent
          buttons={false}
          mobileTouch={false}
          infinite={false}
          cssModule={[CoreStyles, AnimationStyles]}
          onTransitionStart={() => setAnimController(true)}
          onTransitionEnd={(info) => {
            setStep(() => steps[info.currentIndex]);
            setAnimController(false);
            // if (info.currentIndex === 3) setGoTo(3);
          }}
        >
          <div className="step step-1">
            <div className="container">
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                currentStep={step}
                image={EnFlag}
                title={FirstStepTitleI18n.en}
                preset={['lang', 'en']}
                changeLang={() => i18n.changeLanguage('en')}
              />
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                currentStep={step}
                image={RuFlag}
                title={FirstStepTitleI18n.ru}
                preset={['lang', 'ru']}
                changeLang={() => i18n.changeLanguage('ru')}
              />
            </div>
          </div>
          <div className="step step-2">
            <div className="container">
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                currentStep={step}
                preset={['theme', 'default']}
                title={SecondStepTitleI18n.default}
                text={SecondStepTextI18n.default}
                disableAnimation
                image={defaultPallete}
              />
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                currentStep={step}
                preset={['theme', 'dark']}
                title={SecondStepTitleI18n.dark}
                text={SecondStepTextI18n.dark}
                disableAnimation
                image={darkPallete}
              />
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                currentStep={step}
                preset={['theme', 'white']}
                title={SecondStepTitleI18n.white}
                text={SecondStepTextI18n.white}
                disableAnimation
                image={whitePallete}
              />
            </div>
          </div>
          <div className="step step-3">
            <div className="container">
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                currentStep={step}
                image={noParticles}
                title={ThirdStepTitleI18n.disabled}
                preset={['particles', 'disabled']}
              />
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                currentStep={step}
                image={starsParticles}
                title={ThirdStepTitleI18n.stars}
                preset={['particles', 'stars']}
              />
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                currentStep={step}
                image={snowParticles}
                title={ThirdStepTitleI18n.snow}
                preset={['particles', 'snow']}
              />
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                currentStep={step}
                image={bubblesParticles}
                title={ThirdStepTitleI18n.bubbles}
                preset={['particles', 'bubbles']}
              />
            </div>
          </div>
          <div className="step step-4">
            <div className="container">
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                image={imageCompare.first[selectPreset.lang]}
                title={t(`stagesData.steps.first.title.${[selectPreset.lang]}`)}
              />
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                image={imageCompare.second[selectPreset.theme]}
                title={t(`stagesData.steps.second.title.${[selectPreset.theme]}`)}
                text={t(`stagesData.steps.second.text.${[selectPreset.theme]}`)}
                disableAnimation
              />
              <StageSettingsItem
                selectPreset={selectPreset}
                setAnimationStart={setAnimationStart}
                setPreset={setPreset}
                image={imageCompare.third[selectPreset.particles]}
                title={t(`stagesData.steps.third.title.${[selectPreset.particles]}`)}
              />
              <div className="settings-btn-wrapper">
                <StageSettingsBtn />
              </div>
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
