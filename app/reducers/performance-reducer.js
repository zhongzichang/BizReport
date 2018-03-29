import {
  FETCH_PERFORMANCE_DATA_SUCCESS,
  FETCH_PERFORMANCE_DATA_ERROR,
  FETCH_PERFORMANCE_DATA_REQUEST
} from '../constants/action-names';

const initialState = {
  isLoading: false,
  error: false,
  resp: {}
};

export const getPerformanceSelector = (state : Object) => ({...state.performance});

const performanceReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_PERFORMANCE_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        resp: action.payload.resp,
      };
    }
    case FETCH_PERFORMANCE_DATA_ERROR: {
      return {
        isLoading: false,
        error: true,
        resp: action.payload.resp,
      };
    }
    case FETCH_PERFORMANCE_DATA_REQUEST: {
      return {
        isLoading: true,
      }
    }
    default: {
      return state;
    }
  }
};

export default performanceReducer;
