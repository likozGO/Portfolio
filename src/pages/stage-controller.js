import React, { useEffect } from 'react';
import './stage-controller.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StageHello from '../components/stage-hello';
import StageSettings from '../components/stage-settings';
import {
  setHello,
  selectHello,
} from '../ducks/stages/stage-controller-slice';
import Navbar from '../components/navbar';

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
      <Navbar />
    </section>
  );
};

export default StageController;
