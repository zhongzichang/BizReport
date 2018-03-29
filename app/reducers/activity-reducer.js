import {
  FETCH_ACTIVITY_DATA_SUCCESS,
  FETCH_ACTIVITY_DATA_ERROR,
  FETCH_ACTIVITY_DATA_REQUEST
} from '../constants/action-names';

const initialState = {
  isLoading: false,
  error: false,
  resp: {},
};

export const getActivitySelector = (state : Object) => ({...state.activity});

const activityReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_ACTIVITY_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        resp: action.payload.resp,
      };
    }
    case FETCH_ACTIVITY_DATA_ERROR: {
      return {
        isLoading: false,
        error: true,
        resp: action.payload.resp,
      };
    }
    case FETCH_ACTIVITY_DATA_REQUEST: {
      return {
        isLoading: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default activityReducer;
