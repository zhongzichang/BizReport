import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import config from '../../lib/config';
import {FETCH_GUIDE_DATA_SUCCESS} from '../../constants/action-names';


export const fetchGuideData = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(config.API_URL_GUIDE)
      .then(
        (data) => dispatch(
          fetchGuideDataSuccess(data)
        )
      )
      .catch((err) => dispatch(fetchDataError(err)));
  }
);

fetchGuideDataSuccess = (data : Object) => (
  {
    type: FETCH_GUIDE_DATA_SUCCESS,
    payload: {data},
  }
);
