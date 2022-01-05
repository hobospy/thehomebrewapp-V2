import { handleError, handleResponse } from './apiUtils';

const baseUrl = process.env.API_URL + 'brews/';

export function getBrews() {
  return fetch(baseUrl + '?IncludeAdditionalInfo=1')
    .then(handleResponse)
    .catch(handleError);
}

export function saveBrew(brew) {
  return fetch(baseUrl + (brew.id || ''), {
    method: brew.id ? 'PUT' : 'POST',
    header: { 'content-type': 'application/json' },
    body: JSON.stringify(brew),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBrew(brewId) {
  return fetch(baseUrl + brewId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
