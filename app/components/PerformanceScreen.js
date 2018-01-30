import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
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

        <FlatList
          data={performanceInfo}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text style={{flex: 1}}>{item.c1}</Text>
              <Text style={{flex: 1}}>{item.c2}</Text>
              <Text style={{flex: 1}}>{item.c3}</Text>
              <Text style={{flex: 1}}>{item.c4}</Text>
              <Text style={{flex: 1}}>{item.c5}</Text>
            </View>}
          ListHeaderComponent={() =>
              <View style={{flexDirection: 'row',justifyContent:'space-around',
              padding:4}}>
                <Text style={{flex: 1}}>{shopInfo != null && shopInfo.name}</Text>
                <Text style={{flex: 1}}>今天</Text>
                <Text style={{flex: 1}}>昨天</Text>
                <Text style={{flex: 1}}>本周</Text>
                <Text style={{flex: 1}}>本月</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
        />

        <View style={{marginTop: 30}}>

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{flex: 1, backgroundColor: 'white',
            paddingTop:30, paddingBottom:30}}>
              <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />
              <Button
                onPress={() => navigate('Stock', {shopInfo})}
                title="库存"
              />
            </View>
            <View style={{flex: 1, backgroundColor: 'white',
            paddingTop:30, paddingBottom:30, marginLeft:1, marginRight:1}}>
              <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />
              <Button
                onPress={() => navigate('Sales', {shopInfo})}
                title="畅滞销"
              />
            </View>
            <View style={{flex: 1, backgroundColor: 'white',
            paddingTop:30, paddingBottom:30}}>
              <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />
              <Button
              onPress={() => navigate('Member', {shopInfo})}
              title="会员"
              />
            </View>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{flex: 1, backgroundColor: 'white',
            paddingTop:30, paddingBottom:30, marginTop:1}}>
              <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />
              <Button
                onPress={() => navigate('Guide', {shopInfo})}
                title="导购"
                style={{flex: 1}}
              />
            </View>
            <View style={{flex: 1, backgroundColor: 'white',
            paddingTop:30, paddingBottom:30, marginTop:1, marginLeft:1, marginRight:1}}>
              <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />
              <Button
                onPress={() => navigate('Activity', {shopInfo})}
                title="活动"
                style={{flex: 1}}
              />
            </View>
            <View style={{flex: 1, backgroundColor: 'white',
            paddingTop:30, paddingBottom:30, marginTop:1}}>
              <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />
              <Button
                onPress={() => navigate('Finance', {shopInfo})}
                title="财务"
                style={{flex: 1}}
              />
            </View>
          </View>
        </View>

      </View>
    );
  }
}

export default PerformanceScreen;
