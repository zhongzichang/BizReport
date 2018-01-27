import {postData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_LOGIN_DATA_SUCCESS} from '../../constants/action-names';


export const fetchLoginData = (username, password) => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    return postData(config.API_URL_LOGIN, { username: username, password: password})
      .then((data) => dispatch(
        fetchLoginDataSuccess(data))
      )
      .catch(
        (err) => dispatch(fetchDataError(err))
      );
  }
);

fetchLoginDataSuccess = (data : Object) => (
  {
    type: FETCH_LOGIN_DATA_SUCCESS,
    payload: {data},
  }
);
