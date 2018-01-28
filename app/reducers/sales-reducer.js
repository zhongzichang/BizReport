import {
  FETCH_SALES_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  stockInfo: {},
  isLoading: false,
  error: false,
};

export const getSalesSelector = (state : Object) => ({...state.sales});

const salesReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_SALES_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        salesInfo: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default salesReducer;
