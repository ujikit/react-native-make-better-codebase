//package import
import { ToastAndroid, Platform } from 'react-native';

//local import
import { ENDPOINT } from '../../configs';
import I18n from '../../i18n';

export const GET_HANDOVER_LIST_PENDING = 'GET_HANDOVER_LIST_PENDING';
export const GET_HANDOVER_LIST_SUCCESS = 'GET_HANDOVER_LIST_SUCCESS';
export const GET_HANDOVER_LIST_ERROR = 'GET_HANDOVER_LIST_ERROR';
export const GET_HANDOVER_DONE_PENDING = 'GET_HANDOVER_DONE_PENDING';
export const GET_HANDOVER_DONE_SUCCESS = 'GET_HANDOVER_DONE_SUCCESS';
export const GET_HANDOVER_DONE_ERROR = 'GET_HANDOVER_DONE_ERROR';
export const POST_ADD_HANDOVER_PENDING = 'POST_ADD_HANDOVER_PENDING';
export const POST_ADD_HANDOVER_SUCCESS = 'POST_ADD_HANDOVER_SUCCESS';
export const POST_ADD_HANDOVER_ERROR = 'POST_ADD_HANDOVER_ERROR';
export const POST_UPDATE_HANDOVER_PENDING = 'POST_UPDATE_HANDOVER_PENDING';
export const POST_UPDATE_HANDOVER_SUCCESS = 'POST_UPDATE_HANDOVER_SUCCESS';
export const POST_UPDATE_HANDOVER_ERROR = 'POST_UPDATE_HANDOVER_ERROR';
export const SELECTED_HANDOVER = 'SELECTED_HANDOVER';
export const RESET_SEND_HANDOVER = 'RESET_SEND_HANDOVER';

export const resetSendHandover = () => async (dispatch) => {
  dispatch({ type: RESET_SEND_HANDOVER });
};

export const getListHandover = (abort, type, page, limit) => async (
  dispatch
) => {
  try {
    dispatch({ type: GET_HANDOVER_LIST_PENDING });
    const response = await ENDPOINT.getAllHandover(abort, type, page, limit);
    if (response.code === 200) {
      dispatch({
        type: GET_HANDOVER_LIST_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({ type: GET_HANDOVER_LIST_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: GET_HANDOVER_LIST_ERROR });
  }
};

export const getListHandoverDone = (abort, type, page, limit) => async (
  dispatch
) => {
  try {
    page <= 1 && dispatch({ type: GET_HANDOVER_DONE_PENDING });
    const response = await ENDPOINT.getAllHandover(abort, type, page, limit);
    if (response.code === 200) {
      dispatch({
        type: GET_HANDOVER_DONE_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({ type: GET_HANDOVER_DONE_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: GET_HANDOVER_DONE_ERROR });
  }
};

export const postAddHandover = (body, navigation, progress) => async (
  dispatch
) => {
  try {
    dispatch({ type: POST_ADD_HANDOVER_PENDING });
    const response = await ENDPOINT.postAddHandover(body, progress);
    if (response.code === 200) {
      dispatch({
        type: POST_ADD_HANDOVER_SUCCESS,
        payload: response,
      });
      navigation.goBack();
    } else {
      dispatch({ type: POST_ADD_HANDOVER_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_ADD_HANDOVER_ERROR });
  }
};

export const postUpdateHandover = (body, navigation, progress) => async (
  dispatch
) => {
  try {
    dispatch({ type: POST_UPDATE_HANDOVER_PENDING });
    const response = await ENDPOINT.postUpdateHandover(body, progress);
    if (response.code === 200) {
      dispatch({
        type: POST_UPDATE_HANDOVER_SUCCESS,
        payload: response,
      });
      navigation.goBack();
    } else {
      dispatch({ type: POST_UPDATE_HANDOVER_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_UPDATE_HANDOVER_ERROR });
  }
};

export const selectedHandover = (data) => (dispatch) => {
  dispatch({ type: SELECTED_HANDOVER, payload: { data } });
};
