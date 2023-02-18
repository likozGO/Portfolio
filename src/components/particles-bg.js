import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import ParticlesSetting from '../constants/particles-settings';

function ParticlesBg({
  selectAnimationStart,
  selectPreset,
  setAnimationStart,
  isEnabled,
}) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

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
