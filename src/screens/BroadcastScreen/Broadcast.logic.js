//package import here
import { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import BroadcastNavigator from './Broadcast.navigator';
import { getBroadcast, getLoadMoreBroadcast } from '../../redux/redux-actions';

const BroadcastLogic = () => {
  //package value here
  const { navigator } = BroadcastLogic.dependencies;
  const { goBack } = navigator();
  const controller = useMemo(() => new AbortController(), []);
  const abort = controller.signal;
  const dispatch = useDispatch();

  //state value here

  //variable value here
  const broadcastState = useSelector((state) => state.feed);
  let { meta } = broadcastState.broadcastList;

  useEffect(() => {
    //function here
    return () => controller.abort();
  }, [controller]);

  useEffect(() => {
    fetchAllBroadcast();
  }, [fetchAllBroadcast]);

  //place your function in here
  const fetchAllBroadcast = useCallback(() => {
    dispatch(getBroadcast(abort, 1, 10, 'broadcast', 'engineer'));
  }, [abort, dispatch]);

  const fetchLoadMoreAllBroadcast = () => {
    if (meta.page !== meta.totalPage) {
      dispatch(
        getLoadMoreBroadcast(abort, meta.page + 1, 10, 'broadcast', 'engineer')
      );
    }
  };

  return {
    //data props here
    data: {},
    //actions props here
    actions: {
      goBack,
      fetchAllBroadcast,
      fetchLoadMoreAllBroadcast,
    },
  };
};

export default BroadcastLogic;

BroadcastLogic.dependencies = {
  navigator: BroadcastNavigator,
};
