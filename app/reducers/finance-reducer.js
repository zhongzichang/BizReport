import {
  FETCH_FINANCE_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  financeInfo: {},
  isLoading: false,
  error: false,
};

export const getFinanceSelector = (state : Object) => ({...state.finance});

const financeReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_FINANCE_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        financeInfo: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default financeReducer;
