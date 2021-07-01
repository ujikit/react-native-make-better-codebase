//local import
import { ENDPOINT } from '../../configs';
//types export
export const DETAIL_BROADCAST = 'DETAIL_BROADCAST';
export const GET_BROADCAST_PENDING = 'GET_BROADCAST_PENDING';
export const GET_BROADCAST_SUCCESS = 'GET_BROADCAST_SUCCESS';
export const GET_LOAD_MORE_BROADCAST_SUCCESS =
  'GET_LOAD_MORE_BROADCAST_SUCCESS';
export const GET_BROADCAST_ERROR = 'GET_BROADCAST_ERROR';

export const detailBroadcast = (payload) => async (dispatch) => {
  dispatch({ type: DETAIL_BROADCAST, payload: payload });
};

export const getBroadcast = (abort, page, limit, dear, search) => async (
  dispatch
) => {
  dispatch({ type: GET_BROADCAST_PENDING });
  const response = await ENDPOINT.getBroadcast(
    abort,
    page,
    limit,
    dear,
    search
  );
  if (response.code === 200) {
    dispatch({
      type: GET_BROADCAST_SUCCESS,
      payload: response,
    });
  } else {
    dispatch({ type: GET_BROADCAST_ERROR, payload: response });
  }
};

export const getLoadMoreBroadcast = (
  abort,
  page,
  limit,
  dear,
  search
) => async (dispatch) => {
  const response = await ENDPOINT.getBroadcast(
    abort,
    page,
    limit,
    dear,
    search
  );
  if (response.code === 200) {
    dispatch({
      type: GET_LOAD_MORE_BROADCAST_SUCCESS,
      payload: response,
    });
  } else {
    dispatch({ type: GET_BROADCAST_ERROR, payload: response });
  }
};
