import React from 'react';
import { View, Text, FlatList,ActivityIndicator,StyleSheet } from 'react-native';
import {Button, List, ListItem} from 'react-native-elements';
import LoginModal from './LoginModal';

import { StackNavigator } from 'react-navigation';
import HomeContainer from '../containers/home-container';
import PerformanceContainer from '../containers/performance-container';
import StockContainer from '../containers/stock-container';
import SalesContainer from '../containers/sales-container';
import MemberContainer from '../containers/member-container';
import GuideContainer from '../containers/guide-container';
import ActivityContainer from '../containers/activity-container';
import FinanceContainer from '../containers/finance-container';
import StockDistributionContainer from
  '../containers/stock-distribution-container';

import global from '../services/global';

const BizReportNavigator = StackNavigator({
  Home: { screen: HomeContainer },
  Performance: { screen: PerformanceContainer },
  Stock: { screen: StockContainer },
  Sales: { screen: SalesContainer },
  Member: { screen: MemberContainer },
  Guide: { screen: GuideContainer },
  Activity: { screen: ActivityContainer },
  Finance: { screen: FinanceContainer },
  StockDistribution: { screen: StockDistributionContainer },
});

class RootScreen extends React.Component {

  constructor() {
    super();
  }

  componentWillUnmount() {

  }

  componentDidMount(){
    this.props.initApp();
  }

  componentWillUnmount() {
  }

  render() {

    const {isLoading, error, loginResp, logoutResp } = this.props;

    if( error ){
      return <Text>{resp.message} - {resp.status}</Text>;
    }

    const initAppInfo = this.props.initAppInfo;

    const loginInfo = loginResp.data;
    const logoutInfo = logoutResp.data;

    console.info(this.props);

    if(initAppInfo && initAppInfo.completed ){
      // 已完成初始化
      if(global.accessToken == null) {
        return <LoginModal loginInfo={loginInfo} login={this.props.fetchLoginData} />
      } else {
        return <BizReportNavigator />
      }

    } else {

      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>);
    }
  }
}

export default RootScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
