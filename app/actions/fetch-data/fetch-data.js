import {fetchPerformanceData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import {fetchDataSuccess} from './fetch-data-success';

export const fetchData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    return fetchPerformanceData()
      .then((performanceInfo) => dispatch(fetchDataSuccess(performanceInfo)))
      .catch((err) => dispatch(fetchDataError(err)));
  }
);
