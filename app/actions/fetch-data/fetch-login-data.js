import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_LOGIN_DATA_SUCCESS} from '../../constants/action-names';
import {FETCH_LOGIN_DATA_ERROR} from '../../constants/action-names';
import {FETCH_LOGIN_DATA_REQUEST} from '../../constants/action-names';


export const fetchLoginData = (username, password) => (
  (dispatch : Function) => {
    dispatch(fetchLoginDataRequest());
    getData(global.api_url_login + "?username=" + username + "&password=" + password)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchLoginDataSuccess(respJson));
          } else {
            dispatch(fetchLoginDataError(respJson));
          }
        }
      )
      .catch( err => {
        console.warn(err);
        dispatch(fetchDataError(err));
      });
  }
);

fetchLoginDataSuccess = (resp : Object) => (
  {
    type: FETCH_LOGIN_DATA_SUCCESS,
    payload: {resp},
  }
);

fetchLoginDataError = (resp : Object) => (
  {
    type: FETCH_LOGIN_DATA_ERROR,
    payload: {resp},
  }
);


fetchLoginDataRequest = (resp : Object) => (
  {
    type: FETCH_LOGIN_DATA_REQUEST,
    payload: {isLoading: true},
  }
);
