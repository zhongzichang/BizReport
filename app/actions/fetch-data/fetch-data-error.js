import {FETCH_DATA_ERROR} from '../../constants/action-names';

export const fetchDataError = (data) => (
  {
    type: FETCH_DATA_ERROR,
    payload: data,
  }
);
