import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { VictoryBar } from "victory-native";

class FinanceScreen extends React.Component {

  static navigationOptions = {
    title: '财务'
  };

  render() {
    return (
      <View>

        <View style={{flexDirection: 'row'}}>
          <Text>收入</Text>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>零售</Text>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text>现金</Text>
                  <Text>2098</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text>刷卡</Text>
                  <Text>2098</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text>支付宝</Text>
                  <Text>2098</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text>微信</Text>
                  <Text>2098</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>合计</Text>
              <Text>3421</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text>支出</Text>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>供货商</Text>
              <View>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text>货款</Text>
                    <Text>20000</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text>其他</Text>
                    <Text></Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>联营商</Text>
              <View>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text>分成结算</Text>
                    <Text>1368</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text>其他</Text>
                    <Text>70</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>合计</Text>
              <Text>21438</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text>净收入</Text>
          <Text>-18017</Text>
        </View>

        <Text>本周预算（万）</Text>

        <View style={{flexDirection: 'row'}}>
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

        <View style={{flexDirection: 'row'}}>
          <Text>赤字</Text>
          <Text>-6400</Text>
        </View>

        <VictoryBar />

      </View>
    );
  }
}

export default FinanceScreen;
