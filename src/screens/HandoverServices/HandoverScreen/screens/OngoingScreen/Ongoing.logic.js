//package import here
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import { useIsFocused } from '@react-navigation/native';

//local import here
import OngoingNavigator from './Ongoing.navigator';
import {
  getListHandover,
  selectedHandover,
} from './../../../../../redux/redux-actions';

const OngoingLogic = () => {
  //package value here
  const { navigator } = OngoingLogic.dependencies;
  const { goBack, goToHandoverDetail } = navigator();
  const controller = useMemo(() => new AbortController(), []);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  //state value here
  const abort = controller.signal;
  const { handoverState } = useSelector(
    (state) => ({
      handoverState: state.handover,
    }),
    shallowEqual
  );

  let { meta } = handoverState.listHandover;

  //variable value here

  useEffect(() => {
    return () => controller.abort();
  }, [controller]);

  useEffect(() => {
    _fetchHandoverData();
  }, [_fetchHandoverData]);

  useEffect(() => {
    if (
      handoverState.addHandover.code === 200 ||
      handoverState.updateHandover.code === 200
    ) {
      _fetchHandoverData();
    }
  }, [
    _fetchHandoverData,
    handoverState.addHandover.code,
    handoverState.updateHandover.code,
  ]);

  //place your function in here

  const _fetchHandoverData = useCallback(() => {
    dispatch(getListHandover(abort, 'Undone', 1, 20));
  }, [abort, dispatch]);

  const _fetchLoadmoreHandover = () => {
    if (meta.page !== meta.totalPage) {
      dispatch(getListHandover(abort, 'Undone', meta.page + 1, 20));
    }
  };

  const _toHandoverDetail = (item) => {
    dispatch(selectedHandover(item));
    goToHandoverDetail();
  };

  return {
    //data props here
    data: {
      handoverState,
      handoverMeta: handoverState.listHandover.meta,
    },
    //actions props here
    actions: {
      goBack,
      _fetchHandoverData,
      _fetchLoadmoreHandover,
      _toHandoverDetail,
    },
  };
};

export default OngoingLogic;

OngoingLogic.dependencies = {
  navigator: OngoingNavigator,
};
