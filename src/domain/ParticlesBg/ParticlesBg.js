import React from 'react';
import Particles from 'react-tsparticles';
import { useSelector } from 'react-redux';
import ParticlesSetting from './particles.settings';
import { selectPreset } from '../MenuSettings/sliceStageController';

const ParticlesBg = () => {
  const selectParticles = useSelector(selectPreset);
  if (selectParticles.particles !== 'disabled') {
    return (
      <Particles
        id="tsparticles"
        options={ParticlesSetting[selectParticles.particles]}
      />
    );
  }
  return (null);
};

export default ParticlesBg;
