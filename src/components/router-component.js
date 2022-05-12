import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { HOME_PATH, NO_FOUND_PATH } from '../constants/router-urls';
import routes from '../routes';

const HandleAuth = () => {
  const checkKey = true;
  if (checkKey) {
    return true;
  }
  return false;
};

// Show the component only when the user is logged in
// Otherwise, redirect the user to /login page

export default function RouterComponent({
  component: Component, path, isPrivate, isRestricted, ...props
}) {
  const location = useLocation();
  const pageFound = routes.find((page) => page.path === location.pathname);

  if (!pageFound) {
    return <Redirect to={NO_FOUND_PATH} />;
  }

  if (!HandleAuth() && isPrivate) {
    // Path private, example: if dont have rights, cant go in
    return (
      <Route
        path={path}
        render={() => <Redirect to={HOME_PATH} />}
        {...props}
      />
    );
  }

  if (HandleAuth() && isRestricted) {
    // Path restricted, exmaple: page login restricted, its public but
    // if you login you cant go to this page
    return (
      <Route
        path={path}
        render={() => <Redirect to={HOME_PATH} />}
        {...props}
      />
    );
  }

  return (
    <Route
      path={path}
      {...props}
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
