import {combineReducers} from 'redux';
import performanceReducer from './performance-reducer';
import shopsReducer from './shops-reducer';
import loginReducer from './login-reducer';
import stockReducer from './stock-reducer';

// Root Reducer
const rootReducer = combineReducers({
  performance: performanceReducer,
  shops: shopsReducer,
  login : loginReducer,
  stock : stockReducer,
});

export default rootReducer;
