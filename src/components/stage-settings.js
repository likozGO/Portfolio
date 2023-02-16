import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { useTranslation } from 'react-i18next';

import images from '../constants/images';
import { IMAGE_COMPARE } from '../constants/settings-image-mapping';

import RainbowText from './rainbow-text';
import StageSettingsButton from './stage-settings-button';
import StageSettingsItem from './stage-settings-item';

import './stage-settings.scss';
// eslint-disable-next-line import/order
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
// eslint-disable-next-line import/order
import AnimationStyles
  from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

const StageSettings = ({
  selectPreset,
  selectHello,
  selectStep,
  setAnimationStart,
  setPreset,
  setStep,
  firstStepTitleRuI18n,
  firstStepTitleEnI18n,
  firstStepTitleUaI18n,
  secondStepTitleDefaultI18n,
  secondStepTitleWhiteI18n,
  secondStepTitleDarkI18n,
  secondStepTextDefaultI18n,
  secondStepTextWhiteI18n,
  secondStepTextDarkI18n,
  thirdStepTitleDisabledI18n,
  thirdStepTitleStarsI18n,
  thirdStepTitleSnowI18n,
  thirdStepTitleBubblesI18n,
}) => {
  const [animController, setAnimController] = React.useState(false);
  const { t, i18n } = useTranslation();

  const STEPS_WORDS = {
    0: 'first',
    1: 'second',
    2: 'third',
    3: 'fourth',
  };

  const STEPS_INDEXES = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
  };

  const stepsI18n = t(`stagesData.steps.${selectStep}.headline`);

  const stages = [
    [
      {
        image: images.EN_FLAG,
        title: t(firstStepTitleEnI18n),
        preset: ['lang', 'en'],
        changeLang: () => i18n.changeLanguage('en'),
      },
      {
        image: images.RU_FLAG,
        title: t(firstStepTitleRuI18n),
        preset: ['lang', 'ru'],
        changeLang: () => i18n.changeLanguage('ru'),
      },
      {
        image: images.UA_FLAG,
        title: t(firstStepTitleUaI18n),
        preset: ['lang', 'ua'],
        changeLang: () => i18n.changeLanguage('ua'),
      },
    ],
    [
      {
        image: images.DEFAULT_PALETTE,
        title: t(secondStepTitleDefaultI18n),
        text: t(secondStepTextDefaultI18n),
        disableAnimation: true,
        preset: ['theme', 'default'],
      },
      {
        image: images.DARK_PALETTE,
        title: t(secondStepTitleDarkI18n),
        text: t(secondStepTextDarkI18n),
        disableAnimation: true,
        preset: ['theme', 'dark'],
      },
      {
        image: images.WHITE_PALETTE,
        title: t(secondStepTitleWhiteI18n),
        text: t(secondStepTextWhiteI18n),
        disableAnimation: true,
        preset: ['theme', 'white'],
      },
    ],
    [
      {
        image: images.NO_PARTICLES,
        title: t(thirdStepTitleDisabledI18n),
        preset: ['particles', 'disabled'],
      },
      {
        image: images.STARS_PARTICLES,
        title: t(thirdStepTitleStarsI18n),
        preset: ['particles', 'stars'],
      },
      {
        image: images.SNOW_PARTICLES,
        title: t(thirdStepTitleSnowI18n),
        preset: ['particles', 'snow'],
      },
      {
        image: images.BUBBLES_PARTICLES,
        title: t(thirdStepTitleBubblesI18n),
        preset: ['particles', 'bubbles'],
      },
    ],
    [
      {
        image: IMAGE_COMPARE.first[selectPreset.lang],
        title: t(`stagesData.steps.first.title.${[selectPreset.lang]}`),
        disableAnimation: true,
      },
      {
        image: IMAGE_COMPARE.second[selectPreset.theme],
        title: t(`stagesData.steps.second.title.${[selectPreset.theme]}`),
        text: t(`stagesData.steps.second.text.${[selectPreset.theme]}`),
        disableAnimation: true,
      },
      {
        image: IMAGE_COMPARE.third[selectPreset.particles],
        title: t(`stagesData.steps.third.title.${[selectPreset.particles]}`),
        disableAnimation: true,
      },
    ],
  ];

  return (
    <section
      className={`stage-settings ${selectHello && 'hide'}`}
    >
      <RainbowText word={stepsI18n} status={animController} />
      <div className={`steps-container ${selectPreset.particles && 'bg-transparent'}`}>
        <AwesomeSlider
          animation="foldOutAnimation"
          fillParent
          buttons={false}
          mobileTouch={false}
          infinite={false}
          selected={STEPS_INDEXES[selectStep]}
          cssModule={[CoreStyles, AnimationStyles]}
          onTransitionStart={(info) => {
            setStep(STEPS_WORDS[info.nextIndex]);
            setAnimController(true);
          }}
          onTransitionEnd={(info) => {
            setStep(STEPS_WORDS[info.currentIndex]);
            setAnimController(false);
          }}
        >
          {Object.keys(stages).map((key) => {
            const stepNumber = Number(key) + 1;
            return (
              <div className={`step step-${stepNumber}`} key={stepNumber}>
                <div className="container">
                  {
                    Object.keys(stages[key]).map((childPropertyKey) => (
                      <StageSettingsItem
                        selectPreset={selectPreset}
                        key={childPropertyKey}
                        setAnimationStart={setAnimationStart}
                        setPreset={setPreset}
                        currentStep={selectStep}
                        image={stages[key][childPropertyKey].image}
                        title={stages[key][childPropertyKey].title}
                        preset={stages[key][childPropertyKey].preset}
                        changeLang={stages[key][childPropertyKey].changeLang}
                      />
                    ))
                  }
                  {selectStep === 'fourth'
                    ? (
                      <div className="settings-button-wrapper">
                        <StageSettingsButton />
                      </div>
                    ) : null}
                </div>
              </div>
            );
          })}
        </AwesomeSlider>
      </div>
    </section>
  );
};

export default StageSettings;
