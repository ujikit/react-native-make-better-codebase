//package import here
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import VerifyPasswordNavigator from './VerifyPassword.navigator';
import {
  postEditProfile,
  setFormProfilePassword,
} from '../../../redux/redux-actions';

const VerifyPasswordLogic = () => {
  //package value here
  const { navigator } = VerifyPasswordLogic.dependencies;
  const { goBack, navigation } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  let accountState = useSelector((state) => state.account);
  const [isError, setIsError] = useState(false);
  const [progressUpload, setProgressUpload] = useState('0%');
  const [errorMessage, setErrorMessage] = useState('');

  //variable value here
  let formProfile = accountState.formEdit;
  const abort = controller.signal;

  useEffect(() => {
    //function here
    if (accountState.editProfile.code === 400) {
      setIsError(true);
      setErrorMessage('Password salah');
    }
  }, [accountState.editProfile.code]);

  //place your function in here
  const _setPassword = useCallback(
    (val) => {
      dispatch(setFormProfilePassword(val));
      setIsError(false);
    },
    [dispatch]
  );

  const _handleEditProfile = useCallback(() => {
    setProgressUpload('0%');
    const body = {
      name: formProfile.name,
      password: formProfile.password,
      photoProfile: formProfile.photoBase64
        ? 'data:image/png;base64,' + formProfile.photoBase64
        : '',
      skill: formProfile.skill,
      phoneNumber: formProfile.phoneNumber,
    };
    if (!accountState.editProfile.isLoading) {
      dispatch(
        postEditProfile(
          abort,
          body,
          (progress) => {
            setProgressUpload(
              `${Math.floor((progress.loaded / progress.total) * 100)}%`
            );
          },
          navigation
        )
      );
    }
  }, [
    abort,
    accountState.editProfile.isLoading,
    dispatch,
    formProfile.name,
    formProfile.password,
    formProfile.phoneNumber,
    formProfile.photoBase64,
    formProfile.skill,
    navigation,
  ]);

  return {
    //data props here
    data: {
      formProfile,
      isError,
      errorMessage,
      accountState,
      progressUpload,
    },
    //actions props here
    actions: {
      goBack,
      _setPassword,
      _handleEditProfile,
    },
  };
};

export default VerifyPasswordLogic;

VerifyPasswordLogic.dependencies = {
  navigator: VerifyPasswordNavigator,
};
