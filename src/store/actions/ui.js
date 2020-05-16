/* eslint-disable linebreak-style */
import { USER_UI_START_LOADING, USER_UI_STOP_LOADING } from './actionTypes';

export const userUiStartLoading = () => ({
  type: USER_UI_START_LOADING
});

export const userUiStopLoading = () => ({
  type: USER_UI_STOP_LOADING
});
