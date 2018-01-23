import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  performanceInfo: {},
  isLoading: false,
  error: false,
};

export const getPerformanceSelector = (state : Object) => ({...state.performance});

const performanceReducer = (state : Object = initialState, action : Object) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        performanceInfo: action.payload.performanceInfo,
      };
    }
    case FETCH_DATA_REQUEST: {
      return {
        isLoading: true,
        error: false,
        performanceInfo: {},
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default performanceReducer;
