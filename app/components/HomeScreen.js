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
        
        {shopsInfo != null && shopsInfo.length > 0 &&
          <List containerStyle={{marginBottom: 20}}>
            {
              shopsInfo.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.name}
                />
              ))
            }
          </List>
        }

        <Button
          title='BUTTON' />

        <Button
          raised
          icon={{name: 'cached'}}
          title='BUTTON WITH ICON' />

        <Button
          large
          iconRight={{name: 'code'}}
          title='LARGE WITH RIGHT ICON' />

        <Button
          large
          icon={{name: 'envira', type: 'font-awesome'}}
          title='LARGE WITH ICON TYPE' />

        <Button
          large
          icon={{name: 'squirrel', type: 'octicon' }}
          title='OCTICON'
          backgroundColor='#4736C9' />

        {loginInfo != null && loginInfo.success != 0 &&
        <LoginModal loginInfo={loginInfo}/>
        }

      </View>

    );
  }
}

export default HomeScreen;
