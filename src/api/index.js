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
        immediate,
        cookie_policy: 'single_host_origin',
      }, (authResult) => {
        resolve(authResult);
      });
    });
  },

  /**
   * Sign out of Gmail
   * 
   * @returns {Promise}
   */
  signout() {
    gapi.auth.setToken(null);

    return gapi.auth.signOut();
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

  /**
   * Fetch single tasks list 
   * 
   * @param {String} taskListId 
   * @returns {Promise}
   */
  fetchTasksListItem(tasklist) {
    const request = gapi.client.tasks.tasks.list({
      tasklist,
    });

    return new Promise((resolve) => request.execute(resp => resolve(resp)));
  },

  /**
   * Insert task list
   * 
   * @param {Object} { title, } 
   * @returns {Promise}
   */
  insertTaskList({ title, }) {
    const request = gapi.client.tasks.tasklists.insert({
      title,
    });

    return new Promise((resolve) => request.execute(resp => resolve(resp)));
  },
};
