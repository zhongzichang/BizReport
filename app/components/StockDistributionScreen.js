import React from 'react';
import { View, Text, Button, FlatList,RefreshControl,ScrollView } from 'react-native';
import styles from './styles';

class StockDistributionScreen extends React.Component {

  static navigationOptions = {
    title: '库存分布'
  };

  refreshing = false;

  _onRefresh() {
    this.refreshing = true;
    this.props.fetchStockDistributionData();
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

  render() {

    console.info(this.props.stockDistributionInfo);

    const stockDistributionInfo = this.props.stockDistributionInfo;
    if( !stockDistributionInfo )
      return null;
    else {
      this.refreshing = false;
    }
    const {sizeTypes, dataByColor, dataOfTotal} = stockDistributionInfo;
    if (!sizeTypes || !dataByColor || !dataOfTotal)
      return null;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;

    const header = {c1:'颜色',c2:'店铺',c3:'库存合计', c4:'周销量' };
    const columnCount = 4+sizeTypes.length;

    return (
      <View style={{marginTop:10}}>

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        >

        <View style={styles.headRow}>
          <Text style={styles.headCell}>{header.c1}</Text>
          <Text style={styles.headCell2}>{header.c2}</Text>
          {
            sizeTypes.map(
              (type,i) =>
              <Text key={i} style={styles.headCell}>{type}</Text>
            )
          }
          <Text style={styles.headCell}>{header.c3}</Text>
          <Text style={styles.headCell}>{header.c4}</Text>
        </View>

        {
          dataByColor.map((category, i) => {
            return (
              <View key={i}>

                <View style={styles.row}>
                  <View style={{flex:1, backgroundColor:'powderblue',
                    justifyContent:'space-around'}}>
                    <Text>
                      {category.color}
                    </Text>
                  </View>
                  <View style={{flex: (columnCount) }}>
                  {
                    category.items.map((item, i) => {
                      return (
                        <View key={i} style={i%2==0?styles.evenRow:styles.oddRow}>
                          <Text style={styles.cell2}>{item.c1}</Text>
                          {
                            sizeTypes.map((type,i) =>
                              <Text key={i} style={styles.cell}>{item.size[type]}</Text>)
                          }
                          <Text style={styles.cell}>{item.c2}</Text>
                          <Text style={styles.cell}>{item.c3}</Text>
                        </View>
                      );
                    })
                  }
                  </View>
                </View>

                <View style={styles.thinFootRow}>
                  <Text style={{flex:3}}>合计</Text>
                  {
                    sizeTypes.map((type,i) =>
                      <Text key={i} style={styles.cell}>{category.total.size[type]}</Text>)
                  }
                  <Text style={styles.cell}>{category.total.c1}</Text>
                  <Text style={styles.cell}>{category.total.c2}</Text>
                </View>

              </View>
            );
          })
        }

        <View style={styles.footRow}>
          <Text style={styles.footCell3}></Text>
          {
            sizeTypes.map((type,i) =>
              <Text key={i} style={styles.footCell}>{dataOfTotal.size[type]}</Text>)
          }
          <Text style={styles.footCell}>{dataOfTotal.c1}</Text>
          <Text style={styles.footCell}>{dataOfTotal.c2}</Text>
        </View>

        </ScrollView>

      </View>
    );
  }
}

export default StockDistributionScreen;
