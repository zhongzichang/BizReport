import global from './global';
import {FETCH_ACTIVITY_DATA_SUCCESS} from '../constants/action-names';

function setHostAndPort(hostAndPort){
  var prefix = "http://" + hostAndPort + "/biz-report";
  setUrlPrefix(prefix);
}

function setUrlPrefix(prefix){
  global.urlPrefix = prefix;
  global.api_url_performance = `${prefix}/performance.jsp`;
  global.api_url_shops = `${prefix}/shops.jsp`;
  global.api_url_login = `${prefix}/login.jsp`;
  global.api_url_stock = `${prefix}/stock.jsp`;
  global.api_url_sales = `${prefix}/sales.jsp`;
  global.api_url_stock_distribution = `${prefix}/stock-distribution.jsp`;
  global.api_url_member = `${prefix}/member.jsp`;
  global.api_url_guide = `${prefix}/guide.jsp`;
  global.api_url_activity = `${prefix}/activity.jsp`;
  global.api_url_finance = `${prefix}/finance.jsp`;
  global.api_url_logout = `${prefix}/logout.jsp`;
}

const notifyLocalLogout = () => (
  (dispatch : Function) => {
    dispatch({type:FETCH_LOGOUT_DATA_SUCCESS});
  }
);
export {setUrlPrefix, setHostAndPort, notifyLocalLogout};
