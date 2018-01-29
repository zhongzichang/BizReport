import {connect} from 'react-redux';
import ActivityScreen from '../components/ActivityScreen';
import {getActivitySelector} from '../reducers/activity-reducer';
import {fetchActivityData} from '../actions/fetch-data/fetch-activity-data';

const mapStateToProps = (state : Object) => getActivitySelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchActivityData: () => dispatch(fetchActivityData()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ActivityScreen);
