import I18n from '../../i18n';
import { ENDPOINT } from '../../configs';
import { progressUpload } from '../../redux/redux-actions/global';

export const GET_ALL_MAINTENANCE_PENDING = 'GET_ALL_MAINTENANCE_PENDING';
export const GET_ALL_MAINTENANCE_SUCCESS = 'GET_ALL_MAINTENANCE_SUCCESS';
export const GET_ALL_MAINTENANCE_ERROR = 'GET_ALL_MAINTENANCE_ERROR';
export const GET_LOAD_MORE_ALL_MAINTENANCE_SUCCESS =
  'GET_LOAD_MORE_ALL_MAINTENANCE_SUCCESS';

export const POST_ASSIGN_MAINTENANCE_PENDING =
  'POST_ASSIGN_MAINTENANCE_PENDING';
export const POST_ASSIGN_MAINTENANCE_SUCCESS =
  'POST_ASSIGN_MAINTENANCE_SUCCESS';
export const POST_ASSIGN_MAINTENANCE_ERROR = 'POST_ASSIGN_MAINTENANCE_ERROR';
export const POST_DONE_MAINTENANCE_PENDING = 'POST_DONE_MAINTENANCE_PENDING';
export const POST_DONE_MAINTENANCE_SUCCESS = 'POST_DONE_MAINTENANCE_SUCCESS';
export const POST_DONE_MAINTENANCE_ERROR = 'POST_DONE_MAINTENANCE_ERROR';
export const GET_DETAIL_MAINTENANCE = 'GET_DETAIL_MAINTENANCE';
export const IS_MESSAGE_MAINTENANCE_STATUS = 'IS_MESSAGE_MAINTENANCE_STATUS';
export const UPDATE_MAINTENANCE_STATUS_PENDING =
  'UPDATE_MAINTENANCE_STATUS_PENDING';
export const UPDATE_MAINTENANCE_STATUS_SUCCESS =
  'UPDATE_MAINTENANCE_STATUS_SUCCESS';
export const UPDATE_MAINTENANCE_STATUS_ERROR =
  'UPDATE_MAINTENANCE_STATUS_ERROR';
export const GLOBAL_MAINTENANCE = 'GLOBAL_MAINTENANCE';

export const getMaintenanceData = (abort, params) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_MAINTENANCE_PENDING, payload: { params } });
    const response = await ENDPOINT.getAllMaintenance(abort, params);
    console.log('responseresponse', response, params);

    if (response.code === 200) {
      dispatch({
        type: GET_ALL_MAINTENANCE_SUCCESS,
        payload: { response, params },
      });
    } else {
      dispatch({ type: GET_ALL_MAINTENANCE_ERROR });
    }
  } catch (error) {
    dispatch({ type: GET_ALL_MAINTENANCE_ERROR });
  }
};

export const getLoadMoreAllMaintenance = (abort, params) => async (
  dispatch
) => {
  try {
    const response = await ENDPOINT.getAllMaintenance(abort, params);
    if (response.code === 200) {
      dispatch({
        type: GET_LOAD_MORE_ALL_MAINTENANCE_SUCCESS,
        payload: { response, params },
      });
    } else {
      dispatch({ type: GET_ALL_MAINTENANCE_ERROR, payload: response });
    }
  } catch (error) {
    dispatch({ type: GET_ALL_MAINTENANCE_ERROR });
  }
};

export const postAssignMaintenanceData = (abort, progress, body) => async (
  dispatch
) => {
  try {
    dispatch({ type: POST_ASSIGN_MAINTENANCE_PENDING });
    const response = await ENDPOINT.postAssignMaintenance(progress, body);

    if (response.code === 200) {
      dispatch({
        type: POST_ASSIGN_MAINTENANCE_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({ type: POST_ASSIGN_MAINTENANCE_ERROR });
    }
  } catch (error) {
    dispatch({ type: POST_ASSIGN_MAINTENANCE_ERROR });
  }
};

export const postDoneMaintenanceData = (abort, progress, params) => async (
  dispatch
) => {
  try {
    dispatch({ type: POST_DONE_MAINTENANCE_PENDING });
    const response = await ENDPOINT.postDoneMaintenance(
      abort,
      progress,
      params
    );

    if (response.code === 200) {
      dispatch({
        type: POST_DONE_MAINTENANCE_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({ type: POST_DONE_MAINTENANCE_ERROR });
    }
  } catch (error) {
    dispatch({ type: POST_DONE_MAINTENANCE_ERROR });
  }
};

export const getDetailMaintenance = (payload) => (dispatch) => {
  dispatch({ type: GET_DETAIL_MAINTENANCE, payload });
};

export const isMessageMaintenanceStatus = (payload) => (dispatch) => {
  dispatch({ type: IS_MESSAGE_MAINTENANCE_STATUS, payload });
  setTimeout(() => {
    dispatch({
      type: IS_MESSAGE_MAINTENANCE_STATUS,
      payload: {
        types: '',
        isShow: false,
        title: '',
      },
    });
  }, 2000);
};

export const updateMaintenanceStatus = (
  abort,
  progress,
  goBack,
  payload
) => async (dispatch) => {
  try {
    const currentStep =
      payload.step[payload.step.filter((item) => item.time).length - 1];

    if (currentStep.status == 'waiting') {
      const body = {
        maintenanceId: payload.maintenanceId,
      };
      dispatch(progressUpload({ visible: true }));
      dispatch({ type: UPDATE_MAINTENANCE_STATUS_PENDING, payload: true });
      const response = await ENDPOINT.postAssignMaintenance(body, progress);
      console.log('responserespons1', response);

      if (response.code === 200) {
        dispatch(progressUpload({ visible: false, value: '0%' }));
        dispatch({
          type: UPDATE_MAINTENANCE_STATUS_SUCCESS,
          payload: {
            ...payload,
            step: [
              payload.step[0],
              {
                status: 'inProgress',
                time: response.data.step.filter(
                  (item) => item.status === 'inProgress'
                )[0].time,
              },
              {
                status: 'done',
                time: '',
                evidence: {
                  name: '',
                  photo: [],
                },
              },
            ],
          },
        });
      } else {
        dispatch(progressUpload({ visible: false, value: '0%' }));
        dispatch({ type: UPDATE_MAINTENANCE_STATUS_ERROR });
        dispatch(
          isMessageMaintenanceStatus({
            types: 'error',
            isShow: true,
            title: response.message,
          })
        );
      }
    } else if (currentStep.status == 'done') {
      const body = {
        maintenanceId: payload.maintenanceId,
        solution: currentStep.evidence.name,
        image: [
          ...payload.step[
            payload.step.filter((item) => item.time).length - 1
          ].evidence.photo.filter((item) => item),
        ],
      };

      setTimeout(async () => {
        dispatch({ type: UPDATE_MAINTENANCE_STATUS_PENDING, payload: true });
        dispatch(progressUpload({ visible: true }));
        const response = await ENDPOINT.postDoneMaintenance(progress, body);
        console.log('responserespons2', response);

        if (response.code === 200) {
          dispatch(progressUpload({ visible: false, value: '0%' }));
          const { status, time, evidence } = response.data.step.filter(
            (item) => item.status === 'done'
          )[0];
          dispatch({
            type: UPDATE_MAINTENANCE_STATUS_SUCCESS,
            payload: {
              ...payload,
              step: [
                payload.step[0],
                payload.step[1],
                {
                  status: 'done',
                  time,
                  evidence: {
                    name: evidence.name,
                    photo: [...evidence.photo],
                  },
                },
              ],
            },
          });
          dispatch(
            isMessageMaintenanceStatus({
              types: 'success',
              isShow: true,
              title: I18n.t('maintenanceIsComplete'),
            })
          );
          goBack();
        } else {
          dispatch(progressUpload({ visible: false, value: '0%' }));
          dispatch({ type: UPDATE_MAINTENANCE_STATUS_ERROR });
          dispatch(
            isMessageMaintenanceStatus({
              types: 'error',
              isShow: true,
              title: response.message,
            })
          );
        }
      }, 300);
    }
  } catch (error) {
    console.log('UPDATE_MAINTENANCE_STATUS_ERROR', error);
    console.log('UPDATE_MAINTENANCE_STATUS_ERROR', error.response);

    dispatch(progressUpload({ visible: false, value: '0%' }));
    dispatch({ type: UPDATE_MAINTENANCE_STATUS_ERROR });
  }
};

export const globalMaintenanceDispatch = (payload) => (dispatch) => {
  dispatch({ type: GLOBAL_MAINTENANCE, payload });
};
