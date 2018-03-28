import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_FINANCE_DATA_SUCCESS} from '../../constants/action-names';
import {FETCH_FINANCE_DATA_ERROR} from '../../constants/action-names';


export const fetchFinanceData = (shop_id) => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(global.api_url_finance+"?shop_id="+shop_id)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchFinanceDataSuccess(respJson));
          } else {
            //console.warn(respJson);
            dispatch(fetchFinanceDataError(respJson));
          }
        }
      )
      .catch( err => {
        console.warn(err);
        dispatch(fetchDataError(err));
      });
  }
);

fetchFinanceDataSuccess = (resp : Object) => (
  {
    type: FETCH_FINANCE_DATA_SUCCESS,
    payload: {resp},
  }
);

fetchFinanceDataError = (resp : Object) => (
  {
    type: FETCH_FINANCE_DATA_ERROR,
    payload: {resp},
  }
);
