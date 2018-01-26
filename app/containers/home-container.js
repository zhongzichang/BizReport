import {connect} from 'react-redux';
import HomeScreen from '../components/HomeScreen';
import {getShopsSelector} from '../reducers/shops-reducer';
import {fetchShopsData} from '../actions/fetch-data/fetch-shops-data';

const mapStateToProps = (state : Object) => getShopsSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchShopsData: () => dispatch(fetchShopsData()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
