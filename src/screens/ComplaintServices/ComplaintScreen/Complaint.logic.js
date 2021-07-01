//package import here
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import { useIsFocused } from '@react-navigation/native';

//local import here
import ComplaintNavigator from './Complaint.navigator';
import { getListComplaint } from '../../../redux/redux-actions';

const ComplaintLogic = () => {
  //package value here
  const { navigator } = ComplaintLogic.dependencies;
  const { goBack, goToNotifications, navigation } = navigator();
  const controller = useMemo(() => new AbortController(), []);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  //state value here
  const abort = controller.signal;
  const { complaintState } = useSelector(
    (state) => ({
      complaintState: state.complaint,
    }),
    shallowEqual
  );

  //variable value here
  useEffect(() => {
    return () => controller.abort();
  }, [controller]);

  useEffect(() => {
    dispatch(getListComplaint(abort));
  }, [isFocused, abort, dispatch]);

  //place your function in here

  return {
    //data props here
    data: {
      complaintState,
    },
    //actions props here
    actions: {
      goBack,
      goToNotifications,
      navigation,
    },
  };
};

export default ComplaintLogic;

ComplaintLogic.dependencies = {
  navigator: ComplaintNavigator,
};
