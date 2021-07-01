import {
  GET_VERSION_APP_PENDING,
  GET_VERSION_APP_SUCCESS,
  GET_VERSION_APP_ERROR,
} from '../redux-actions';

const initialState = {
  versionApp: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: {},
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VERSION_APP_PENDING:
      return {
        ...state,
        versionApp: {
          ...state.versionApp,
          isLoading: true,
          isSuccess: true,
        },
      };
    case GET_VERSION_APP_SUCCESS:
      return {
        ...state,
        versionApp: {
          ...state.versionApp,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case GET_VERSION_APP_ERROR:
      return {
        ...state,
        versionApp: {
          ...state.versionApp,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    default:
      return state;
  }
};
