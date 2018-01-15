import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Dr Appt App', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'black'
    },
  });
