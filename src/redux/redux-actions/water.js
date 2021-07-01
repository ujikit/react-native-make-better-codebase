import I18n from '../../i18n';
import { Platform, ToastAndroid } from 'react-native';
import { ENDPOINT } from '../../configs';

export const WATER_MODAL_HANDLING = 'WATER_MODAL_HANDLING';
export const SELECT_TOWER_HANDLING = 'SELECT_TOWER_HANDLING';
export const SELECT_FLOOR_HANDLING = 'SELECT_FLOOR_HANDLING';
export const GET_LIST_UNIT_ERROR = 'GET_LIST_UNIT_ERROR';
export const GET_LIST_UNIT_PENDING = 'GET_LIST_UNIT_PENDING';
export const GET_LIST_UNIT_SUCCESS = 'GET_LIST_UNIT_SUCCESS';
export const GET_ALL_UNIT_STATUS_ERROR = 'GET_ALL_UNIT_STATUS_ERROR';
export const GET_ALL_UNIT_STATUS_PENDING = 'GET_ALL_UNIT_STATUS_PENDING';
export const GET_ALL_UNIT_STATUS_SUCCESS = 'GET_ALL_UNIT_STATUS_SUCCESS';
export const GET_WATER_HISTORY_ERROR = 'GET_WATER_HISTORY_ERROR';
export const GET_WATER_HISTORY_PENDING = 'GET_WATER_HISTORY_PENDING';
export const GET_WATER_HISTORY_SUCCESS = 'GET_WATER_HISTORY_SUCCESS';
export const POST_WATER_REPORT_ERROR = 'POST_WATER_REPORT_ERROR';
export const POST_WATER_REPORT_PENDING = 'POST_WATER_REPORT_PENDING';
export const POST_WATER_REPORT_SUCCESS = 'POST_WATER_REPORT_SUCCESS';

export const waterModalHandling = (data) => (dispatch) => {
  dispatch({ type: WATER_MODAL_HANDLING, payload: data });
};

export const selectTowerHandling = (data) => (dispatch) => {
  dispatch({ type: SELECT_TOWER_HANDLING, payload: data });
};

export const selectFloorHandling = (data) => (dispatch) => {
  dispatch({ type: SELECT_FLOOR_HANDLING, payload: data });
};

export const getListUnit = (abort) => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_UNIT_PENDING });
    const response = await ENDPOINT.getListUnit(abort);
    if (response.code === 200) {
      dispatch({
        type: GET_LIST_UNIT_SUCCESS,
        payload: response,
      });
    } else if (response.code === 404) {
      dispatch({ type: GET_LIST_UNIT_ERROR, payload: response });
    } else {
      dispatch({ type: GET_LIST_UNIT_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: GET_LIST_UNIT_ERROR });
  }
};

export const getAllUnitStatus = (abort, towerId, floor) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_UNIT_STATUS_PENDING });
    const response = await ENDPOINT.getAllUnitStatus(abort, towerId, floor);
    if (response.code === 200) {
      dispatch({
        type: GET_ALL_UNIT_STATUS_SUCCESS,
        payload: response,
      });
    } else if (response.code === 404) {
      dispatch({ type: GET_ALL_UNIT_STATUS_ERROR, payload: response });
    } else {
      dispatch({ type: GET_ALL_UNIT_STATUS_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: GET_ALL_UNIT_STATUS_ERROR });
  }
};

export const getWaterReportHistory = (abort, unitId, towerId) => async (
  dispatch
) => {
  try {
    dispatch({ type: GET_WATER_HISTORY_PENDING });
    const response = await ENDPOINT.getWaterReportHistory(
      abort,
      unitId,
      towerId
    );
    if (response.code === 200) {
      dispatch({
        type: GET_WATER_HISTORY_SUCCESS,
        payload: response,
      });
    } else if (response.code === 404) {
      dispatch({ type: GET_WATER_HISTORY_ERROR, payload: response });
    } else {
      dispatch({ type: GET_WATER_HISTORY_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: GET_WATER_HISTORY_ERROR });
  }
};

export const postWaterReport = (
  abort,
  params,
  unit,
  navigation,
  progress
) => async (dispatch, getState) => {
  try {
    const { water } = getState();
    dispatch({ type: POST_WATER_REPORT_PENDING });
    const response = await ENDPOINT.postWaterReport(params, progress);
    if (response.code === 200) {
      dispatch({
        type: POST_WATER_REPORT_SUCCESS,
        payload: response,
      });
      dispatch(
        getAllUnitStatus(
          abort,
          water.selectedTower.towerId,
          water.selectedFloor.floor
        )
      );
      navigation.navigate('MeteranAir');
      dispatch(
        waterModalHandling({
          isVisible: !water.modalSuccess.isVisible,
          unit,
        })
      );
    } else if (response.code === 404) {
      dispatch({ type: POST_WATER_REPORT_ERROR, payload: response });
    } else {
      dispatch({ type: POST_WATER_REPORT_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_WATER_REPORT_ERROR });
  }
};

export const updateWaterReport = (
  abort,
  params,
  unit,
  navigation,
  progress
) => async (dispatch, getState) => {
  try {
    const { water } = getState();
    dispatch({ type: POST_WATER_REPORT_PENDING });
    const response = await ENDPOINT.postUpdateWaterReport(params, progress);
    if (response.code === 200) {
      dispatch({
        type: POST_WATER_REPORT_SUCCESS,
        payload: response,
      });
      dispatch(
        getAllUnitStatus(
          abort,
          water.selectedTower.towerId,
          water.selectedFloor.floor
        )
      );
      navigation.navigate('MeteranAir');
      dispatch(
        waterModalHandling({
          isVisible: !water.modalSuccess.isVisible,
          unit,
        })
      );
    } else if (response.code === 404) {
      dispatch({ type: POST_WATER_REPORT_ERROR, payload: response });
    } else {
      dispatch({ type: POST_WATER_REPORT_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: POST_WATER_REPORT_ERROR });
  }
};
