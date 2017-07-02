import { CLIENT_ID, SCOPES } from './settings.json';

/* eslint-disable no-undef */
export default {
  loadApi() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    document.body.appendChild(script);

    return new Promise((resolve, reject) => {
      script.onload = () => {
        gapi.load('client', () => {
          gapi.client.load('tasks', 'v1', () => gapi.client.load('plus', 'v1', () => resolve()));
        });
      };
      script.onerror = (err) => reject(err);
    });
  },
  authorize(params) {
    return new Promise((resolve) => {
      gapi.auth.authorize({
        'client_id': CLIENT_ID,
        'scope': SCOPES,
        'immediate': params.immediate,
        'cookie_policy': 'single_host_origin',
      }, (authResult) => {
        resolve(authResult);
      });
    });
  },
  init(...params) {
    return this.loadApi()
      .then(() => this.authorize(...params));
  },
};
