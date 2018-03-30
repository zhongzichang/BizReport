import React from 'react';
import { View, Text, Button, FlatList,
  TouchableOpacity, Image,RefreshControl,ActivityIndicator } from 'react-native';
import config from '../lib/config.js';
import styles from './styles';

class SalesScreen extends React.Component {

  static navigationOptions = {
    title: '畅滞销'
  };

  _onRefresh() {
    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;
    if( shopInfo && shopInfo.c1 ){
      this.props.fetchSalesData(shopInfo.c1);
    }
  }

  constructor() {
    super();
  }

  componentWillMount() {

  }

  componentDidMount(){
    this._onRefresh();
  }

  componentWillUnmount() {
  }

  onPress = (item) =>
  {
    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;
    if( shopInfo && shopInfo.c1 ){
      navigate('StockDistribution', {shopInfo, item});
    }
  }

  render() {

    const {isLoading, error, resp } = this.props;

    if( error ){
      return <Text>{resp.message} - {resp.status}</Text>;
    }

    if( !resp || !resp.data )
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>);

    const salesInfo = resp.data;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;


    return (
      <View style={{marginTop:10}}>
        <FlatList
          data={salesInfo}
          ListHeaderComponent={() =>
              <View style={styles.headRow}>
                <Text style={styles.headCell}>排名</Text>
                <Text style={styles.headCell}>款色</Text>
                <Text style={styles.headCell}>图片</Text>
                <Text style={styles.headCell}>周销量</Text>
                <Text style={styles.headCell}>周售罄>40%</Text>
                <Text style={styles.headCell}>库存</Text>
                <Text style={styles.headCell}>已销天数</Text>
                <Text style={styles.headCell}>预销天数</Text>
                <Text style={styles.headCell}>累计售罄</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
          renderItem={({item,index}) =>
            <TouchableOpacity onPress={() => this.onPress(item)}>
              <View style={index%2==0?styles.evenRow:styles.oddRow}>
                <Text style={styles.cell}>{item.c1}</Text>
                <Text style={styles.cell}>{item.c2}</Text>
                <Image style={styles.cell}
                  source={{uri: item.c3}}
                />
                <Text style={styles.cell}>{item.c4}</Text>
                <Text style={styles.cell}>{item.c5}</Text>
                <Text style={styles.cell}>{item.c6}</Text>
                <Text style={[styles.cell,
                  item.c7>item.c8*0.7 ?
                  (item.c7>=item.c8?styles.bgRed : styles.bgYellow)
                  : '',
                ]}>{item.c7}</Text>
                <Text style={styles.cell}>{item.c8}</Text>
                <Text style={styles.cell}>{item.c9}</Text>
              </View>
            </TouchableOpacity>
          }
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />
      </View>
    );
  }

}

export default SalesScreen;
