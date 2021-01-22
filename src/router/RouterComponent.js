import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { HOME_PATH } from './RouterUrl';

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
      render={(data) => <Component {...data} />}
      {...props}
    />
  );
}
