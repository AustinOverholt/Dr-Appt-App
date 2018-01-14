import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';
import Logo from '../components/Logo.js'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo/> 
        <FormLabel>UserName</FormLabel>
        <FormInput
          containerStyle={{width: 300}}
          inputStyle={{textAlign: 'center'}}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          containerStyle={{width: 300}}
          inputStyle={{textAlign: 'center'}}
        />
        <Button
          buttonStyle={{backgroundColor: 'black', borderRadius: 25, width: 200, margin: 50}}
          large
          textStyle={{textAlign: 'center'}}
          title={`Login`}
          onPress={() => alert("button pressed")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
