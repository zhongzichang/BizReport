import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from 'HomeScreen';
import DetailsScreen from 'DetailsScreen';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator;
