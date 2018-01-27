import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { MKColor, MKButton } from 'react-native-material-kit';

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

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;
    const performanceInfo = this.props.performanceInfo;

    return (

      <View>

        <FlatList
          data={performanceInfo}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>{item.c1}</Text>
              <Text>{item.c2}</Text>
              <Text>{item.c3}</Text>
              <Text>{item.c4}</Text>
              <Text>{item.c5}</Text>
            </View>}
          ListHeaderComponent={() =>
              <View style={{flexDirection: 'row',justifyContent:'space-around',
              padding:4}}>
                <Text>{shopInfo != null && shopInfo.name}</Text>
                <Text>今天</Text>
                <Text>昨天</Text>
                <Text>本周</Text>
                <Text>本月</Text>
              </View>}
        />

        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          <Button
            onPress={() => navigate('Stock', {shopInfo})}
            title="库存"
          />
          <Button
            onPress={() => navigate('Sales', {shopInfo})}
            title="畅滞销"
          />
          <Button
            onPress={() => navigate('Member', {shopInfo})}
            title="会员"
          />
          <Button
            onPress={() => navigate('Guide', {shopInfo})}
            title="导购"
          />
          <Button
            onPress={() => navigate('Activity', {shopInfo})}
            title="活动"
          />
          <Button
            onPress={() => navigate('Finance', {shopInfo})}
            title="财务"
          />
        </View>

      </View>
    );
  }
}

export default PerformanceScreen;
