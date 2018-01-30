import React from 'react';
import { View, Text, FlatList } from 'react-native';
import {Button, List, ListItem} from 'react-native-elements';
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

      <View>

        {shopsInfo != null && shopsInfo.length > 0 &&
          <List containerStyle={{marginBottom: 20}}>
            {
              shopsInfo.map((item, i) => (
                <ListItem
                  key={i}
                  icon={{name: 'cached'}}
                  title={item.name}
                  onPress={() => navigate('Performance', { shopInfo: item })}
                  underlayColor="black"
                />
              ))
            }
          </List>
        }

        <Button
          icon={{name: 'squirrel', type: 'octicon' }}
          title='退出'
          backgroundColor='#4736C9' />

        {loginInfo != null && loginInfo.success != 0 &&
        <LoginModal loginInfo={loginInfo}/>
        }

      </View>

    );
  }
}

export default HomeScreen;
