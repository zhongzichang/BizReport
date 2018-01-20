import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class PerformanceScreen extends React.Component {

  static navigationOptions = {
    title: '业绩'
  };

  //const rowHeaders = ['业绩','目标','完成率','连带','折扣','毛利率'];

  constructor() {
    super();
    this.state = {
      data: [
        {key:'r1',c1:'',c2:'今天',c3:'昨天',c4:'本周',c5:'本月'},
        {key:'r2',c1:'业绩',c2:'',c3:'',c4:'',c5:''},
        {key:'r3',c1:'目标',c2:'',c3:'',c4:'',c5:''},
        {key:'r4',c1:'完成率',c2:'',c3:'',c4:'',c5:''},
        {key:'r5',c1:'连带',c2:'',c3:'',c4:'',c5:''},
        {key:'r6',c1:'折扣',c2:'',c3:'',c4:'',c5:''},
        {key:'r7',c1:'毛利率',c2:'',c3:'',c4:'',c5:''}
      ]
    };
  }

  componentWillUnmount() {

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

        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          <Button
            onPress={() => navigate('Stock')}
            title="库存"
          />
          <Button
            onPress={() => navigate('Sales')}
            title="畅滞销"
          />
          <Button
            onPress={() => navigate('Member')}
            title="会员"
          />
          <Button
            onPress={() => navigate('Guide')}
            title="导购"
          />
          <Button
            onPress={() => navigate('Activity')}
            title="活动"
          />
          <Button
            onPress={() => navigate('Finance')}
            title="财务"
          />
        </View>

      </View>
    );
  }
}

export default PerformanceScreen;
