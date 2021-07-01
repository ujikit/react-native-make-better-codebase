//package import here
import { useEffect, useState, useCallback, useMemo } from 'react';
import moment from 'moment';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import { useDispatch, useSelector } from 'react-redux';
//local import here
import DetailMaintenanceNavigator from './DetailMaintenance.navigator';
import { updateMaintenanceStatus } from '../../../redux/redux-actions';

const DetailMaintenanceLogic = () => {
  //package value here
  const { navigator } = DetailMaintenanceLogic.dependencies;
  const {
    goBack,
    goToSendSolutionScreen: goToSendSolutionNavigator,
  } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);
  const abort = controller.signal;
  const { maintenanceDetail } = useSelector((state) => state.maintenance);
  const currentStep =
    maintenanceDetail.step[
      maintenanceDetail.step.filter((item) => item.time).length - 1
    ].status;
  let time = moment().format('DD MMM HH:MM');

  //state value here
  const [progressUpload, setProgressUpload] = useState('0%');

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const goToSendSolutionScreen = () => {
    if (currentStep == 'waiting') {
      return dispatch(
        updateMaintenanceStatus(
          abort,
          (progress) => {
            setProgressUpload(
              `${Math.floor((progress.loaded / progress.total) * 100)}%`
            );
          },
          goBack,
          {
            ...maintenanceDetail,
          }
        )
      );
    }
    goToSendSolutionNavigator();
  };

  return {
    //data props here
    data: {
      progressUpload,
    },
    //actions props here
    actions: {
      goBack,
      goToSendSolutionScreen,
    },
  };
};

export default DetailMaintenanceLogic;

DetailMaintenanceLogic.dependencies = {
  navigator: DetailMaintenanceNavigator,
};
