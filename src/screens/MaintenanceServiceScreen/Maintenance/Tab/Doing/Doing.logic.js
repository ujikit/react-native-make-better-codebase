//package import here
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import DoingNavigator from './Doing.navigator';
import { IMAGES } from '../../../../../configs';
import {
  getMaintenanceData,
  getLoadMoreAllMaintenance,
} from '../../../../../redux/redux-actions';

const DoingLogic = () => {
  //package value here
  const { navigator } = DoingLogic.dependencies;
  const { goBack } = navigator();
  const timeout = useRef(null);
  const controller = useMemo(() => new AbortController(), []);
  const abort = controller.signal;
  const dispatch = useDispatch();
  const { maintenanceData } = useSelector((state) => state.maintenance);

  //state value here

  //variable value here

  //place your function in here

  useEffect(() => {
    getMaintenanceDatas();
  }, []);

  const getMaintenanceDatas = () => {
    let params = {
      page: 1,
      limit: 10,
      search: 'Waiting',
    };
    dispatch(getMaintenanceData(abort, params));
  };

  const handleLoadMoreMaintenance = () => {
    clearInterval(timeout.current);

    if (
      maintenanceData.waiting.meta.page !==
      maintenanceData.waiting.meta.totalPage
    ) {
      let params = {
        page: maintenanceData.waiting.meta.page + 1,
        limit: 10,
        search: 'Waiting',
      };
      timeout.current = setTimeout(() => {
        dispatch(getLoadMoreAllMaintenance(abort, params));
      }, 2000);
    }
  };

  return {
    //data props here
    data: {},
    //actions props here
    actions: {
      goBack,
      getMaintenanceDatas,
      handleLoadMoreMaintenance,
    },
  };
};

export default DoingLogic;

DoingLogic.dependencies = {
  navigator: DoingNavigator,
};
