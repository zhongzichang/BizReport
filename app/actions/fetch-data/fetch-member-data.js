import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_MEMBER_DATA_SUCCESS} from '../../constants/action-names';
import {FETCH_MEMBER_DATA_ERROR} from '../../constants/action-names';
import {FETCH_MEMBER_DATA_REQUEST} from '../../constants/action-names';


export const fetchMemberData = (shop_id) => (
  (dispatch : Function) => {
    dispatch(fetchMemberDataRequest());
    getData(global.api_url_member+"?shop_id="+shop_id)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchMemberDataSuccess(respJson));
          } else {
            dispatch(fetchMemberDataError(respJson));
          }
        }
      )
      .catch( err => {
        console.warn(err);
        dispatch(fetchDataError(err));
      });
  }
);

fetchMemberDataSuccess = (resp : Object) => (
  {
    type: FETCH_MEMBER_DATA_SUCCESS,
    payload: {resp},
  }
);

fetchMemberDataError = (resp : Object) => (
  {
    type: FETCH_MEMBER_DATA_ERROR,
    payload: {resp},
  }
);

fetchMemberDataRequest = (resp : Object) => (
  {
    type: FETCH_MEMBER_DATA_REQUEST,
    payload: {isLoading: true},
  }
);
