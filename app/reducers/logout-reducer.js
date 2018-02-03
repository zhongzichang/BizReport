import {
  FETCH_LOGOUT_DATA_SUCCESS,
} from '../constants/action-names';
import {makeLogout} from '../services/make-logout';

const initialState = {
  logoutInfo: {},
  isLoading: false,
  error: false,
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
        logoutInfo: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default logoutReducer;
