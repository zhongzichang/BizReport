import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import {fetchPerformanceDataSuccess} from './fetch-data-success';
import config from '../../lib/config';

export const fetchPerformanceData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    return getData(config.API_URL_PERFORMANCE)
      .then((data) => dispatch(fetchPerformanceDataSuccess(data)))
      .catch((err) => dispatch(fetchDataError(err)));
  }
);
