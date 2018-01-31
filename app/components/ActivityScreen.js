import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { VictoryPie, VictoryLegend } from "victory-native";
import styles from './styles';

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
          ListHeaderComponent={() =>
              <View style={styles.headRow}>
                <Text style={styles.headCell}>序号</Text>
                <Text style={styles.headCell3}>活动名称</Text>
                <Text style={styles.headCell}>开始时间</Text>
                <Text style={styles.headCell}>结束时间</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
          renderItem={({item,index}) =>
            <View style={index%2==0?styles.evenRow:styles.oddRow}>
              <Text style={styles.cell}>{item.c1}</Text>
              <Text style={styles.cell3}>{item.c2}</Text>
              <Text style={styles.cell}>{item.c3}</Text>
              <Text style={styles.cell}>{item.c4}</Text>
            </View>
          }
        />

        <View style={styles.headRow}>
          <Text style={styles.headCell}>业绩（前）</Text>
          <Text style={styles.headCell}>业绩（后）</Text>
          <Text style={styles.headCell}>环比</Text>
          <Text style={styles.headCell}>折扣</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>{summary.c1}</Text>
          <Text style={styles.cell}>{summary.c2}</Text>
          <Text style={styles.cell}>{summary.c3}</Text>
          <Text style={styles.cell}>{summary.c4}</Text>
        </View>

        <View style={styles.headRow}>
          <Text style={styles.headCell}>售罄（前）</Text>
          <Text style={styles.headCell}>售罄（后）</Text>
          <Text style={styles.headCell}>涨幅</Text>
          <Text style={styles.headCell}>毛利率</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>{summary.c5}</Text>
          <Text style={styles.cell}>{summary.c6}</Text>
          <Text style={styles.cell}>{summary.c7}</Text>
          <Text style={styles.cell}>{summary.c8}</Text>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
          backgroundColor:'white', marginTop:10}}>
          <View style={styles.cell2}>
            <VictoryPie
              padding={{top:10,bottom:30,left:60,right:100}}
              data={pie}
              labels={(d) => `${d.y}`}
              width={280}
              height={300}
            >
            </VictoryPie>
          </View>
          <View style={styles.cell}>
            <VictoryLegend x={10} y={30}
              gutter={30}
              data={legend}
              orientation="vertical"
              title="标题"
              style={{title:{fontWeight:'bold'}}}
            />
          </View>
        </View>

      </View>
    );
  }

}

export default ActivityScreen;
