import {connect} from 'react-redux';
import StockScreen from '../components/StockScreen';
import {getStockSelector} from '../reducers/stock-reducer';
import {fetchStockData} from '../actions/fetch-data/fetch-stock-data';

const mapStateToProps = (state : Object) => getStockSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    fetchStockData: () => dispatch(fetchStockData()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(StockScreen);
