/* eslint-disable linebreak-style */
import { USER_UI_START_LOADING, USER_UI_STOP_LOADING } from '../actions/actionTypes';

const initialState = {
  isUserLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_UI_START_LOADING:
      return {
        ...state,
        isUserLoading: true
      };
    case USER_UI_STOP_LOADING:
      return {
        ...state,
        isUserLoading: false
      };
    default:
      return state;
  }
};
