import React from 'react';
import { View, Text, Button, FlatList,ScrollView } from 'react-native';
import { VictoryChart, VictoryBar,
  VictoryTheme, VictoryPolarAxis,
  VictoryStack, VictoryAxis, VictoryArea } from "victory-native";
import OhpColumnChart from "./OhpColumnChart";
import RadarChart from "./RadarChart";


class GuideScreen extends React.Component {

  static navigationOptions = {
    title: '导购'
  };

  constructor() {
    super();
    this.state = {
      dataOfDetails: [
        {key:'r1',c1:'姓名',c2:'业绩',c3:'周业绩',c4:'月指标',c5:'月业绩',
        c6:'完成率',c7:'会销占比',c8:'新入会员',c9:'连带',c10:'折扣'},

        {key:'r2',c1:'陈燕',c2:4623,c3:'17765',c4:'80000',c5:'104192',
        c6:'130%',c7:'76%',c8:'29',c9:'2.0',c10:'0.68'},
        {key:'r3',c1:'蔡虹',c2:2896,c3:'14749',c4:'80000',c5:'74738',
        c6:'93%',c7:'60%',c8:'12',c9:'1.9',c10:'0.65'},
        {key:'r4',c1:'张丽娇',c2:1304,c3:'4484',c4:'50000',c5:'29224',
        c6:'58%',c7:'10%',c8:'3',c9:'2.1',c10:'0.67'},
        {key:'r5',c1:'唐丽娟',c2:5288,c3:'24971',c4:'120000',c5:'134147',
        c6:'112%',c7:'57%',c8:'44',c9:'1.4',c10:'0.74'},
        {key:'r6',c1:'黄艳',c2:3906,c3:'21998',c4:'120000',c5:'94573',
        c6:'79%',c7:'53%',c8:'11',c9:'1.8',c10:'0.71'},
        {key:'r7',c1:'曹美林',c2:0,c3:'8410',c4:'50000',c5:'49010',
        c6:'32%',c7:'32%',c8:'58',c9:'1.8',c10:'0.68'},
      ],
      dataOfTotal: {c1:18017,c2:92376,c3:500000,c4:485885,c5:'97%',
        c6:'58%',c7:'156',c8:'1.7',c9:'0.70'}
    };
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    maxima = Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
    return maxima;
  }

  render() {

    const myDataset = [
      [
          { x: "陈燕", y: 1 },
          { x: "蔡虹", y: 2 },
          { x: "张丽娇", y: 3 },
          { x: "唐丽娟", y: 2 },
          { x: "黄艳", y: 1 },
          { x: "曹美林", y: 1 }
      ],
      [
          { x: "陈燕", y: 2 },
          { x: "蔡虹", y: 3 },
          { x: "张丽娇", y: 4 },
          { x: "唐丽娟", y: 5 },
          { x: "黄艳", y: 5 },
          { x: "曹美林", y: 1 }
      ]
    ];

    const labels = { c1: '完成率', c2: '连带', c3: '新入会员',
    c4: '月业绩', c5: '折扣', c6:'会销占比' };

    const maxima = {c1:5,c2:300,c3:3,c4:80,c5:120,c6:7}

    const characterData = [
      { c1: 5, c2: 225, c3: 3, c4: 60, c5: 120, c6:5 }
    ];

    //const maxima = this.getMaxima(characterData);

    return (


      <View>

        <FlatList
          data={this.state.dataOfDetails}
          renderItem={({item}) =>
            <View style={{flexDirection: 'row',justifyContent:'space-around',
            padding:4}}>
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

        <ScrollView horizontal={true}>
          <OhpColumnChart data={myDataset} />
          <RadarChart data={characterData} labels={labels}  maxima={maxima}/>
        </ScrollView>

      </View>
    );
  }

}

export default GuideScreen;
