import { handleError, handleResponse } from './apiUtils';

const baseUrl = process.env.API_URL + 'waterprofiles/';

export function getWaterProfile(waterProfileId) {
  return fetch(baseUrl + waterProfileId + '?includeAdditions=true')
    .then(handleResponse)
    .catch(handleError);
}

export function getWaterProfiles() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveWaterProfile(waterProfile) {
  return fetch(baseUrl + (waterProfile.id || ''), {
    method: waterProfile.id ? 'PUT' : 'POST',
    header: { 'content-type': 'application/json' },
    body: JSON.stringify(waterProfile),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteWaterProfile(waterProfileId) {
  return fetch(baseUrl + waterProfileId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
