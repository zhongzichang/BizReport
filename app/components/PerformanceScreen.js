import React from 'react';
import { View, Text, Button, FlatList,
  StyleSheet,TouchableOpacity,RefreshControl } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

class PerformanceScreen extends React.Component {

  static navigationOptions = {
    title: '业绩'
  };

  refreshing = false;

  _onRefresh() {
    this.refreshing = true;
    this.props.fetchPerformanceData();
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount(){
    this._onRefresh();
  }

  componentWillUnmount() {
  }

  render() {

    const performanceInfo = this.props.performanceInfo;
    if (performanceInfo == null)
      return null;
    else {
      this.refreshing = false;
    }

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;

    return (

      <View style={{marginTop:10}}>

        <FlatList
          data={performanceInfo}
          ListHeaderComponent={() =>
              <View style={styles.headRow}>
                <Text style={styles.headCell} ellipsizeMode='head'>
                  {shopInfo != null && shopInfo.name}
                </Text>
                <Text style={styles.headCell}>今天</Text>
                <Text style={styles.headCell}>昨天</Text>
                <Text style={styles.headCell}>本周</Text>
                <Text style={styles.headCell}>本月</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
          renderItem={({item,index}) =>
            <View style={index%2 == 0 ? styles.evenRow : styles.oddRow}>
              <Text style={styles.cell}>{item.c1}</Text>
              <Text style={styles.cell}>{item.c2}</Text>
              <Text style={styles.cell}>{item.c3}</Text>
              <Text style={styles.cell}>{item.c4}</Text>
              <Text style={styles.cell}>{item.c5}</Text>
            </View>}
          refreshControl={
            <RefreshControl
              refreshing={this.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />

        <View style={{marginTop: 30}}>

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => navigate('Stock', {shopInfo})}
              style={{flex: 1, backgroundColor: 'white',
              paddingTop:30, paddingBottom:30}}>
              <Icon
                name='archive'
                type='material-community'
                color='#517fa4'
              />
              <View style={styles.textView}>
                <Text>库存</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('Sales', {shopInfo})}
              style={{flex: 1, backgroundColor: 'white',
              paddingTop:30, paddingBottom:30, marginLeft:1, marginRight:1}}>
              <Icon
                name='sale'
                type='material-community'
                color='#517fa4'
              />
              <View style={styles.textView}>
                <Text>畅滞销</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('Member', {shopInfo})}
              style={{flex: 1, backgroundColor: 'white',
              paddingTop:30, paddingBottom:30}}>
              <Icon
                name='account-card-details'
                type='material-community'
                color='#517fa4'
              />
              <View style={styles.textView}>
                <Text>会员</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => navigate('Guide', {shopInfo})}
              style={{flex: 1, backgroundColor: 'white',
              paddingTop:30, paddingBottom:30, marginTop:1}}>
                <Icon
                  name='emoticon-happy'
                  type='material-community'
                  color='#517fa4'
                />
                <View style={styles.textView}>
                  <Text>导购</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigate('Activity', {shopInfo})}
              style={{flex: 1, backgroundColor: 'white',
              paddingTop:30, paddingBottom:30, marginTop:1, marginLeft:1, marginRight:1}}>
              <Icon
                name='local-activity'
                type='material'
                color='#517fa4'
              />
              <View style={styles.textView}>
                <Text>活动</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigate('Finance', {shopInfo})}
              style={{flex: 1, backgroundColor: 'white',
              paddingTop:30, paddingBottom:30, marginTop:1}}>
              <Icon
                name='finance'
                type='material-community'
                color='#517fa4'
              />
              <View style={styles.textView}>
                <Text>财务</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>

      </View>
    );
  }
}

export default PerformanceScreen;
