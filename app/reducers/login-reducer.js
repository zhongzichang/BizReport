import {
  FETCH_LOGIN_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  loginInfo: {},
  isLoading: false,
  error: false,
};

export const getLoginSelector = (state : Object) => ({...state.login});

const loginReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_LOGIN_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        loginInfo: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
