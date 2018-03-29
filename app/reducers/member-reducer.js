import {
  FETCH_MEMBER_DATA_SUCCESS,
  FETCH_MEMBER_DATA_ERROR,
  FETCH_MEMBER_DATA_REQUEST
} from '../constants/action-names';

const initialState = {
  isLoading: false,
  error: false,
  resp: {}
};

export const getMemberSelector = (state : Object) => ({...state.member});

const memberReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_MEMBER_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        resp: action.payload.resp,
      };
    }
    case FETCH_MEMBER_DATA_ERROR: {
      return {
        isLoading: false,
        error: true,
        resp: action.payload.resp,
      };
    }
    case FETCH_MEMBER_DATA_REQUEST: {
      return {
        isLoading: true,
      }
    }
    default: {
      return state;
    }
  }
};

export default memberReducer;
