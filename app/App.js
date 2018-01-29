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
import MemberScreen from './components/MemberScreen';
import GuideScreen from './components/GuideScreen';
import ActivityScreen from './components/ActivityScreen';
import FinanceScreen from './components/FinanceScreen';
import StockDistributionContainer
  from './containers/stock-distribution-container';
import configureStore from './store/configureStore';


const BizReportApp = StackNavigator({
  Home: { screen: HomeContainer },
  Performance: { screen: PerformanceContainer },
  Stock: { screen: StockContainer },
  Sales: { screen: SalesContainer },
  Member: { screen: MemberScreen },
  Guide: { screen: GuideScreen },
  Activity: { screen: ActivityScreen },
  Finance: { screen: FinanceScreen },
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
