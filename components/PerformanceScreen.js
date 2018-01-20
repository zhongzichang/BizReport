import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class PerformanceScreen extends React.Component {

  static navigationOptions = {
    title: '业绩'
  };

  constructor() {
    super();
    //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //this.state = {
    //  dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    //};
  }

  componentWillUnmount() {

  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
        <FlatList
          data={[{key: 'a', value: 1}, {key: 'b', value: 2}]}
          renderItem={({item}) => <Text>{item.key} - {item.value}</Text>}
        />
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
    );
  }
}

export default PerformanceScreen;
