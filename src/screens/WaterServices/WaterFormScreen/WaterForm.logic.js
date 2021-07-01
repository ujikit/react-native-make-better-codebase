//package import here
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import WaterFormNavigator from './WaterForm.navigator';
import {
  postWaterReport,
  updateWaterReport,
} from '../../../redux/redux-actions';
import { formatNumber } from '../../../utils';

const WaterFormLogic = () => {
  //package value here
  const { navigator } = WaterFormLogic.dependencies;
  const {
    goBack,
    goToHistory,
    goToWaterCamera,
    goToWaterervice,
    navigation,
  } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  const [endMeter, setEndMeter] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [progressUpload, setProgressUpload] = useState('0%');
  const waterState = useSelector((state) => state.water);

  //variable value here
  const abort = controller.signal;

  useEffect(() => {
    //function here
    return () => controller.abort();
  }, [controller]);

  useEffect(() => {
    //function here
    if (waterState.addWaterReport.code === 400) {
      setIsError(true);
      setErrorMessage(waterState.addWaterReport.message);
    }
  }, [waterState.addWaterReport.code, waterState.addWaterReport.message]);

  //place your function in here
  const _handleSendWaterReport = useCallback(
    (dataItem, capture) => {
      setProgressUpload('0%');
      const body = {
        towerId: dataItem.towerId,
        unitId: dataItem.unitId,
        endMeter: endMeter,
        image: ';base64,' + capture.base64,
      };
      const bodyUpdate = {
        reportId: dataItem.dataReport.reportId,
        endMeter: endMeter,
        image: ';base64,' + capture.base64,
      };
      if (formatNumber(endMeter) && !waterState.addWaterReport.isLoading) {
        if (dataItem.status === 'Undone') {
          dispatch(
            postWaterReport(
              abort,
              body,
              dataItem.unitId,
              navigation,
              (progress) => {
                setProgressUpload(
                  `${Math.floor((progress.loaded / progress.total) * 100)}%`
                );
              }
            )
          );
        } else {
          dispatch(
            updateWaterReport(
              abort,
              bodyUpdate,
              dataItem.unitId,
              navigation,
              (progress) => {
                setProgressUpload(
                  `${Math.floor((progress.loaded / progress.total) * 100)}%`
                );
              }
            )
          );
        }
      } else {
        setIsError(true);
        setErrorMessage('Format Input Salah');
      }
    },
    [abort, dispatch, endMeter, navigation, waterState.addWaterReport.isLoading]
  );

  return {
    //data props here
    data: {
      endMeter,
      waterState,
      isError,
      errorMessage,
      progressUpload,
    },
    //actions props here
    actions: {
      goBack,
      goToHistory,
      goToWaterCamera,
      goToWaterervice,
      setEndMeter,
      setIsError,
      _handleSendWaterReport,
    },
  };
};

export default WaterFormLogic;

WaterFormLogic.dependencies = {
  navigator: WaterFormNavigator,
};
