import React from 'react';
import { View, Text, Button, FlatList, ListView } from 'react-native';
import { VictoryPie } from "victory-native";

class MemberScreen extends React.Component {

  static navigationOptions = {
    title: '会员'
  };

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {

  }

  componentDidMount(){
    this.props.fetchMemberData();
  }

  componentWillUnmount() {
  }

  render() {


    console.info(this.props.memberInfo);

    const memberInfo = this.props.memberInfo;
    if( !memberInfo )
      return null;
    const {summary, data, liveness} = memberInfo;
    if (!summary || !data || !liveness)
      return null;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;


    return (
      <View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>新增会员</Text>
          <Text>{summary.c1}</Text>
          <Text>会销占比</Text>
          <Text>{summary.c2}</Text>
          <Text>回购率</Text>
          <Text>{summary.c3}</Text>
        </View>

        <FlatList
          data={data}
          renderItem={({item}) =>
          <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
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
          ListHeaderComponent={() =>
              <View style={{flexDirection: 'row',justifyContent:'space-around',
              padding:4}}>
                <Text>生日会员</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
        />

        <View style={{flexDirection: 'row',justifyContent:'space-around',padding:4}}>
          <Text>活跃度</Text>
        </View>

        <VictoryPie
          padding={{top:0,bottom:100,left:100,right:100}}
          colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
          data={liveness}
        />

      </View>
    );
  }
}

export default MemberScreen;
