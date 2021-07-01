import {
  DETAIL_BROADCAST,
  GET_BROADCAST_PENDING,
  GET_BROADCAST_SUCCESS,
  GET_LOAD_MORE_BROADCAST_SUCCESS,
  GET_BROADCAST_ERROR,
} from '../redux-actions';

const initialState = {
  broadcastList: {
    isLoading: false,
    isSuccess: false,
    code: 0,
    data: [],
    message: '',
    meta: { page: 0, count: 0, totalPage: 0, totalDate: 0 },
  },
  detailBroadcast: {
    feedId: '',
    type: '',
    image: '',
    title: '',
    source: '',
    description: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DETAIL_BROADCAST:
      return {
        ...state,
        detailBroadcast: { ...state.detailBroadcast, ...payload },
      };
    case GET_BROADCAST_PENDING:
      return {
        ...state,
        broadcastList: { ...state.broadcastList, isLoading: true },
      };
    case GET_BROADCAST_SUCCESS:
      return {
        ...state,
        broadcastList: {
          ...state.broadcastList,
          isLoading: false,
          ...payload,
        },
      };
    case GET_LOAD_MORE_BROADCAST_SUCCESS:
      return {
        ...state,
        broadcastList: {
          ...state.broadcastList,
          ...payload,
          data: [...state.broadcastList.data, ...payload.data],
        },
      };
    case GET_BROADCAST_ERROR:
      return {
        ...state,
        broadcastList: {
          ...state.broadcastList,
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
