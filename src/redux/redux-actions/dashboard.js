//local import
import { ENDPOINT } from '../../configs';

export const GET_BANNER_PENDING = 'GET_BANNER_PENDING';
export const GET_BANNER_SUCCESS = 'GET_BANNER_SUCCESS';
export const GET_BANNER_ERROR = 'GET_BANNER_ERROR';

export const getBanner = (abort) => async (dispatch) => {
  try {
    dispatch({ type: GET_BANNER_PENDING });
    const response = await ENDPOINT.getBanner(abort);

    if (response.code === 200) {
      dispatch({
        type: GET_BANNER_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({ type: GET_BANNER_ERROR, payload: response });
    }
  } catch (error) {
    console.log('error', error);
    console.log('error', error.response);
    dispatch({ type: GET_BANNER_ERROR });
  }
};
