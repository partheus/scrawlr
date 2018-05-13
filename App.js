/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {insertArticle,getAllArticles,deleteAllArticles} from './src/models';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  insert=(link)=>{
    insertArticle(
      {
        url: link,
        title: 'string',
        softTitle: 'string',
        date: 'string',
        author: 'string',
        publisher: 'string',
        text: 'string',
        image: 'string',
        tags: ['string1','string2'],
        description: 'string',
        favicon: 'string'
      }
    )
  }

  view=()=>{
    getAllArticles()
  }

  deleteAll=()=>{
    deleteAllArticles().then(()=>{console.log('deleted all')})
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>{this.insert('asd')}}>
        <Text style={styles.welcome} >
          add
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.insert('qwe')}}>
        <Text style={styles.welcome} >
          add
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.view}>
        <Text style={styles.instructions}>
          view
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.deleteAll}>
        <Text style={styles.instructions}>
         delete all
        </Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
