import {
  GET_BANNER_PENDING,
  GET_BANNER_SUCCESS,
  GET_BANNER_ERROR,
} from '../redux-actions';

const initialState = {
  bannerList: {
    isLoading: true,
    success: false,
    data: [{ image: '', link: '' }],
    message: '',
    code: 0,
  },
};

export default (state = initialState, { type, payload, isRefresh }) => {
  switch (type) {
    case GET_BANNER_PENDING:
      return {
        ...state,
        bannerList: { ...state.bannerList, isLoading: true },
      };
    case GET_BANNER_SUCCESS:
      return {
        ...state,
        bannerList: {
          ...state.bannerList,
          isLoading: false,
          success: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
          data: !payload.data.length ? [{ image: '', link: '' }] : payload.data,
        },
      };
    case GET_BANNER_ERROR:
      return {
        ...state,
        bannerList: {
          ...state.bannerList,
          isLoading: false,
          success: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    default:
      return state;
  }
};
