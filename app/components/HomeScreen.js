import React from 'react';
import { View, Text, FlatList,
  ScrollView,RefreshControl,
  ActivityIndicator } from 'react-native';
import {Button, List,
  ListItem, FormInput, SearchBar} from 'react-native-elements';
import {makeLogout} from '../services/make-logout';
import styles from './styles';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: '首页'
  };

  page = 1;

  size = 30;

  keyword = "";

  shopsInfo = [];

  _onRefresh() {
    this.shopsInfo = [];
    this.page = 1;
    this.props.fetchShopsData(this.page, this.size, this.keyword);
  }

  _loadMore = () => {
    this.page = this.page + 1;
    this.props.fetchShopsData(this.page,this.size, this.keyword);
  }

  _keyExtractor = (item, index) => index

  _renderFooter = () => {
    if(!this.props.isLoding) return null;
    return (
      <View style={{padingVertical:20,
          borderTopWidth:1,
          borderColor:"#CED0CE"}}>
        <ActivityIndicator animating syze="large" />
      </View>
    );
  }

  _renderItem = ({item}) => {
    return (
    <ListItem
        key={item.c1}
        title={item.c2}
        onPress={() => this.props.navigation.
          navigate('Performance', { shopInfo: item })}
      />)
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

    if( resp ){
      if( resp.data ) {
        this.shopsInfo = [...this.shopsInfo, ...resp.data];
      }
      if( error &&  this.shopsInfo.length == 0 ) {
        return <Text>{resp.message} - {resp.status}</Text>;
      }
    }

    const { navigate } = this.props.navigation;

    return (
      <View>
        <SearchBar
          placeholder="输入搜索关键字"
          onChangeText={(text) => {
            this.keyword=text;
          }}
          onClearText={()=>this.keyword=""}
          onEndEditing={() => this._onRefresh()}
          lightTheme round />
        <List containerStyle={{marginTop:0}}>
          <FlatList
            data={this.shopsInfo}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onEndReached={this._loadMore}
            onEndThreashold={0}
            refreshing={isLoading}
            ListFooterComponent={this._renderFooter}
          />
      </List>
    </View>
    );
  }
}

export default HomeScreen;
