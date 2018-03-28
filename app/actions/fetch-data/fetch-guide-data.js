import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_GUIDE_DATA_SUCCESS} from '../../constants/action-names';
import {FETCH_GUIDE_DATA_ERROR} from '../../constants/action-names';


export const fetchGuideData = (shop_id) => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    getData(global.api_url_guide+"?shop_id="+shop_id)
      .then(
        (respJson) => {
          if(respJson.status == 0) {
            dispatch(fetchGuideDataSuccess(respJson));
          } else {
            //console.warn(respJson);
            dispatch(fetchGuideDataError(respJson));
          }
        }
      )
      .catch( err => {
        console.warn(err);
        dispatch(fetchDataError(err));
      });
  }
);

fetchGuideDataSuccess = (resp : Object) => (
  {
    type: FETCH_GUIDE_DATA_SUCCESS,
    payload: {resp},
  }
);


fetchGuideDataError = (resp : Object) => (
  {
    type: FETCH_GUIDE_DATA_ERROR,
    payload: {resp},
  }
);
