//package import here
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

//local import here
import HandoverNavigator from './Handover.navigator';
import { resetSendHandover } from './../../../redux/redux-actions';

const HandoverLogic = () => {
  //package value here
  const { navigator } = HandoverLogic.dependencies;
  const dispatch = useDispatch();
  const { goBack, goToNotifications, navigation } = navigator();

  //state value here
  const [handoverSuccess, setHandoverSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const { handoverState } = useSelector(
    (state) => ({
      handoverState: state.handover,
    }),
    shallowEqual
  );

  //variable value here

  useEffect(() => {
    if (
      handoverState.addHandover.code === 200 ||
      handoverState.updateHandover.code === 200
    ) {
      setHandoverSuccess(true);
      handoverState.addHandover.code === 200 &&
        setMessage('Data berhasil dikirim!');
      handoverState.updateHandover.code === 200 &&
        setMessage('Data berhasil diubah!');
      dispatch(resetSendHandover());
    }
  }, [
    dispatch,
    handoverState.addHandover.code,
    handoverState.updateHandover.code,
  ]);

  //place your function in here

  return {
    //data props here
    data: {
      handoverSuccess,
      message,
    },
    //actions props here
    actions: {
      goBack,
      goToNotifications,
      navigation,
      setHandoverSuccess,
    },
  };
};

export default HandoverLogic;

HandoverLogic.dependencies = {
  navigator: HandoverNavigator,
};
