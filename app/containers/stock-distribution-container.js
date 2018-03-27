import {connect} from 'react-redux';
import StockDistributionScreen from '../components/StockDistributionScreen';
import {getStockDistributionSelector}
  from '../reducers/stock-distribution-reducer';
import {fetchStockDistributionData}
  from '../actions/fetch-data/fetch-stock-distribution-data';

const mapStateToProps = (state : Object) => getStockDistributionSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchStockDistributionData:
    (shop_id,product_id) => dispatch(fetchStockDistributionData(shop_id,product_id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(StockDistributionScreen);
