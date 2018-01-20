import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class SalesScreen extends React.Component {

  static navigationOptions = {
    title: '畅滞销'
  };

  constructor() {
    super();
    this.state = {
      data: [
        {key:'r1',c1:'排名',c2:'款色',c3:'图片',c4:'周销量',
        c5:'周售罄>40%',c6:'库存',c7:'已销天数',c8:'预销天数',c9:'累计售罄'},
      ]
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row'}}>
              <Text>{item.c1}</Text>
              <Text>{item.c2}</Text>
              <Text>{item.c3}</Text>
              <Text>{item.c4}</Text>
              <Text>{item.c5}</Text>
              <Text>{item.c6}</Text>
              <Text>{item.c7}</Text>
              <Text>{item.c8}</Text>
              <Text>{item.c9}</Text>
            </View>
          }
        />
      </View>
    );
  }
}

export default SalesScreen;
