import {combineReducers} from 'redux';
import performanceReducer from './performance-reducer';
import shopsReducer from './shops-reducer';
import loginReducer from './login-reducer';
import stockReducer from './stock-reducer';
import salesReducer from './sales-reducer';
import stockDistributionReducer from './stock-distribution-reducer';
import memberReducer from './member-reducer';
import guideReducer from './guide-reducer';
import activityReducer from './activity-reducer';
import financeReducer from './finance-reducer';
import initAppReducer from './init-app-reducer';
import logoutReducer from './logout-reducer';

// Root Reducer
const rootReducer = combineReducers({
  performance: performanceReducer,
  shops: shopsReducer,
  login : loginReducer,
  stock : stockReducer,
  sales : salesReducer,
  stockDistribution : stockDistributionReducer,
  member : memberReducer,
  guide : guideReducer,
  activity : activityReducer,
  finance : financeReducer,
  initApp : initAppReducer,
  logout : logoutReducer,
});

export default rootReducer;
