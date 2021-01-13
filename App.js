import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from "react";
import { StyleSheet, TabBarIOS, Text, View } from 'react-native';
import TransactionScreen  from './screens/transactionscreen';
import SearchScreen  from './screens/searchscreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends Component() {
  render(){
  return (
    <View>
    <AppContainer/>
  </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator)