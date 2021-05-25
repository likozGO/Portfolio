import React, { useEffect } from 'react';
import './StageController.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StageHello from './StageHello/StageHello';
import StageSettings from './StageSettings/StageSettings';
import {
  setHello,
  selectHello,
} from './StageController.slice';

const StageController = () => {
  const dispatch = useDispatch();
  const helloSelect = useSelector(selectHello);
  const history = useHistory();

  // При первом рендере запускаем хелло
  useEffect(() => {
    if (helloSelect !== false && !history.location.state.fromHome) {
      dispatch(setHello(true));
    }
  }, []);

  return (
    <section className="stage-controller">
      <StageHello />
      <StageSettings />
    </section>
  );
};

export default StageController;
