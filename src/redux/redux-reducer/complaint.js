import {
  SELECTED_COMPLAINT,
  GET_COMPLAINT_PENDING,
  GET_COMPLAINT_SUCCESS,
  GET_COMPLAINT_ERROR,
  POST_ACCEPT_PENDING,
  POST_ACCEPT_SUCCESS,
  POST_ACCEPT_ERROR,
  POST_FINISH_COMPLAINT_PENDING,
  POST_FINISH_COMPLAINT_SUCCESS,
  POST_FINISH_COMPLAINT_ERROR,
  RESET_ACCEPT_COMPLAINT,
  FINISHED_COMPLAINT,
  PROGRESS_UPLOAD,
  GLOBAL_COMPLAINT,
} from '../redux-actions';

const initialState = {
  data: null,
  dataFinish: null,
  listComplaint: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: {},
  },
  acceptComplaint: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: {},
  },
  finishComplaint: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: {},
  },
  progressUpload: '0%',
  globalComplaintReducer: {
    currentSendSolutionImage: '',
    sendSolutionImageOne: '',
    sendSolutionImageTwo: '',
    sendSolutionImageThree: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_ACCEPT_COMPLAINT:
      return {
        ...state,
        acceptComplaint: {
          ...state.acceptComplaint,
          isLoading: false,
          isSuccess: false,
          message: '',
          code: null,
          data: {},
        },
        finishComplaint: {
          ...state.finishComplaint,
          isLoading: false,
          isSuccess: false,
          message: '',
          code: null,
          data: {},
        },
        dataFinish: null,
        progressUpload: '',
      };
    case PROGRESS_UPLOAD:
      return {
        ...state,
        progressUpload: payload,
      };
    case SELECTED_COMPLAINT:
      return { ...state, data: payload.data };
    case FINISHED_COMPLAINT:
      return { ...state, dataFinish: payload.data };
    case GET_COMPLAINT_PENDING:
      return {
        ...state,
        listComplaint: {
          ...state.listComplaint,
          isLoading: true,
          isSuccess: true,
        },
      };
    case GET_COMPLAINT_SUCCESS:
      return {
        ...state,
        listComplaint: {
          ...state.listComplaint,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case GET_COMPLAINT_ERROR:
      return {
        ...state,
        listComplaint: {
          ...state.listComplaint,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case POST_ACCEPT_PENDING:
      return {
        ...state,
        acceptComplaint: {
          ...state.acceptComplaint,
          isLoading: true,
          isSuccess: true,
        },
      };
    case POST_ACCEPT_SUCCESS:
      return {
        ...state,
        acceptComplaint: {
          ...state.acceptComplaint,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_ACCEPT_ERROR:
      return {
        ...state,
        acceptComplaint: {
          ...state.acceptComplaint,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case POST_FINISH_COMPLAINT_PENDING:
      return {
        ...state,
        finishComplaint: {
          ...state.finishComplaint,
          isLoading: true,
          isSuccess: true,
        },
      };
    case POST_FINISH_COMPLAINT_SUCCESS:
      return {
        ...state,
        finishComplaint: {
          ...state.finishComplaint,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_FINISH_COMPLAINT_ERROR:
      return {
        ...state,
        finishComplaint: {
          ...state.finishComplaint,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case GLOBAL_COMPLAINT:
      return {
        ...state,
        globalComplaintReducer: {
          ...state.globalComplaintReducer,
          ...payload,
        },
      };
    default:
      return state;
  }
};
