import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_MEMBER_DATA_SUCCESS} from '../../constants/action-names';


export const fetchMemberData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(config.API_URL_MEMBER)
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
