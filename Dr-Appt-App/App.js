import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Tabs} from './config/router.js';



export default class App extends React.Component {
  render() {
    return (
        <Tabs/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


