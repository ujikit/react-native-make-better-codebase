import {
  GET_ALL_UNIT_STATUS_ERROR,
  GET_ALL_UNIT_STATUS_PENDING,
  GET_ALL_UNIT_STATUS_SUCCESS,
  GET_LIST_UNIT_ERROR,
  GET_LIST_UNIT_PENDING,
  GET_LIST_UNIT_SUCCESS,
  GET_WATER_HISTORY_ERROR,
  GET_WATER_HISTORY_PENDING,
  GET_WATER_HISTORY_SUCCESS,
  POST_WATER_REPORT_ERROR,
  POST_WATER_REPORT_PENDING,
  POST_WATER_REPORT_SUCCESS,
  SELECT_FLOOR_HANDLING,
  SELECT_TOWER_HANDLING,
  WATER_MODAL_HANDLING,
} from '../redux-actions';

const initialState = {
  modalSuccess: {
    isVisible: false,
    unit: '',
  },
  unitList: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: [],
    meta: null,
  },
  allUnitStatus: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: [],
  },
  waterHistory: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: [],
  },
  selectedTower: {
    floor: [],
    towerId: '',
    towerName: '',
  },
  selectedFloor: {
    floor: '',
    toShow: '',
  },
  addWaterReport: {
    isLoading: false,
    isSuccess: false,
    message: '',
    code: null,
    data: [],
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case WATER_MODAL_HANDLING:
      return {
        ...state,
        modalSuccess: {
          ...state.modalSuccess,
          isVisible: payload.isVisible,
          unit: payload.unit,
        },
      };
    case SELECT_TOWER_HANDLING:
      return {
        ...state,
        selectedTower: {
          ...state.selectedTower,
          floor: payload.floor,
          towerId: payload.towerId,
          towerName: payload.towerName,
        },
        selectedFloor: {
          ...state.selectedFloor,
          floor: '',
          toShow: '',
        },
        allUnitStatus: {
          ...state.allUnitStatus,
          isLoading: false,
          isSuccess: false,
          message: '',
          code: null,
          data: [],
        },
      };
    case SELECT_FLOOR_HANDLING:
      return {
        ...state,
        selectedFloor: {
          ...state.selectedFloor,
          floor: payload.floor,
          toShow: payload.toShow,
        },
      };
    case GET_LIST_UNIT_PENDING:
      return {
        ...state,
        unitList: { ...state.unitList, isLoading: true },
      };
    case GET_LIST_UNIT_SUCCESS:
      return {
        ...state,
        unitList: {
          ...state.unitList,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
          meta: payload.meta,
        },
        selectedTower: {
          ...state.selectedTower,
          floor: payload.data[0].floor,
          towerId: payload.data[0].towerId,
          towerName: payload.data[0].towerName,
        },
      };
    case GET_LIST_UNIT_ERROR:
      return {
        ...state,
        unitList: {
          ...state.unitList,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case GET_ALL_UNIT_STATUS_PENDING:
      return {
        ...state,
        allUnitStatus: { ...state.allUnitStatus, isLoading: true },
      };
    case GET_ALL_UNIT_STATUS_SUCCESS:
      return {
        ...state,
        allUnitStatus: {
          ...state.allUnitStatus,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case GET_ALL_UNIT_STATUS_ERROR:
      return {
        ...state,
        allUnitStatus: {
          ...state.allUnitStatus,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case POST_WATER_REPORT_PENDING:
      return {
        ...state,
        addWaterReport: { ...state.addWaterReport, isLoading: true },
      };
    case POST_WATER_REPORT_SUCCESS:
      return {
        ...state,
        addWaterReport: {
          ...state.addWaterReport,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_WATER_REPORT_ERROR:
      return {
        ...state,
        addWaterReport: {
          ...state.addWaterReport,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case GET_WATER_HISTORY_PENDING:
      return {
        ...state,
        waterHistory: { ...state.waterHistory, isLoading: true },
      };
    case GET_WATER_HISTORY_SUCCESS:
      return {
        ...state,
        waterHistory: {
          ...state.waterHistory,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case GET_WATER_HISTORY_ERROR:
      return {
        ...state,
        waterHistory: {
          ...state.waterHistory,
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
