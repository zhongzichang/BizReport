import {
  FETCH_SHOPS_DATA_SUCCESS,
  FETCH_SHOPS_DATA_ERROR,
  FETCH_SHOPS_DATA_REQUEST
} from '../constants/action-names';

const initialState = {
  isLoading: false,
  error: false,
  resp: {}
};

export const getShopsSelector = (state : Object) => ({...state.shops});

const shopsReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_SHOPS_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        resp: action.payload.resp,
      };
    }
    case FETCH_SHOPS_DATA_ERROR: {
      return {
        isLoading: false,
        error: true,
        resp: action.payload.resp,
      };
    }
    case FETCH_SHOPS_DATA_REQUEST: {
      return {
        isLoading: true,
      }
    }
    default: {
      return state;
    }
  }
};

export default shopsReducer;
