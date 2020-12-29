import React from 'react';
import { useSelector } from 'react-redux';
import StageController from './domain/MenuSettings/StageController';
import ParticlesBg from './domain/ParticlesBg/ParticlesBg';
import { selectPreset } from './domain/MenuSettings/sliceStageController';

// import Profile from './domain/Profile/Profile';

function App() {
  const selectTheme = useSelector(selectPreset);
  return (
    <div className={`theme-picker theme-${selectTheme.theme}`}>
      <ParticlesBg />
      {/* <Profile /> */}
      <StageController />
    </div>
  );
}

export default App;
