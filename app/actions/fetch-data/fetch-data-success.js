import {FETCH_DATA_SUCCESS} from '../../constants/action-names';

export const fetchDataSuccess = (actionType : String, data : Object) => (
  {
    type: {actionType},
    payload: {data},
  }
