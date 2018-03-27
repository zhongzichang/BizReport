import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_FINANCE_DATA_SUCCESS} from '../../constants/action-names';


export const fetchFinanceData = (shop_id) => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(global.api_url_finance+"?shop_id="+shop_id)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchFinanceDataSuccess(respJson.data));
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

fetchFinanceDataSuccess = (data : Object) => (
  {
    type: FETCH_FINANCE_DATA_SUCCESS,
    payload: {data},
  }
);
