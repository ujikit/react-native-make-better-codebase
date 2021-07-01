import {
  GET_HANDOVER_LIST_PENDING,
  GET_HANDOVER_LIST_SUCCESS,
  GET_HANDOVER_LIST_ERROR,
  POST_ADD_HANDOVER_PENDING,
  POST_ADD_HANDOVER_SUCCESS,
  POST_ADD_HANDOVER_ERROR,
  POST_UPDATE_HANDOVER_PENDING,
  POST_UPDATE_HANDOVER_SUCCESS,
  POST_UPDATE_HANDOVER_ERROR,
  GET_HANDOVER_DONE_PENDING,
  GET_HANDOVER_DONE_SUCCESS,
  GET_HANDOVER_DONE_ERROR,
  SELECTED_HANDOVER,
  RESET_SEND_HANDOVER,
} from '../redux-actions';

const initialState = {
  listHandover: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: {},
    meta: { page: 0, count: 0, totalPage: 0, totalData: 0 },
  },
  handoverDone: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: {},
    meta: { page: 0, count: 0, totalPage: 0, totalData: 0 },
  },
  addHandover: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: {},
  },
  updateHandover: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: {},
  },
  dataSelected: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_SEND_HANDOVER:
      return {
        ...state,
        addHandover: {
          ...state.addHandover,
          isLoading: false,
          isSuccess: false,
          message: '',
          code: null,
          data: {},
        },
        updateHandover: {
          ...state.updateHandover,
          isLoading: false,
          isSuccess: false,
          message: '',
          code: null,
          data: {},
        },
      };
    case SELECTED_HANDOVER:
      return { ...state, dataSelected: payload.data };
    case GET_HANDOVER_LIST_PENDING:
      return {
        ...state,
        listHandover: {
          ...state.listHandover,
          isLoading: true,
          data: [],
          isSuccess: true,
        },
      };
    case GET_HANDOVER_LIST_SUCCESS:
      return {
        ...state,
        listHandover: {
          ...state.listHandover,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: [...state.listHandover.data, ...payload.data],
          meta: !payload.meta
            ? { ...state.listHandover.meta }
            : { ...payload.meta },
        },
      };
    case GET_HANDOVER_LIST_ERROR:
      return {
        ...state,
        listHandover: {
          ...state.listHandover,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case POST_ADD_HANDOVER_PENDING:
      return {
        ...state,
        addHandover: {
          ...state.addHandover,
          isLoading: true,
          isSuccess: true,
        },
      };
    case POST_ADD_HANDOVER_SUCCESS:
      return {
        ...state,
        addHandover: {
          ...state.addHandover,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_ADD_HANDOVER_ERROR:
      return {
        ...state,
        addHandover: {
          ...state.addHandover,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case GET_HANDOVER_DONE_PENDING:
      return {
        ...state,
        handoverDone: {
          ...state.handoverDone,
          isLoading: true,
          data: [],
          isSuccess: true,
        },
      };
    case GET_HANDOVER_DONE_SUCCESS:
      return {
        ...state,
        handoverDone: {
          ...state.handoverDone,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: [...state.handoverDone.data, ...payload.data],
          meta: !payload.meta
            ? { ...state.handoverDone.meta }
            : { ...payload.meta },
        },
      };
    case GET_HANDOVER_DONE_ERROR:
      return {
        ...state,
        handoverDone: {
          ...state.handoverDone,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case POST_UPDATE_HANDOVER_PENDING:
      return {
        ...state,
        updateHandover: {
          ...state.updateHandover,
          isLoading: true,
          isSuccess: true,
        },
      };
    case POST_UPDATE_HANDOVER_SUCCESS:
      return {
        ...state,
        updateHandover: {
          ...state.updateHandover,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_UPDATE_HANDOVER_ERROR:
      return {
        ...state,
        updateHandover: {
          ...state.updateHandover,
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
