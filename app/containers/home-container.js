import {connect} from 'react-redux';
import HomeScreen from '../components/HomeScreen';
import {getShopsSelector} from '../reducers/shops-reducer';
import {getLoginSelector} from '../reducers/login-reducer';
import {fetchShopsData} from '../actions/fetch-data/fetch-shops-data';
import {fetchLoginData} from '../actions/fetch-data/fetch-login-data';
import {fetchLogoutData} from '../actions/fetch-data/fetch-logout-data';

const mapStateToProps = (state : Object) => {
    return getShopsSelector(state);
}
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchShopsData: (page,size,keyword) => dispatch(fetchShopsData(page,size,keyword)),
    fetchLogoutData: () => dispatch(fetchLogoutData()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
