//package import

//local import
import { ENDPOINT } from '../../configs';

export const SELECTED_COMPLAINT = 'SELECTED_COMPLAINT';
export const GET_COMPLAINT_PENDING = 'GET_COMPLAINT_PENDING';
export const GET_COMPLAINT_SUCCESS = 'GET_COMPLAINT_SUCCESS';
export const GET_COMPLAINT_ERROR = 'GET_COMPLAINT_ERROR';
export const POST_ACCEPT_PENDING = 'POST_ACCEPT_PENDING';
export const POST_ACCEPT_SUCCESS = 'POST_ACCEPT_SUCCESS';
export const POST_ACCEPT_ERROR = 'POST_ACCEPT_ERROR';
export const POST_FINISH_COMPLAINT_PENDING = 'POST_FINISH_COMPLAINT_PENDING';
export const POST_FINISH_COMPLAINT_SUCCESS = 'POST_FINISH_COMPLAINT_SUCCESS';
export const POST_FINISH_COMPLAINT_ERROR = 'POST_FINISH_COMPLAINT_ERROR';
export const RESET_ACCEPT_COMPLAINT = 'RESET_ACCEPT_COMPLAINT';
export const FINISHED_COMPLAINT = 'FINISHED_COMPLAINT';
export const PROGRESS_UPLOAD = 'PROGRESS_UPLOAD';
export const GLOBAL_COMPLAINT = 'GLOBAL_COMPLAINT';

export const resetAcceptComplaint = () => async (dispatch) => {
  dispatch({ type: RESET_ACCEPT_COMPLAINT });
};

export const selectedComplaint = (data) => (dispatch) => {
  dispatch({ type: SELECTED_COMPLAINT, payload: { data } });
};

export const getListComplaint = (abort) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMPLAINT_PENDING });
    const response = await ENDPOINT.getAllComplaint(abort);
    if (response.code === 200) {
      dispatch({
        type: GET_COMPLAINT_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({ type: GET_COMPLAINT_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: GET_COMPLAINT_ERROR });
  }
};

export const postAcceptComplaint = (abort, params) => async (dispatch) => {
  try {
    dispatch({ type: POST_ACCEPT_PENDING });
    const response = await ENDPOINT.postAcceptComplaint(abort, params);
    if (response.code === 200) {
      dispatch({
        type: POST_ACCEPT_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({ type: POST_ACCEPT_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_ACCEPT_ERROR });
  }
};

export const postFinishComplaint = (params, progress) => async (dispatch) => {
  try {
    dispatch({ type: POST_FINISH_COMPLAINT_PENDING });
    const response = await ENDPOINT.postFinishComplaint(params, progress);
    if (response.code === 200) {
      dispatch({
        type: POST_FINISH_COMPLAINT_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({ type: POST_FINISH_COMPLAINT_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_FINISH_COMPLAINT_ERROR });
  }
};

export const finishedComplaint = (data) => (dispatch) => {
  dispatch({ type: FINISHED_COMPLAINT, payload: { data } });
};

export const globalComplaintDispatch = (payload) => (dispatch) => {
  dispatch({ type: GLOBAL_COMPLAINT, payload });
};