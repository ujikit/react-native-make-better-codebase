import {
  GET_LIST_NOTIFICATTION_ERROR,
  GET_LIST_NOTIFICATTION_PENDING,
  GET_LIST_NOTIFICATTION_SUCCESS,
} from '../redux-actions';

const initialState = {
  notificationList: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: [],
    meta: {
      page: 1,
      totalPage: 1,
    },
  },
};

export default (state = initialState, { type, payload, isRefresh }) => {
  switch (type) {
    case GET_LIST_NOTIFICATTION_PENDING:
      return {
        ...state,
        notificationList: { ...state.notificationList, isLoading: true },
      };
    case GET_LIST_NOTIFICATTION_SUCCESS:
      return {
        ...state,
        notificationList: {
          ...state.notificationList,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: isRefresh
            ? payload.data
            : [...state.notificationList.data, ...payload.data],
          meta: payload.data.length
            ? payload.meta
            : initialState.notificationList.meta,
        },
      };
    case GET_LIST_NOTIFICATTION_ERROR:
      return {
        ...state,
        notificationList: {
          ...state.notificationList,
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
