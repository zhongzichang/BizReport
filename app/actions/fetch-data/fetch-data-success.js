import {FETCH_DATA_SUCCESS} from '../../constants/action-names';

export const fetchDataSuccess = (performanceInfo : Object) => (
  {
    type: FETCH_DATA_SUCCESS,
    payload: {performanceInfo},
  }
);
