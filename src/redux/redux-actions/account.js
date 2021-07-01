//package import
import { ToastAndroid, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';

//local import
import I18n from '../../i18n';
import { ENDPOINT } from '../../configs';
import { STORAGE_KEY } from '../../constants';
import { showAlert } from '../../redux/redux-actions/global';
import { store } from '../../redux/redux-store/store';

//types export
export const POST_LOGIN_PENDING = 'POST_LOGIN_PENDING';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_ERROR = 'POST_LOGIN_ERROR';
export const POST_FORGOT_PASSWORD_PENDING = 'POST_FORGOT_PASSWORD_PENDING';
export const POST_FORGOT_PASSWORD_SUCCESS = 'POST_FORGOT_PASSWORD_SUCCESS';
export const POST_FORGOT_PASSWORD_ERROR = 'POST_FORGOT_PASSWORD_ERROR';
export const VALIDATE_OTP_PENDING = 'VALIDATE_OTP_PENDING';
export const VALIDATE_OTP_SUCCESS = 'VALIDATE_OTP_SUCCESS';
export const VALIDATE_OTP_ERROR = 'VALIDATE_OTP_ERROR';
export const RESET_REDUCER = 'RESET_REDUCER';
export const POST_CHANGE_PASSWORD_PENDING = 'POST_CHANGE_PASSWORD_PENDING';
export const POST_CHANGE_PASSWORD_SUCCESS = 'POST_CHANGE_PASSWORD_SUCCESS';
export const POST_CHANGE_PASSWORD_ERROR = 'POST_CHANGE_PASSWORD_ERROR';
export const POST_LOGOUT_PENDING = 'POST_LOGOUT_PENDING';
export const POST_LOGOUT_SUCCESS = 'POST_LOGOUT_SUCCESS';
export const POST_LOGOUT_ERROR = 'POST_LOGOUT_ERROR';
export const GET_PROFILE_PENDING = 'GET_PROFILE_PENDING';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';
export const POST_CHANGE_PASSWORD_PROFILE_PENDING =
  'POST_CHANGE_PASSWORD_PROFILE_PENDING';
export const POST_CHANGE_PASSWORD_PROFILE_SUCCESS =
  'POST_CHANGE_PASSWORD_PROFILE_SUCCESS';
export const POST_CHANGE_PASSWORD_PROFILE_ERROR =
  'POST_CHANGE_PASSWORD_PROFILE_ERROR';
export const SHOW_ALERT_PROFILE = 'SHOW_ALERT_PROFILE';
export const CLOSE_ALERT_PROFILE = 'CLOSE_ALERT_PROFILE';
export const POST_EDIT_PROFILE_PENDING = 'POST_EDIT_PROFILE_PENDING';
export const POST_EDIT_PROFILE_SUCCESS = 'POST_EDIT_PROFILE_SUCCESS';
export const POST_EDIT_PROFILE_ERROR = 'POST_EDIT_PROFILE_ERROR';
export const SET_FORM_PROFILE = 'SET_FORM_PROFILE';
export const SET_FORM_PROFILE_IMAGE = 'SET_FORM_PROFILE_IMAGE';
export const SET_FORM_PROFILE_NAME = 'SET_FORM_PROFILE_NAME';
export const SET_FORM_PROFILE_PHONE = 'SET_FORM_PROFILE_PHONE';
export const SET_FORM_PROFILE_SKILL = 'SET_FORM_PROFILE_SKILL';
export const SET_FORM_PROFILE_PASSWORD = 'SET_FORM_PROFILE_PASSWORD';
export const RESET_FORGOT_STATE = 'RESET_FORGOT_STATE';

//actions export
export const resetForgotState = () => async (dispatch) => {
  dispatch({ type: RESET_FORGOT_STATE });
};

export const postLogin = (
  abort,
  params,
  isNavigate = false,
  navigation
) => async (dispatch) => {
  try {
    dispatch({ type: POST_LOGIN_PENDING });
    const response = await ENDPOINT.postLogin(abort, params);
    if (response.code === 200) {
      dispatch(getProfileUser(abort));
      dispatch({
        type: POST_LOGIN_SUCCESS,
        payload: response,
      });
      AsyncStorage.setItem(STORAGE_KEY.TOKEN_LOGIN, response.data.token);
      navigation.replace('Home');
    } else if (response.code === 404) {
      dispatch({ type: POST_LOGIN_ERROR, payload: response });
    } else {
      dispatch({ type: POST_LOGIN_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_LOGIN_ERROR });
  }
};

export const handleLogout = (abort, navigation) => async (dispatch) => {
  try {
    dispatch({ type: POST_LOGOUT_PENDING });
    const response = await ENDPOINT.postLogout(abort);
    if (response.code === 200) {
      dispatch({
        type: POST_LOGOUT_SUCCESS,
        payload: response,
      });
      dispatch({ type: RESET_REDUCER });
      AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
      AsyncStorage.removeItem(STORAGE_KEY.TOKEN_FIREBASE);
      AsyncStorage.removeItem(STORAGE_KEY.PROFILE_DATA);
      navigation.replace('Login');
    } else {
      dispatch({ type: POST_LOGOUT_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_LOGOUT_ERROR });
  }
};

export const forgotPassword = (abort, body, navigation) => async (dispatch) => {
  try {
    dispatch({ type: POST_FORGOT_PASSWORD_PENDING });
    const response = await ENDPOINT.postForgotPassword(abort, body);
    if (response.code === 200) {
      AsyncStorage.setItem(STORAGE_KEY.TOKEN_LOGIN, response.data.token);
      dispatch({
        type: POST_FORGOT_PASSWORD_SUCCESS,
        payload: response,
      });
      navigation.navigate('VerificationCode', {
        email: body.email,
      });
    } else {
      dispatch({ type: POST_FORGOT_PASSWORD_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_FORGOT_PASSWORD_ERROR });
  }
};

export const postValidateOTP = (abort, body, navigation) => async (
  dispatch
) => {
  try {
    dispatch({ type: VALIDATE_OTP_PENDING });
    const response = await ENDPOINT.validateOTP(abort, body);
    if (response.code === 200) {
      dispatch({
        type: VALIDATE_OTP_SUCCESS,
        payload: response,
      });
      AsyncStorage.setItem(STORAGE_KEY.TOKEN_LOGIN, response.data.token);
      navigation.navigate('EnterNewPassword');
    } else {
      dispatch({ type: VALIDATE_OTP_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: VALIDATE_OTP_ERROR });
  }
};

export const postChangePassword = (abort, body, nextAction) => async (
  dispatch
) => {
  try {
    dispatch({ type: POST_CHANGE_PASSWORD_PENDING });
    const response = await ENDPOINT.postChangePassword(abort, body);
    if (response.code === 200) {
      nextAction.removeListenerLeave();
      setTimeout(() => {
        dispatch(
          showAlert({
            types: 'success',
            visible: true,
            title: I18n.t('passwordUpdatedPleaseLoginToContinue'),
          })
        );
      }, 1000);
      dispatch({
        type: POST_CHANGE_PASSWORD_SUCCESS,
        payload: response,
      });
      nextAction.stackResetToLogin();
      AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
    } else {
      dispatch({ type: POST_CHANGE_PASSWORD_ERROR, payload: response });
    }
  } catch (error) {
    console.log('error', error);
    console.log('error', error.response);
    dispatch({ type: POST_CHANGE_PASSWORD_ERROR });
  }
};

export const getProfileUser = (abort) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_PENDING });
    const response = await ENDPOINT.getProfile(abort);
    if (response.code === 200) {
      await AsyncStorage.setItem(
        STORAGE_KEY.PROFILE_DATA,
        JSON.stringify(response.data)
      );
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: response,
      });
    } else if (response.code === 404) {
      AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
      dispatch({ type: GET_PROFILE_USER_ERROR, payload: response });
    } else {
      dispatch({ type: GET_PROFILE_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: GET_PROFILE_ERROR });
  }
};

export const postChangePasswordProfile = (
  abort,
  body,
  navigation,
  afterFunction
) => async (dispatch) => {
  try {
    dispatch({ type: POST_CHANGE_PASSWORD_PROFILE_PENDING });
    const response = await ENDPOINT.postChangePasswordProfile(abort, body);
    if (response.code === 200) {
      dispatch({
        type: POST_CHANGE_PASSWORD_PROFILE_SUCCESS,
        payload: response,
      });
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
              state: {
                index: 1,
                routes: [{ name: 'Dashboard' }, { name: 'Profile' }],
              },
            },
          ],
        })
      );
      dispatch(showAlertProfile('Password Anda berhasil diubah!'));
    } else if (response.code === 409) {
      dispatch({ type: POST_CHANGE_PASSWORD_PROFILE_ERROR, payload: response });
      afterFunction();
    } else {
      dispatch({ type: POST_CHANGE_PASSWORD_PROFILE_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_CHANGE_PASSWORD_PROFILE_ERROR });
  }
};

export const showAlertProfile = (message) => (dispatch) => {
  dispatch({ type: SHOW_ALERT_PROFILE, payload: message });
};

export const closeAlertProfile = () => (dispatch) => {
  dispatch({ type: CLOSE_ALERT_PROFILE });
};

export const postEditProfile = (abort, params, progress, navigation) => async (
  dispatch
) => {
  try {
    dispatch({ type: POST_EDIT_PROFILE_PENDING });
    const response = await ENDPOINT.postEditProfile(params, progress);
    if (response.code === 200) {
      dispatch({
        type: POST_EDIT_PROFILE_SUCCESS,
        payload: response,
      });
      dispatch(getProfileUser(abort));
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
              state: {
                index: 1,
                routes: [{ name: 'Dashboard' }, { name: 'Profile' }],
              },
            },
          ],
        })
      );
      dispatch(showAlertProfile('Profil berhasil diubah!'));
    } else {
      dispatch({ type: POST_EDIT_PROFILE_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_EDIT_PROFILE_ERROR });
  }
};

export const setFormProfile = () => (dispatch) => {
  dispatch({ type: SET_FORM_PROFILE });
};

export const setFormProfileImage = (value) => (dispatch) => {
  dispatch({ type: SET_FORM_PROFILE_IMAGE, payload: value });
};

export const setFormProfileName = (value) => (dispatch) => {
  dispatch({ type: SET_FORM_PROFILE_NAME, payload: value });
};

export const setFormProfilePhone = (value) => (dispatch) => {
  dispatch({ type: SET_FORM_PROFILE_PHONE, payload: value });
};

export const setFormProfileSkill = (value) => (dispatch) => {
  dispatch({ type: SET_FORM_PROFILE_SKILL, payload: value });
};

export const setFormProfilePassword = (value) => (dispatch) => {
  dispatch({ type: SET_FORM_PROFILE_PASSWORD, payload: value });
};
