import * as settings from 'common/settings';

export const createURL = (request_payload) => {
  let para = '';
  for (let key in request_payload) {
    if (key === 'method') para += `?method=${request_payload[key]}`;
    else para += `&${key}=${request_payload[key]}`;
  }
  const requestPath = `${settings.FLICKR_BASE_URL}${para}&format=json&nojsoncallback=1`;
  return requestPath;
}