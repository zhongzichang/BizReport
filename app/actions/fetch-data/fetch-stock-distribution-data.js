import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_STOCK_DISTRIBUTION_DATA_SUCCESS} from '../../constants/action-names';
import {FETCH_STOCK_DISTRIBUTION_DATA_ERROR} from '../../constants/action-names';


export const fetchStockDistributionData = (shop_id,product_id) => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(global.api_url_stock_distribution+
      "?shop_id="+shop_id+"&m_product_id="+product_id)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchStockDistributionDataSuccess(respJson));
          } else {
            //console.warn(respJson);
            dispatch(fetchStockDistributionDataError(respJson));
          }
        }
      )
      .catch( err => {
        console.warn(err);
        dispatch(fetchDataError(err));
      });
  }
);

fetchStockDistributionDataSuccess = (resp : Object) => (
  {
    type: FETCH_STOCK_DISTRIBUTION_DATA_SUCCESS,
    payload: {resp},
  }
);

fetchStockDistributionDataError = (resp : Object) => (
  {
    type: FETCH_STOCK_DISTRIBUTION_DATA_ERROR,
    payload: {resp},
  }
);
