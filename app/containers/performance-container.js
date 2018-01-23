import {connect} from 'react-redux';
import PerformanceScreen from '../components/PerformanceScreen';
import {getPerformanceSelector} from '../reducers/performance-reducer';
import {fetchData} from '../actions/fetch-data/fetch-data';

const mapStateToProps = (state : Object) => getPerformanceSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchData: () => dispatch(fetchData()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceScreen);
