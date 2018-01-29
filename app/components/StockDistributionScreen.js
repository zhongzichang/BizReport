import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class StockDistributionScreen extends React.Component {

  static navigationOptions = {
    title: '库存分布'
  };

  constructor() {
    super();
  }

  componentWillUnmount() {

  }

  componentDidMount(){
    this.props.fetchStockDistributionData();
  }

  componentWillUnmount() {
  }

  render() {

    console.info(this.props.stockDistributionInfo);

    const stockDistributionInfo = this.props.stockDistributionInfo;
    if( !stockDistributionInfo )
      return null;
    const {sizeTypes, dataByColor, dataOfTotal} = stockDistributionInfo;
    if (!sizeTypes || !dataByColor || !dataOfTotal)
      return null;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;

    const header = {c1:'颜色',c2:'店铺',c3:'库存合计', c4:'周销量' };

    return (
      <View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>{header.c1}</Text>
          <Text>{header.c2}</Text>
          {
            sizeTypes.map((type,i) => <Text key={i}>{type}</Text>)
          }
          <Text>{header.c3}</Text>
          <Text>{header.c4}</Text>
        </View>

        {
          dataByColor.map((category, i) => {
            return (
              <View key={i}>

                <View style={{flexDirection: 'row',justifyContent:'space-around',
                padding:4}}>
                  <Text>{category.color}</Text>
                  <View>
                  {
                    category.items.map((item, i) => {
                      return (
                        <View key={i} style={{flexDirection: 'row',
                        justifyContent:'space-around',
                        padding:4}}>
                          <Text>{item.c1}</Text>
                          {
                            sizeTypes.map((type,i) =>
                              <Text key={i}>{item.size[type]}</Text>)
                          }
                          <Text>{item.c2}</Text>
                          <Text>{item.c3}</Text>
                        </View>
                      );
                    })
                  }
                  </View>
                </View>

                <View style={{flexDirection: 'row',
                justifyContent:'space-around',
                padding:4}}>
                  <Text>合计</Text>
                  {
                    sizeTypes.map((type,i) =>
                      <Text key={i}>{category.total.size[type]}</Text>)
                  }
                  <Text>{category.total.c1}</Text>
                  <Text>{category.total.c2}</Text>
                </View>

              </View>
            );
          })
        }

        <View style={{flexDirection: 'row',
        justifyContent:'space-around',
        padding:4}}>
          {
            sizeTypes.map((type,i) =>
              <Text key={i}>{dataOfTotal.size[type]}</Text>)
          }
          <Text>{dataOfTotal.c1}</Text>
          <Text>{dataOfTotal.c2}</Text>
        </View>

      </View>
    );
  }
}

export default StockDistributionScreen;
