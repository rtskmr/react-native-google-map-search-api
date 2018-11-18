/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { AppRegistry, Image } from 'react-native';

import { Platform, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 300, height: 50, marginLeft: 30 }}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search here"
          />
        </View>
        <View style={{ width: 100, height: 50, marginLeft: -40 }}>
          <Button
            title="Search"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
  },
  searchBox: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  searchBtn: {
    width: '30%',
  }
});
