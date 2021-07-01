import {
  POST_LOGIN_ERROR,
  POST_LOGIN_PENDING,
  POST_LOGIN_SUCCESS,
  POST_FORGOT_PASSWORD_PENDING,
  POST_FORGOT_PASSWORD_SUCCESS,
  POST_FORGOT_PASSWORD_ERROR,
  VALIDATE_OTP_PENDING,
  VALIDATE_OTP_SUCCESS,
  VALIDATE_OTP_ERROR,
  POST_CHANGE_PASSWORD_PENDING,
  POST_CHANGE_PASSWORD_SUCCESS,
  POST_CHANGE_PASSWORD_ERROR,
  RESET_REDUCER,
  POST_LOGOUT_PENDING,
  POST_LOGOUT_SUCCESS,
  POST_LOGOUT_ERROR,
  GET_PROFILE_PENDING,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  POST_CHANGE_PASSWORD_PROFILE_PENDING,
  POST_CHANGE_PASSWORD_PROFILE_SUCCESS,
  POST_CHANGE_PASSWORD_PROFILE_ERROR,
  POST_EDIT_PROFILE_PENDING,
  POST_EDIT_PROFILE_SUCCESS,
  POST_EDIT_PROFILE_ERROR,
  SET_FORM_PROFILE,
  SET_FORM_PROFILE_IMAGE,
  SET_FORM_PROFILE_NAME,
  SET_FORM_PROFILE_PHONE,
  SET_FORM_PROFILE_SKILL,
  SET_FORM_PROFILE_PASSWORD,
  CLOSE_ALERT_PROFILE,
  SHOW_ALERT_PROFILE,
  RESET_FORGOT_STATE,
} from '../redux-actions';

const initialState = {
  redirect: null,
  login: {
    isLoading: false,
    isSuccess: true,
    message: '',
    code: 0,
    data: {},
  },
  forgotPasswordReducer: {
    isLoading: false,
    isSuccess: true,
    message: '',
    code: 0,
    data: {},
  },
  validateOTP: {
    isLoading: false,
    isSuccess: true,
    message: '',
    code: 0,
    date: {},
  },
  changePassword: {
    isLoading: false,
    isSuccess: true,
    message: '',
    code: 0,
    date: {},
  },
  logout: {
    isLoading: false,
    isSuccess: true,
    message: '',
    code: 0,
    data: {},
  },
  profile: {
    isLoading: false,
    isSuccess: true,
    message: '',
    code: 0,
    data: {
      image: '',
      name: '',
      phoneNumber: '',
      skill: '',
      engineerId: '',
      email: '',
      vendor: '',
      location: '',
    },
  },
  alertProfile: {
    isVisible: false,
    message: '',
  },
  changePasswordProfile: {
    isLoading: false,
    isSuccess: true,
    message: '',
    code: 0,
    date: {},
  },
  editProfile: {
    isLoading: false,
    isSuccess: true,
    message: '',
    code: 0,
    date: {},
  },
  formEdit: {
    name: '',
    password: '',
    photoProfile: '',
    photoBase64: '',
    skill: '',
    phoneNumber: '',
    engineerId: '',
    email: '',
    vendor: '',
    location: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_FORGOT_STATE:
      return {
        ...state,
        forgotPasswordReducer: {
          ...state.forgotPasswordReducer,
          isLoading: false,
          isSuccess: false,
          message: '',
          code: 0,
          data: {},
        },
      };
    case RESET_REDUCER:
      return initialState;
    case POST_LOGIN_PENDING:
      return {
        ...state,
        login: { ...state.login, isLoading: true, isSuccess: true },
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_LOGIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case POST_FORGOT_PASSWORD_PENDING:
      return {
        ...state,
        forgotPasswordReducer: {
          ...state.forgotPasswordReducer,
          code: 0,
          isLoading: true,
          isSuccess: true,
        },
      };
    case POST_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordReducer: {
          ...state.forgotPasswordReducer,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPasswordReducer: {
          ...state.forgotPasswordReducer,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case VALIDATE_OTP_PENDING:
      return {
        ...state,
        validateOTP: {
          ...state.validateOTP,
          isLoading: true,
        },
      };
    case VALIDATE_OTP_SUCCESS:
      return {
        ...state,
        validateOTP: {
          ...state.validateOTP,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case VALIDATE_OTP_ERROR:
      return {
        ...state,
        validateOTP: {
          ...state.validateOTP,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case POST_CHANGE_PASSWORD_PENDING:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          isLoading: true,
        },
      };
    case POST_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case POST_LOGOUT_PENDING:
      return {
        ...state,
        logout: { ...state.logout, isLoading: true },
      };
    case POST_LOGOUT_SUCCESS:
      return {
        ...state,
        logout: {
          ...state.logout,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_LOGOUT_ERROR:
      return {
        ...state,
        logout: {
          ...state.logout,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case GET_PROFILE_PENDING:
      return {
        ...state,
        profile: { ...state.profile, isLoading: true },
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case POST_CHANGE_PASSWORD_PROFILE_PENDING:
      return {
        ...state,
        changePasswordProfile: {
          ...state.changePasswordProfile,
          isLoading: true,
        },
      };
    case POST_CHANGE_PASSWORD_PROFILE_SUCCESS:
      return {
        ...state,
        changePasswordProfile: {
          ...state.changePasswordProfile,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_CHANGE_PASSWORD_PROFILE_ERROR:
      return {
        ...state,
        changePasswordProfile: {
          ...state.changePasswordProfile,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case SHOW_ALERT_PROFILE:
      return {
        ...state,
        alertProfile: {
          ...state.alertProfile,
          isVisible: true,
          message: payload,
        },
      };
    case CLOSE_ALERT_PROFILE:
      return {
        ...state,
        alertProfile: {
          ...state.alertProfile,
          isVisible: false,
          message: '',
        },
      };
    case POST_EDIT_PROFILE_PENDING:
      return {
        ...state,
        editProfile: {
          ...state.editProfile,
          isLoading: true,
        },
      };
    case POST_EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfile: {
          ...state.editProfile,
          isLoading: false,
          isSuccess: payload.success,
          message: payload.message,
          code: payload.code,
          data: payload.data,
        },
      };
    case POST_EDIT_PROFILE_ERROR:
      return {
        ...state,
        editProfile: {
          ...state.editProfile,
          isLoading: false,
          isSuccess: payload ? payload.success : false,
          message: payload ? payload.message : '',
          code: payload ? payload.code : 504,
        },
      };
    case SET_FORM_PROFILE:
      return {
        ...state,
        formEdit: {
          ...state.formEdit,
          name: state.profile.data.name,
          password: '',
          photoProfile: state.profile.data.image,
          skill: state.profile.data.skill,
          phoneNumber: state.profile.data.phoneNumber,
          engineerId: state.profile.data.engineerId,
          email: state.profile.data.email,
          vendor: state.profile.data.vendor,
          location: state.profile.data.location,
        },
      };
    case SET_FORM_PROFILE_IMAGE:
      return {
        ...state,
        formEdit: {
          ...state.formEdit,
          photoProfile: payload.url,
          photoBase64: payload.base64,
        },
      };
    case SET_FORM_PROFILE_NAME:
      return {
        ...state,
        formEdit: {
          ...state.formEdit,
          name: payload,
        },
      };
    case SET_FORM_PROFILE_PHONE:
      return {
        ...state,
        formEdit: {
          ...state.formEdit,
          phoneNumber: payload,
        },
      };
    case SET_FORM_PROFILE_SKILL:
      return {
        ...state,
        formEdit: {
          ...state.formEdit,
          skill: payload,
        },
      };
    case SET_FORM_PROFILE_PASSWORD:
      return {
        ...state,
        formEdit: {
          ...state.formEdit,
          password: payload,
        },
        editProfile: {
          ...state.editProfile,
          code: 0,
        },
      };
    default:
      return state;
  }
};
