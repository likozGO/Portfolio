import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useDispatch, useSelector } from 'react-redux';
import ParticlesSetting from './particles.settings';
import {
  selectAnimationStart,
  selectPreset,
  setAnimationStart,
} from '../Settings/StageController.slice';

const ParticlesBg = () => {
  const selectParticles = useSelector(selectPreset);
  const selectAnimation = useSelector(selectAnimationStart);
  const dispatch = useDispatch();
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  if (selectParticles.particles !== 'disabled') {
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={ParticlesSetting[selectParticles.theme][selectParticles.particles]}
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
