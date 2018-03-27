import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_SHOPS_DATA_SUCCESS} from '../../constants/action-names';


export const fetchShopsData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(global.api_url_shops)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchShopsDataSuccess(respJson.data));
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

fetchShopsDataSuccess = (data : Object) => (
  {
    type: FETCH_SHOPS_DATA_SUCCESS,
    payload: {data},
  }
);
