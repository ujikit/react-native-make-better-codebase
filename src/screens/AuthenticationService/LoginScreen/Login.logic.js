//package import
import { useCallback, useState, useMemo, useEffect } from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import AsyncStorage from '@react-native-community/async-storage';

//local import
import LoginNavigator from './Login.navigator';
import { postLogin, showAlert } from '../../../redux/redux-actions';
import { STORAGE_KEY } from '../../../constants';
import { formatEmail } from './../../../utils';

const LoginLogic = () => {
  //package value
  const { navigator } = LoginLogic.dependencies;
  const { goBack, goToForgotPassword } = navigator();
  const controller = useMemo(() => new AbortController(), []);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const accountState = useSelector((state) => state.account);

  //place your function in here
  const [email, setEmail] = useState('fauzi.aldrich@gmail.com');
  const [password, setPassword] = useState('n8h0l8');
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isErrorUsername, setIsErrorUsername] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState('');

  //variable value
  const abort = controller.signal;

  useEffect(() => {
    setIsErrorPassword(false);
    setIsErrorUsername(false);
    return () => controller.abort();
  }, [controller]);

  useEffect(() => {
    //function here
    if (accountState.login.code === 404 || accountState.login.code === 409) {
      setIsErrorUsername(true);
      setErrorMessageEmail('Email salah');
      setIsErrorPassword(true);
    } else if (accountState.login.code === 400) {
      setIsErrorUsername(false);
      setIsErrorPassword(true);
    } else if (accountState.login.code === 402) {
    }
  }, [accountState.login]);

  const onBackPressed = () => {
    goBack();
  };

  const _loginService = useCallback(async () => {
    setIsErrorPassword(false);
    setIsErrorUsername(false);

    let fcmToken = await AsyncStorage.getItem(STORAGE_KEY.TOKEN_FIREBASE);
    if (!fcmToken) {
      fcmToken = 'fcmToken';
    }
    const body = { email: email, password: password, deviceId: fcmToken };

    if (email.includes('@')) {
      if (!formatEmail(email)) {
        setIsErrorUsername(true);
        setIsErrorPassword(true);
        setErrorMessageEmail('Format email salah');
      } else {
        if (!accountState.login.isLoading) {
          dispatch(postLogin(abort, body, true, navigation));
        }
      }
    } else {
      if (!accountState.login.isLoading) {
        dispatch(postLogin(abort, body, true, navigation));
      }
    }
  }, [
    abort,
    accountState.login.isLoading,
    dispatch,
    email,
    navigation,
    password,
  ]);

  const _supportTeam = () => {
    Linking.openURL('whatsapp://send?phone=+628111087227');
  };

  const closeAlert = () => {
    dispatch(
      showAlert({
        types: '',
        visible: false,
        title: '',
      })
    );
  };

  return {
    data: {
      accountState,
      email,
      errorMessageEmail,
      isErrorUsername,
      isErrorPassword,
      password,
    },
    actions: {
      _loginService,
      _supportTeam,
      goToForgotPassword,
      onBackPressed,
      setEmail,
      setPassword,
      closeAlert,
    },
  };
};

export default LoginLogic;

LoginLogic.dependencies = {
  navigator: LoginNavigator,
};
