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

    const stockList = this.props.stockList;

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Home Screen</Text>

        <Button
          onPress={() => navigate('Performance')}
          title="Go to Performance"
        />

        {stockList != null && stockList.length > 0 &&
          <FlatList
            style={{borderWidth:1,borderColor:'#f0f',}}
            data={stockList}
            renderItem={({item}) =>
              <View style={{flexDirection: 'row',justifyContent:'space-around',
              borderWidth:1,borderColor:'#f0f'}}>
                <Text>{item.c1}</Text>
                <Text>{item.c2}</Text>
                <Text>{item.c3}</Text>
                <Text>{item.c4}</Text>
                <Text>{item.c5}</Text>
              </View>}
          />
        }

        <LoginModal />

      </View>

    );
  }
}

export default HomeScreen;
