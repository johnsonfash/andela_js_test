/* eslint-disable linebreak-style */

// @desc  Use secure-ls to store sensitive data in the local storage. It encrypts the data.
// @use   Instead of localStorage, use ls.
// @ex.   Check this file for examples.
import SecureLS from 'secure-ls';

const ls = new SecureLS();

export const isAuthenticated = () => ls.get('token');
export const isAuthType = () => ls.get('refresh');

// export const getAuthorizationHeader = () => `Bearer ${isAuthenticated()}`;

export const removeAuthenticatedState = () => {
  ls.remove('token');
  ls.remove('refresh');
};

export const authenticateUser = (token, refreshToken) => {
  ls.set('token', token);
  ls.set('refresh', refreshToken);
};

export default {
  isAuthenticated,
  removeAuthenticatedState,
  authenticateUser
};
