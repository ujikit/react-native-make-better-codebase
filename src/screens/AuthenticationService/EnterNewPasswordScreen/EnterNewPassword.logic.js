import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import EnterNewPasswordNavigator from './EnterNewPassword.navigator';
import { STORAGE_KEY } from '../../../constants';
import I18n from '../../../i18n';
import {
  POST_CHANGE_PASSWORD_ERROR,
  postChangePassword,
} from '../../../redux/redux-actions';

const EnterNewPasswordLogic = () => {
  //package value here
  const dispatch = useDispatch();
  const { navigator } = EnterNewPasswordLogic.dependencies;
  const { navigation, goBack } = navigator();
  const controller = useMemo(() => new AbortController(), []);
  const abort = controller.signal;

  //state value here
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [modalWarning, setModalWarning] = useState(false);

  //variable value here
  const accountState = useSelector((state) => state.account);

  useEffect(() => {
    return () => controller.abort();
  }, [controller]);

  useEffect(() => {
    navigation.addListener('beforeRemove', _handleLeave);
    return () => {
      removeListenerLeave();
    };
  }, []);

  //place your function in here
  const onChangeTextPassword = (type, text) => {
    if (type === 'password') {
      setPassword(text);
    } else if (type === 'rePassword') {
      setRePassword(text);
    }
    let data = {
      success: true,
      message: '',
      code: null,
    };
    return dispatch({ type: POST_CHANGE_PASSWORD_ERROR, payload: data });
  };

  const postNewPassword = useCallback(async () => {
    if (!password.match(/^.{6,}$/)) {
      let data = {
        success: false,
        message: I18n.t('useAtLeast6Characters'),
        code: null,
      };
      return dispatch({ type: POST_CHANGE_PASSWORD_ERROR, payload: data });
    } else if (password !== rePassword) {
      let data = {
        success: false,
        message: I18n.t('passwordNotMatch'),
        code: null,
      };
      return dispatch({ type: POST_CHANGE_PASSWORD_ERROR, payload: data });
    }

    const body = { password: password };
    if (!accountState.changePassword.isLoading) {
      const nextAction = {
        removeListenerLeave,
        stackResetToLogin,
      };
      dispatch(postChangePassword(abort, body, nextAction));
    }
  }, [
    navigation,
    abort,
    accountState.changePassword.isLoading,
    password,
    rePassword,
    dispatch,
  ]);

  const removeListenerLeave = () => {
    navigation.removeListener('beforeRemove', _handleLeave);
  };

  const pressSuccess = () => {
    setTimeout(() => {
      navigation.replace('Home');
    });
  };

  const toLogin = async () => {
    removeListenerLeave();
    stackResetToLogin();
    setModalWarning(false);
    await AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
  };

  const stackResetToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  _handleLeave = (e) => {
    e.preventDefault();
    setModalWarning(true);
  };

  return {
    //data props here
    data: {
      password,
      rePassword,
      modalWarning,
      accountState,
    },
    //actions props here
    actions: {
      goBack,
      onChangeTextPassword,
      postNewPassword,
      toLogin,
      setModalWarning,
    },
  };
};

export default EnterNewPasswordLogic;

EnterNewPasswordLogic.dependencies = {
  navigator: EnterNewPasswordNavigator,
};
