//package import here
import { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import NotificationsNavigator from './Notifications.navigator';
import { getNotificationList } from '../../redux/redux-actions';

const NotificationsLogic = () => {
  //package value here
  const { navigator } = NotificationsLogic.dependencies;
  const { goBack } = navigator();
  const controller = useMemo(() => new AbortController(), []);
  const abort = controller.signal;
  const dispatch = useDispatch();

  //state value here

  //variable value here
  const { notificationState } = useSelector((state) => ({
    notificationState: state.notification,
  }));
  let { meta } = notificationState.notificationList;

  useEffect(() => {
    //function here
    return () => controller.abort();
  }, [controller]);

  //place your function in here
  const fetchAllNotification = useCallback(() => {
    dispatch(getNotificationList(abort, 1, true));
  }, [abort, dispatch]);

  const fetchLoadMoreAllNotification = () => {
    if (meta.page !== meta.totalPage) {
      dispatch(getNotificationList(abort, meta.page + 1));
    }
  };

  return {
    //data props here
    data: {
      notificationState,
    },
    //actions props here
    actions: {
      goBack,
      fetchAllNotification,
      fetchLoadMoreAllNotification,
    },
  };
};

export default NotificationsLogic;

NotificationsLogic.dependencies = {
  navigator: NotificationsNavigator,
};
