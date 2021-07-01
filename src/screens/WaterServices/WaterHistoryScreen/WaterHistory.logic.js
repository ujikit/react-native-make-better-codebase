//package import here
import { useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import WaterHistoryNavigator from './WaterHistory.navigator';
import { getWaterReportHistory } from '../../../redux/redux-actions';

const WaterHistoryLogic = (dataItem) => {
  //package value here
  const { navigator } = WaterHistoryLogic.dependencies;
  const { goBack, goToWaterForm } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  const waterState = useSelector((state) => state.water);

  //variable value here
  const abort = controller.signal;

  useEffect(() => {
    //function here
    _getDataHistory();
    return () => controller.abort();
  }, [_getDataHistory, controller]);

  //place your function in here
  const _getDataHistory = useCallback(() => {
    dispatch(getWaterReportHistory(abort, dataItem.unitId, dataItem.towerId));
  }, [abort, dataItem.towerId, dataItem.unitId, dispatch]);

  return {
    //data props here
    data: {
      waterState,
    },
    //actions props here
    actions: {
      goBack,
      goToWaterForm,
      _getDataHistory,
    },
  };
};

export default WaterHistoryLogic;

WaterHistoryLogic.dependencies = {
  navigator: WaterHistoryNavigator,
};
