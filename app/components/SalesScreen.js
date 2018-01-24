import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class SalesScreen extends React.Component {

  static navigationOptions = {
    title: '畅滞销'
  };

  constructor() {
    super();
    this.state = {
      data: [
        {key:'r0',c1:'排名',c2:'款色',c3:'图片',c4:'6',
        c5:'周售罄>40%',c6:'库存',c7:'已销天数',c8:'预销天数',c9:'累计售罄'},
        {key:'r1',c1:'1',c2:'M731100112',c3:'图片',c4:'5',
        c5:'80%',c6:'2',c7:'5',c8:'2',c9:'100.0%'},
        {key:'r2',c1:'2',c2:'M731100113',c3:'图片',c4:'10',
        c5:'62%',c6:'3',c7:'14',c8:'4',c9:'82.0%'},
        {key:'r3',c1:'3',c2:'M731100114',c3:'图片',c4:'3',
        c5:'62%',c6:'6',c7:'58',c8:'4',c9:'82.0%'},
        {key:'r4',c1:'4',c2:'M731100115',c3:'图片',c4:'5',
        c5:'59%',c6:'2',c7:'9',c8:'5',c9:'79.0%'},
        {key:'r5',c1:'5',c2:'M731100116',c3:'图片',c4:'5',
        c5:'55%',c6:'4',c7:'19',c8:'6',c9:'75.0%'},
        {key:'r6',c1:'6',c2:'M731100117',c3:'图片',c4:'5',
        c5:'55%',c6:'4',c7:'61',c8:'6',c9:'75.0%'},
        {key:'r7',c1:'7',c2:'M731100118',c3:'图片',c4:'5',
        c5:'48%',c6:'7',c7:'9',c8:'8',c9:'68.0%'},
        {key:'r8',c1:'8',c2:'M731100119',c3:'图片',c4:'6',
        c5:'46%',c6:'4',c7:'11',c8:'8',c9:'66.0%'},
        {key:'r9',c1:'9',c2:'M731100120',c3:'图片',c4:'3',
        c5:'42%',c6:'6',c7:'40',c8:'10',c9:'62.0%'},
        {key:'r10',c1:'10',c2:'M731100121',c3:'图片',c4:'4',
        c5:'40%',c6:'6',c7:'75',c8:'11',c9:'60.0%'},
      ]
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
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
      </View>
    );
  }

}

export default SalesScreen;
