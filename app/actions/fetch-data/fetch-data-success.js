import {FETCH_DATA_SUCCESS, FETCH_PERFORMANCE_DATA_SUCCESS} from '../../constants/action-names';

export const fetchDataSuccess = (data : Object) => (
  {
    type: FETCH_DATA_SUCCESS,
    payload: {data},
  }
);
export const fetchPerformanceDataSuccess = (data : Object) => (
  {
    type: FETCH_PERFORMANCE_DATA_SUCCESS,
    payload: {data},
  }
);
