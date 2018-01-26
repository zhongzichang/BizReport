import {connect} from 'react-redux';
import PerformanceScreen from '../components/PerformanceScreen';
import {getPerformanceSelector} from '../reducers/performance-reducer';
import {fetchPerformanceData} from '../actions/fetch-data/fetch-performance-data';

const mapStateToProps = (state : Object) => getPerformanceSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchPerformanceData: () => dispatch(fetchPerformanceData()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceScreen);
