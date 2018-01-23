import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class StockScreen extends React.Component {

  static navigationOptions = {
    title: '库存'
  };

  constructor() {
    super();
    this.state = {
      dataWithCategory: [
        {key:'r1',c1:'类别',c2:'库存',c3:'上周销量',c4:'库存占比',
        c5:'大盘库存占比',c6:'销售占比',c7:'大盘销售占比'},
      ],
      dataWithSeason: [
        {key:'r1',c1:'类别',c2:'库存',c3:'上周销量',c4:'库存占比',
        c5:'大盘库存占比',c6:'销售占比',c7:'大盘销售占比'},
      ],
      dataWithTotal: [
        {key:'r1',c1:'合计',c2:'库存',c3:'上周销量',c4:'库存占比',
        c5:'大盘库存占比',c6:'销售占比',c7:'大盘销售占比'},
      ]
    };
  }

  render() {
    return (
      <View>

        <View style={{flexDirection: 'row'}}>
          <Text>数量</Text>
          <Text>1010</Text>
          <Text>安存量</Text>
          <Text>1200</Text>
          <Text>上周销量</Text>
          <Text>294</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text>金额</Text>
          <Text>331280</Text>
          <Text>安存金额</Text>
          <Text>350000</Text>
          <Text>本周预计</Text>
          <Text>320</Text>
        </View>

        <FlatList
          data={this.state.dataWithCategory}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row'}}>
              <Text>{item.c1}</Text>
              <Text>{item.c2}</Text>
              <Text>{item.c3}</Text>
              <Text>{item.c4}</Text>
              <Text>{item.c5}</Text>
              <Text>{item.c6}</Text>
              <Text>{item.c7}</Text>
            </View>
        }
        />

        <View>
          <Text>季节</Text>
        </View>

        <FlatList
          data={this.state.dataWithSeason}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row'}}>
              <Text>{item.c1}</Text>
              <Text>{item.c2}</Text>
              <Text>{item.c3}</Text>
              <Text>{item.c4}</Text>
              <Text>{item.c5}</Text>
              <Text>{item.c6}</Text>
              <Text>{item.c7}</Text>
            </View>
        }
        />

        <FlatList
          data={this.state.dataWithTotal}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row'}}>
              <Text>{item.c1}</Text>
              <Text>{item.c2}</Text>
              <Text>{item.c3}</Text>
              <Text>{item.c4}</Text>
              <Text>{item.c5}</Text>
              <Text>{item.c6}</Text>
              <Text>{item.c7}</Text>
            </View>
        }
        />

      </View>
    );
  }
}

export default StockScreen;
