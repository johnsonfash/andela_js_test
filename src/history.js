/* eslint-disable linebreak-style */

// @desc  Import for browser history. Used to push pages, goBack, goForward, etc
// @use   import { history } from 'routes'; history.push('/sign-in')
const { createBrowserHistory } = require('history');

export default createBrowserHistory();
