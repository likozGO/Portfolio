import React, { useState } from 'react';
import { withRouter, Route } from 'react-router-dom';
import './projects.scss';
import Div from '../components/Div';
import DescriptionPage from '../components/projects-page-description';
import ListingPage from '../components/projects-page-listing';

const AbsoluteDiv = ({ children, style }) => (
  <Div
    style={{
      ...style,
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      position: 'absolute',
    }}
  >
    {children}
  </Div>
);

const Projects = ({ history: { push } }) => {
  const [selectedItemDetails, setSelectedItemDetails] = useState({});
  const [containerPosition, setContainerPosition] = useState({});
  const [imagePosition, setImagePosition] = useState({});

  const onItemSelected = (event, item) => {
    const containerTarget = event.currentTarget;
    const imageTarget = event.currentTarget.firstElementChild;

    const containerDimensions = containerTarget.getBoundingClientRect();
    const imageDimensions = imageTarget.getBoundingClientRect();

    // DOMRect object not iterable, so can't destructure
    setContainerPosition({
      width: containerDimensions.width,
      height: containerDimensions.height,
      top: containerDimensions.top,
      left: containerDimensions.left,
    });

    setImagePosition({
      width: imageDimensions.width,
      height: imageDimensions.height,
      top: imageDimensions.top,
      left: imageDimensions.left,
    });
    setSelectedItemDetails(item);
    push('projects-123');
  };
  return (
    <div style={{
      position: 'absolute', top: 0, right: 0, left: 0, bottom: 0,
    }}
    >
      <Div
        fillParent
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        <Route exact path="/projects/">
          <AbsoluteDiv style={{ zIndex: 99999 }}>
            <ListingPage onItemSelected={onItemSelected} />
          </AbsoluteDiv>
        </Route>

        <Route exact path="/projects-123/">
          <AbsoluteDiv style={{ zIndex: 99999 }}>
            <DescriptionPage
              itemPosition={{
                containerPosition,
                imagePosition,
              }}
              selectedItemDetails={selectedItemDetails}
            />
          </AbsoluteDiv>
        </Route>

      </Div>
    </div>
  );
};

export default withRouter(Projects);
