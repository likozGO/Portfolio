import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import StageController from './domain/Settings/StageController';
import { useTranslation } from 'react-i18next';
import ParticlesBg from './domain/ParticlesBg/ParticlesBg';
import { selectPreset } from './domain/Settings/StageController.slice';
import RouterComponent from './router/RouterComponent';
import routes from './router/Router';
import Navbar from './domain/Navbar/Navbar';

function App() {
  const selectTheme = useSelector(selectPreset);
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(selectTheme.lang);
  }, []);
  return (
    <Router>
      <div className={`theme-picker theme-${selectTheme.theme}`}>
        <Navbar />
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
