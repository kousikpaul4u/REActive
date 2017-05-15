import { Promise } from 'es6-promise';

export function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url, { credentials: 'same-origin' })
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => resolve(json));
        } else {
          reject(response);
        }
      });
  });
}

export function post(url, json) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      credentials: 'same-origin',
      method: 'post',
      headers: {
        Accept: ['application/json', 'application/pdf', 'application/msword',
        'multipart/form-data'],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    }).then((response) => {
      if (response.ok) {
        response.json().then((responseJson) => resolve(responseJson));
      } else {
        reject(response);
      }
    });
  });
}

export function put(url, json) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      credentials: 'same-origin',
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    }).then((response) => {
      if (response.ok) {
        response.json().then((responseJson) => resolve(responseJson));
      } else {
        reject(response);
      }
    });
  });
}

export function delete_(url, json) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      credentials: 'same-origin',
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    }).then((response) => {
      if (response.ok) {
        response.json().then((responseJson) => resolve(responseJson));
      } else {
        reject(response);
      }
    });
  });
}
