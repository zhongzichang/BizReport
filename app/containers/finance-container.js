import {connect} from 'react-redux';
import FinanceScreen from '../components/FinanceScreen';
import {getFinanceSelector} from '../reducers/finance-reducer';
import {fetchFinanceData} from '../actions/fetch-data/fetch-finance-data';

const mapStateToProps = (state : Object) => getFinanceSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchFinanceData: () => dispatch(fetchFinanceData()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FinanceScreen);
