import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import {
  HOME_PATH,
  NO_FOUND_PATH,
  SETTINGS_PATH,
} from '../constants/router-urls';
import { stagesSelectors } from '../ducks/stages';
import routes from '../routes';

function handleAuth() {
  // if we will need protected routes in future
  const checkKey = true;
  return checkKey;
}

// Show the component only when the user is logged in
// Otherwise, redirect the user to /login page

export default function RouterComponent({
  component: Component,
  path,
  isPrivate,
  isRestricted,
  ...properties
}) {
  const location = useLocation();
  const pageFound = routes.find((page) => page.path === location.pathname);
  const isHelloStage = useSelector(stagesSelectors.selectHello);

  if (!pageFound) {
    return <Redirect to={NO_FOUND_PATH} />;
  }

  if (!handleAuth() && isPrivate) {
    // Path private, example: if you don't have rights, cant go in
    return (
      <Route
        path={path}
        render={() => <Redirect to={HOME_PATH} />}
        {...properties}
      />
    );
  }

  if (handleAuth() && isRestricted) {
    // Path restricted, example: page login restricted, its public but
    // if you log in you cant go to this page
    return (
      <Route
        path={path}
        render={() => <Redirect to={HOME_PATH} />}
        {...properties}
      />
    );
  }

  if (location.pathname !== SETTINGS_PATH && isHelloStage) {
    // Path restricted, example: page login restricted, its public but
    // if you log in you cant go to this page
    return (
      <Route
        path={path}
        render={() => <Redirect to={SETTINGS_PATH} />}
        {...properties}
      />
    );
  }

  return (
    <Route
      path={path}
      {...properties}
    >
      {({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={400}
          classNames="css-transition"
          unmountOnExit
        >
          <Component />
        </CSSTransition>
      )}
    </Route>
  );
}
