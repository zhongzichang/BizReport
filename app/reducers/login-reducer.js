import {
  FETCH_LOGIN_DATA_SUCCESS,
} from '../constants/action-names';
import global from '../services/global';
import config from '../lib/config';

const initialState = {
  loginInfo: {},
  isLoading: false,
  error: false,
};

export const getLoginSelector = (state : Object) => ({...state.login});

const loginReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_LOGIN_DATA_SUCCESS: {
      global.accessToken = "x";
      // 持久化
      global.storage.save({key:config.ACCESS_TOKEN,data:global.accessToken});
      global.storage.save({key:config.URL_PREFIX,data:global.urlPrefix});
      global.storage.save({key:config.USERNAME,data:global.username});
      global.storage.save({key:config.PASSWORD,data:global.password});
      global.storage.save({key:config.PASSWORD_MD5,data:global.passwordMd5});
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
