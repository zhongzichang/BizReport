import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPolarAxis } from "victory-native";


class GuideScreen extends React.Component {

  static navigationOptions = {
    title: '导购'
  };

  constructor() {
    super();
    this.state = {
      data: [
        {key:'r1',c1:'姓名',c2:'业绩',c3:'周业绩',c4:'月指标',
        c5:'完成率',c6:'会销占比',c7:'新入会员',c8:'连带',c9:'折扣'},
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

        <VictoryBar />

        <VictoryChart polar
          theme={VictoryTheme.material}
        >
          {
            ["intelligence", "strength", "speed", "stealth", "charisma"].map((d, i) => {
              return (
                <VictoryPolarAxis dependentAxis
                  key={i}
                  label={d}
                  labelPlacement="perpendicular"
                  style={{ tickLabels: { fill: "none" } }}
                  axisValue={i}
                />
              );
            })
          }
          <VictoryBar
            style={{ data: { fill: "tomato", width: 25 } }}
            data={[
              { x: 0, y: 10 },
              { x: 1, y: 25 },
              { x: 2, y: 40 },
              { x: 3, y: 50 },
              { x: 4, y: 50 }
            ]}
          />
        </VictoryChart>

      </View>
    );
  }

}

export default GuideScreen;
