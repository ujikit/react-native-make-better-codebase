/* global fetch:false */
import { API_URL, Authorization } from '@env';
import AsyncStorage from '@react-native-community/async-storage';

import I18n from '../i18n';
import { STORAGE_KEY } from '../constants';
import IMAGES from '../configs/images';
import { store } from '../redux/redux-store/store';
import { showModal } from '../redux/redux-actions';

export const config = {
  baseUrl: API_URL,
};

export const STATUS_CODE = {
  OK: 200,
  NOT_FOUND: 404,
  NO_CONTENT: 204,
};

const futch = (url, opts = {}, onProgress) => {
  let xhr = new XMLHttpRequest();
  let promise = new Promise((res, rej) => {
    xhr.open(opts.method || 'get', url);
    for (let k in opts.headers || {}) {
      xhr.setRequestHeader(k, opts.headers[k]);
    }
    xhr.onload = (e) => res(e.target);
    xhr.onerror = rej;
    if (xhr.upload && onProgress) {
      xhr.upload.onprogress = onProgress;
    }
    xhr.send(opts.body);
  });
  promise.abort = () => xhr.abort();
  return promise;
};

const futchData = async (url, params, progress, isForm = false) => {
  const token = await AsyncStorage.getItem(STORAGE_KEY.TOKEN_LOGIN);

  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization,
  };

  if (isForm) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization,
    };
  }

  if (token) {
    if (
      url === `${config.baseUrl}engineer/v1/login` ||
      url === `${config.baseUrl}engineer/v1/send-forgot` ||
      url === `${config.baseUrl}report/v1/water/list-unit` ||
      url.includes(`${config.baseUrl}advertising/v1/mobile/popup`) ||
      url.includes(`${config.baseUrl}info/v1/version`)
    ) {
      headers = {
        ...headers,
        Authorization: Authorization,
      };
    } else {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }

  const response = await futch(
    url,
    {
      ...params,
      headers,
    },
    progress
  );
  if (response.status === STATUS_CODE.NO_CONTENT) {
    return {};
  }

  const json = JSON.parse(response._response);

  return json;
};

const fetchData = async (url, abort, params, customHeaders, isForm = false) => {
  const token = await AsyncStorage.getItem(STORAGE_KEY.TOKEN_LOGIN);

  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization,
    ...customHeaders,
  };

  if (isForm) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization,
      ...customHeaders,
    };
  }

  if (token) {
    if (
      url === `${config.baseUrl}engineer/v1/login` ||
      url === `${config.baseUrl}engineer/v1/send-forgot` ||
      url === `${config.baseUrl}report/v1/water/list-unit` ||
      url.includes(`${config.baseUrl}advertising/v1/mobile/popup`) ||
      url.includes(`${config.baseUrl}info/v1/version`)
    ) {
      headers = {
        ...headers,
        Authorization: Authorization,
      };
    } else {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }

  try {
    const response = await fetch(url, {
      ...params,
      headers,
      signal: abort,
    });
    if (response.status === STATUS_CODE.NO_CONTENT) {
      return {};
    }
    const json = await response.json();

    if (json.code >= 500) {
      store.dispatch(
        showModal({
          isVisible: true,
          sourceImage: IMAGES.underMaintenance,
          title: I18n.t('error.pageUnderMaintenance'),
          desc: I18n.t('error.pageUnderMaintenanceDesc'),
        })
      );
    }
    return json;
  } catch (error) {
    console.log('error_networking', error);
    if (error.message === 'Network request failed') {
      store.dispatch(
        showModal({
          isVisible: true,
          sourceImage: IMAGES.networkTwo,
          title: I18n.t('error.noInternet'),
          desc: I18n.t('error.noInternetDesc'),
        })
      );
    }
  }
};

const get = async (endpoint, abort = null, params = {}, headers = {}) => {
  let queryString = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  if (queryString.length > 0) {
    queryString = `?${queryString}`;
  }
  const url = `${config.baseUrl}${endpoint}${queryString}`;
  const fetchParams = {
    method: 'GET',
  };

  return fetchData(url, abort, fetchParams, headers);
};

const post = async (
  endpoint,
  abort = null,
  params = {},
  headers = {},
  isForm = false
) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'POST',
    body: JSON.stringify(params),
  };
  return fetchData(url, abort, fetchParams, headers, isForm);
};

const postForm = async (endpoint, abort = null, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'POST',
    body: params,
  };
  return fetchData(url, abort, fetchParams, headers, true);
};

const postWithProgress = async (
  endpoint,
  params = {},
  progress,
  isForm = false
) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'POST',
    body: isForm ? params : JSON.stringify(params),
  };
  return futchData(url, fetchParams, progress, isForm);
};

const patch = async (endpoint, abort = null, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'PATCH',
    body: JSON.stringify(params),
  };
  return fetchData(url, abort, fetchParams, headers);
};

const put = async (endpoint, abort = null, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'PUT',
    body: JSON.stringify(params),
  };
  return fetchData(url, abort, fetchParams, headers);
};

const remove = async (endpoint, abort = null, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'DELETE',
  };
  return fetchData(url, abort, fetchParams, headers);
};

export { get, post, postForm, put, patch, remove, postWithProgress };
