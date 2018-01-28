import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class StockScreen extends React.Component {

  static navigationOptions = {
    title: '库存'
  };

  constructor() {
    super();
  }

  componentWillUnmount() {

  }

  componentDidMount(){
    this.props.fetchStockData();
  }

  componentWillUnmount() {
  }


  render() {

    console.info(this.props.stockInfo);

    const stockInfo = this.props.stockInfo;
    if( !stockInfo )
      return null;
    const {summary, dataWithCategory, dataWithSeason, dataWithTotal} = stockInfo;
    if (!summary || !dataWithCategory || !dataWithSeason || !dataWithTotal)
      return null;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;

    return (

      <View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>数量</Text>
          <Text>{summary.c1}</Text>
          <Text>安存量</Text>
          <Text>{summary.c2}</Text>
          <Text>上周销量</Text>
          <Text>{summary.c3}</Text>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>金额</Text>
          <Text>{summary.c4}</Text>
          <Text>安存金额</Text>
          <Text>{summary.c5}</Text>
          <Text>本周预计</Text>
          <Text>{summary.c6}</Text>
        </View>

        <FlatList
          data={dataWithCategory}
          renderItem={({item}, index) =>
            <View key={index} style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>{item.c1}</Text>
              <Text>{item.c2}</Text>
              <Text>{item.c3}</Text>
              <Text>{item.c4}</Text>
              <Text>{item.c5}</Text>
              <Text>{item.c6}</Text>
              <Text>{item.c7}</Text>
            </View>}
          ListHeaderComponent={() =>
              <View style={{flexDirection: 'row',justifyContent:'space-around',
              padding:4}}>
                <Text>类别</Text>
                <Text>库存</Text>
                <Text>上周销量</Text>
                <Text>库存占比</Text>
                <Text>大盘库存占比</Text>
                <Text>销售占比</Text>
                <Text>大盘销售占比</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
        />

        <FlatList
          data={dataWithSeason}
          renderItem={({item}, index) =>
            <View key={index} style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>{item.c1}</Text>
              <Text>{item.c2}</Text>
              <Text>{item.c3}</Text>
              <Text>{item.c4}</Text>
              <Text>{item.c5}</Text>
              <Text>{item.c6}</Text>
              <Text>{item.c7}</Text>
            </View>}
          ListHeaderComponent={() =>
              <View style={{flexDirection: 'row',justifyContent:'space-around',
              padding:4}}>
                <Text>季节</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
        />

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>{dataWithTotal.c1}</Text>
          <Text>{dataWithTotal.c2}</Text>
          <Text>{dataWithTotal.c3}</Text>
          <Text>{dataWithTotal.c4}</Text>
          <Text>{dataWithTotal.c5}</Text>
          <Text>{dataWithTotal.c6}</Text>
          <Text>{dataWithTotal.c7}</Text>
        </View>

      </View>
    );
  }
}

export default StockScreen;
