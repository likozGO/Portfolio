import React from 'react';
import { animated, useSpring } from 'react-spring';

import './projects-transition-layer.scss';

function ProjectsTransitionLayer({
  itemPosition,
  imageToPosition,
  selectedItemDetails,
  onAnimationEnd,
}) {
  const imageAnimation = useSpring({
    from: {
      height: itemPosition.imagePosition.height,
      width: itemPosition.imagePosition.width,
      transform: `translate(${itemPosition.imagePosition.left}px, ${itemPosition.imagePosition.top}px)`,
    },
    to: {
      height: imageToPosition.height,
      width: imageToPosition.width,
      transform: `translate(${imageToPosition.left}px, ${imageToPosition.top}px)`,
    },
  });

  const containerAnimation = useSpring({
    from: {
      height: `calc(0vh + ${itemPosition.containerPosition.height}px)`,
      width: `calc(0vw + ${itemPosition.containerPosition.width}px)`,
      transform: `translate(${itemPosition.containerPosition.left}px, ${itemPosition.containerPosition.top}px)`,
      borderRadius: '50%',
    },
    to: {
      height: 'calc(100vh + 0px)',
      width: 'calc(100vw + 0px)',
      transform: 'translate(0px, 0px)',
      borderRadius: '0%',
    },
    onRest: onAnimationEnd,
  });

  return (
    <>
      <animated.div
        style={{
          ...containerAnimation,
          zIndex: -1,
        }}
        className="projects-absolute-layer"
      />

      <animated.img
        src={selectedItemDetails.image}
        style={{
          ...imageAnimation,
          zIndex: 0,
        }}
        className="projects-absolute-layer"
      />
    </>
  );
}

export default ProjectsTransitionLayer;
