import {connect} from 'react-redux';
import StockScreen from '../components/StockScreen';
import {getStockSelector} from '../reducers/stock-reducer';
import {fetchStockData} from '../actions/fetch-data/fetch-stock-data';

const mapStateToProps = (state : Object) => getStockSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchStockData: (shop_id) => dispatch(fetchStockData(shop_id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(StockScreen);
