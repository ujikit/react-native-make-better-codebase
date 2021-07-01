import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import AsyncStorage from '@react-native-community/async-storage';

//local import here
import ResendCodeNavigator from './ResendCode.navigator';
import { forgotPassword } from '../../../../../redux/redux-actions';
import { STORAGE_KEY } from '../../../../../constants';

const countdownStartInSecond = 90;
const ResendCodeLogic = () => {
  //package value here
  const dispatch = useDispatch();
  const { navigator } = ResendCodeLogic.dependencies;
  const { navigation } = navigator();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  let [is_disabled_resend_otp, setIsDisabledResendOTP] = useState(true);
  let [countdown_otp, setCountdownOTP] = useState(countdownStartInSecond);

  //variable value here
  const abort = controller.signal;

  //place your function in here
  useEffect(() => {
    return () => controller.abort();
  }, [controller]);

  useEffect(() => {
    let interval_countdown;
    if (is_disabled_resend_otp) {
      interval_countdown = setInterval(() => {
        setCountdownOTP((countdown_otp) => {
          if (countdown_otp == 0) {
            setIsDisabledResendOTP(false);
            setCountdownOTP(countdownStartInSecond);
            return clearInterval(interval_countdown);
          }
          return countdown_otp - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval_countdown);
  }, [is_disabled_resend_otp]);

  _handleResendOTP = async (email) => {
    AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
    let body = {
      email,
    };
    setIsDisabledResendOTP(true);
    dispatch(forgotPassword(abort, body, navigation));
  };

  return {
    //data props here
    data: {
      is_disabled_resend_otp,
      countdown_otp,
    },
    //actions props here
    actions: {
      setIsDisabledResendOTP,
      setCountdownOTP,
      _handleResendOTP,
    },
  };
};

export default ResendCodeLogic;

ResendCodeLogic.dependencies = {
  navigator: ResendCodeNavigator,
};
