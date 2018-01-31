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
  thinFootRow: {
    flexDirection: 'row',justifyContent:'space-around',
    padding:4,backgroundColor: 'skyblue'
  },
  headCell: {
    fontWeight: 'bold',
    flex: 1,
    color: 'white'
  },
  headCell2: {
    fontWeight: 'bold',
    flex: 2,
    color: 'white'
  },
  headCell3: {
    fontWeight: 'bold',
    flex: 3,
    color: 'white'
  },
  footCell: {
    flex: 1,
    color: 'white'
  },
  footCell2: {
    flex: 2,
    color: 'white'
  },
  footCell3: {
    flex: 3,
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
  cell2: {
    flex: 2
  },
  cell3: {
    flex: 3
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
