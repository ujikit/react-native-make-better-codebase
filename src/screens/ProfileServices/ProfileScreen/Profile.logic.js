//package import here
import { useCallback, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import ProfileNavigator from './Profile.navigator';
import {
  closeAlertProfile,
  handleLogout,
  setFormProfile,
} from '../../../redux/redux-actions';

const ProfileLogic = () => {
  //package value here
  const { navigator } = ProfileLogic.dependencies;
  const {
    goBack,
    goToEditProfile,
    goToChangePassword,
    goToPrivacyPolicy,
    goToHelp,
    goToTermCondition,
    goToNotifications,
    navigation,
  } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  const accountState = useSelector((state) => state.account);
  const [modalLogout, setModalLogout] = useState(false);

  //variable value here
  const abort = controller.signal;
  const profile = accountState.profile.data;

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const _handleLogout = useCallback(() => {
    setModalLogout(false);
    setTimeout(() => {
      dispatch(handleLogout(abort, navigation));
    }, 300);
  }, [abort, dispatch, navigation]);

  const _closeAlert = useCallback(() => {
    dispatch(closeAlertProfile());
  }, [dispatch]);

  const _handleEditProfile = useCallback(() => {
    dispatch(setFormProfile());
    goToEditProfile();
  }, [dispatch, goToEditProfile]);

  return {
    //data props here
    data: {
      modalLogout,
      profile,
      accountState,
    },
    //actions props here
    actions: {
      goBack,
      goToChangePassword,
      goToHelp,
      goToPrivacyPolicy,
      goToTermCondition,
      goToNotifications,
      navigation,
      setModalLogout,
      _handleLogout,
      _handleEditProfile,
      _closeAlert,
    },
  };
};

export default ProfileLogic;

ProfileLogic.dependencies = {
  navigator: ProfileNavigator,
};
