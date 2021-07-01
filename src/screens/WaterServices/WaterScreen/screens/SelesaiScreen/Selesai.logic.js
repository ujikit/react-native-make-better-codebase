//package import here
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import SelesaiNavigator from './Selesai.navigator';
import {
  getAllUnitStatus,
  waterModalHandling,
} from '../../../../../redux/redux-actions';

const SelesaiLogic = () => {
  //package value here
  const { navigator } = SelesaiLogic.dependencies;
  const { goBack, goToWaterForm, goToWaterCamera } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  const [modalUnavailable, setModalUnavailable] = useState(false);
  const [modalDone, setModalDone] = useState(false);
  const [modalUnit, setModalUnit] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const waterState = useSelector((state) => state.water);

  //variable value here
  const abort = controller.signal;

  useEffect(() => {
    //function here
    return () => controller.abort();
  }, [controller]);

  //place your function in here
  const _handleSendWaterReport = useCallback(() => {
    dispatch(
      waterModalHandling({ isVisible: !waterState.modalSuccess, unit: '' })
    );
  }, [dispatch, waterState.modalSuccess]);

  const _getAllUnitStatus = useCallback(() => {
    dispatch(
      getAllUnitStatus(
        abort,
        waterState.selectedTower.towerId,
        waterState.selectedFloor.floor
      )
    );
  }, [
    abort,
    dispatch,
    waterState.selectedFloor.floor,
    waterState.selectedTower.towerId,
  ]);

  return {
    //data props here
    data: {
      modalUnavailable,
      modalUnit,
      modalDone,
      waterState,
      searchValue,
    },
    //actions props here
    actions: {
      goBack,
      goToWaterForm,
      goToWaterCamera,
      setModalUnavailable,
      setModalUnit,
      setModalDone,
      setSearchValue,
      _handleSendWaterReport,
      _getAllUnitStatus,
    },
  };
};

export default SelesaiLogic;

SelesaiLogic.dependencies = {
  navigator: SelesaiNavigator,
};
