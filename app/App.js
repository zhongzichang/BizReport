/**
 * BizReportApp
 * https://github.com/zhongzichang/BizReport
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RootContainer from './containers/root-container';

const store = configureStore({});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
