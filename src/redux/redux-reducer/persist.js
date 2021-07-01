import { CHOOSE_LANGUAGE } from '../redux-actions';

const initialState = {
  language: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSE_LANGUAGE:
      return { ...state, language: payload.data };
    default:
      return state;
  }
};
