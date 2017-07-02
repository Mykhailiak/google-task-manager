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
  authorize({ immediate, }) {
    return new Promise((resolve) => {
      gapi.auth.authorize({
        client_id: CLIENT_ID,
        scope: SCOPES,
        immediate: immediate,
        cookie_policy: 'single_host_origin',
      }, (authResult) => {
        resolve(authResult);
      });
    });
  },
};
