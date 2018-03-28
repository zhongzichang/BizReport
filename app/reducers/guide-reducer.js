import {
  FETCH_GUIDE_DATA_SUCCESS,
  FETCH_GUIDE_DATA_ERROR
} from '../constants/action-names';

const initialState = {
  isLoading: false,
  error: false,
  resp: {}
};

export const getGuideSelector = (state : Object) => ({...state.guide});

const guideReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_GUIDE_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        resp: action.payload.resp,
      };
    }
    case FETCH_GUIDE_DATA_ERROR: {
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

export default guideReducer;
