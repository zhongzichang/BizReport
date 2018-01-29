import {
  FETCH_MEMBER_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  stockInfo: {},
  isLoading: false,
  error: false,
};

export const getMemberSelector = (state : Object) => ({...state.member});

const memberReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_MEMBER_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        memberInfo: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default memberReducer;
