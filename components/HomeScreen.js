import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import LoginModal from './LoginModal';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: '首页'
  };


  constructor() {
    super();
    this.state = {
      logined: false,
      data: []
    };
  }


  render() {

    const { navigate } = this.props.navigation;

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => navigate('Performance')}
          title="Go to Performance"
        />
        <LoginModal />
      </View>

    );
  }
}

export default HomeScreen;
