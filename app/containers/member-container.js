import {connect} from 'react-redux';
import MemberScreen from '../components/MemberScreen';
import {getMemberSelector} from '../reducers/member-reducer';
import {fetchMemberData} from '../actions/fetch-data/fetch-member-data';

const mapStateToProps = (state : Object) => getMemberSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchMemberData: (shop_id) => dispatch(fetchMemberData(shop_id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MemberScreen);
