/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Cidade Dorme</Text>
        <Text style={styles.instructions}> </Text>
        <Text style={styles.instructions}>Escolha o modo de jogo</Text>
        
        <Picker selectedValue="Online" color="#FFFFFF">
          <Picker.Item label="Online" value="Online" />
          <Picker.Item label="Offline" value="Offline" />
        </Picker>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555555',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 25,
    color: '#FFFFFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
  },
});
