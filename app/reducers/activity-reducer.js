import {
  FETCH_ACTIVITY_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  activityInfo: {},
  isLoading: false,
  error: false,
};

export const getActivitySelector = (state : Object) => ({...state.activity});

const activityReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_ACTIVITY_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        activityInfo: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default activityReducer;
