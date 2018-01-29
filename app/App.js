/**
 * BizReportApp
 * https://github.com/zhongzichang/BizReport
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import { StackNavigator } from 'react-navigation';
import HomeContainer from './containers/home-container';
import PerformanceContainer from './containers/performance-container';
import StockContainer from './containers/stock-container';
import SalesContainer from './containers/sales-container';
import MemberContainer from './containers/member-container';
import GuideContainer from './containers/guide-container';
import ActivityContainer from './containers/activity-container';
import FinanceContainer from './containers/finance-container';
import StockDistributionContainer
  from './containers/stock-distribution-container';
import configureStore from './store/configureStore';


const BizReportApp = StackNavigator({
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

const store = configureStore({});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BizReportApp />
      </Provider>
    );
  }
}
