import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { BackHandler } from 'react-native';

//local import here
import VerificationCodeNavigator from './VerificationCode.navigator';
import { STORAGE_KEY } from '../../../constants';

const VerificationCodeLogic = () => {
  //package value here
  const { navigator } = VerificationCodeLogic.dependencies;
  const { navigation, goBack } = navigator();

  //state value here
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', removeAlert);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', removeAlert);
  }, []);

  const removeAlert = async () => {
    AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
  };

  //variable value here

  //place your function in here
  const backAction = async () => {
    removeAlert();
    goBack();
  };

  return {
    //data props here
    data: {},
    //actions props here
    actions: {
      backAction,
      goBack,
    },
  };
};

export default VerificationCodeLogic;

VerificationCodeLogic.dependencies = {
  navigator: VerificationCodeNavigator,
};
