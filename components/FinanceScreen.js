import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class FinanceScreen extends React.Component {

  static navigationOptions = {
    title: '财务'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
        <FlatList
          data={[{key: 'a', value: 1}, {key: 'b', value: 2}]}
          renderItem={({item}) => <Text>{item.key} - {item.value}</Text>}
        />
      </View>
    );
  }
}

export default FinanceScreen;
