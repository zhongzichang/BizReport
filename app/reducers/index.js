import {combineReducers} from 'redux';
import performanceReducer from './performance-reducer';

// Root Reducer
const rootReducer = combineReducers({
  performance: performanceReducer,
});

export default rootReducer;
