//local import
import { ENDPOINT } from '../../configs';

export const GET_LIST_NOTIFICATTION_PENDING = 'GET_LIST_NOTIFICATTION_PENDING';
export const GET_LIST_NOTIFICATTION_SUCCESS = 'GET_LIST_NOTIFICATTION_SUCCESS';
export const GET_LIST_NOTIFICATTION_ERROR = 'GET_LIST_NOTIFICATTION_ERROR';

export const getNotificationList = (
  abort,
  page = 1,
  isRefresh = false
) => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_NOTIFICATTION_PENDING });
    const response = await ENDPOINT.getAllNotification(abort, page, 20);
    if (response.code === 200) {
      dispatch({
        type: GET_LIST_NOTIFICATTION_SUCCESS,
        payload: response,
        isRefresh,
      });
    } else {
      dispatch({ type: GET_LIST_NOTIFICATTION_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: GET_LIST_NOTIFICATTION_ERROR });
  }
};
