import {
  FETCH_LOGOUT_DATA_SUCCESS,
  FETCH_LOGOUT_DATA_ERROR
} from '../constants/action-names';
import {makeLogout} from '../services/make-logout';

const initialState = {
  isLoading: false,
  error: false,
  resp: {}
};

export const getLogoutSelector = (state : Object) => ({...state.logout});

const logoutReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_LOGOUT_DATA_SUCCESS: {
      (async () => {
          await makeLogout();
      })();
      return {
        isLoading: false,
        error: false,
        resp: action.payload.resp,
      };
    }
    case FETCH_LOGOUT_DATA_ERROR: {
      return {
        isLoading: false,
        error: true,
        resp: action.payload.resp,
      };
    }
    default: {
      return state;
    }
  }
};

export default logoutReducer;
