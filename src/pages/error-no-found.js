import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import images from '../constants/images';
import { errorsSelectors } from '../ducks/errors';
import operations from '../ducks/errors/operations';
import { stagesSelectors } from '../ducks/stages';
import { ERRORS_DATA } from '../translations/translation-keys';

import './error-no-found.scss';

const ErrorNoFound = ({
  generateRandomFact,
  selectFact,
  selectIsLoading,
  selectLanguage,
  buttonFactTranslation,
  errorTranslation,
  infoTranslation,
  toGetTranslation,
  interestingTranslation,
  orTranslation,
  toHomeTranslation,
}) => {
  const [inProperty, setInProperty] = useState(false);
  const { t } = useTranslation();
  const errorImages = [
    images.JOHN_404_GIF,
    images.CARTMAN_404_GIF,
    images.PETER_404_GIF,
    images.PATRICK_404_GIF,
    images.RALPH_404_GIF,
  ];

  const randomImage = errorImages[Math.trunc(Math.random() * errorImages.length)];

  const buttonFactI18n = t(buttonFactTranslation);
  const errorI18n = t(errorTranslation);
  const infoI18n = t(infoTranslation);

  const toGetI18n = t(toGetTranslation);
  const interestingI18n = t(interestingTranslation);
  const orI18n = t(orTranslation);
  const toHomeI18n = t(toHomeTranslation);

  const isEnglishLanguage = selectLanguage === 'en';

  useEffect(() => {
    setInProperty(() => true);
  }, []);

  return (
    <CSSTransition
      in={inProperty}
      timeout={3000}
      classNames="css-transition"
      unmountOnExit
    >
      <div className="no-found">
        <section className="page-404">
          <h1 className="error-code">{errorI18n}</h1>
          <img
            src={randomImage}
            alt="404"
          />
          <h3>
            <div className="info">
              {infoI18n}
              {isEnglishLanguage ? (
                <>
                  <br />
                  <button
                    type="button"
                    className="interesting-fact"
                    onClick={generateRandomFact}
                  >
                    {buttonFactI18n}
                  </button>
                  {' '}
                  {toGetI18n}
                  {' '}
                  <span className="notice">{interestingI18n}</span>
                  {' '}
                  {orI18n}
                </>
              ) : null}
            </div>

            {selectIsLoading ? (
              <>
                <FaSpinner
                  icon="spinner"
                  className="spinner"
                />
                <br />
              </>
            ) : null}
            {selectFact?.length && isEnglishLanguage ? (
              <span className="random-fact notice">{selectFact}</span>
            ) : null}
          </h3>
          <Link
            to="/"
            className="button primary"
          >
            {toHomeI18n}
          </Link>
        </section>
      </div>
    </CSSTransition>
  );
};

function mapStateToProperties(state) {
  return {
    selectLanguage: stagesSelectors.selectLanguage(state),
    selectFact: errorsSelectors.selectNoFoundFact(state),
    selectIsLoading: errorsSelectors.selectNoFoundIsLoading(state),
    selectHasErrors: errorsSelectors.selectNoFoundHasErrors(state),
    buttonFactTranslation: ERRORS_DATA.BUTTON_FACT,
    errorTranslation: ERRORS_DATA.ERROR,
    infoTranslation: ERRORS_DATA.INFO,
    toGetTranslation: ERRORS_DATA.TO_GET,
    interestingTranslation: ERRORS_DATA.INTERESTING_INFORMATION,
    orTranslation: ERRORS_DATA.OR,
    toHomeTranslation: ERRORS_DATA.COMEBACK_TO_HOME,
  };
}

function mapDispatchToProperties(dispatch) {
  return {
    generateRandomFact: () => {
      dispatch(operations.setNoFoundFact());
    },
  };
}

export default connect(
  mapStateToProperties,
  mapDispatchToProperties,
)(ErrorNoFound);
