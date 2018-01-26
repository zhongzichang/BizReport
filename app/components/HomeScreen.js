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

  componentWillUnmount() {

  }

  componentDidMount(){
    this.props.fetchShopsData();
  }

  componentWillUnmount() {
  }

  render() {

    const { navigate } = this.props.navigation;
    const shopsInfo = this.props.shopsInfo;

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        {shopsInfo != null && shopsInfo.length > 0 &&
          <FlatList
            data={shopsInfo}
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
