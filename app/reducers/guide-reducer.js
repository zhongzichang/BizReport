import {
  FETCH_GUIDE_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  guideInfo: {},
  isLoading: false,
  error: false,
};

export const getGuideSelector = (state : Object) => ({...state.guide});

const guideReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case FETCH_GUIDE_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        guideInfo: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default guideReducer;
