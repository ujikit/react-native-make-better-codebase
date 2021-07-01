import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//local import here
import InputCodeNavigator from './InputCode.navigator';
import { postValidateOTP } from './../../../../../redux/redux-actions';
import { STORAGE_KEY } from '../../../../../constants';

const InputCodeLogic = () => {
  //package value here
  const { navigator } = InputCodeLogic.dependencies;
  const navigation = useNavigation();
  const { goBack } = navigator();
  const controller = useMemo(() => new AbortController(), []);
  const dispatch = useDispatch();
  const accountState = useSelector((state) => state.account);

  //state value here
  let [isErrorInputCode, setIsErrorInputCode] = useState('');
  let [code_one, setCodeOne] = useState(null);
  let [code_two, setCodeTwo] = useState(null);
  let [code_three, setCodeThree] = useState(null);
  let [code_four, setCodeFour] = useState(null);
  const [isError, setIsError] = useState(false);
  const [closed, setClosed] = useState(true);

  //variable value here
  const abort = controller.signal;
  const input_code_one = useRef(null);
  const input_code_two = useRef(null);
  const input_code_three = useRef(null);
  const input_code_four = useRef(null);

  useEffect(() => {
    AppState.addEventListener('change', async (state) => {
      if (state === 'active') {
        if (!closed) {
          setClosed(false);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }
      } else if (state === 'background') {
        setClosed(false);
        console.log('colse');
        AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
      }
    });
    return () => controller.abort();
  }, [closed, controller, navigation]);

  useEffect(() => {
    if (accountState.validateOTP.code >= 400) {
      setIsErrorInputCode(accountState.validateOTP.message);
      setIsError(true);
    }
  }, [accountState.validateOTP, isError, isErrorInputCode]);

  //place your function in here
  const _handleCodeOne = (data) => {
    setCodeOne(data);
    !data ? null : input_code_two.current.focus();
  };

  const _handleCodeTwo = (data) => {
    setCodeTwo(data);
    !data ? input_code_one.current.focus() : input_code_three.current.focus();
  };

  const _handleDeleteCodeTwo = (nativeEvent) => {
    setCodeTwo('');
    input_code_one.current.focus();
  };

  const _handleCodeThree = (data) => {
    setCodeThree(data);
    !data ? input_code_two.current.focus() : input_code_four.current.focus();
  };

  const _handleDeleteCodeThree = (nativeEvent) => {
    setCodeThree('');
    input_code_two.current.focus();
  };

  const _handleCodeFour = (data) => {
    setCodeFour(data);
    _handleSubmitOTP(data);
  };

  const _handleDeleteCodeFour = (nativeEvent) => {
    setCodeFour('');
    input_code_three.current.focus();
  };

  const _handleSubmitOTP = (data) => {
    const body = { otp: `${code_one}${code_two}${code_three}${data}` };
    dispatch(postValidateOTP(abort, body, navigation));
  };

  return {
    //data props here
    data: {
      isErrorInputCode,
      input_code_one,
      input_code_two,
      input_code_three,
      input_code_four,
      isError,
      code_one,
      code_two,
      code_three,
      code_four,
    },
    //actions props here
    actions: {
      goBack,
      setCodeOne,
      setCodeTwo,
      setCodeThree,
      setCodeFour,
      _handleCodeOne,
      _handleCodeTwo,
      _handleDeleteCodeTwo,
      _handleCodeThree,
      _handleDeleteCodeThree,
      _handleCodeFour,
      _handleDeleteCodeFour,
    },
  };
};

export default InputCodeLogic;

InputCodeLogic.dependencies = {
  navigator: InputCodeNavigator,
};
