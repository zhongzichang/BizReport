import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_ACTIVITY_DATA_SUCCESS} from '../../constants/action-names';
import {FETCH_ACTIVITY_DATA_ERROR} from '../../constants/action-names';


export const fetchActivityData = (shop_id) => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(global.api_url_activity+"?shop_id="+shop_id)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchActivityDataSuccess(respJson));
          } else {
            //console.warn(respJson);
            dispatch(fetchActivityDataError(respJson));
          }
        }
      )
      .catch( err => {
        console.warn(err);
        dispatch(fetchDataError(err));
      });
  }
);

fetchActivityDataSuccess = (resp : Object) => (
  {
    type: FETCH_ACTIVITY_DATA_SUCCESS,
    payload: {resp},
  }
);


fetchActivityDataError = (resp : Object) => (
  {
    type: FETCH_ACTIVITY_DATA_ERROR,
    payload: {resp},
  }
);
