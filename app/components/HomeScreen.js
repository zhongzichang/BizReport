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
    };
  }

  render() {

    const { navigate } = this.props.navigation;

    const stockList = [
      {key: 1, id: 1, name: '尚都1店'},
      {key: 2, id: 2, name: '尚都2店'}
    ];

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        {stockList != null && stockList.length > 0 &&
          <FlatList
            data={stockList}
            renderItem={({item}) =>
              <Button
                onPress={() => navigate('Performance')}
                title={item.name}
              />
            }
          />
        }

        <LoginModal />

      </View>

    );
  }
}

export default HomeScreen;
