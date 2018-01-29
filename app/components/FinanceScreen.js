import React from 'react';
import { View, Text, Button, FlatList, ScrollView } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme,VictoryLabel } from "victory-native";

class FinanceScreen extends React.Component {

  static navigationOptions = {
    title: '财务'
  };

  constructor() {
    super();
  }

  componentWillUnmount() {
  }

  componentDidMount(){
    this.props.fetchFinanceData();
  }

  componentWillUnmount() {
  }

  render() {

    console.info(this.props.financeInfo);

    const financeInfo = this.props.financeInfo;
    if( !financeInfo )
      return null;
    const {income, expenses, netIncome,
      budget, deficit, incomeBar} = financeInfo;
    if (!income || !expenses || !netIncome || !budget || !deficit || !incomeBar)
      return null;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;

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
                  <Text>{income.c1}</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent:'space-around',
                padding:4}}>
                  <Text>刷卡</Text>
                  <Text>{income.c2}</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent:'space-around',
                padding:4}}>
                  <Text>支付宝</Text>
                  <Text>{income.c3}</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent:'space-around',
                padding:4}}>
                  <Text>微信</Text>
                  <Text>{income.c4}</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>合计</Text>
              <Text>{income.c5}</Text>
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
                    <Text>{expenses.c1}</Text>
                  </View>
                  <View style={{flexDirection: 'row',justifyContent:'space-around',
                  padding:4}}>
                    <Text>其他</Text>
                    <Text>{expenses.c2}</Text>
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
                    <Text>{expenses.c3}</Text>
                  </View>
                  <View style={{flexDirection: 'row',justifyContent:'space-around',
                  padding:4}}>
                    <Text>其他</Text>
                    <Text>{expenses.c4}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>合计</Text>
              <Text>{expenses.c5}</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>净收入</Text>
          <Text>-{netIncome}</Text>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>本周预算（万）</Text>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <View>
            <Text>零售收入</Text>
            <Text>{budget.c1}</Text>
          </View>
          <View>
            <Text>经销商回款</Text>
            <Text>{budget.c2}</Text>
          </View>
          <View>
            <Text>供应商付款</Text>
            <Text>{budget.c3}</Text>
          </View>
          <View>
            <Text>联营分成</Text>
            <Text>{budget.c4}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>赤字</Text>
          <Text>-{deficit}</Text>
        </View>

        <VictoryChart
          domainPadding={{ y: 10 }}
          padding={100}
        >
          <VictoryBar horizontal
            style={{
              data: { fill: "#c43a31" },
              labels: { fill: "black" }
            }}
            labels={(d) => d.y}
            data={incomeBar}
            labelComponent={<VictoryLabel dx={10}/>}
          />
        </VictoryChart>

        </ScrollView>
      </View>
    );
  }
}

export default FinanceScreen;
