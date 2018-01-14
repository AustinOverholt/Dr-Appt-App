import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h2>Welcome To Dr Appointment App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 75,
    },
  });
