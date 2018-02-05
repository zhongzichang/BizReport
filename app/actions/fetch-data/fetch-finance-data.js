import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_FINANCE_DATA_SUCCESS} from '../../constants/action-names';


export const fetchFinanceData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(config.API_URL_FINANCE)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchFinanceDataSuccess(respJson.data));
          } else {
            dispatch(fetchDataError(respJson));
          }
        }
      )
      .catch((err) => dispatch(fetchDataError(err)));
  }
);

fetchFinanceDataSuccess = (data : Object) => (
  {
    type: FETCH_FINANCE_DATA_SUCCESS,
    payload: {data},
  }
);
