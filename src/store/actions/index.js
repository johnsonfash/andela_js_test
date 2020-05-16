/* eslint-disable linebreak-style */
import { history } from '../../routes';

// ui actions
export { userUiStartLoading, userUiStopLoading } from './ui';

// user actions
export { setUser, getUser } from './user';

const removeAuthenticatedState = () => {
  console.log('remove token and authenticated parameters from local storage');
};

const reset = () => ({
  type: 'RESET_APP'
});

export const resetApp = () => async (dispatch) => {
  removeAuthenticatedState();
  dispatch(reset());
  history.push('/');
};
