/* eslint-disable linebreak-style */
import axios from 'axios'
import { SET_USER, FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE, SIGN_USER_OUT } from './actionTypes';
import { userUiStartLoading, userUiStopLoading } from './ui';

export const setUser = (user) => ({
  type: SET_USER,
  user
});

export const fetchUserDataRequest = () => ({ type: FETCH_USER_DATA_REQUEST})
export const fetchUserDataSuccess = (userData) => ({ type: FETCH_USER_DATA_SUCCESS, payload: userData})
export const fetchUserDataFailure = (error) => ({ type: FETCH_USER_DATA_FAILURE, payload: error})
export const fetchUserOnline = (error) => ({type: FETCH_USER_ERROR, payload: error});



export const fetchUserData = (name) => async (dispatch) => {
  try {
    dispatch(fetchUserDataRequest())
    axios.get('https://my-json-server.typicode.com/johnerry/json_place_holder/'+name)
    .then( response => {
      const userData = response.data
      // console.log(userData)
      dispatch(fetchUserDataSuccess(userData))
    })
    .catch(error => {
      const errorMessage = error.message
      // console.log(errorMessage)
      dispatch(fetchUserDataFailure(errorMessage))
    })

  } catch (error) {
    // dispatch(fetchUserOnline(error))
  }

}



export const getUser = () => async (dispatch) => {
  try {
    // Make UI start loading was request started
    dispatch(userUiStartLoading());
    // Make necessary request to get the user, e.g
    // const res = await axios.get(`/user`);

    // Stop UI loading after response has been gotten
    dispatch(userUiStopLoading());
    // Performs necessary request after user has been gotten, e.g
    // Success:
    // if (res.success) {
    //   dispatch(setUser(res.body));
    //   return null;
    // }
    // Failure, Unauthorized:
    // if (res.status === 401) {
    //   dispatch(resetApp());
    //   return 0;
    // }
  } catch (error) {
    dispatch(userUiStopLoading());
    // If error occurs in getting user, e.g
    // return 'Something went wrong. Check your connection.';
  }
};
