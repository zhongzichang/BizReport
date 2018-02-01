import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_SHOPS_DATA_SUCCESS} from '../../constants/action-names';


export const fetchShopsData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(config.API_URL_SHOPS)
      .then(
        (data) => dispatch(
          fetchShopsDataSuccess(data)
        )
      )
      .catch((err) => dispatch(fetchDataError(err)));
  }
);

fetchShopsDataSuccess = (data : Object) => (
  {
    type: FETCH_SHOPS_DATA_SUCCESS,
    payload: {data},
  }
);
