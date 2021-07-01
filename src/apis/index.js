import { API_KEY } from '@env';

export const getLocationByCoordinate = async (lat, long, abort = null) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${long}&key=${API_KEY}&language=id&region=ID`,
    { signal: abort }
  );
  const json = await response.json();

  return json;
};

export const getLocationByAddress = async (address, abort = null) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}&language=id&region=ID`,
    { signal: abort }
  );
  const json = await response.json();

  return json;
};

export const getWeather = async (abort = null) => {
  const response = await fetch(
    'http://www.7timer.info/bin/api.pl?lon=106.8249641&lat=-6.1753924&product=civillight&output=json',
    { signal: abort }
  );
  const json = await response.json();

  return json;
};
