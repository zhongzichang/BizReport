import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import config from '../lib/config.js';
import styles from './styles';

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
      <View style={{marginTop:10,backgroundColor:'white'}}>
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
                  source={{uri: config.IMAGE_URL_PREFIX+'/'+item.c3}}
                />
                <Text style={styles.cell}>{item.c4}</Text>
                <Text style={styles.cell}>{item.c5}</Text>
                <Text style={styles.cell}>{item.c6}</Text>
                <Text style={styles.cell}>{item.c7}</Text>
                <Text style={styles.cell}>{item.c8}</Text>
                <Text style={styles.cell}>{item.c9}</Text>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }

}

export default SalesScreen;
