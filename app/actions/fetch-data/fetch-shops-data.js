import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_SHOPS_DATA_SUCCESS} from '../../constants/action-names';
import {FETCH_SHOPS_DATA_ERROR} from '../../constants/action-names';
import {FETCH_SHOPS_DATA_REQUEST} from '../../constants/action-names';


export const fetchShopsData = (page=0,size=30,keyword='') => (
  (dispatch : Function) => {
    dispatch(fetchShopsDataRequest());

    getData(global.api_url_shops+
      "?page="+page+"&size="+size+"&keyword="+keyword)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchShopsDataSuccess(respJson));
          } else {
            dispatch(fetchShopsDataError(respJson));
          }
        }
      )
      .catch( err => {
        console.warn(err);
        dispatch(fetchDataError(err));
      });
  }
);

fetchShopsDataSuccess = (resp : Object) => (
  {
    type: FETCH_SHOPS_DATA_SUCCESS,
    payload: {resp},
  }
);

fetchShopsDataError = (resp : Object) => (
  {
    type: FETCH_SHOPS_DATA_ERROR,
    payload: {resp},
  }
);

fetchShopsDataRequest = (resp : Object) => (
  {
    type: FETCH_SHOPS_DATA_REQUEST,
    payload: {isLoading: true},
  }
);
