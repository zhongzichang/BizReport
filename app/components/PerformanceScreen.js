import React from 'react';
import { View, Text, Button, FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class PerformanceScreen extends React.Component {

  static navigationOptions = {
    title: '业绩'
  };

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {

  }

  componentDidMount(){
    this.props.fetchPerformanceData();
  }

  componentWillUnmount() {
  }

  render() {

    const performanceInfo = this.props.performanceInfo;
    if (performanceInfo == null)
      return null;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;

    return (

      <View>

        <FlatList style={{marginTop:10}}
          data={performanceInfo}
          renderItem={({item,index}) =>
            <View style={index%2 == 0 ? styles.evenRow : styles.oddRow}>
              <Text style={{flex: 1}}>{item.c1}</Text>
              <Text style={{flex: 1}}>{item.c2}</Text>
              <Text style={{flex: 1}}>{item.c3}</Text>
              <Text style={{flex: 1}}>{item.c4}</Text>
              <Text style={{flex: 1}}>{item.c5}</Text>
            </View>}
          ListHeaderComponent={() =>
              <View style={{flexDirection: 'row',justifyContent:'space-around',
              padding:4,backgroundColor: 'steelblue'}}>
                <Text style={styles.headCell} ellipsizeMode='head'>{shopInfo != null && shopInfo.name}</Text>
                <Text style={styles.headCell}>今天</Text>
                <Text style={styles.headCell}>昨天</Text>
                <Text style={styles.headCell}>本周</Text>
                <Text style={styles.headCell}>本月</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
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
            <TouchableOpacity  onPress={() => navigate('Activity', {shopInfo})}
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

const styles = StyleSheet.create({
  headCell: {
    fontWeight: 'bold',
    flex: 1,
    color: 'white'
  },
  oddRow: {
    flexDirection: 'row',justifyContent:'space-around', padding:4,
    backgroundColor:'powderblue'
  },
  evenRow: {
    flexDirection: 'row',justifyContent:'space-around',padding:4
  },
  textView: {
    flexDirection: 'row',justifyContent:'space-around',padding:4
  }
});
