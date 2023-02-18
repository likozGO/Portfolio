import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import images from '../constants/images';
import { HOME_PATH } from '../constants/router-urls';
import { errorsSelectors } from '../ducks/errors';
import operations from '../ducks/errors/operations';
import { stagesSelectors } from '../ducks/stages';
import { ERRORS_DATA } from '../translations/translation-keys';
import { generateRandomArrayIndex } from '../utilities';

import './error-no-found.scss';

const errorImages = [
  images.JOHN_404_GIF,
  images.CARTMAN_404_GIF,
  images.PETER_404_GIF,
  images.PATRICK_404_GIF,
  images.RALPH_404_GIF,
];

const randomImage = errorImages[generateRandomArrayIndex(errorImages)];

function ErrorNoFound({
  setNoFoundFact,
  selectFact,
  selectIsLoading,
  selectLanguage,
  errorTranslations,
}) {
  const isEnglishLanguage = selectLanguage === 'en';
  const [isMounted, setIsMounted] = useState(false);
  const hasFacts = selectFact?.length && isEnglishLanguage;

  const { t } = useTranslation();
  const {
    error,
    info,
    button_fact,
    to_get,
    interesting_information,
    or,
    comebackToHome,
  } = t(...errorTranslations);

  useEffect(() => {
    if (!hasFacts) setNoFoundFact();
    setIsMounted(true);
  }, []);

  return (
    <CSSTransition
      in={isMounted}
      timeout={3000}
      classNames="css-transition"
      unmountOnExit
    >
      <section className="no-found">
        <div className="page-404">
          <div className="container">
            <h1 className="error-code">{error}</h1>
            <img
              src={randomImage}
              alt="404"
            />
            <h3>
              <div className="info">
                {info}
                {isEnglishLanguage ? (
                  <>
                    <br />
                    <button
                      type="button"
                      className="interesting-fact"
                      onClick={setNoFoundFact}
                    >
                      {button_fact}
                    </button>
                    {`${to_get} `}
                    <span className="notice">{interesting_information}</span>
                    {` ${or} `}
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
              {hasFacts ? (
                <span className="random-fact notice">{selectFact}</span>
              ) : null}
            </h3>
            <Link
              to={HOME_PATH}
              className="button primary"
            >
              {comebackToHome}
            </Link>
          </div>
        </div>
      </section>
    </CSSTransition>
  );
}

function mapStateToProperties(state) {
  return {
    selectLanguage: stagesSelectors.selectLanguage(state),
    selectFact: errorsSelectors.selectNoFoundFact(state),
    selectIsLoading: errorsSelectors.selectNoFoundIsLoading(state),
    selectHasErrors: errorsSelectors.selectNoFoundHasErrors(state),

    errorTranslations: [ERRORS_DATA.NO_FOUND, { returnObjects: true }],
  };
}

function mapDispatchToProperties(dispatch) {
  return {
    setNoFoundFact: () => {
      dispatch(operations.setNoFoundFact());
    },
  };
}

export default connect(
  mapStateToProperties,
  mapDispatchToProperties,
)(ErrorNoFound);
