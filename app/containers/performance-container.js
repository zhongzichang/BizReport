import {connect} from 'react-redux';
import PerformanceScreen from '../components/PerformanceScreen';
import {getPerformanceSelector} from '../reducers/performance-reducer';
import {fetchPerformanceData} from '../actions/fetch-data/fetch-performance-data';

const mapStateToProps = (state : Object) => getPerformanceSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchPerformanceData: (shop_id) => dispatch(fetchPerformanceData(shop_id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceScreen);
