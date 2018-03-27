import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_PERFORMANCE_DATA_SUCCESS} from '../../constants/action-names';


export const fetchPerformanceData = (shopId) => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(global.api_url_performance+"?shop_id="+shopId)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchPerformanceDataSuccess(respJson.data));
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

fetchPerformanceDataSuccess = (data : Object) => (
  {
    type: FETCH_PERFORMANCE_DATA_SUCCESS,
    payload: {data},
  }
);
