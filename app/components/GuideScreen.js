import React from 'react';
import { View, Text, Button, FlatList,
  ScrollView,TouchableOpacity,RefreshControl } from 'react-native';
import { VictoryChart, VictoryBar,
  VictoryTheme, VictoryPolarAxis,
  VictoryStack, VictoryAxis, VictoryArea } from "victory-native";
import OhpColumnChart from "./OhpColumnChart";
import RadarChart from "./RadarChart";
import styles from './styles';


class GuideScreen extends React.Component {

  static navigationOptions = {
    title: '导购'
  };

  refreshing = false;

  _onRefresh() {
    this.refreshing = true;
    this.props.fetchGuideData();
  }

  constructor() {
    super();
  }

  componentWillMount() {

  }

  componentDidMount(){
    this._onRefresh();
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
    else {
      this.refreshing = false;
    }

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


      <View style={{marginTop:10}}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>

          <View>

            <FlatList
              data={data}
              ListHeaderComponent={() =>
                  <View style={styles.headRow}>
                    {
                      header.map((item,i) => <Text key={i} style={styles.headCell}>{item}</Text>)
                    }
                  </View>}
              keyExtractor={(item: object, index: number) => index}
              renderItem={({item, index}) =>
                <TouchableOpacity style={index%2==0?styles.evenRow:styles.oddRow}>
                  <Text style={styles.cell}>{item.c1}</Text>
                  <Text style={styles.cell}>{item.c2}</Text>
                  <Text style={styles.cell}>{item.c3}</Text>
                  <Text style={styles.cell}>{item.c4}</Text>
                  <Text style={styles.cell}>{item.c5}</Text>
                  <Text style={styles.cell}>{item.c6}</Text>
                  <Text style={styles.cell}>{item.c7}</Text>
                  <Text style={styles.cell}>{item.c8}</Text>
                  <Text style={styles.cell}>{item.c9}</Text>
                  <Text style={styles.cell}>{item.c10}</Text>
                </TouchableOpacity>
              }
              ListFooterComponent={() =>
                  <View style={styles.footRow}>
                    <Text style={styles.footCell}>合计</Text>
                    <Text style={styles.footCell}>{total.c1}</Text>
                    <Text style={styles.footCell}>{total.c2}</Text>
                    <Text style={styles.footCell}>{total.c3}</Text>
                    <Text style={styles.footCell}>{total.c4}</Text>
                    <Text style={styles.footCell}>{total.c5}</Text>
                    <Text style={styles.footCell}>{total.c6}</Text>
                    <Text style={styles.footCell}>{total.c7}</Text>
                    <Text style={styles.footCell}>{total.c8}</Text>
                    <Text style={styles.footCell}>{total.c9}</Text>
                  </View>}
            />

          </View>

        <ScrollView horizontal={true}>
          <OhpColumnChart data={ohpData} />
          <RadarChart data={characterData} labels={labels}  maxima={maxima}/>
        </ScrollView>

      </ScrollView>
      </View>
    );
  }

}

export default GuideScreen;
