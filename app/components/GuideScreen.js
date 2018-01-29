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
  }

  componentWillUnmount() {

  }

  componentDidMount(){
    this.props.fetchGuideData();
  }

  componentWillUnmount() {
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

    console.info(this.props.guideInfo);

    const guideInfo = this.props.guideInfo;
    if( !guideInfo )
      return null;
    const {data, total} = guideInfo;
    if (!data || !total)
      return null;

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;

    const header = ['姓名','业绩','周业绩','月指标','月业绩',
          '完成率','会销占比','新入会员','连带','折扣'];

    const ohpData = [
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
    const maxima = { c1:5, c2:300, c3:3, c4:80, c5:120, c6:7 }
    const characterData = [
      { c1: 5, c2: 225, c3: 3, c4: 60, c5: 120, c6:5 }
    ];


    return (


      <View>

        <ScrollView horizontal={true}>
          <View>

            <FlatList
              data={data}
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
                  <Text>{item.c10}</Text>
                </View>
              }
              ListHeaderComponent={() =>
                  <View style={{flexDirection: 'row',justifyContent:'space-around',
                  padding:4}}>
                    {
                      header.map((item,i) => <Text key={i}>{item}</Text>)
                    }
                  </View>}
              keyExtractor={(item: object, index: number) => index}
              ListFooterComponent={() =>
                  <View style={{flexDirection: 'row',justifyContent:'space-around',
                  padding:4}}>
                    <Text>合计</Text>
                    <Text>{total.c1}</Text>
                    <Text>{total.c2}</Text>
                    <Text>{total.c3}</Text>
                    <Text>{total.c4}</Text>
                    <Text>{total.c5}</Text>
                    <Text>{total.c6}</Text>
                    <Text>{total.c7}</Text>
                    <Text>{total.c8}</Text>
                    <Text>{total.c9}</Text>
                  </View>}
            />

          </View>
        </ScrollView>

        <ScrollView horizontal={true}>
          <OhpColumnChart data={ohpData} />
          <RadarChart data={characterData} labels={labels}  maxima={maxima}/>
        </ScrollView>

      </View>
    );
  }

}

export default GuideScreen;
