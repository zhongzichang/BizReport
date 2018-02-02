import React from 'react';
import { View, Text, FlatList } from 'react-native';
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

import init from '../services/init';

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
    //this.props.fetchLoginData('abc','123');
    init();
  }

  componentWillUnmount() {
  }

  render() {

    const loginInfo = this.props.loginInfo;

    if(loginInfo == null || loginInfo.success != 0) {
      return <LoginModal loginInfo={loginInfo} login={this.props.fetchLoginData} />
    } else {
      return <BizReportNavigator />
    }
  }
}

export default RootScreen;
