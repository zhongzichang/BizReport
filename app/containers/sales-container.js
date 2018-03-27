import {connect} from 'react-redux';
import SalesScreen from '../components/SalesScreen';
import {getSalesSelector} from '../reducers/sales-reducer';
import {fetchSalesData} from '../actions/fetch-data/fetch-sales-data';

const mapStateToProps = (state : Object) => getSalesSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchSalesData: (shop_id) => dispatch(fetchSalesData(shop_id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SalesScreen);
