import {getData} from '../../services/http-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import global from '../../services/global';
import {FETCH_LOGOUT_DATA_SUCCESS} from '../../constants/action-names';
import {FETCH_LOGOUT_DATA_ERROR} from '../../constants/action-names';
import {FETCH_LOGOUT_DATA_REQUEST} from '../../constants/action-names';

export const fetchLogoutData = () => (
  (dispatch : Function) => {
    dispatch(fetchLogoutDataSuccess({status:0,message:"退出成功"}));
  }
);

fetchLogoutDataSuccess = (resp : Object) => (
  {
    type: FETCH_LOGOUT_DATA_SUCCESS,
    payload: {resp},
  }
);

fetchLogoutDataError = (resp : Object) => (
  {
    type: FETCH_LOGOUT_DATA_ERROR,
    payload: {resp},
  }
);

fetchLogoutDataRequest = (resp : Object) => (
  {
    type: FETCH_LOGOUT_DATA_REQUEST,
    payload: {isLoading: true},
  }
);
