import {
  get,
  post,
  patch,
  put,
  postForm,
  postWithProgress,
} from './networking';

export const endpoint = {
  //please short from a to z or by category if adding new api service

  //-auth services-//
  getBroadcast: async (abort, page, limit, type, dear) =>
    get(
      `feed/v1/tenant/list?page=${page}&limit=${limit}&type=${type}&dear=${dear}`,
      abort
    ),
  postForgotPassword: async (abort, params) =>
    post('engineer/v1/send-forgot', abort, params),
  validateOTP: async (abort, params) =>
    post('engineer/v1/validate', abort, params),
  postLogin: async (abort, params) => post('engineer/v1/login', abort, params),
  postChangePassword: async (abort, params) =>
    post('engineer/v1/change-password', abort, params),
  postChangePasswordProfile: async (abort, params) =>
    post('engineer/v1/profile/change-password', abort, params),
  postLogout: async (abort) => post('engineer/v1/logout', abort),

  //-profile services-//
  getProfile: async (abort) => get('engineer/v1/profile', abort),
  postEditProfile: async (params, progress) =>
    postWithProgress('engineer/v1/profile/edit', params, progress),

  //-water report services-//
  getListUnit: async (abort) => get('report/v1/water/list-unit', abort),
  getAllUnitStatus: async (abort, towerId, floor) =>
    get(
      `report/v1/water/list-unit-report?towerId=${towerId}&floor=${floor}&search=`,
      abort
    ),
  getWaterReportHistory: async (abort, unitId, towerId) =>
    get(
      `report/v1/history-water-report?unitId=${unitId}&towerId=${towerId}`,
      abort
    ),
  postWaterReport: async (params, progress) =>
    postWithProgress('report/v1/add-water-report', params, progress),
  postUpdateWaterReport: async (params, progress) =>
    postWithProgress('report/v1/update-water-report', params, progress),

  //-complaint services-//
  getAllComplaint: async (abort) => get('complaint/v1/engineer/all', abort),
  postAcceptComplaint: async (abort, params) =>
    post('complaint/v1/engineer/accept', abort, params),
  postFinishComplaint: async (params, progress) =>
    postWithProgress('complaint/v1/engineer/done', params, progress),

  //-handover services-//
  getAllHandover: async (abort, type, page, limit) =>
    get(
      `report/v1/list-handover?type=${type}&page=${page}&limit=${limit}`,
      abort
    ),
  postAddHandover: async (params, progress) =>
    postWithProgress('report/v1/add-handover', params, progress),
  postUpdateHandover: async (params, progress) =>
    postWithProgress('report/v1/update-handover', params, progress),

  //-maintenance--//
  getAllMaintenance: async (abort, params) =>
    get(
      `maintenance/v1/engineer/all?page=${params.page}&limit=${params.limit}&search=${params.search}`,
      abort
    ),
  postAssignMaintenance: async (body, progress) =>
    postWithProgress('maintenance/v1/engineer/assign', body, progress),
  postDoneMaintenance: async (progress, body) =>
    postWithProgress('maintenance/v1/engineer/done', body, progress),

  //-other service--//
  getBanner: async (abort) =>
    get('advertising/v1/mobile/popup?dear=engineer', abort),

  //-notification services-//
  getAllNotification: async (abort, page, limit) =>
    get(`notification/v1/engineer/all?page=${page}&limit=${limit}`, abort),

  //-update version services-//
  getVersionApp: async (abort, type, os) =>
    get(`info/v1/version?type=${type}&os=${os}`, abort),
};

export default endpoint;
