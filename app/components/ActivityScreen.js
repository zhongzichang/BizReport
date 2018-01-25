import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { VictoryPie, VictoryLegend } from "victory-native";

class ActivityScreen extends React.Component {

  static navigationOptions = {
    title: '活动'
  };


  constructor() {
    super();
    this.state = {
      dataOfActivities: [
        {key:'r1',c1:'序号',c2:'活动名称',c3:'开始时间',c4:'结束时间'},
        {key:'r2',c1:'1',c2:'短T1元当两元花',c3:'20170801',c4:'20170801'},
        {key:'r3',c1:'2',c2:'连衣裙满300省100',c3:'20170801',c4:'20170801'},
        {key:'r4',c1:'3',c2:'秋装第1件9折第2件8折第3件7折',c3:'20170801',c4:'20170801'},
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
          data={this.state.dataOfActivities}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
              <Text>{item.c1}</Text>
              <Text>{item.c2}</Text>
              <Text>{item.c3}</Text>
              <Text>{item.c4}</Text>
            </View>
          }
        />

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
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


        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
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

        <VictoryLegend x={125} y={50} height={100}
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" } }}
          data={[
            { name: "正价", symbol: { fill: "tomato"} },
            { name: "八折", symbol: { fill: "orange" } },
            { name: "六折", symbol: { fill: "gold" } },
            { name: "三折", symbol: { fill: "cyan" } }
          ]}
        />
          <VictoryPie
            padding={{top:0,bottom:100,left:100,right:100}}
            colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
            data={[
              { x: "正价 35%", y: 35 },
              { x: "八折 40%", y: 40 },
              { x: "六折 5%", y: 5 },
              { x: "三折 20%", y: 20 },
            ]}
          />
      </View>
    );
  }

}

export default ActivityScreen;
