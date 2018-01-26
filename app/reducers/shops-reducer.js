import {
  FETCH_SHOPS_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  shopsInfo: {},
  isLoading: false,
  error: false,
};

export const getShopsSelector = (state : Object) => ({...state.shops});

const shopsReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_SHOPS_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        shopsInfo: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default shopsReducer;
