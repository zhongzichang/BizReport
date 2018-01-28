import {
  FETCH_STOCK_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  stockInfo: {},
  isLoading: false,
  error: false,
};

export const getStockSelector = (state : Object) => ({...state.stock});

const stockReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_STOCK_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        stockInfo: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default stockReducer;
