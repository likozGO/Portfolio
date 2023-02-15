import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import ParticlesSetting from '../constants/particles-settings';

const ParticlesBg = ({
  selectAnimationStart,
  selectPreset,
  setAnimationStart,
  isEnabled,
}) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
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
};

export default ParticlesBg;
