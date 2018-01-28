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
    this.props.fetchLoginData('abc','123');
  }

  componentWillUnmount() {
  }

  render() {

    const { navigate } = this.props.navigation;
    const shopsInfo = this.props.shopsInfo;
    const loginInfo = this.props.loginInfo;

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        {shopsInfo != null && shopsInfo.length > 0 &&
          <FlatList
            data={shopsInfo}
            renderItem={({item}) =>
              <Button
                onPress={() => navigate('Performance', { shopInfo: item })}
                title={item.name}
              />
            }
            keyExtractor={(item: object, index: number) => index}
          />
        }

        {loginInfo != null && loginInfo.success != 0 &&
        <LoginModal loginInfo={loginInfo}/>
        }

      </View>

    );
  }
}

export default HomeScreen;
