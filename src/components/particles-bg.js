import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import ParticlesSetting from '../constants/particles-settings';

async function particlesInit(main) {
  await loadFull(main);
}

function ParticlesBg({
  selectAnimationStart,
  selectPreset,
  setAnimationStart,
  isEnabled,
}) {
  if (isEnabled) {
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={ParticlesSetting[selectPreset.theme][selectPreset.particles]}
      />
    );
  }

  return (
    <>
      <div
        className={`bg-animation ${selectAnimationStart}`}
        onAnimationEnd={() => setAnimationStart('')}
      >
        <div className="first" />
        <div className="second" />
      </div>
      <div className="bg" />
    </>
  );
}

export default ParticlesBg;
