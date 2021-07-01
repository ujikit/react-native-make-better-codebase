//local import
import { ENDPOINT } from '../../configs';

export const GET_VERSION_APP_PENDING = 'GET_VERSION_APP_PENDING';
export const GET_VERSION_APP_SUCCESS = 'GET_VERSION_APP_SUCCESS';
export const GET_VERSION_APP_ERROR = 'GET_VERSION_APP_ERROR';

export const getVersionApp = (abort, type, os) => async (dispatch) => {
  try {
    dispatch({ type: GET_VERSION_APP_PENDING });
    const response = await ENDPOINT.getVersionApp(abort, type, os);
    if (response.code === 200) {
      dispatch({
        type: GET_VERSION_APP_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({ type: GET_VERSION_APP_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: GET_VERSION_APP_ERROR });
  }
};
