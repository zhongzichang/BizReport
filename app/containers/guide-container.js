import {connect} from 'react-redux';
import GuideScreen from '../components/GuideScreen';
import {getGuideSelector} from '../reducers/guide-reducer';
import {fetchGuideData} from '../actions/fetch-data/fetch-guide-data';

const mapStateToProps = (state : Object) => getGuideSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchGuideData: (shop_id) => dispatch(fetchGuideData(shop_id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(GuideScreen);
