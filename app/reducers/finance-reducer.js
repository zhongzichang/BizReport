import {
  FETCH_FINANCE_DATA_SUCCESS,
  FETCH_FINANCE_DATA_ERROR,
  FETCH_FINANCE_DATA_REQUEST
} from '../constants/action-names';

const initialState = {
  isLoading: false,
  error: false,
  resp: {}
};

export const getFinanceSelector = (state : Object) => ({...state.finance});

const financeReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_FINANCE_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        resp: action.payload.resp,
      };
    }
    case FETCH_FINANCE_DATA_ERROR: {
      return {
        isLoading: false,
        error: true,
        resp: action.payload.resp,
      };
    }
    case FETCH_FINANCE_DATA_REQUEST: {
      return {
        isLoading: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default financeReducer;
