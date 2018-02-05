import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_STOCK_DISTRIBUTION_DATA_SUCCESS} from '../../constants/action-names';


export const fetchStockDistributionData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(config.API_URL_STOCK_DISTRIBUTION)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchStockDistributionDataSuccess(respJson.data));
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

fetchStockDistributionDataSuccess = (data : Object) => (
  {
    type: FETCH_STOCK_DISTRIBUTION_DATA_SUCCESS,
    payload: {data},
  }
);
