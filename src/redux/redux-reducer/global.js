import { MODAL, ALERT, PROGRESS_UPLOAD } from '../redux-actions';

const initialState = {
  modal: {
    isVisible: false,
    sourceImage: '',
    title: '',
    desc: '',
  },
  alert: {
    types: 'success',
    visible: false,
    title: '',
  },
  progressUpload: {
    visible: false,
    value: '0%',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL:
      return { ...state, modal: payload };
    case ALERT:
      return { ...state, alert: payload };
    case PROGRESS_UPLOAD:
      return {
        ...state,
        progressUpload: { ...state.progressUpload, ...payload },
      };
    default:
      return state;
  }
};
