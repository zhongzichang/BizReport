import React from 'react';
import { View, Text, FlatList,
  ScrollView,RefreshControl,ActivityIndicator } from 'react-native';
import {Button, List, ListItem} from 'react-native-elements';
import {makeLogout} from '../services/make-logout';
import styles from './styles';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: '首页'
  };

  refreshing = false;

  _onRefresh() {
    this.refreshing = true;
    this.props.fetchShopsData();
  }

  constructor() {
    super();
  }

  componentWillMount() {
  }

  componentDidMount(){
    this._onRefresh();
  }

  componentWillUnmount() {
  }

  render() {

    const {isLoading, error, resp } = this.props;

    if( error ){
      return <Text>{resp.message} - {resp.status}</Text>;
    }

    const shopsInfo = resp.data;
    if( !shopsInfo ){
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>);
    } else {
      this.refreshing = false;
    }

    const { navigate } = this.props.navigation;

    return (

      <View style={{marginTop:10}}>

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }>

          {shopsInfo != null && shopsInfo.length > 0 &&
            <List containerStyle={{marginBottom: 20}}>
              {
                shopsInfo.map((item, i) => (
                  <ListItem
                    key={i}
                    icon={{name: 'cached'}}
                    title={item.c2}
                    onPress={() => navigate('Performance', { shopInfo: item })}
                    underlayColor="black"
                  />
                ))
              }
            </List>
          }

          <Button
            style={{marginTop:50}}
            icon={{name: 'squirrel', type: 'octicon' }}
            title='退出'
            backgroundColor='#4736C9'
            onPress={
              ()=> {
                makeLogout();
                //this.props.fetchLogoutData()
              }
            } />

        </ScrollView>

      </View>

    );
  }
}

export default HomeScreen;
