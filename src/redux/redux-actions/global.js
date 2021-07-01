export const MODAL = 'MODAL';
export const ALERT = 'ALERT';
export const PROGRESS_UPLOAD = 'PROGRESS_UPLOAD';

export const hideModal = (payload) => (dispatch) => {
  dispatch({ type: MODAL, payload });
};

export const showModal = (payload) => (dispatch) => {
  dispatch({ type: MODAL, payload });
};

export const showAlert = (payload) => (dispatch) => {
  dispatch({ type: ALERT, payload });
};

export const progressUpload = (payload) => (dispatch) => {
  dispatch({ type: PROGRESS_UPLOAD, payload });
};
