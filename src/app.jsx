import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ParticlesBg from './components/particles-bg';
import { selectPreset } from './ducks/stages/stage-controller-slice';
import RouterComponent from './components/router-component';
import routes from './routes';

function App() {
  const selectTheme = useSelector(selectPreset);
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(selectTheme.lang);
  }, []);
  return (
    <Router>
      <div className={`theme-picker theme-${selectTheme.theme}`}>
        <ParticlesBg />
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
      </div>
    </Router>
  );
}

export default App;
