import React from 'react';
import { View,Text, Button, FlatList, ListView,ScrollView,RefreshControl } from 'react-native';
import { VictoryPie,VictoryLabel,VictoryLegend } from "victory-native";
import styles from './styles';

class MemberScreen extends React.Component {

  static navigationOptions = {
    title: '会员'
  };

  refreshing = false;

  _onRefresh() {
    this.refreshing = true;
    this.props.fetchMemberData();
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount(){
    this._onRefresh();
  }

  componentWillUnmount() {
  }

  render() {


    console.info(this.props.memberInfo);

    const memberInfo = this.props.memberInfo;

    if( !memberInfo )
      return null;
    else {
      this.refreshing = false;
    }

    const {summary, data, liveness} = memberInfo;
    if (!summary || !data || !liveness)
      return null;

    const legend = liveness.map(
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

      <View style={{marginTop:10}}>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >

        <View style={styles.row}>
          <Text style={styles.labelCell}>新增会员</Text>
          <Text style={styles.valueCell}>{summary.c1}</Text>
          <Text style={styles.labelCell}>会销占比</Text>
          <Text style={styles.valueCell}>{summary.c2}</Text>
          <Text style={styles.labelCell}>回购率</Text>
          <Text style={styles.valueCell}>{summary.c3}</Text>
        </View>

        <FlatList
          data={data}
          ListHeaderComponent={() =>
              <View style={styles.headRow}>
                <Text style={{color:'white'}}>生日会员</Text>
              </View>}
          keyExtractor={(item: object, index: number) => index}
          renderItem={({item}) =>
          <View>
            <View style={styles.oddRow}>
              <Text style={styles.cell}>卡号</Text>
              <Text style={styles.cell}>姓名</Text>
              <Text style={styles.cell}>开卡时间</Text>
              <Text style={styles.cell}>手机</Text>
              <Text style={styles.cell}>积分</Text>
              <Text style={styles.cell}>余额</Text>
            </View>
            <View style={styles.row}>
              <View style={{flex:1, backgroundColor:'steelblue',
                justifyContent:'space-around'}}>
                <Text style={{color:'white'}}>{item.cardNumber}</Text>
              </View>
              <View style={{flex:5}}>
                <View style={styles.evenRow}>
                  <Text style={styles.cell}>{item.name}</Text>
                  <Text style={styles.cell}>{item.createdTime}</Text>
                  <Text style={styles.cell}>{item.mobile}</Text>
                  <Text style={styles.cell}>{item.score}</Text>
                  <Text style={styles.cell}>{item.balance}</Text>
                </View>
                <View style={styles.oddRow}>
                  <Text style={styles.cell}>RFM类型</Text>
                  <Text style={styles.cell}>购买频率</Text>
                  <Text style={styles.cell}>购买金额</Text>
                  <Text style={styles.cell}>最近日期</Text>
                  <Text style={styles.cell}>休眠天数</Text>
                </View>
                <View style={styles.evenRow}>
                  <Text style={styles.cell}>{item.rfmType}</Text>
                  <Text style={styles.cell}>{item.buyRate}</Text>
                  <Text style={styles.cell}>{item.buyAmount}</Text>
                  <Text style={styles.cell}>{item.lastTime}</Text>
                  <Text style={[styles.cell,
                    item.dormancyDays>=90
                    ?styles.bgRed
                    :(item.dormancyDays>60?styles.bgYellow:'')
                  ]}>{item.dormancyDays}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          }
        />

        <View style={{flexDirection: 'row',justifyContent:'space-around',
          backgroundColor:'white', marginTop:10}}>
          <View style={styles.cell2}>
            <VictoryPie
              padding={{top:10,bottom:30,left:60,right:100}}
              data={liveness}
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
              title="活跃度"
              style={{title:{fontWeight:'bold'}}}
            />
          </View>
        </View>

      </ScrollView>

      </View>
    );
  }
}

export default MemberScreen;
