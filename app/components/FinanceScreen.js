import React from 'react';
import { View, Text, Button, FlatList, ScrollView } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

class FinanceScreen extends React.Component {

  static navigationOptions = {
    title: '财务'
  };

  render() {
    return (
      <View>

      <ScrollView>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>收入</Text>
          <View>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>零售</Text>
              <View>
                <View style={{flexDirection: 'row',justifyContent:'space-around',
                padding:4}}>
                  <Text>现金</Text>
                  <Text>2098</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent:'space-around',
                padding:4}}>
                  <Text>刷卡</Text>
                  <Text>2098</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent:'space-around',
                padding:4}}>
                  <Text>支付宝</Text>
                  <Text>2098</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent:'space-around',
                padding:4}}>
                  <Text>微信</Text>
                  <Text>2098</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>合计</Text>
              <Text>3421</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>支出</Text>
          <View>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>供货商</Text>
              <View>
                <View>
                  <View style={{flexDirection: 'row',justifyContent:'space-around',
                  padding:4}}>
                    <Text>货款</Text>
                    <Text>20000</Text>
                  </View>
                  <View style={{flexDirection: 'row',justifyContent:'space-around',
                  padding:4}}>
                    <Text>其他</Text>
                    <Text></Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>联营商</Text>
              <View>
                <View>
                  <View style={{flexDirection: 'row',justifyContent:'space-around',
                  padding:4}}>
                    <Text>分成结算</Text>
                    <Text>1368</Text>
                  </View>
                  <View style={{flexDirection: 'row',justifyContent:'space-around',
                  padding:4}}>
                    <Text>其他</Text>
                    <Text>70</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>合计</Text>
              <Text>21438</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>净收入</Text>
          <Text>-18017</Text>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>本周预算（万）</Text>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <View>
            <Text>零售收入</Text>
            <Text>3200</Text>
          </View>
          <View>
            <Text>经销商回款</Text>
            <Text>1280</Text>
          </View>
          <View>
            <Text>供应商付款</Text>
            <Text>9600</Text>
          </View>
          <View>
            <Text>联营分成</Text>
            <Text>1280</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>赤字</Text>
          <Text>-6400</Text>
        </View>

        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ y: 10 }}
          padding={100}
        >
          <VictoryBar horizontal
            style={{
              data: { fill: "#c43a31" }
            }}
            data={[
                  { x: '零售收入', y: 2},
                  { x: '经销商回款', y: 3 },
                  { x: '供应商付款', y: 4 },
                  { x: '联营分成', y: 5 },
                ]}
          />
        </VictoryChart>

        </ScrollView>
      </View>
    );
  }
}

export default FinanceScreen;
