import {
  INIT_APP_START,
  INIT_APP_COMPLETED,
} from '../constants/action-names';

const initialState = {
  initAppInfo: {},
  isLoading: false,
  error: false,
};

export const getInitAppSelector = (state : Object) => ({...state.initApp});

const initAppReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case INIT_APP_START: {
      return {
        isLoading: true,
        error: false,
        initAppInfo: action.payload,
      };
    }
    case INIT_APP_COMPLETED: {
      return {
        isLoading: false,
        error: false,
        initAppInfo: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default initAppReducer;
