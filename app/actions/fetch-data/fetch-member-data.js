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
        (data) => dispatch(
          fetchMemberDataSuccess(data)
        )
      )
      .catch((err) => dispatch(fetchDataError(err)));
  }
);

fetchMemberDataSuccess = (data : Object) => (
  {
    type: FETCH_MEMBER_DATA_SUCCESS,
    payload: {data},
  }
);
