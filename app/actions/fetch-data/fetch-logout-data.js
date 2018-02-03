import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_LOGOUT_DATA_SUCCESS} from '../../constants/action-names';


export const fetchLogoutData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(config.API_URL_LOGOUT)
      .then(
        (data) => dispatch(
          fetchLogoutDataSuccess(data)
        )
      )
      .catch((err) => dispatch(fetchDataError(err)));
  }
);

fetchLogoutDataSuccess = (data : Object) => (
  {
    type: FETCH_LOGOUT_DATA_SUCCESS,
    payload: {data},
  }
);
