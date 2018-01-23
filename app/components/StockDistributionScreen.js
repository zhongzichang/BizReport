import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class StockDistributionScreen extends React.Component {

  static navigationOptions = {
    title: '库存分布'
  };

  //const rowHeaders = ['业绩','目标','完成率','连带','折扣','毛利率'];

  constructor() {
    super();
    this.state = {
      data: [
        {key:'r1',c1:'颜色',c2:'店铺',c3:'S',c4:'M',c5:'L'},
        {key:'r2',c1:'业绩',c2:'',c3:'',c4:'',c5:''},
        {key:'r3',c1:'目标',c2:'',c3:'',c4:'',c5:''},
        {key:'r4',c1:'完成率',c2:'',c3:'',c4:'',c5:''},
        {key:'r5',c1:'连带',c2:'',c3:'',c4:'',c5:''},
        {key:'r6',c1:'折扣',c2:'',c3:'',c4:'',c5:''},
        {key:'r7',c1:'毛利率',c2:'',c3:'',c4:'',c5:''}
      ]
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, flexDirection: 'column',alignItems: 'flex-start', justifyContent: 'center',borderWidth:1,borderColor:'#f0f' }}>

        <FlatList
          style={{borderWidth:1,borderColor:'#f0f',}}
          data={this.state.data}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row',justifyContent:'space-around',borderWidth:1,borderColor:'#f0f'}}>
              <Text>{item.c1}</Text>
              <Text>{item.c2}</Text>
              <Text>{item.c3}</Text>
              <Text>{item.c4}</Text>
              <Text>{item.c5}</Text>
            </View>}
        />

      </View>
    );
  }
}

export default StockDistributionScreen;
