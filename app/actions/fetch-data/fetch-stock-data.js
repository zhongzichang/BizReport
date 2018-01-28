import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_STOCK_DATA_SUCCESS} from '../../constants/action-names';


export const fetchStockData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    return getData(config.API_URL_STOCK)
      .then((data) => dispatch(
        fetchStockDataSuccess(data.map(item => {item.key=item.id; return item})))
      )
      .catch((err) => dispatch(fetchDataError(err)));
  }
);

fetchStockDataSuccess = (data : Object) => (
  {
    type: FETCH_STOCK_DATA_SUCCESS,
    payload: {data},
  }
);
