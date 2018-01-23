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
import HomeScreen from './components/HomeScreen';
import PerformanceScreen from './components/PerformanceScreen';
import StockScreen from './components/StockScreen';
import SalesScreen from './components/SalesScreen';
import MemberScreen from './components/MemberScreen';
import GuideScreen from './components/GuideScreen';
import ActivityScreen from './components/ActivityScreen';
import FinanceScreen from './components/FinanceScreen';
import StockDistributionScreen from './components/StockDistributionScreen';
import configureStore from './store/configureStore';
import PerformanceContainer from './containers/performance-container';


const BizReportApp = StackNavigator({
  Home: { screen: HomeScreen },
  Performance: { screen: PerformanceContainer },
  Stock: { screen: StockScreen },
  Sales: { screen: SalesScreen },
  Member: { screen: MemberScreen },
  Guide: { screen: GuideScreen },
  Activity: { screen: ActivityScreen },
  Finance: { screen: FinanceScreen },
  StockDistribution: { screen: StockDistributionScreen },
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
