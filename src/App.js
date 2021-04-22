import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import StageController from './domain/Settings/StageController';
import ParticlesBg from './domain/ParticlesBg/ParticlesBg';
import { selectPreset } from './domain/Settings/sliceStageController';
import RouterComponent from './router/RouterComponent';
import routes from './router/Router';
// import Profile from './domain/Profile/Profile';

function App() {
  const selectTheme = useSelector(selectPreset);
  return (
    <Router>
      <div className={`theme-picker theme-${selectTheme.theme}`}>
        <ParticlesBg />
        <Switch>
          {routes.map((route) => (
            <RouterComponent
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
              isRestricted={route.isRestricted}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
