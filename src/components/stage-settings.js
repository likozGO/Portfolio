import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { useTranslation } from 'react-i18next';

import images from '../constants/images';
import { IMAGE_COMPARE } from '../constants/settings-image-mapping';

import Container from './container';
import RainbowText from './rainbow-text';
import Section from './section';
import StageSettingsButton from './stage-settings-button';
import StageSettingsItem from './stage-settings-item';

import './stage-settings.scss';
// eslint-disable-next-line import/order
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
// eslint-disable-next-line import/order
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

function StageSettings({
  selectPreset,
  selectHello,
  selectStep,
  setAnimationStart,
  setPreset,
  setStep,
  stagesStepsTranslations,
}) {
  const [animController, setAnimController] = React.useState(false);
  const { t, i18n } = useTranslation();
  const stepsHeadlineI18n = t(`stagesData.steps.${selectStep}.headline`);
  const { first, second, third } = t(...stagesStepsTranslations);

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

  const ANIMATION_TYPE = 'foldOutAnimation';

  const stages = [
    [
      {
        image: images.EN_FLAG,
        title: first.title.en,
        preset: ['lang', 'en'],
        changeLang: () => i18n.changeLanguage('en'),
      },
      {
        image: images.RU_FLAG,
        title: first.title.ru,
        preset: ['lang', 'ru'],
        changeLang: () => i18n.changeLanguage('ru'),
      },
      {
        image: images.UA_FLAG,
        title: first.title.ua,
        preset: ['lang', 'ua'],
        changeLang: () => i18n.changeLanguage('ua'),
      },
    ],
    [
      {
        image: images.DEFAULT_PALETTE,
        title: second.title.default,
        text: second.text.default,
        disableAnimation: true,
        preset: ['theme', 'default'],
      },
      {
        image: images.DARK_PALETTE,
        title: second.title.dark,
        text: second.text.dark,
        disableAnimation: true,
        preset: ['theme', 'dark'],
      },
      {
        image: images.WHITE_PALETTE,
        title: second.title.white,
        text: second.text.white,
        disableAnimation: true,
        preset: ['theme', 'white'],
      },
    ],
    [
      {
        image: images.NO_PARTICLES,
        title: third.title.disabled,
        preset: ['particles', 'disabled'],
      },
      {
        image: images.STARS_PARTICLES,
        title: third.title.stars,
        preset: ['particles', 'stars'],
      },
      {
        image: images.SNOW_PARTICLES,
        title: third.title.snow,
        preset: ['particles', 'snow'],
      },
      {
        image: images.BUBBLES_PARTICLES,
        title: third.title.bubbles,
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

  const sectionClassName = `stage-settings ${selectHello ? 'hide' : ''}`;

  return (
    <Section classNames={sectionClassName}>
      <RainbowText
        word={stepsHeadlineI18n}
        status={animController}
      />
      <Container classNames={selectPreset.particles ? 'bg-transparent' : ''}>
        <AwesomeSlider
          animation={ANIMATION_TYPE}
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
              <div
                className={`step step-${stepNumber}`}
                key={stepNumber}
              >
                <Container>
                  {Object.keys(stages[key]).map((childPropertyKey) => (
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
                  ))}
                </Container>
              </div>
            );
          })}
        </AwesomeSlider>
        <StageSettingsButton
          isVisible={selectStep === 'fourth' && !animController}
        />
      </Container>
    </Section>
  );
}

export default StageSettings;
