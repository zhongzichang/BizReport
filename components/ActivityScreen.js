import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { VictoryPie } from "victory-native";

class ActivityScreen extends React.Component {

  static navigationOptions = {
    title: '活动'
  };


  constructor() {
    super();
    this.state = {
      dataOfActivities: [
        {key:'r1',c1:'序号',c2:'活动名称',c3:'开始时间',c4:'结束时间'},
      ],
      dataOfResult: {
        c1: 48000,
        c2: 120000,
        c3: '-60%',
        c4: '40%',
        c5: '62%',
        c6: '78%',
        c7: '2%',
        c8: '18%'
      }
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
            </View>
          }
        />

        <View style={{flexDirection: 'row'}}>
          <View>
            <Text>业绩（前）</Text>
            <Text>{this.state.dataOfResult.c1}</Text>
          </View>
          <View>
            <Text>业绩（后）</Text>
            <Text>{this.state.dataOfResult.c2}</Text>
          </View>
          <View>
            <Text>环比</Text>
            <Text>{this.state.dataOfResult.c3}</Text>
          </View>
          <View>
            <Text>折扣</Text>
            <Text>{this.state.dataOfResult.c4}</Text>
          </View>
        </View>


        <View style={{flexDirection: 'row'}}>
          <View>
            <Text>售罄（前）</Text>
            <Text>{this.state.dataOfResult.c5}</Text>
          </View>
          <View>
            <Text>售罄（后）</Text>
            <Text>{this.state.dataOfResult.c6}</Text>
          </View>
          <View>
            <Text>涨幅</Text>
            <Text>{this.state.dataOfResult.c7}</Text>
          </View>
          <View>
            <Text>毛利率</Text>
            <Text>{this.state.dataOfResult.c8}</Text>
          </View>
        </View>

        <VictoryPie />

      </View>
    );
  }

}

export default ActivityScreen;
