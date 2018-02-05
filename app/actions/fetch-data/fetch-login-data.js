import {postData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_LOGIN_DATA_SUCCESS} from '../../constants/action-names';


export const fetchLoginData = (username, password) => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    postData(config.API_URL_LOGIN, { username: username, password: password})
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchLoginDataSuccess(respJson.data));
          } else {
            console.warn(respJson);
            dispatch(fetchDataError(respJson));
          }
        }
      )
      .catch( err => {
        console.warn(err);
        dispatch(fetchDataError(err));
      });
  }
);

fetchLoginDataSuccess = (data : Object) => (
  {
    type: FETCH_LOGIN_DATA_SUCCESS,
    payload: {data},
  }
);
