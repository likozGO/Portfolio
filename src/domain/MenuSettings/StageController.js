import React, { useEffect } from 'react';
import './StageController.scss';
import { useDispatch } from 'react-redux';
import StageHello from './StageHello/StageHello';
import StageSettings from './StageSettings/StageSettings';
import {
  setHello,
} from './sliceStageController';

const StageController = () => {
  const dispatch = useDispatch();

  // При первом рендере запускаем хелло
  useEffect(() => {
    dispatch(setHello(true));
  }, []);

  return (
    <section className="stage-controller">
      <StageHello />
      <StageSettings />
    </section>
  );
};

export default StageController;
