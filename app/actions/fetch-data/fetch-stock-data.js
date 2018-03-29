import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_STOCK_DATA_SUCCESS} from '../../constants/action-names';
import {FETCH_STOCK_DATA_ERROR} from '../../constants/action-names';
import {FETCH_STOCK_DATA_REQUEST} from '../../constants/action-names';


export const fetchStockData = (shop_id) => (
  (dispatch : Function) => {
    dispatch(fetchStockDataRequest());
    getData(global.api_url_stock+"?shop_id="+shop_id)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchStockDataSuccess(respJson));
          } else {
            dispatch(fetchStockDataError(respJson));
          }
        }
      )
      .catch( err => {
        console.warn(err);
        dispatch(fetchDataError(err));
      });
  }
);

fetchStockDataSuccess = (resp : Object) => (
  {
    type: FETCH_STOCK_DATA_SUCCESS,
    payload: {resp},
  }
);

fetchStockDataError = (resp : Object) => (
  {
    type: FETCH_STOCK_DATA_ERROR,
    payload: {resp},
  }
);

fetchStockDataRequest = (resp : Object) => (
  {
    type: FETCH_STOCK_DATA_REQUEST,
    payload: {isLoading: true},
  }
);
