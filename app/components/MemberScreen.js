import React from 'react';
import { View, Text, Button, FlatList, ListView } from 'react-native';
import { VictoryPie } from "victory-native";

class MemberScreen extends React.Component {

  static navigationOptions = {
    title: '会员'
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [{key:'90004',cardNumber: '90005', name:'唐丽君', createdTime:'20150101',
        mobile:'1388886666', score: 100, balance: 430,
        rfmType: 133, buyRate: 6, buyAmount: 2980,
        lastTime: '20170214', dormancyDays: 210
      },
      {key:'90005',cardNumber: '90005', name:'杨志伟', createdTime:'20150102',
        mobile:'1388887777', score: 130, balance: 40,
        rfmType: 313, buyRate: 6, buyAmount: 2980,
        lastTime: '20170314', dormancyDays: 210
      }]
    };
  }

  render() {
    return (
      <View>

        <View style={{flexDirection: 'row'}}>
          <Text>新增会员</Text>
          <Text>17</Text>
          <Text>会销占比</Text>
          <Text>35%</Text>
          <Text>回购率</Text>
          <Text>27%</Text>
        </View>

        <Text>生日会员</Text>

        <FlatList
          style={{borderWidth:1,borderColor:'#f0f',}}
          data={this.state.data}
          renderItem={({item}) =>
          <View style={{flexDirection: 'row',justifyContent:'space-around',borderWidth:1,borderColor:'#f0f'}}>
            <View>
              <Text>卡号</Text>
              <Text>{item.cardNumber}</Text>
            </View>
            <View>
              <Text>姓名</Text>
              <Text>{item.name}</Text>
              <Text>RFM类型</Text>
              <Text>{item.rfmType}</Text>
            </View>
            <View>
              <Text>开卡时间</Text>
              <Text>{item.createdTime}</Text>
              <Text>购买频率</Text>
              <Text>{item.buyRate}</Text>
            </View>
            <View>
              <Text>手机</Text>
              <Text>{item.mobile}</Text>
              <Text>购买金额</Text>
              <Text>{item.buyAmount}</Text>
            </View>
            <View>
              <Text>积分</Text>
              <Text>{item.score}</Text>
              <Text>最近日期</Text>
              <Text>{item.lastTime}</Text>
            </View>
            <View>
              <Text>余额</Text>
              <Text>{item.balance}</Text>
              <Text>休眠天数</Text>
              <Text>{item.dormancyDays}</Text>
            </View>
          </View>
          }
        />

        <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 5 },
            { x: "Mans", y: 20 },
            { x: "Tigers", y: 30 },
          ]}
        />

      </View>
    );
  }
}

export default MemberScreen;
