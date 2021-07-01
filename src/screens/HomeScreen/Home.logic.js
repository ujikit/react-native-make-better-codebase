//package import here
import { useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import HomeNavigator from './Home.navigator';
import {
  getListUnit,
  getNotificationList,
  getProfileUser,
} from '../../redux/redux-actions';

const HomeLogic = () => {
  //package value here
  const { navigator } = HomeLogic.dependencies;
  const { navigation, goBack } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  const persistState = useSelector((state) => state.persist);

  //variable value here
  const abort = controller.signal;

  useEffect(() => {
    //function here
    _getData();
    return () => controller.abort();
  }, [_getData, controller, persistState.language]);

  //place your function in here
  const _getData = useCallback(async () => {
    dispatch(getListUnit(abort));
    dispatch(getProfileUser(abort));
    dispatch(getNotificationList(abort, 1, true));
  }, [abort, dispatch]);

  return {
    //data props here
    data: {
      persistState,
    },
    //actions props here
    actions: {
      navigation,
      goBack,
    },
  };
};

export default HomeLogic;

HomeLogic.dependencies = {
  navigator: HomeNavigator,
};
