import {connect} from 'react-redux';
import RootScreen from '../components/RootScreen';
import {getLoginSelector} from '../reducers/login-reducer';
import {fetchLoginData} from '../actions/fetch-data/fetch-login-data';
import {getInitAppSelector} from '../reducers/init-app-reducer';
import {initApp} from '../actions/init-app/init-app';

const mapStateToProps = (state : Object) => {
    return Object.assign( {}, getInitAppSelector(state), getLoginSelector(state) );
}
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchLoginData: (username, password) => dispatch(fetchLoginData(username, password)),
    initApp: () => dispatch(initApp()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);
