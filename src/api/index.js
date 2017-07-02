import { CLIENT_ID, SCOPES } from './settings.json';
import { compose } from '../helpers/apisCompose';

/* eslint-disable no-undef */
export default {
  /**
   * load google api
   * 
   * @returns {Promise}
   */
  loadApi() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    document.body.appendChild(script);

    return new Promise((resolve, reject) => {
      script.onload = () => {
        gapi.load('client', () => {
          compose({
            apis: [
              { api: 'tasks', version: 'v1', },
              { api: 'plus', version: 'v1', },
            ],
            load: gapi.client.load,
            resolve,
          })();
        });
      };
      script.onerror = (err) => reject(err);
    });
  },
  /**
   * Authenticate with Google
   * 
   * @param {Object} { immediate } 
   * @returns {Promise}
   */
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

  /**
   * Fetch tasks list
   * 
   * @returns {Promise}
   */
  fetchTasksLists() {
    const request = gapi.client.tasks.tasklists.list();

    return new Promise((resolve) => request.execute(resp => resolve(resp)));
  },
};
