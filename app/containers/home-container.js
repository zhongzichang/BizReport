import {connect} from 'react-redux';
import HomeScreen from '../components/HomeScreen';
import {getShopsSelector} from '../reducers/shops-reducer';
import {getLoginSelector} from '../reducers/login-reducer';
import {fetchShopsData} from '../actions/fetch-data/fetch-shops-data';
import {fetchLoginData} from '../actions/fetch-data/fetch-login-data';

const mapStateToProps = (state : Object) => {
    return Object.assign( {}, getShopsSelector(state), getLoginSelector(state) );
}
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchShopsData: () => dispatch(fetchShopsData()),
    fetchLoginData: (username, password) => dispatch(fetchLoginData(username, password)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
