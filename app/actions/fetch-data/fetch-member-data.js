import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_MEMBER_DATA_SUCCESS} from '../../constants/action-names';


export const fetchMemberData = (shop_id) => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(global.api_url_member+"?shop_id="+shop_id)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchMemberDataSuccess(respJson.data));
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

fetchMemberDataSuccess = (data : Object) => (
  {
    type: FETCH_MEMBER_DATA_SUCCESS,
    payload: {data},
  }
);
