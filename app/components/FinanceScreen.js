import React from 'react';
import { View, Text, Button, FlatList,
  ScrollView,RefreshControl } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme,VictoryLabel } from "victory-native";
import styles from './styles';

class FinanceScreen extends React.Component {

  static navigationOptions = {
    title: '财务'
  };

  refreshing = false;

  _onRefresh() {
    this.refreshing = true;
    this.props.fetchFinanceData();
  }

  constructor() {
    super();
  }

  componentWillMount() {
  }

  componentDidMount(){
    this._onRefresh();
  }

  componentWillUnmount() {
  }

  render() {

    console.info(this.props.financeInfo);

    const financeInfo = this.props.financeInfo;
    if( !financeInfo )
      return null;
    else {
      this.refreshing = false;
    }
    const {income, expenses, netIncome,
      budget, deficit, incomeBar} = financeInfo;
    if (!income || !expenses || !netIncome || !budget || !deficit || !incomeBar)
      return null;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;

    return (

      <View style={{marginTop:10}}>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >

        <View style={styles.row}>
          <View style={{flex:1, backgroundColor:'steelblue',justifyContent:'space-around'}}>
            <Text style={{color:'white'}}>收入</Text>
          </View>
          <View style={{flex:3}}>

            <View style={styles.row}>
              <View style={{flex:1,justifyContent:'space-around', backgroundColor:'white'}}>
                <Text>零售</Text>
              </View>
              <View style={{flex:2}}>
                <View style={styles.evenRow}>
                  <Text style={styles.cell}>现金</Text>
                  <Text style={styles.cell}>{income.c1}</Text>
                </View>
                <View style={styles.oddRow}>
                  <Text style={styles.cell}>刷卡</Text>
                  <Text style={styles.cell}>{income.c2}</Text>
                </View>
                <View style={styles.evenRow}>
                  <Text style={styles.cell}>支付宝</Text>
                  <Text style={styles.cell}>{income.c3}</Text>
                </View>
                <View  style={styles.oddRow}>
                  <Text style={styles.cell}>微信</Text>
                  <Text style={styles.cell}>{income.c4}</Text>
                </View>
              </View>
            </View>

            <View style={{flexDirection:'row', backgroundColor:'skyblue'}}>
              <Text style={styles.cell2}>合计</Text>
              <Text style={styles.cell}>{income.c5}</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={{flex:1, backgroundColor:'steelblue',justifyContent:'space-around'}}>
            <Text style={{color:'white'}}>支出</Text>
          </View>
          <View style={{flex:3}}>
            <View style={styles.row}>
              <View style={{flex:1,justifyContent:'space-around', backgroundColor:'white'}}>
                <Text>供货商</Text>
              </View>
              <View style={{flex:2}}>
                <View style={styles.evenRow}>
                  <Text style={styles.cell}>货款</Text>
                  <Text style={styles.cell}>{expenses.c1}</Text>
                </View>
                <View style={styles.oddRow}>
                  <Text style={styles.cell}>其他</Text>
                  <Text style={styles.cell}>{expenses.c2}</Text>
                </View>
              </View>
            </View>
            <View style={styles.row}>
              <View style={{flex:1,justifyContent:'space-around', backgroundColor:'white'}}>
                <Text>联营商</Text>
              </View>
              <View style={{flex:2}}>
                <View style={styles.evenRow}>
                  <Text style={styles.cell}>分成结算</Text>
                  <Text style={styles.cell}>{expenses.c3}</Text>
                </View>
                <View style={styles.oddRow}>
                  <Text style={styles.cell}>其他</Text>
                  <Text style={styles.cell}>{expenses.c4}</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection:'row', backgroundColor:'skyblue'}}>
              <Text style={styles.cell2}>合计</Text>
              <Text style={styles.cell}>{expenses.c5}</Text>
            </View>
          </View>
        </View>

        <View style={styles.footRow}>
          <Text style={styles.footCell}>净收入</Text>
          <Text style={styles.footCell}>{netIncome}</Text>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4,backgroundColor:'powderblue'}}>
          <Text>本周预算（万）</Text>
        </View>

        <View style={styles.headRow}>
          <Text style={styles.headCell}>零售收入</Text>
          <Text style={styles.headCell}>经销商回款</Text>
          <Text style={styles.headCell}>供应商付款</Text>
          <Text style={styles.headCell}>联营分成</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>{budget.c1}</Text>
          <Text style={styles.cell}>{budget.c2}</Text>
          <Text style={styles.cell}>{budget.c3}</Text>
          <Text style={styles.cell}>{budget.c4}</Text>
        </View>

        <View style={styles.row}>
          <Text style={{flex:1,backgroundColor:'steelblue', color: 'white'}}>赤字</Text>
          <Text style={{flex:1,backgroundColor:'red', color: 'white'}}>{deficit}</Text>
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
