import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class StockDistributionScreen extends React.Component {

  static navigationOptions = {
    title: '库存分布'
  };

  //const rowHeaders = ['业绩','目标','完成率','连带','折扣','毛利率'];

  constructor() {
    super();
  }

  render() {

    const { navigate } = this.props.navigation;

    const header = {key:'r1',c1:'颜色',c2:'店铺',
      c3:'S',c4:'M',c5:'L',
      c6:'库存合计',c7:'周销量'};

    const dataByColor = [
        {
          key:'k1',
          color: '米色',
          items: [
            {key:'ra2',c1:'尚都1店',c2:'1',c3:'2',c4:'2',c5:'8',c6:3},
            {key:'ra3',c1:'尚都2店',c2:'',c3:'2',c4:'',c5:'2',c6:1},
            {key:'ra4',c1:'绵阳1店',c2:'1',c3:'',c4:'2',c5:'3',c6:0},
            {key:'ra5',c1:'乐山1店',c2:'2',c3:'3',c4:'1',c5:'11',c6:5},
            {key:'ra6',c1:'乐山3店',c2:'1',c3:'',c4:'',c5:'1',c6:3},
            {key:'ra7',c1:'江油2店',c2:'1',c3:'',c4:'',c5:'1',c6:0},
            {key:'ra8',c1:'宜宾店',c2:'',c3:'',c4:'1',c5:'1',c6:0},
            {key:'ra9',c1:'总部成品仓',c2:'6',c3:'9',c4:'3',c5:'18',c6:0}
          ],
          total: {key:'t1',c1:12, c2:16, c3:9, c4:37, c5:12}
        },
        {
          key:'k2',
          color: '红色',
          items: [
            {key:'rb2',c1:'尚都1店',c2:'1',c3:'2',c4:'2',c5:'8',c6:3},
            {key:'rb3',c1:'尚度2店',c2:'',c3:'2',c4:'',c5:'2',c6:1},
            {key:'rb4',c1:'绵阳1店',c2:'1',c3:'',c4:'2',c5:'3',c6:0},
            {key:'rb5',c1:'乐山1店',c2:'2',c3:'3',c4:'1',c5:'11',c6:5},
            {key:'rb6',c1:'乐山3店',c2:'1',c3:'',c4:'',c5:'1',c6:3},
            {key:'rb7',c1:'江油2店',c2:'1',c3:'',c4:'',c5:'1',c6:0},
            {key:'rb8',c1:'宜宾店',c2:'',c3:'',c4:'1',c5:'1',c6:0},
            {key:'rb9',c1:'总部成品仓',c2:'6',c3:'9',c4:'3',c5:'18',c6:0}
          ],
          total: {key:'t1',c1:12,c2:16,c3:9,c4:37,c5:12}
        }
    ];

    const dataOfTotal = {c1:12,c2:16,c3:9,c4:37,c5:12};

    return (
      <View>

        <View style={{flexDirection: 'row',justifyContent:'space-around',
        padding:4}}>
          <Text>{header.c1}</Text>
          <Text>{header.c2}</Text>
          <Text>{header.c3}</Text>
          <Text>{header.c4}</Text>
          <Text>{header.c5}</Text>
          <Text>{header.c6}</Text>
          <Text>{header.c7}</Text>
        </View>

        {
          dataByColor.map((category, i) => {
            return (
              <View key={i}>

                <View style={{flexDirection: 'row',justifyContent:'space-around',
                padding:4}}>
                  <Text>{category.color}</Text>
                  <View>
                  {
                    category.items.map((item, i) => {
                      return (
                        <View key={i} style={{flexDirection: 'row',
                        justifyContent:'space-around',
                        padding:4}}>
                          <Text>{item.c1}</Text>
                          <Text>{item.c2}</Text>
                          <Text>{item.c3}</Text>
                          <Text>{item.c4}</Text>
                          <Text>{item.c5}</Text>
                          <Text>{item.c6}</Text>
                        </View>
                      );
                    })
                  }
                  </View>
                </View>

                <View style={{flexDirection: 'row',
                justifyContent:'space-around',
                padding:4}}>
                  <Text>{category.total.c1}</Text>
                  <Text>{category.total.c2}</Text>
                  <Text>{category.total.c3}</Text>
                  <Text>{category.total.c4}</Text>
                  <Text>{category.total.c5}</Text>
                </View>

              </View>
            );
          })
        }

        <View style={{flexDirection: 'row',
        justifyContent:'space-around',
        padding:4}}>
          <Text>{dataOfTotal.c1}</Text>
          <Text>{dataOfTotal.c2}</Text>
          <Text>{dataOfTotal.c3}</Text>
          <Text>{dataOfTotal.c4}</Text>
          <Text>{dataOfTotal.c5}</Text>
        </View>

      </View>
    );
  }
}

export default StockDistributionScreen;
