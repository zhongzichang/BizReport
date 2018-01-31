'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  headRow: {
    flexDirection: 'row',justifyContent:'space-around',
    padding:4,backgroundColor: 'steelblue'
  },
  footRow: {
    flexDirection: 'row',justifyContent:'space-around',
    padding:4,backgroundColor: 'steelblue'
  },
  headCell: {
    fontWeight: 'bold',
    flex: 1,
    color: 'white'
  },
  footCell: {
    flex: 1,
    color: 'white'
  },
  oddRow: {
    flexDirection: 'row',justifyContent:'space-around', padding:4,
    backgroundColor:'powderblue'
  },
  evenRow: {
    flexDirection: 'row',justifyContent:'space-around',padding:4,
    backgroundColor:'white'
  },
  cell: {
    flex: 1
  },
  textView: {
    flexDirection: 'row',justifyContent:'space-around',padding:4
  },
  labelCell: {
    backgroundColor: 'powderblue',
    flex:1,
    paddingTop:4,
    paddingBottom:4,
    paddingLeft:2,
    paddingRight:2,
  },
  valueCell: {
    backgroundColor: 'white',
    flex:1,
    paddingTop:4,
    paddingBottom:4,
    paddingLeft:2,
    paddingRight:2,
  },
  row: {flexDirection: 'row',justifyContent:'space-around'}

});
