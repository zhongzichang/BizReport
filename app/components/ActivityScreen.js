import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { VictoryPie, VictoryLegend } from "victory-native";

class ActivityScreen extends React.Component {

  static navigationOptions = {
    title: '活动'
  };


  constructor() {
    super();
  }

  componentWillUnmount() {

  }

  componentDidMount(){
    this.props.fetchActivityData();
  }

  componentWillUnmount() {
  }

  render() {

    console.info(this.props.activityInfo);

    const activityInfo = this.props.activityInfo;
    if( !activityInfo )
      return null;
    const {summary, data, pie} = activityInfo;
    if (!summary || !data || !pie)
      return null;
    const legend = pie.map(
      item => {
        return {
          name: item.x,
          symbol: { fill: item.fill }
        }
      }
    );

    const { navigate, state } = this.props.navigation;
    const shopInfo = state.params ? state.params.shopInfo : null;


    return (
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
            </View>
          }
          ListHeaderComponent={() =>
              <View style={{flexDirection: 'row',justifyContent:'space-around',
              padding:4}}>
                <Text>序号</Text>
                <Text>活动名称</Text>
                <Text>开始时间</Text>
                <Text>结束时间</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
        />

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <View>
            <Text>业绩（前）</Text>
            <Text>{summary.c1}</Text>
          </View>
          <View>
            <Text>业绩（后）</Text>
            <Text>{summary.c2}</Text>
          </View>
          <View>
            <Text>环比</Text>
            <Text>{summary.c3}</Text>
          </View>
          <View>
            <Text>折扣</Text>
            <Text>{summary.c4}</Text>
          </View>
        </View>


        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <View>
            <Text>售罄（前）</Text>
            <Text>{summary.c5}</Text>
          </View>
          <View>
            <Text>售罄（后）</Text>
            <Text>{summary.c6}</Text>
          </View>
          <View>
            <Text>涨幅</Text>
            <Text>{summary.c7}</Text>
          </View>
          <View>
            <Text>毛利率</Text>
            <Text>{summary.c8}</Text>
          </View>
        </View>

        <VictoryLegend x={125} y={50} height={100}
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" } }}
          data={legend}
        />
          <VictoryPie
            padding={{top:0,bottom:100,left:100,right:100}}
            data={pie}
          />
      </View>
    );
  }

}

export default ActivityScreen;
