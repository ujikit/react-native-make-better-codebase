//package import here
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

import {
  getAllUnitStatus,
  selectFloorHandling,
  selectTowerHandling,
} from '../../../redux/redux-actions';

//local import here
import WaterNavigator from './Water.navigator';

const WaterLogic = () => {
  //package value here
  const { navigator } = WaterLogic.dependencies;
  const { goBack, goToNotifications, navigation } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  const [modalTowerVisible, setModalTowerVisible] = useState(false);
  const [modalFloorVisible, setModalFloorVisible] = useState(false);
  const waterState = useSelector((state) => state.water);

  //variable value here
  const abort = controller.signal;

  useEffect(() => {
    //function here
    return () => controller.abort();
  }, [controller]);

  //place your function in here
  const _selectTowerHandle = useCallback(
    (data) => {
      dispatch(selectTowerHandling(data));
      setModalTowerVisible(!modalTowerVisible);
    },
    [dispatch, modalTowerVisible]
  );

  const _selectFloorHandle = useCallback(
    (data) => {
      dispatch(selectFloorHandling(data));
      setModalFloorVisible(!modalFloorVisible);
      dispatch(
        getAllUnitStatus(abort, waterState.selectedTower.towerId, data.floor)
      );
    },
    [abort, dispatch, modalFloorVisible, waterState.selectedTower.towerId]
  );

  return {
    //data props here
    data: {
      modalTowerVisible,
      modalFloorVisible,
      waterState,
    },
    //actions props here
    actions: {
      goBack,
      goToNotifications,
      navigation,
      setModalTowerVisible,
      setModalFloorVisible,
      _selectTowerHandle,
      _selectFloorHandle,
    },
  };
};

export default WaterLogic;

WaterLogic.dependencies = {
  navigator: WaterNavigator,
};
