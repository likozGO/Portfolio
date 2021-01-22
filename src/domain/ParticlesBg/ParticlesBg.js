import React from 'react';
import Particles from 'react-tsparticles';
import { useDispatch, useSelector } from 'react-redux';
import ParticlesSetting from './particles.settings';
import {
  selectAnimationStart,
  selectPreset,
  setAnimationStart,
} from '../Settings/sliceStageController';

const ParticlesBg = () => {
  const selectParticles = useSelector(selectPreset);
  const selectAnimation = useSelector(selectAnimationStart);
  const dispatch = useDispatch();
  if (selectParticles.particles !== 'disabled') {
    return (
      <Particles
        id="tsparticles"
        options={ParticlesSetting[selectParticles.particles]}
      />
    );
  }

  return (
    <>
      <div
        className={`bg-animation ${selectAnimation}`}
        onAnimationEnd={() => dispatch(setAnimationStart(''))}
      >
        <div className="first" />
        <div className="second" />
      </div>
      <div className="bg" />
    </>
  );
};

export default ParticlesBg;
