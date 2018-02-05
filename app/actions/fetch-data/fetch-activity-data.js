import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_ACTIVITY_DATA_SUCCESS} from '../../constants/action-names';


export const fetchActivityData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(config.API_URL_ACTIVITY)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchActivityDataSuccess(respJson.data));
          } else {
            dispatch(fetchDataError(respJson));
          }
        }
      )
      .catch((err) => dispatch(fetchDataError(err)));
  }
);

fetchActivityDataSuccess = (data : Object) => (
  {
    type: FETCH_ACTIVITY_DATA_SUCCESS,
    payload: {data},
  }
);
