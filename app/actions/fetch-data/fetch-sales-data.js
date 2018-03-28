import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_SALES_DATA_SUCCESS} from '../../constants/action-names';
import {FETCH_SALES_DATA_ERROR} from '../../constants/action-names';


export const fetchSalesData = (shop_id) => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(global.api_url_sales+"?shop_id="+shop_id)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchSalesDataSuccess(respJson));
          } else {
            //console.warn(respJson);
            dispatch(fetchSalesDataError(respJson));
          }
        }
      )
      .catch( err => {
        console.warn(err);
        dispatch(fetchDataError(err));
      });
  }
);

fetchSalesDataSuccess = (resp : Object) => (
  {
    type: FETCH_SALES_DATA_SUCCESS,
    payload: {resp},
  }
);

fetchSalesDataError = (resp : Object) => (
  {
    type: FETCH_SALES_DATA_ERROR,
    payload: {resp},
  }
);
