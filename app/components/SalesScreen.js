import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import config from '../lib/config.js';

class SalesScreen extends React.Component {

  static navigationOptions = {
    title: '畅滞销'
  };

  constructor() {
    super();
  }

  componentWillUnmount() {

  }

  componentDidMount(){
    this.props.fetchSalesData();
  }

  componentWillUnmount() {
  }

  onPress = (item) =>
  {
    const { navigate } = this.props.navigation;
    navigate('StockDistribution');
  }

  render() {

    const salesInfo = this.props.salesInfo;
    if (salesInfo == null)
      return null;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;


    return (
      <View>
        <FlatList
          data={salesInfo}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => this.onPress(item)}>
              <View style={{flexDirection: 'row',justifyContent:'space-around',
              padding:4}}>
                <Text>{item.c1}</Text>
                <Text>{item.c2}</Text>
                <Image
                  style={{width: 20, height: 20}}
                  source={{uri: config.IMAGE_URL_PREFIX+'/'+item.c3}}
                />
                <Text>{item.c4}</Text>
                <Text>{item.c5}</Text>
                <Text>{item.c6}</Text>
                <Text>{item.c7}</Text>
                <Text>{item.c8}</Text>
                <Text>{item.c9}</Text>
              </View>
            </TouchableOpacity>
          }
          ListHeaderComponent={() =>
              <View style={{flexDirection: 'row',justifyContent:'space-around',
              padding:4}}>
                <Text>排名</Text>
                <Text>款色</Text>
                <Text>图片</Text>
                <Text>周销量</Text>
                <Text>周售罄>40%</Text>
                <Text>库存</Text>
                <Text>已销天数</Text>
                <Text>预销天数</Text>
                <Text>累计售罄</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
        />
      </View>
    );
  }

}

export default SalesScreen;
