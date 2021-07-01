//package import here
import { useEffect, useCallback } from 'react';
import { Linking } from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

//local import here
import AuthFirstNavigator from './AuthFirst.navigator';
import { STORAGE_KEY } from '../../constants';
import { GET_PROFILE_SUCCESS } from '../../redux/redux-actions';

const AuthFirstLogic = () => {
  //package value here
  const { navigator } = AuthFirstLogic.dependencies;
  const { goBack } = navigator();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //state value here
  const { accountState, persistState, todoState } = useSelector(
    (state) => ({
      accountState: state.account,
      persistState: state.persist,
      todoState: state.todo,
    }),
    shallowEqual
  );

  //variable value here

  useEffect(() => {
    _validateLogin();
    const subscription = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl !== undefined && initialUrl !== null) {
        Linking.openURL(initialUrl);
      }
    };
    checkForgot();
    return () => subscription();
  }, [_validateLogin]);

  //place your function in here
  const checkForgot = async () => {
    if (AsyncStorage.getItem('CHECK_FORGOT') === 'true') {
      AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
    }
  };

  const _validateLogin = useCallback(async () => {
    let fcmToken = await AsyncStorage.getItem(STORAGE_KEY.TOKEN_FIREBASE);
    const token = await AsyncStorage.getItem(STORAGE_KEY.TOKEN_LOGIN);
    const data = JSON.parse(
      await AsyncStorage.getItem(STORAGE_KEY.PROFILE_DATA)
    );

    // if (!fcmToken) {
    //   fcmToken = await messaging().getToken();
    //   if (fcmToken) {
    //     AsyncStorage.setItem(STORAGE_KEY.TOKEN_FIREBASE, fcmToken);
    //   }
    // }

    if (data) {
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: { ...accountState.profile, data },
      });
    }
    if (token) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }
  }, [navigation]);

  return {
    //data props here
    data: {
      persistState,
      todoState,
    },
    //actions props here
    actions: {
      goBack,
    },
  };
};

export default AuthFirstLogic;

AuthFirstLogic.dependencies = {
  navigator: AuthFirstNavigator,
};
