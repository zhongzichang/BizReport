import {combineReducers} from 'redux';
import performanceReducer from './performance-reducer';
import shopsReducer from './shops-reducer';

// Root Reducer
const rootReducer = combineReducers({
  performance: performanceReducer,
  shops: shopsReducer,
});

export default rootReducer;
