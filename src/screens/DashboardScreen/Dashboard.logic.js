//package import here
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Platform } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import VersionCheck from 'react-native-version-check';

//local import here
import DashboardNavigator from './Dashboard.navigator';
import {
  detailBroadcast,
  getBroadcast,
  getBanner,
  getProfileUser,
  getVersionApp,
} from '../../redux/redux-actions';

const DashboardLogic = () => {
  //package value here
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);
  const abort = controller.signal;
  const { navigator } = DashboardLogic.dependencies;
  const {
    goBack,
    goToDetailFeedScreen: goToDetailFeedScreenNavigator,
    goToBroadcastScreen,
    goToNotifications,
    navigation,
  } = navigator();

  //state value here
  const { accountState, versionState, dashboardState } = useSelector(
    (state) => ({
      accountState: state.account,
      dashboardState: state.dashboard,
      versionState: state.version,
    }),
    shallowEqual
  );
  const [modalUpdate, setModalUpdate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  //variable value here
  useEffect(() => {
    fetchVersionApp();
    dispatch(getBanner(abort));
  }, [abort, dispatch, fetchVersionApp]);

  useEffect(() => {
    if (accountState.profile.data.name) {
      fetchAllBroadcast();
    }
    if (!accountState.profile.data.name) {
      dispatch(getProfileUser(abort));
    }
  }, [abort, accountState.profile.data, dispatch, fetchAllBroadcast]);

  const _handleRefresh = useCallback(() => {
    dispatch(getBanner(abort));
    fetchAllBroadcast();
    fetchVersionApp();
  }, [abort, dispatch, fetchAllBroadcast, fetchVersionApp]);

  useEffect(() => {
    if (dashboardState.bannerList.data[0].image) {
      setIsVisible(true);
    }
  }, [dashboardState.bannerList.data]);

  useEffect(() => {
    if (versionState.versionApp.code === 200) {
      if (
        VersionCheck.getCurrentVersion() !==
          versionState.versionApp.data.version &&
        versionState.versionApp.data.forceUpdate === true
      ) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'ForceUpdate' }],
        });
      } else if (
        VersionCheck.getCurrentVersion() !==
        versionState.versionApp.data.version
      ) {
        setModalUpdate(true);
      }
    }
  }, [
    navigation,
    versionState.versionApp.code,
    versionState.versionApp.data.forceUpdate,
    versionState.versionApp.data.version,
  ]);

  //place your function in here
  const fetchAllBroadcast = useCallback(() => {
    dispatch(getBroadcast(abort, 1, 10, 'broadcast', 'engineer'));
  }, [abort, dispatch]);

  const fetchVersionApp = useCallback(() => {
    //function here
    let os = '';
    const type = 'engineer';
    if (Platform.OS === 'ios') {
      os = 'ios';
    } else {
      os = 'android';
    }
    dispatch(getVersionApp(abort, type, os));
  }, [abort, dispatch]);

  const _goToDetailFeedScreen = (payload) => {
    dispatch(detailBroadcast(payload));
    goToDetailFeedScreenNavigator();
  };

  return {
    //data props here
    data: {
      modalUpdate,
      isVisible,
    },
    //actions props here
    actions: {
      goBack,
      _goToDetailFeedScreen,
      goToBroadcastScreen,
      goToNotifications,
      navigation,
      setModalUpdate,
      setIsVisible,
      _handleRefresh,
    },
  };
};

export default DashboardLogic;

DashboardLogic.dependencies = {
  navigator: DashboardNavigator,
};
