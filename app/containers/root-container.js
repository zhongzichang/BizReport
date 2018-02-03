import {connect} from 'react-redux';
import RootScreen from '../components/RootScreen';
import {getLoginSelector} from '../reducers/login-reducer';
import {fetchLoginData} from '../actions/fetch-data/fetch-login-data';
import {getInitAppSelector} from '../reducers/init-app-reducer';
import {initApp} from '../actions/init-app/init-app';
import {getLogoutSelector} from '../reducers/logout-reducer';
import {fetchLogoutData} from '../actions/fetch-data/fetch-logout-data';

const mapStateToProps = (state : Object) => {
    return {...getInitAppSelector(state),
      ...getLoginSelector(state),
      ...getLogoutSelector(state)  };
}
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchLoginData: (username, password) =>
      dispatch(fetchLoginData(username, password)),
    initApp: () => dispatch(initApp()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);
