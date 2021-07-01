import moment from 'moment';

import {
  GET_ALL_MAINTENANCE_PENDING,
  GET_ALL_MAINTENANCE_SUCCESS,
  GET_LOAD_MORE_ALL_MAINTENANCE_SUCCESS,
  GET_ALL_MAINTENANCE_ERROR,
  GET_DETAIL_MAINTENANCE,
  IS_MESSAGE_MAINTENANCE_STATUS,
  UPDATE_MAINTENANCE_STATUS_PENDING,
  UPDATE_MAINTENANCE_STATUS_SUCCESS,
  UPDATE_MAINTENANCE_STATUS_ERROR,
  GLOBAL_MAINTENANCE,
} from '../redux-actions';

const initialState = {
  isMessageMaintenanceStatus: {
    types: '',
    isShow: false,
    title: '',
  },
  isPostMaintenanceStatus: false,
  maintenanceData: {
    waiting: {
      isLoading: true,
      success: false,
      data: [],
      meta: {
        page: 0,
        data: 0,
        totalPage: 0,
        totalData: 0,
      },
      code: 0,
      message: '',
    },
    done: {
      isLoading: true,
      success: false,
      data: [],
      meta: {
        page: 0,
        data: 0,
        totalPage: 0,
        totalData: 0,
      },
      code: 0,
      message: '',
    },
  },
  maintenanceDetail: {
    maintenanceId: '',
    ticket: '',
    task: {
      name: '',
      priority: '',
      time: '',
    },
    step: [
      {
        status: '',
        time: '',
      },
      {
        status: '',
        time: '',
      },
      {
        status: '',
        time: '',
        evidence: {
          name: '',
          photo: [],
        },
      },
    ],
    asset: {
      name: '',
      location: '',
    },
    engineer: {
      name: '',
      photo: '',
    },
  },
  globalMaintenanceReducer: {
    currentSendSolutionImage: '',
    sendSolutionImageOne: '',
    sendSolutionImageTwo: '',
    sendSolutionImageThree: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_MAINTENANCE_PENDING:
      return {
        ...state,
        maintenanceData:
          payload.params.search == 'Waiting'
            ? {
                ...state.maintenanceData,
                waiting: {
                  ...state.maintenanceData.waiting,
                  isLoading: true,
                },
              }
            : payload.params.search == 'Done'
            ? {
                ...state.maintenanceData,
                done: {
                  ...state.maintenanceData.done,
                  isLoading: true,
                },
              }
            : null,
      };
    case GET_ALL_MAINTENANCE_SUCCESS:
      return {
        ...state,
        maintenanceData:
          payload.params.search == 'Waiting'
            ? {
                ...state.maintenanceData,
                waiting: {
                  isLoading: false,
                  success: true,
                  data: [],
                  meta: {
                    page: 0,
                    data: 0,
                    totalPage: 0,
                    totalData: 0,
                  },
                  code: 0,
                  message: '',
                  ...payload.response,
                },
              }
            : payload.params.search == 'Done'
            ? {
                ...state.maintenanceData,
                done: {
                  isLoading: false,
                  success: true,
                  data: [],
                  meta: {
                    page: 0,
                    data: 0,
                    totalPage: 0,
                    totalData: 0,
                  },
                  code: 0,
                  message: '',
                  ...payload.response,
                },
              }
            : null,
      };
    case GET_LOAD_MORE_ALL_MAINTENANCE_SUCCESS:
      return {
        ...state,
        maintenanceData:
          payload.params.search == 'Waiting'
            ? {
                ...state.maintenanceData,
                waiting: {
                  isLoading: false,
                  success: true,
                  data: [
                    ...state.maintenanceData.waiting.data,
                    ...payload.response.data,
                  ],
                  meta: !payload.response.meta
                    ? { ...state.maintenanceData.waiting.meta }
                    : { ...payload.response.meta },
                  code: 0,
                  message: '',
                },
              }
            : payload.params.search == 'Done'
            ? {
                ...state.maintenanceData,
                done: {
                  isLoading: false,
                  success: true,
                  data: [
                    ...state.maintenanceData.done.data,
                    ...payload.response.data,
                  ],
                  meta: !payload.response.meta
                    ? { ...state.maintenanceData.done.meta }
                    : { ...payload.response.meta },
                  code: 0,
                  message: '',
                },
              }
            : null,
      };
    case GET_ALL_MAINTENANCE_ERROR:
      return {
        ...state,
        maintenanceData: {
          ...state.maintenanceData,
          waiting: {
            ...state.maintenanceData.waiting,
            isLoading: false,
          },
          done: {
            ...state.maintenanceData.done,
            isLoading: false,
          },
        },
      };
    case GET_DETAIL_MAINTENANCE:
      return { ...state, maintenanceDetail: payload };
    case IS_MESSAGE_MAINTENANCE_STATUS:
      return {
        ...state,
        isMessageMaintenanceStatus: {
          ...state.isMessageMaintenanceStatus,
          ...payload,
        },
      };
    case UPDATE_MAINTENANCE_STATUS_PENDING:
      return { ...state, isPostMaintenanceStatus: payload };
    case UPDATE_MAINTENANCE_STATUS_SUCCESS:
      let currentDate = moment();
      let time = moment(currentDate).format('DD MMM HH:MM');
      const stepData = ['waiting', 'inProgress', 'done'];
      const currentStep =
        payload.step[payload.step.filter((item) => item.time).length - 1]
          .status;
      console.log('payloadddd', payload, currentStep);

      return {
        ...state,
        maintenanceData:
          currentStep === 'waiting' || currentStep === 'inProgress'
            ? {
                ...state.maintenanceData,
                waiting: {
                  ...state.maintenanceData.waiting,
                  isLoading: false,
                  success: true,
                  data: state.maintenanceData.waiting.data.map((item) =>
                    item.ticket === payload.ticket
                      ? {
                          ...payload,
                          step: [...payload.step],
                        }
                      : item
                  ),
                },
              }
            : currentStep === 'done'
            ? {
                ...state.maintenanceData,
                waiting: {
                  ...state.maintenanceData.waiting,
                  isLoading: false,
                  success: true,
                  data: state.maintenanceData.waiting.data.filter(
                    (item) => item.ticket !== payload.ticket
                  ),
                },
                done: {
                  ...state.maintenanceData.done,
                  isLoading: false,
                  success: true,
                  data: [payload, ...state.maintenanceData.done.data],
                },
              }
            : null,
        maintenanceDetail: payload,
        isPostMaintenanceStatus: false,
      };
    case UPDATE_MAINTENANCE_STATUS_ERROR:
      return { ...state, isPostMaintenanceStatus: false };
    case GLOBAL_MAINTENANCE:
      return {
        ...state,
        globalMaintenanceReducer: {
          ...state.globalMaintenanceReducer,
          ...payload,
        },
      };
    default:
      return state;
  }
};
