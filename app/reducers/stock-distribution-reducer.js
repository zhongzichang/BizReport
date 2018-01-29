import {
  FETCH_STOCK_DISTRIBUTION_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  stockInfo: {},
  isLoading: false,
  error: false,
};

export const getStockDistributionSelector = (state : Object) =>
  ({...state.stockDistribution});

const stockDistributionReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_STOCK_DISTRIBUTION_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        stockDistributionInfo: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default stockDistributionReducer;
