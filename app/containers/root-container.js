import {connect} from 'react-redux';
import RootScreen from '../components/RootScreen';
import {getLoginSelector} from '../reducers/login-reducer';
import {fetchLoginData} from '../actions/fetch-data/fetch-login-data';

const mapStateToProps = (state : Object) => {
    return getLoginSelector(state);
}
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchLoginData: (username, password) => dispatch(fetchLoginData(username, password)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);
