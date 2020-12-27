import React from 'react';
import StageController from './domain/MenuSettings/StageController';
import ParticlesBg from './domain/ParticlesBg/ParticlesBg';
// import Profile from './domain/Profile/Profile';

function App() {
  return (
    <>
      <ParticlesBg />
      {/* <Profile /> */}
      <StageController />
    </>
  );
}

export default App;
