import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class StockScreen extends React.Component {

  static navigationOptions = {
    title: '库存'
  };

  constructor() {
    super();
    this.state = {
      summary : {
        c1: 1010, c2: 1200, c3: 294,
        c4: 331280, c5: 350000, c6: 320
      },
      dataWithCategory: [
        {key:'r2',c1:'连衣裙',c2:'100',c3:'33',c4:'9.9%',
        c5:'12%',c6:'11.3%',c7:'15%'},
        {key:'r3',c1:'套装',c2:'150',c3:'32',c4:'14.9%',
        c5:'9%',c6:'10.9%',c7:'16%'},
        {key:'r4',c1:'T恤',c2:'80',c3:'40',c4:'7.9%',
        c5:'8%',c6:'13.6%',c7:'7%'},
        {key:'r5',c1:'衬衫',c2:'120',c3:'18',c4:'11.9%',
        c5:'10%',c6:'30.2%',c7:'18%'},
        {key:'r6',c1:'牛仔裤',c2:'200',c3:'89',c4:'7.9%',
        c5:'23%',c6:'13.6%',c7:'14%'},
        {key:'r7',c1:'休闲裤',c2:'120',c3:'40',c4:'15.8%',
        c5:'16%',c6:'3.4%',c7:'15%'},
        {key:'r8',c1:'外套',c2:'80',c3:'10',c4:'3.5%',
        c5:'13%',c6:'6.1%',c7:'10%'},
        {key:'r9',c1:'风衣',c2:'160',c3:'32',c4:'23.3%',
        c5:'10%',c6:'19.9%',c7:'5%'},
      ],
      dataWithSeason: [
        {key:'r1',c1:'夏',c2:'383',c3:'32',c4:'18.0%',
        c5:'10.9%',c6:'10.9%',c7:'3.0%'},
        {key:'r2',c1:'秋',c2:'627',c3:'262',c4:'82.0%',
        c5:'89.1%',c6:'89.1%',c7:'97.0%'},
      ],
      dataWithTotal: [
        {key:'r1',c1:'合计',c2:'1010',c3:'294',c4:'100.0%',
        c5:'100.0%',c6:'100.0%',c7:'100.0%'},
      ]
    };
  }

  render() {

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;
    const stockSummary = this.state.summary;

    if( stockSummary == null)
      return null;

    return (


      <View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>数量</Text>
          <Text>{stockSummary.c1}</Text>
          <Text>安存量</Text>
          <Text>{stockSummary.c2}</Text>
          <Text>上周销量</Text>
          <Text>{stockSummary.c3}</Text>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>金额</Text>
          <Text>{stockSummary.c4}</Text>
          <Text>安存金额</Text>
          <Text>{stockSummary.c5}</Text>
          <Text>本周预计</Text>
          <Text>{stockSummary.c6}</Text>
        </View>

        <FlatList
          data={this.state.dataWithCategory}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
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
        />

        <FlatList
          data={this.state.dataWithSeason}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
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
        />

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>{this.state.dataWithTotal.c1}</Text>
          <Text>{this.state.dataWithTotal.c2}</Text>
          <Text>{this.state.dataWithTotal.c3}</Text>
          <Text>{this.state.dataWithTotal.c4}</Text>
          <Text>{this.state.dataWithTotal.c5}</Text>
          <Text>{this.state.dataWithTotal.c6}</Text>
          <Text>{this.state.dataWithTotal.c7}</Text>
        </View>

      </View>
    );
  }
}

export default StockScreen;
