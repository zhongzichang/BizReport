import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

type Props = {
  error : boolean,
  isLoading : boolean,
  weatherInfo : Object,
  fetchData : Function,
}

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
    this.props.fetchData();
  }

  componentWillUnmount() {
  }

  render() {

    const { navigate } = this.props.navigation;

    const {
      isLoading,
      error,
      fetchData,
      performanceInfo,
    } = this.props;

    const hasPerformanceData = Object.keys(performanceInfo).length;

    return (

      <View style={{ borderWidth:1,borderColor:'#f0f' }}>

        <FlatList
          style={{borderWidth:1,borderColor:'#f0f',}}
          data={performanceInfo}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            borderWidth:1,borderColor:'#f0f'}}>
              <Text>{item.c1}</Text>
              <Text>{item.c2}</Text>
              <Text>{item.c3}</Text>
              <Text>{item.c4}</Text>
              <Text>{item.c5}</Text>
            </View>}
        />

        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          <Button
            onPress={() => navigate('Stock')}
            title="库存"
          />
          <Button
            onPress={() => navigate('Sales')}
            title="畅滞销"
          />
          <Button
            onPress={() => navigate('Member')}
            title="会员"
          />
          <Button
            onPress={() => navigate('Guide')}
            title="导购"
          />
          <Button
            onPress={() => navigate('Activity')}
            title="活动"
          />
          <Button
            onPress={() => navigate('Finance')}
            title="财务"
          />
        </View>

      </View>
    );
  }
}

export default PerformanceScreen;
