import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_SALES_DATA_SUCCESS} from '../../constants/action-names';


export const fetchSalesData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(config.API_URL_SALES)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchSalesDataSuccess(respJson.data));
          } else {
            dispatch(fetchDataError(respJson));
          }
        }
      )
      .catch((err) => dispatch(fetchDataError(err)));
  }
);

fetchSalesDataSuccess = (data : Object) => (
  {
    type: FETCH_SALES_DATA_SUCCESS,
    payload: {data},
  }
);
