import { useState, useEffect, useMemo, useCallback } from 'react';
import { BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import ForgotPasswordNavigator from './ForgotPassword.navigator';
import {
  forgotPassword,
  RESET_FORGOT_STATE,
} from '../../../redux/redux-actions';
import { formatEmail } from './../../../utils';

const ForgotPasswordLogic = () => {
  //package value here
  const dispatch = useDispatch();
  const { navigator } = ForgotPasswordLogic.dependencies;
  const { navigation, goBack } = navigator();
  const controller = useMemo(() => new AbortController(), []);
  const accountState = useSelector((state) => state.account);

  //state value here
  const [email, setEmail] = useState('fauzi.aldrich@gmail.com');
  const [errorForgot, setErrorForgot] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //variable value here
  const abort = controller.signal;

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', removeAlert);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', removeAlert);
  }, []);

  const removeAlert = () => {
    setIsError(false);
  };

  useEffect(() => {
    return () => controller.abort();
  }, [controller]);

  useEffect(() => {
    setIsError(false);
    setIsLoading(accountState.forgotPasswordReducer.isLoading);
  }, [accountState.forgotPasswordReducer.isLoading, isLoading]);

  useEffect(() => {
    if (accountState.forgotPasswordReducer.code >= 400) {
      setErrorForgot(accountState.forgotPasswordReducer.message);
      setIsError(true);
    }
  }, [accountState.forgotPasswordReducer, errorForgot, isError]);

  // place your function in here
  const _postForgotPassword = useCallback(async () => {
    const body = { email };
    if (!formatEmail(email)) {
      setErrorForgot('Format email salah');
      setIsError(true);
    } else {
      dispatch(forgotPassword(abort, body, navigation));
    }
  }, [abort, dispatch, email, navigation]);

  const backAction = () => {
    setIsError(false);
    goBack();
  };

  return {
    //data props here
    data: {
      email,
      accountState,
      isLoading,
      errorForgot,
      isError,
    },
    //actions props here
    actions: {
      backAction,
      setEmail,
      goBack,
      _postForgotPassword,
    },
  };
};

export default ForgotPasswordLogic;

ForgotPasswordLogic.dependencies = {
  navigator: ForgotPasswordNavigator,
};
