import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_PERFORMANCE_DATA_SUCCESS} from '../../constants/action-names';


export const fetchPerformanceData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    return getData(config.API_URL_PERFORMANCE)
      .then((data) => dispatch(fetchDataSuccess(data)))
      .catch((err) => dispatch(fetchDataError(err)));
  }
);

fetchDataSuccess = (data : Object) => (
  {
    type: FETCH_PERFORMANCE_DATA_SUCCESS,
    payload: {data},
  }
);
