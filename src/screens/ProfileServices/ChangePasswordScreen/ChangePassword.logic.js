//package import
import { useMemo, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import
import ChangePasswordNavigator from './ChangePassword.navigator';
import { postChangePasswordProfile } from '../../../redux/redux-actions';

const ChangePasswordLogic = () => {
  //package value
  const { navigator } = ChangePasswordLogic.dependencies;
  const { goBack, goToForgotPassword, navigation } = navigator();
  const controller = useMemo(() => new AbortController(), []);
  const dispatch = useDispatch();

  //state value
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [rePasswordError, setRePasswordError] = useState(false);
  const [oldPasswordMessage, setOldPasswordMessage] = useState('');
  const [newPasswordMessage, setNewPasswordMessage] = useState('');
  const [rePasswordMessage, setRePasswordMessage] = useState('');
  let accountState = useSelector((state) => state.account);

  //variable value
  const abort = controller.signal;

  //place your function in here
  const _handleChangePassword = useCallback(() => {
    const body = {
      password: oldPassword,
      newPassword: newPassword,
    };
    if (newPassword.length < 6) {
      setNewPasswordError(true);
      setNewPasswordMessage('Gunakan minimal 6 karakter');
    } else if (newPassword !== rePassword) {
      setRePasswordError(true);
      setRePasswordMessage('Password tidak cocok');
    } else {
      dispatch(
        postChangePasswordProfile(abort, body, navigation, () => {
          setOldPasswordError(true);
          setOldPasswordMessage('Password saat ini salah');
        })
      );
    }
  }, [abort, dispatch, navigation, newPassword, oldPassword, rePassword]);

  useEffect(() => {
    return () => controller.abort();
  }, [controller]);

  return {
    data: {
      accountState,
      oldPassword,
      newPassword,
      rePassword,
      oldPasswordError,
      newPasswordError,
      rePasswordError,
      oldPasswordMessage,
      newPasswordMessage,
      rePasswordMessage,
    },
    actions: {
      goBack,
      setOldPassword,
      setNewPassword,
      setRePassword,
      goToForgotPassword,
      setOldPasswordError,
      setNewPasswordError,
      setRePasswordError,
      setOldPasswordMessage,
      setNewPasswordMessage,
      setRePasswordMessage,
      _handleChangePassword,
    },
  };
};

export default ChangePasswordLogic;

ChangePasswordLogic.dependencies = {
  navigator: ChangePasswordNavigator,
};
