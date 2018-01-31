import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from './styles';

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
    const {summary, dataWithCategory, dataWithSeason, total} = stockInfo;
    if (!summary || !dataWithCategory || !dataWithSeason || !total)
      return null;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;

    return (

      <View style={{marginTop:10}}>

        <View style={styles.row}>
          <Text style={styles.labelCell}>数量</Text>
          <Text style={styles.valueCell}>{summary.c1}</Text>
          <Text style={styles.labelCell}>安存量</Text>
          <Text style={styles.valueCell}>{summary.c2}</Text>
          <Text style={styles.labelCell}>上周销量</Text>
          <Text style={styles.valueCell}>{summary.c3}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.labelCell}>金额</Text>
          <Text style={styles.valueCell}>{summary.c4}</Text>
          <Text style={styles.labelCell}>安存金额</Text>
          <Text style={styles.valueCell}>{summary.c5}</Text>
          <Text style={styles.labelCell}>本周预计</Text>
          <Text style={styles.valueCell}>{summary.c6}</Text>
        </View>

        <FlatList
          ListHeaderComponent={() =>
              <View style={styles.headRow}>
                <Text style={styles.headCell}>类别</Text>
                <Text style={styles.headCell}>库存</Text>
                <Text style={styles.headCell}>上周销量</Text>
                <Text style={styles.headCell}>库存占比</Text>
                <Text style={styles.headCell}>大盘库存占比</Text>
                <Text style={styles.headCell}>销售占比</Text>
                <Text style={styles.headCell}>大盘销售占比</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
          data={dataWithCategory}
          renderItem={({item, index}) =>
            <View key={index} style={index%2 == 0 ? styles.evenRow : styles.oddRow}>
              <Text style={styles.cell}>{item.c1}</Text>
              <Text style={styles.cell}>{item.c2}</Text>
              <Text style={styles.cell}>{item.c3}</Text>
              <Text style={styles.cell}>{item.c4}</Text>
              <Text style={styles.cell}>{item.c5}</Text>
              <Text style={styles.cell}>{item.c6}</Text>
              <Text style={styles.cell}>{item.c7}</Text>
            </View>}
        />

        <FlatList
          data={dataWithSeason}
          renderItem={({item, index}) =>
            <View key={index} style={index%2 == 0 ? styles.evenRow : styles.oddRow}>
              <Text style={styles.cell}>{item.c1}</Text>
              <Text style={styles.cell}>{item.c2}</Text>
              <Text style={styles.cell}>{item.c3}</Text>
              <Text style={styles.cell}>{item.c4}</Text>
              <Text style={styles.cell}>{item.c5}</Text>
              <Text style={styles.cell}>{item.c6}</Text>
              <Text style={styles.cell}>{item.c7}</Text>
            </View>}
          ListHeaderComponent={() =>
              <View style={styles.headRow}>
                <Text style={{color:'white'}}>季节</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
        />

        <View style={styles.footRow}>
          <Text style={styles.footCell}>{total.c1}</Text>
          <Text style={styles.footCell}>{total.c2}</Text>
          <Text style={styles.footCell}>{total.c3}</Text>
          <Text style={styles.footCell}>{total.c4}</Text>
          <Text style={styles.footCell}>{total.c5}</Text>
          <Text style={styles.footCell}>{total.c6}</Text>
          <Text style={styles.footCell}>{total.c7}</Text>
        </View>

      </View>
    );
  }
}

export default StockScreen;
