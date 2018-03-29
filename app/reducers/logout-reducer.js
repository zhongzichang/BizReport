import {
  FETCH_LOGOUT_DATA_SUCCESS,
  FETCH_LOGOUT_DATA_ERROR,
  FETCH_LOGOUT_DATA_REQUEST
} from '../constants/action-names';
import {makeLogout} from '../services/make-logout';

const initialState = {
  isLoading: false,
  error: false,
  logoutResp: {}
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
        logoutResp: action.payload.resp,
      };
    }
    case FETCH_LOGOUT_DATA_ERROR: {
      return {
        isLoading: false,
        error: true,
        logoutResp: action.payload.resp,
      };
    }
    case FETCH_LOGOUT_DATA_REQUEST: {
      return {
        isLoading: true,
      }
    }
    default: {
      return state;
    }
  }
};

export default logoutReducer;
