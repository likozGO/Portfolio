import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavbarContainer from './containers/navbar-container';
import ParticlesBgContainer from './containers/particles-bg-container';
import RouterComponent from './components/router-component';
import { stagesSelectors } from './ducks/stages/index';
import routes from './routes';
import { APP_DATA } from './constants/translation-keys';

import 'moment/locale/ru';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const selectTheme = useSelector(stagesSelectors.selectPreset);
  const { t, i18n } = useTranslation();
  const titleI18n = t(APP_DATA.TITLE);

  useEffect(() => {
    i18n.changeLanguage(selectTheme.lang);
  }, []);

  useEffect(() => {
    document.title = titleI18n;
  });

  return (
    <Router>
      <div className={`theme-picker theme-${selectTheme.theme}`}>
        <ToastContainer limit={3} toastClassName="toast" />
        <ParticlesBgContainer />
        <main>
          <NavbarContainer />
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
        </main>
      </div>
    </Router>
  );
}

export default App;
